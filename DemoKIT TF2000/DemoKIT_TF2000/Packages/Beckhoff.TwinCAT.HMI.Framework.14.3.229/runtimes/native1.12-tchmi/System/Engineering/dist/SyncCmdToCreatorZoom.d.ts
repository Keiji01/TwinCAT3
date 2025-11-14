import { SyncCmdToCreator } from './SyncCmdToCreator.js';
import type { SyncCmdZoom } from './SyncCmd.js';
/** This class is used to send zoom commnds to the creator after wheel event. */
export declare class SyncCmdToCreatorZoom extends SyncCmdToCreator {
    constructor(cmd: SyncCmdZoom);
    protected __cmd: SyncCmdZoom;
}
//# sourceMappingURL=SyncCmdToCreatorZoom.d.ts.map