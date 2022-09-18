// import { CasperClient, Contracts, Keys, RuntimeArgs } from "casper-js-sdk";
const casper_sdk = require("casper-js-sdk");
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
						//Deploy executed
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
