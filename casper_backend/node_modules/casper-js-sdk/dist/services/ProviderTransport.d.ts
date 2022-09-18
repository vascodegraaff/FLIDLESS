import { Transport } from '@open-rpc/client-js/build/transports/Transport';
import { IJSONRPCData } from '@open-rpc/client-js/build/Request';
export declare type JRPCVersion = '2.0';
export declare type JRPCId = number | string | void;
export interface JRPCBase {
    jsonrpc?: JRPCVersion;
    id?: JRPCId;
}
export interface JRPCRequest<T> extends JRPCBase {
    method: string;
    params?: T;
}
export interface JRPCResponse<T> extends JRPCBase {
    result?: T;
    error?: any;
}
export declare type SendCallBack<U> = (err: any, providerRes: U) => void;
export interface SafeEventEmitterProvider {
    sendAsync: <T, U>(req: JRPCRequest<T>) => Promise<U>;
    send: <T, U>(req: JRPCRequest<T>, callback: SendCallBack<U>) => void;
}
declare class ProviderTransport extends Transport {
    provider: SafeEventEmitterProvider;
    constructor(provider: SafeEventEmitterProvider);
    connect(): Promise<any>;
    sendData(data: IJSONRPCData, timeout?: number | null): Promise<any>;
    close(): void;
    private onlyNotifications;
}
export default ProviderTransport;
