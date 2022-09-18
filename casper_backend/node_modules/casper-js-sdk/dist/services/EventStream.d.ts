import { Result } from 'ts-results';
interface DeploySubscription {
    deployHash: string;
    eventHandlerFn: EventHandlerFn;
}
declare enum StreamErrors {
    NotAnEvent = 0,
    EarlyEndOfStream = 1,
    MissingDataHeader = 2,
    MissingDataHeaderAndId = 3,
    MissingId = 4
}
export declare class DeployWatcher {
    eventStreamUrl: string;
    es: EventStream;
    watchList: DeploySubscription[];
    constructor(eventStreamUrl: string);
    subscribe(val: DeploySubscription[]): void;
    unsubscribe(deployHash: string): void;
    start(): void;
    stop(): void;
}
declare type EventHandlerFn = (result: any) => void;
export declare enum EventName {
    BlockAdded = "BlockAdded",
    BlockFinalized = "BlockFinalized",
    FinalitySignature = "FinalitySignature",
    Fault = "Fault",
    DeployProcessed = "DeployProcessed"
}
interface EventSubscription {
    eventName: EventName;
    eventHandlerFn: EventHandlerFn;
}
interface EventParseResult {
    id: string | null;
    err: StreamErrors | null;
    body: any | null;
}
export declare class EventStream {
    eventStreamUrl: string;
    subscribedTo: EventSubscription[];
    pendingDeploysParts: EventParseResult[];
    pendingDeployString: string;
    stream: any;
    constructor(eventStreamUrl: string);
    subscribe(eventName: EventName, eventHandlerFn: EventHandlerFn): Result<boolean, string>;
    unsubscribe(eventName: EventName): Result<boolean, string>;
    runEventsLoop(result: EventParseResult): void;
    start(eventId?: number): void;
    stop(): void;
}
export declare const parseEvent: (eventString: string) => any;
export {};
