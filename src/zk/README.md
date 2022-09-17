# ZK Indian Prover

## Input data

The circuit expects an input in a specific format. The file `example-parsed-input-minimal.json` is in that format, and contains an example indian identity. For the demo, we should upload & feed that file into the UI. The raw indian identity that we used is stored in `example.xml`. 

## Proving things

Use snarkjs in the browser [like such](https://github.com/iden3/snarkjs#in-the-browser). The important input files which need to be provided to snarkjs are `circuit_0.zkey` and `indian-verifier-minimal_js/indian-verifier-minimal.wasm`. Feed them into snarkjs, together with the JSON file from above, and you get the proof. Magic!