import { CLValue, ToBytes, ToBytesResult, ResultAndRemainder } from './CLValue';
export declare class NamedArg implements ToBytes {
    name: string;
    value: CLValue;
    constructor(name: string, value: CLValue);
    toBytes(): ToBytesResult;
    static fromBytes(bytes: Uint8Array): ResultAndRemainder<NamedArg, string>;
}
export declare class RuntimeArgs implements ToBytes {
    args: Map<string, CLValue>;
    constructor(args: Map<string, CLValue>);
    static fromMap(args: Record<string, CLValue>): RuntimeArgs;
    static fromNamedArgs(namedArgs: NamedArg[]): RuntimeArgs;
    insert(key: string, value: CLValue): void;
    toBytes(): ToBytesResult;
    static fromBytes(bytes: Uint8Array): ResultAndRemainder<RuntimeArgs, string>;
}
