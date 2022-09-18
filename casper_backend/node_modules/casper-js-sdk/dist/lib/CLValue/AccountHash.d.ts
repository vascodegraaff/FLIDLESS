import { CLValue, CLValueBytesParsers, CLType, CLErrorCodes, ResultAndRemainder, ToBytesResult } from './index';
export declare class CLAccountHashType extends CLType {
    linksTo: typeof CLAccountHash;
    tag: number;
    toString(): string;
    toJSON(): string;
}
export declare class CLAccountHashBytesParser extends CLValueBytesParsers {
    toBytes(value: CLAccountHash): ToBytesResult;
    fromBytesWithRemainder(bytes: Uint8Array): ResultAndRemainder<CLAccountHash, CLErrorCodes>;
}
/** A cryptographic public key. */
export declare class CLAccountHash extends CLValue {
    data: Uint8Array;
    /**
     * Constructs a new `AccountHash`.
     *
     * @param v The bytes constituting the public key.
     */
    constructor(v: Uint8Array);
    clType(): CLType;
    value(): Uint8Array;
}
