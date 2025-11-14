import type { Settings } from './DesignerModeManager.js';
import type { Position } from './Position.js';
export interface SyncCmd {
    frameworkType?: 'LiveView' | 'Designer';
    /**
     * Is set to define which framework engineering instances (designer-views and live-views) should get the response command.
     * Should only matter if the command produces a response command.
     * -----------------------------------------------------------------------------------------------------------------------
     * Valid Values:
     * -----------------------------------------------------------------------------------------------------------------------
     * null      - Do not send response
     * ''        - Do not send response
     * '*'       - Broadcast response
     * '[GUID]'  - Send response only to framework instance with instance id === [GUID]
     * ------------------------------------------------------------------------------------------------------------------------
     */
    replyTo?: string | null;
}
export type AllSyncCmd = SyncCmdControlDoubleClick | SyncCmdControlLocked | SyncCmdCopyMoveControls | SyncCmdCreateControls | SyncCmdCurrentPartialContent | SyncCmdCurrentPartialContents | SyncCmdCurrentPartialEditorLockState | SyncCmdCurrentPartialHighlightContainerState | SyncCmdDesignerSettings | SyncCmdDomVisibility | SyncCmdDropControlPosition | SyncCmdHierarchyMoveControls | SyncCmdKeyStates | SyncCmdLogoutClient | SyncCmdMessages | SyncCmdPartialEditorLocked | SyncCmdPartialEditorUnlocked | SyncCmdRegisterSyncView | SyncCmdSyncViewRegistered | SyncCmdRemoveControls | SyncCmdRequestCurrentPartialContent | SyncCmdRequestCurrentPartialContents | SyncCmdRequestDropControlPosition | SyncCmdRequestRequiredViewPortSize | SyncCmdScrollPositionChanged | SyncCmdSelectedControls | SyncCmdServerAddress | SyncCmdSyncControls | SyncCmdTcHmiConfigChanged | SyncCmdZoom | SyncCmdIgnoredCommand;
/** List of command names which are not in use anymore but should be ignored
 * @deprecated not in use anymore */
export interface SyncCmdIgnoredCommand extends SyncCmd {
    name: 'Confirmation' | 'TransactionCommit' | 'TransactionBegin' | 'InjectResources';
}
export interface SyncCmdControlDoubleClick extends SyncCmd {
    name: 'ControlDoubleClick';
    targetPartial: string;
    targetControl: SyncCmdControlDoubleClickTargetControl;
}
export interface SyncCmdControlDoubleClickTargetControl {
    id: string;
    type: string;
}
export interface SyncCmdControlLocked extends SyncCmd {
    name: 'ControlLocked';
    targetPartial: string;
    targetControl: string;
    locked: boolean;
}
export interface SyncCmdCopyMoveControls extends SyncCmd {
    name: 'CopyMoveControls';
    targetPartial: string;
    targetParentControl: string;
    /** Integer only in Creator! */
    deltaPosition: TcHmi.Nullable<Position>;
    controls: string[];
    attributes?: {
        name: string;
        value: any;
    }[];
}
export interface SyncCmdCreateControls extends SyncCmd {
    name: 'CreateControls';
    targetPartial: string;
    controls: SyncCmdCreateControlsControl[];
}
export interface SyncCmdCreateControlsControl {
    targetParentControl: string;
    controlId: string;
    controlHtml: string;
    domPosition: number;
    select: boolean;
}
export interface SyncCmdCurrentPartialContent extends SyncCmd {
    name: 'CurrentPartialContent';
    targetPartial: string;
    /** String of the partial HTML */
    content: string;
    /** base64 encoded string of a SyncCmdCurrentPartialContentPiggyBack */
    piggyBack: string;
    /** Info why this command was sent */
    trigger?: {
        /** Type of this trigger */
        type: 'SyncControlFromFramework' | 'unknown';
        /** Timestamp of trigger (in numbers of ms since 1970) */
        timestamp: number;
    };
}
export interface SyncCmdCurrentPartialContents extends SyncCmd {
    name: 'CurrentPartialContents';
    targetPartials: {
        path: string;
        /**
         * The object has the same content as the request.
         * String of the partial HTML.
         * The values can be null in error case.
         */
        content: string | null;
    }[];
    /** base64 encoded string of a SyncCmdCurrentPartialContentPiggyBack */
    piggyBack: string;
}
export interface SyncCmdCurrentPartialContentPiggyBack {
    requestId: number;
    requestInstance: string;
}
export interface SyncCmdCurrentPartialEditorLockState extends SyncCmd {
    name: 'CurrentPartialEditorLockState';
    targetPartial: string;
    locked: boolean;
}
export interface SyncCmdCurrentPartialHighlightContainerState extends SyncCmd {
    name: 'CurrentPartialHighlightContainerState';
    targetPartial: string;
    state: boolean;
    replyTo: string;
}
export interface SyncCmdDesignerSettings extends SyncCmd {
    name: 'DesignerSettings';
    targetPartial: string;
    replyTo: string;
    settings: Settings;
}
export interface SyncCmdDomVisibility extends SyncCmd {
    name: 'DomVisibility';
    targetPartial: string;
    targetControl: string;
    visibility: boolean;
}
/**
 * Describes a control which will be created at a specific position.
 **/
