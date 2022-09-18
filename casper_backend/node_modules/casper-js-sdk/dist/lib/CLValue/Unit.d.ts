import { CLType, CLValue, CLValueBytesParsers, CLErrorCodes, ResultAndRemainder, ToBytesResult } from './index';
import { CLTypeTag } from './constants';
export declare class CLUnitType extends CLType {
    tag: CLTypeTag;
    linksTo: typeof CLUnit;
    toString(): string;
    toJSON(): string;
}
export declare class CLUnitBytesParser extends CLValueBytesParsers {
    toBytes(): ToBytesResult;
    fromBytesWithRemainder(rawBytes: Uint8Array): ResultAndRemainder<CLUnit, CLErrorCodes>;
}
export declare class CLUnit extends CLValue {
    data: undefined;
    clType(): CLType;
    value(): undefined;
}
