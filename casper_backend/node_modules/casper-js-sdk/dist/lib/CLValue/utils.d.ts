import { Result } from 'ts-results';
import { CLValueBytesParsers, CLType, ResultAndRemainder } from './index';
export declare const TUPLE_MATCH_LEN_TO_ID: string[];
export declare const matchTypeToCLType: (type: any) => CLType;
export declare const matchByteParserByCLType: (val: CLType) => Result<CLValueBytesParsers, string>;
export declare const matchBytesToCLType: (bytes: Uint8Array) => ResultAndRemainder<CLType, string>;
export declare const padNum: (v: string, n?: number) => string;
