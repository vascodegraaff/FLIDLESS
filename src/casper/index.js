import { CasperClient, Contracts, Keys, RuntimeArgs } from "casper-js-sdk";
const fs = require('fs')

const client = new CasperClient("http://135.181.208.231:7777/rpc")
const contract = new Contracts.Contract(client)

const keys = Keys.Ed25519.loadKeyPairFromPrivateFile("./keys/secret_key.pem")
const wasm = new Uint8Array(fs.readFileSync("casper-node/target/wasm32-unknown-unknown/release/counter_installer.wasm").buffer)

function installContract() {
  const deploy = contract.install(
    wasm,
    RuntimeArgs.fromMap({}),
    "20000000000", //20 CSPR
    keys.publicKey,
    "casper-test",
    [keys]
  );

  client.putDeploy(deploy).then((deployHash) => {
      pollDeployment(deployHash).then((result) => {
        const contractAddress = iterateTransforms(result)
        console.log(contractAddress)
      })
    })
    .catch((error) => {
      console.error(error)
    })
}

function getCount(contractAddress) {
  return new Promise((resolve, reject) => {
    contract.setContractHash(contractAddress)
    contract.queryContractData(["count"]).then((response) => {
        resolve(response)
      }).catch((error) => {
        reject(error)
      })
  })
}

function increment(contractAddress) {
    return new Promise((resolve, reject) => {
      contract.setContractHash(contractAddress)
      const deploy = contract.callEntrypoint(
        "counter_inc",
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

function iterateTransforms(result) {
  const transforms = result.effect.transforms;
  for (var i = 0; i < transforms.length; i++) {
    if (transforms[i].transform == "WriteContract") {
      return transforms[i].key;
    }
  }
}

//installContract()
/*getCount("hash-2938d07b413448c57a94f36054c9e70a1db44f51ed136b4d7c5419b015c70b37").then((count) => {
    console.log(count)
})
//increment("hash-2938d07b413448c57a94f36054c9e70a1db44f51ed136b4d7c5419b015c70b37")
increment("hash-2938d07b413448c57a94f36054c9e70a1db44f51ed136b4d7c5419b015c70b37").then(() => {
    getCount("hash-2938d07b413448c57a94f36054c9e70a1db44f51ed136b4d7c5419b015c70b37").then((count) => {
        console.log(count)
    })
})*/
Footer