export interface SyncCmdDropControlPosition extends SyncCmd {
    name: 'DropControlPosition';
    targetPartial: string;
    controls: SyncCmdDropControlPositionControl[];
}
export interface SyncCmdDropControlPositionControl {
    /** A dictionary for the attributes with the html attribute names as keys. Object or stringified. */
    piggyBack: string | TcHmi.Dictionary<unknown>;
    targetParentControl: string;
    type: string;
    position: {
        centerX: number;
        centerY: number;
    };
    attributes?: {
        name: string;
        value: any;
    }[];
}
export interface SyncCmdHierarchyMoveControls extends SyncCmd {
    name: 'HierarchyMoveControls';
    targetPartial: string;
    targetParentControl: string;
    /** Integer only in Creator! */
    deltaPosition: TcHmi.Nullable<Position>;
    controls: string[];
    attributes?: {
        name: string;
        value: any;
    }[];
}
export interface KeyState {
    down: boolean;
    up: boolean;
}
export interface KeyStates {
    leftAlt: KeyState;
    leftCtrl: KeyState;
    leftShift: KeyState;
    rightAlt: KeyState;
    rightCtrl: KeyState;
    rightShift: KeyState;
}
export interface SyncCmdKeyStates extends SyncCmd {
    name: 'KeyStates';
    targetPartial: string;
    states: KeyStates;
}
export interface SyncCmdLogoutClient extends SyncCmd {
    name: 'LogoutClient';
    /** The client will only logout if it is logged in and targetInstance is empty/not set or its own id. */
    targetInstance?: string | null;
}
/** This interface is used to send messages for the error pane to the creator. */
export interface SyncCmdMessages extends SyncCmd {
    name: 'Messages';
    messages: Message[];
}
export interface Message {
    identifier: string;
}
export interface AddMessage extends Message {
    append: boolean;
    type: TcHmi.Engineering.ErrorPane.MessageType;
    targetPartial: string;
    targetInstance: string;
    content: string;
    line: number | null;
    position: number | null;
    unixTimestamp: number;
}
export interface RemoveMessage extends Message {
    remove: boolean;
}
export interface SyncCmdPartialEditorLocked extends SyncCmd {
    name: 'PartialEditorLocked';
    targetPartial: string;
}
export interface SyncCmdPartialEditorUnlocked extends SyncCmd {
    name: 'PartialEditorUnlocked';
    targetPartial: string;
}
export interface SyncCmdRegisterSyncView extends SyncCmd {
    name: 'RegisterSyncView';
    /** The main target partial this designer or live view is showing. */
    targetPartial: string;
    /** Unique ID of this live view or designer. */
    targetInstance: string;
    syncViewLevel: 'Slave' | 'Master';
    /** Session id of this sync view with the engineering server. */
    sessionId: string;
    /** The engineering commands which are understood by this engineering instance. Sent since 2025-05 */
    supportedCommands: string[];
}
export interface SyncCmdSyncViewRegistered extends SyncCmd {
    name: 'SyncViewRegistered';
    targetPartial: string;
    /** The engineering commands which are understood by the engineering endpoint (Visual Studio). Sent since 2025-06 */
    supportedCommands?: AllSyncCmd['name'][];
}
export interface SyncCmdRemoveControls extends SyncCmd {
    name: 'RemoveControls';
    targetPartial: string;
    controls: string[];
}
export interface SyncCmdRequestCurrentPartialContent extends SyncCmd {
    name: 'RequestCurrentPartialContent';
    targetPartial: string;
    piggyBack: string | null;
}
export interface SyncCmdRequestCurrentPartialContents extends SyncCmd {
    name: 'RequestCurrentPartialContents';
    targetPartials: {
        path: string;
    }[];
    piggyBack: string | null;
}
export interface SyncCmdRequestDropControlPosition extends SyncCmd {
    name: 'RequestDropControlPosition';
    targetPartial: string;
    /** A dictionary for the attributes with the html attribute names as keys. Object or stringified. */
    piggyBack: string | TcHmi.Dictionary<unknown>;
    /** Type of the new control. */
    type: string;
    /** drop coordinate relative to the viewport not the document */
    position: Position;
}
export interface SyncCmdRequestRequiredViewPortSize extends SyncCmd {
    name: 'RequestRequiredViewPortSize';
    targetPartial: string;
    width: number;
    height: number;
}
export interface SyncCmdScrollPositionChanged extends SyncCmd {
    name: 'ScrollPositionChanged';
    targetPartial: string;
    position: Position;
}
export interface SyncCmdSelectedControls extends SyncCmd {
    name: 'SelectedControls';
    targetPartial: string;
    controls: string[];
}
export interface SyncCmdServerAddress extends SyncCmd {
    name: 'ServerAddress';
    host: string;
    port: number;
    protocol: 'http:' | 'https:';
    targetPartial: string;
}
export interface SyncCmdSyncControls extends SyncCmd {
    name: 'SyncControls';
    targetPartial: string;
    controls: SyncCmdSyncControlsControl[];
}
export interface SyncCmdSyncControlsControl {
    targetControl: string;
    descriptionPath: string | null;
    controlHtml: string;
}
export interface SyncCmdTcHmiConfigChanged extends SyncCmd {
    name: 'TcHmiConfigChanged';
    configPath: string;
    type: 'TcHmiConfig' | 'UserControlConfig' | 'Localization' | 'ThemeConfig';
}
/** This interface is used to send zoom commnds from and to the creator. */
export interface SyncCmdZoom extends SyncCmd {
    name: 'Zoom';
    targetPartial: string;
    factor: number;
}
//# sourceMappingURL=SyncCmd.d.ts.map