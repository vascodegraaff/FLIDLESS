import { CLType, CLValue, ToBytesResult, CLValueBytesParsers, CLErrorCodes, ResultAndRemainder } from './index';
import { BYTE_ARRAY_ID, CLTypeTag } from './constants';
export declare const CL_BYTE_ARRAY_MAX_LENGTH = 32;
export declare class CLByteArrayType extends CLType {
    linksTo: typeof CLByteArray;
    tag: CLTypeTag;
    size: number;
    constructor(size: number);
    toString(): string;
    toBytes(): Uint8Array;
    toJSON(): {
        [BYTE_ARRAY_ID]: number;
    };
}
export declare class CLByteArrayBytesParser extends CLValueBytesParsers {
    toBytes(value: CLByteArray): ToBytesResult;
    fromBytesWithRemainder(bytes: Uint8Array, type: CLByteArrayType): ResultAndRemainder<CLByteArray, CLErrorCodes>;
}
export declare class CLByteArray extends CLValue {
    data: Uint8Array;
    /**
     * Constructs a new `CLByteArray`.
     *
     * @param v The bytes array with max length 32.
     */
    constructor(v: Uint8Array);
    clType(): CLType;
    value(): Uint8Array;
}
