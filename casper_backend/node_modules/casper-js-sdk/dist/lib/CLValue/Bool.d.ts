import { CLType, CLValue, ResultAndRemainder, ToBytesResult, CLErrorCodes, CLValueBytesParsers } from './index';
import { CLTypeTag } from './constants';
export declare class CLBoolType extends CLType {
    linksTo: typeof CLBool;
    tag: CLTypeTag;
    toString(): string;
    toJSON(): string;
}
export declare class CLBoolBytesParser extends CLValueBytesParsers {
    toBytes(value: CLBool): ToBytesResult;
    fromBytesWithRemainder(bytes: Uint8Array): ResultAndRemainder<CLBool, CLErrorCodes>;
}
export declare class CLBool extends CLValue {
    data: boolean;
    bytesParser: CLBoolBytesParser;
    constructor(v: boolean);
    clType(): CLType;
    value(): boolean;
    static fromBytesWithRemainder(bytes: Uint8Array): ResultAndRemainder<CLBool, CLErrorCodes>;
}
