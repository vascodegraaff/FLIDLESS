const express = require('express')
const casper_sdk = require("casper-js-sdk");

const app = express()
const port = 4000

// import { CasperClient, Contracts, Keys, RuntimeArgs } from "casper-js-sdk";
let CasperClient = casper_sdk.CasperClient
let Contracts = casper_sdk.Contracts
let Keys = casper_sdk.Keys
let RuntimeArgs = casper_sdk.RuntimeArgs

const client = new CasperClient("http://135.181.208.231:7777/rpc")
const contract = new Contracts.Contract(client)

const keys = Keys.Ed25519.loadKeyPairFromPrivateFile("casper/keys/secret_key.pem")

function verifyStatus(contractAddress) {
	return new Promise((resolve, reject) => {
		contract.setContractHash(contractAddress)
		contract.queryContractData(["verification"]).then((response) => {
			resolve(response)
		}).catch((error) => {
			reject(error)
		})
	})
}

function verifyProof(contractAddress) {
	return new Promise((resolve, reject) => {
		contract.setContractHash(contractAddress)
		const deploy = contract.callEntrypoint(
			"verify_proof",
			RuntimeArgs.fromMap({}),
			keys.publicKey,
			"casper-test",
			1000000000,
			[keys]
		)

		client.putDeploy(deploy).then((deployHash) => {
			pollDeployment(deployHash).then((result) => {
				resolve(result)
			}).catch((error) => {
				reject(error)
			})
		})

	})
}

function pollDeployment(deployHash) {
	return new Promise((resolve, reject) => {
		var poll = setInterval(
			async function (deployHash) {
				try {
					const response = await client.getDeploy(deployHash);
					if (response[1].execution_results.length != 0) {
						// Deploy executed
						if (response[1].execution_results[0].result.Failure != null) {
							clearInterval(poll);
							reject("Deployment failed");
							return;
						}
						clearInterval(poll);
						resolve(response[1].execution_results[0].result.Success);
					}
				} catch (error) {
					console.error(error);
				}
			},
			2000,
			deployHash
		);
	});
}

const contractAddress = "hash-6b33981c0201d37f128cabe1b025fd6acef08576ebef77536d4faeb9e9d9b22d"

app.get('/validate_proof', async (req, res) => {

    let proof = req.body
    console.log(proof)
    let result = await verifyProof(contractAddress);
    console.log(result)
    let message = {
        "action": "VALIDATE_PROOF",
        "message": "Proof is confirmed to be valid.",
        "address": contractAddress,
    }
    res.send(message)
})

app.get('/verify_status', async (req, res) => {

    let address = req.body ?? contractAddress
    console.log(address)
    let result = await verifyStatus(address);
    console.log(result)
    let message = {
        "status": result,
        "message": result ? "Proof verified successfully!" : "Failed proof verification.",
        "address": address,
    }
    res.send(message)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})