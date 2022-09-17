pragma circom 2.0.0;

include "sha256-var-circom/snark-jwt-verify/circomlib/circuits/sha256/sha256.circom";

template IndianVerifier(MAX_N, NAME_N, NAME_LOC) {
  var SHA256_LEN = 256;
  signal input document[MAX_N];
  signal input name[NAME_N];
  signal input hash[SHA256_LEN];
  signal input a;
  signal input b;
  signal input c;

  for(var i=0; i<NAME_N; i++) {
    document[NAME_LOC + i] === name[i];
  }

  a * b === c;

  //component shaDoc = Sha256(MAX_N);
  //for(var i=0; i<MAX_N; i++) {
  //  shaDoc.in[i] <== document[i];
  //}

  //for(var i=0; i<SHA256_LEN; i++) {
  //  shaDoc.out[i] === hash[i];
  //}
}

component main { public [name, hash, a, b] } = IndianVerifier(7648, 80, 672);