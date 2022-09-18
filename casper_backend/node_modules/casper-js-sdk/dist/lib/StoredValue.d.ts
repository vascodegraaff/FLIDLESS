import { CLValue, CLType } from './CLValue';
declare class NamedKey {
    name: string;
    key: string;
}
declare class AssociatedKey {
    accountHash: string;
    weight: number;
}
declare class ActionThresholds {
    deployment: number;
    keyManagement: number;
}
/**
 * Structure representing a user's account, stored in global state.
 */
declare class AccountJson {
    accountHash(): string;
    private _accountHash;
    namedKeys: NamedKey[];
    mainPurse: string;
    associatedKeys: AssociatedKey[];
    actionThresholds: ActionThresholds;
}
export declare class TransferJson {
    deployHash: string;
    from: string;
    source: string;
    target: string;
    amount: string;
    gas: string;
    id: number | null;
}
export declare class Transfers {
    transfers: TransferJson[];
}
export declare class DeployInfoJson {
    deployHash: string;
    transfers: string[];
    from: string;
    source: string;
    gas: string;
}
/**
 * Info about a seigniorage allocation for a validator
 */
declare class Validator {
    validatorPublicKey: string;
    amount: string;
}
/**
 * Info about a seigniorage allocation for a delegator
 */
declare class Delegator {
    delegatorPublicKey: string;
    validatorPublicKey: string;
    amount: string;
}
/**
 * Information about a seigniorage allocation
 */
export declare class SeigniorageAllocation {
    Validator?: Validator;
    Delegator?: Delegator;
}
/**
 * Auction metadata. Intended to be recorded at each era.
 */
export declare class EraInfoJson {
    seigniorageAllocations: SeigniorageAllocation[];
}
/**
 * Named CLType arguments
 */
export declare class NamedCLTypeArg {
    name: string;
    clType: CLType;
}
/**
 * Entry point metadata
 */
export declare class EntryPoint {
    access: string;
    entryPointType: string;
    name: string;
    ret: string;
    args: NamedCLTypeArg[];
}
/**
 * Contract metadata.
 */
export declare class ContractMetadataJson {
    contractPackageHash: string;
    contractWasmHash: string;
    entrypoints: EntryPoint[];
    protocolVersion: string;
    namedKeys: NamedKey[];
}
/**
 * Contract Version.
 */
export declare class ContractVersionJson {
    protocolVersionMajor: number;
    contractVersion: number;
    contractHash: string;
}
/**
 * Disabled Version.
 */
export declare class DisabledVersionJson {
    accessKey: number;
    contractVersion: number;
}
/**
 * Groups.
 */
export declare class GroupsJson {
    group: string;
    keys: string;
}
/**
 * Contract Package.
 */
export declare class ContractPackageJson {
    accessKey: string;
    versions: ContractVersionJson[];
    disabledVersions: DisabledVersionJson[];
    groups: GroupsJson[];
}
export declare class StoredValue {
    CLValue?: CLValue;
    Account?: AccountJson;
    ContractWASM?: string;
    Contract?: ContractMetadataJson;
    ContractPackage?: ContractPackageJson;
    Transfer?: TransferJson;
    DeployInfo?: DeployInfoJson;
    EraInfo?: EraInfoJson;
}
export {};
