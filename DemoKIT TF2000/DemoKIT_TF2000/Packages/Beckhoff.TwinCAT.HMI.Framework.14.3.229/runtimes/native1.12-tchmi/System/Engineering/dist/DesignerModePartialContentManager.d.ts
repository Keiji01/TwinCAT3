import type { SyncCmdCurrentPartialContents } from './SyncCmd.js';
import type { PartialContentManagerShape } from '../../ServicesTypes/SystemEngineering.js';
export declare class DesignerModePartialContentManager implements PartialContentManagerShape {
    constructor();
    /** key is the request id */
    private __requestsSingle;
    /** key is the request id */
    private __requestsMulti;
    private __requestIdCount;
    requestCurrentPartialContents(partialUrls: {
        path: string;
    }[], callback: (this: void, data: IPartialContentsResultObject) => void): TcHmi.DestroyFunction;
    private createRequestId;
    /**
     * Returns the request object for a single request.
     * @param requestId
     */
    getRequestSingle(requestId: number): IRequestMetaDataSingle | undefined;
    /**
     * Returns the request object for a multi request.
     * @param requestId
     */
    getRequestMulti(requestId: number): IRequestMetaDataMulti | undefined;
}
export interface IRequestMetaDataSingle {
    reject: (data: Error) => void;
    resolve: (data: {
        path: string;
        content: string;
    }) => void;
}
export interface IRequestMetaDataMulti {
    reject: (data: Error) => void;
    resolve: (data: IPartialContentsResultObject['targetPartials']) => void;
}
export interface IPartialContentsResultObject extends TcHmi.IResultObject {
    targetPartials: SyncCmdCurrentPartialContents['targetPartials'];
}
/** Runtime Manager */
export declare const partialContentManager: DesignerModePartialContentManager;
//# sourceMappingURL=DesignerModePartialContentManager.d.ts.map