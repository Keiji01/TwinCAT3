import type { AllSyncCmd, SyncCmd } from './SyncCmd.js';
export declare abstract class SyncCmdToFramework {
    static supportedCommand: AllSyncCmd['name'];
    constructor(cmd: SyncCmd);
    protected __cmd: SyncCmd;
    protected __result: TcHmi.Errors;
    abstract run(): void;
}
/** The engineering commands which are understood by this engineering instance. Sent since 2025-05 */
export declare const supportedCommandFromFramework: AllSyncCmd['name'][];
export declare const registerCommand: (cmd: typeof SyncCmdToFramework) => void;
//# sourceMappingURL=SyncCmdToFramework.d.ts.map