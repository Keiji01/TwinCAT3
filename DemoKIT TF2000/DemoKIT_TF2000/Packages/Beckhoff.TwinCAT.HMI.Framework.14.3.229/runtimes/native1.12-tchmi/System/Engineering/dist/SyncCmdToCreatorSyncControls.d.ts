import { SyncCmdToCreator } from './SyncCmdToCreator.js';
import type { SyncCmdSyncControls } from './SyncCmd.js';
/** Last time (in numbers of ms since 1970) we sent a SyncControl command to engineering. */
export declare let lastSyncControls: number;
export declare class SyncCmdToCreatorSyncControls extends SyncCmdToCreator {
    constructor(cmd: SyncCmdSyncControls);
    protected __cmd: SyncCmdSyncControls;
    send(): void;
}
//# sourceMappingURL=SyncCmdToCreatorSyncControls.d.ts.map