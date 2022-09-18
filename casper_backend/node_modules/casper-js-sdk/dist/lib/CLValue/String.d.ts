import { CLType, CLValue, ResultAndRemainder, ToBytesResult, CLErrorCodes, CLValueBytesParsers } from './index';
import { CLTypeTag } from './constants';
export declare class CLStringType extends CLType {
    linksTo: typeof CLString;
    tag: CLTypeTag;
    toString(): string;
    toJSON(): string;
}
export declare class CLStringBytesParser extends CLValueBytesParsers {
    toBytes(value: CLString): ToBytesResult;
    fromBytesWithRemainder(rawBytes: Uint8Array): ResultAndRemainder<CLString, CLErrorCodes>;
}
export declare class CLString extends CLValue {
    data: string;
    constructor(v: string);
    clType(): CLType;
    value(): string;
    size(): number;
}
