import { SyncCmdToFramework } from './SyncCmdToFramework.js';
import type { SyncCmdCurrentPartialContent } from './SyncCmd.js';
export declare class SyncCmdToFrameworkCurrentPartialContent extends SyncCmdToFramework {
    constructor(cmd: SyncCmdCurrentPartialContent);
    protected __cmd: SyncCmdCurrentPartialContent;
    run(): void;
}
export declare function updatePartial(targetPartial: string, content: string): TcHmi.Errors;
//# sourceMappingURL=SyncCmdToFrameworkCurrentPartialContent.d.ts.map