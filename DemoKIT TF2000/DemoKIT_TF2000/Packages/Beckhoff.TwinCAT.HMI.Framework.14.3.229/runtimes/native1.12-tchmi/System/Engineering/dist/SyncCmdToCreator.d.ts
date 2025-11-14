import type { AllSyncCmd } from './SyncCmd.js';
export declare abstract class SyncCmdToCreator {
    constructor(cmd: AllSyncCmd);
    protected __cmd: AllSyncCmd;
    send(timestamp?: number): void;
}
//# sourceMappingURL=SyncCmdToCreator.d.ts.map