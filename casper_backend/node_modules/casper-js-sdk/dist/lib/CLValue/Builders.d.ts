import { BigNumberish } from '@ethersproject/bignumber';
import { Option } from 'ts-results';
import { CLValue, CLType, CLBool, CLBoolType, CLU8, CLU8Type, CLU32, CLU32Type, CLU64, CLU64Type, CLU128, CLU128Type, CLU256, CLU256Type, CLU512, CLU512Type, CLI32, CLI32Type, CLI64, CLI64Type, CLKey, CLKeyType, CLKeyParameters, CLUnit, CLUnitType, CLString, CLStringType, CLURef, CLURefType, AccessRights, CLPublicKey, CLPublicKeyType, CLPublicKeyTag, CLList, CLListType, CLTuple1, CLTuple1Type, CLTuple2, CLTuple2Type, CLTuple3, CLTuple3Type, CLOption, CLOptionType, CLMap, CLMapType, CLByteArray, CLByteArrayType } from './index';
export declare class CLTypeBuilder {
    static bool: () => CLBoolType;
    static u8: () => CLU8Type;
    static u32: () => CLU32Type;
    static i32: () => CLI32Type;
    static u64: () => CLU64Type;
    static i64: () => CLI64Type;
    static u128: () => CLU128Type;
    static u256: () => CLU256Type;
    static u512: () => CLU512Type;
    static unit: () => CLUnitType;
    static string: () => CLStringType;
    static key: () => CLKeyType;
    static uref: () => CLURefType;
    static list<T extends CLType>(val: T): CLListType<T>;
    static tuple1([t0]: [CLType]): CLTuple1Type;
    static tuple2([t0, t1]: [CLType, CLType]): CLTuple2Type;
    static tuple3([t0, t1, t2]: [CLType, CLType, CLType]): CLTuple3Type;
    static option<T extends CLType>(type: T): CLOptionType<T>;
    static map<K extends CLType, V extends CLType>(val: [K, V]): CLMapType<K, V>;
    static publicKey(): CLPublicKeyType;
    static byteArray(size: number): CLByteArrayType;
}
export declare class CLValueBuilder {
    static bool: (val: boolean) => CLBool;
    static u8: (val: BigNumberish) => CLU8;
    static u32: (val: BigNumberish) => CLU32;
    static i32: (val: BigNumberish) => CLI32;
    static u64: (val: BigNumberish) => CLU64;
    static i64: (val: BigNumberish) => CLI64;
    static u128: (val: BigNumberish) => CLU128;
    static u256: (val: BigNumberish) => CLU256;
    static u512: (val: BigNumberish) => CLU512;
    static unit: () => CLUnit;
    static string: (val: string) => CLString;
    static key: (val: CLKeyParameters) => CLKey;
    static uref: (val: Uint8Array, accessRights: AccessRights) => CLURef;
    static list<T extends CLValue>(val: T[]): CLList<T>;
    static tuple1([t0]: [CLValue]): CLTuple1;
    static tuple2([t0, t1]: [CLValue, CLValue]): CLTuple2;
    static tuple3([t0, t1, t2]: [CLValue, CLValue, CLValue]): CLTuple3;
    static option(data: Option<CLValue>, innerType?: CLType): CLOption<CLValue>;
    static map<K extends CLValue, V extends CLValue>(val: [K, V][] | [CLType, CLType]): CLMap<K, V>;
    static publicKey(rawPublicKey: Uint8Array, tag: CLPublicKeyTag): CLPublicKey;
    static byteArray(bytes: Uint8Array): CLByteArray;
}
