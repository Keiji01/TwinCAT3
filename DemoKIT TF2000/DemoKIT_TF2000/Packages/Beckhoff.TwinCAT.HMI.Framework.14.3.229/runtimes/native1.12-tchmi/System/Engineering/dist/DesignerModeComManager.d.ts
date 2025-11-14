import type { AllSyncCmd } from './SyncCmd.js';
export declare class DesignerModeComManager {
    /** Throws on error */
    constructor();
    private __resolveInitializedTwowayCommunication;
    /** We have stable Creator communication */
    initializedTwowayCommunication: Promise<void>;
    private __websocket;
    private __websocketWasClosedUnexpected;
    private __connectionWatcherInterval;
    private __unloaded;
    /** The engineering commands which are understood by the engineering endpoint (Visual Studio). Sent since 2025-06 */
    supportedCommandFromVS: AllSyncCmd['name'][];
    fillSupportedCommandFromVS(cmds: typeof this.supportedCommandFromVS): void;
    /** */
    static RECONNECT_INTERVAL: number;
    /** Counting all reconnects (including reloads) till we have a valid answer */
    private __globalReconnectCount;
    private __onDisableCommunication;
    private __connectionWatcherTick;
    private __handleSyncCommandMessageResponse;
    private __createWebsocketOnOpenHandler;
    /**
     * @param closeEvent The this.__websocket this.__close event object.
     */
    private __websocketOnClose;
    /**
     * @param messageEvent The this.__websocket message event object.
     */
    private __websocketOnMessage;
    open(callback?: (this: void, data: IConnectionResultObject) => void): void;
    /**
     * Sends a command to the engineering.
     * @param cmd
     */
    sendCommand(cmd: AllSyncCmd, timestamp?: number): void;
}
export interface IConnectionResultObject extends TcHmi.IResultObject {
    url?: string;
}
export interface SyncMessage {
    /**
     * The id of the current message. Has to be a unique GUID.
     */
    id: string;
    /**
     * Message timestamp
     * The timestamp of the message in milliseconds since 1970-01-01.
     * Can be base64 encoded depending on tchmi server settings USEINT64STRING
     * when this messages are transported through it.
     */
    timestamp: number | string;
    /**
     * Command object
     */
    command: AllSyncCmd;
}
/** Runtime Manager */
export declare const designerModeComManager: DesignerModeComManager;
//# sourceMappingURL=DesignerModeComManager.d.ts.map