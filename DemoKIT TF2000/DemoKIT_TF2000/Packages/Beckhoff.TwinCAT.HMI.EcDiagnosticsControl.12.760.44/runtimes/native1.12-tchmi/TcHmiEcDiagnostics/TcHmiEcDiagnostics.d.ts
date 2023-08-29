declare module EcDiagnostics.Commons {
    const extensionName = "TcHmiEcDiagnostics";
    const customElementsPrefix = "beckhoff-ec-diagnostics-";
}
declare module EcDiagnostics.Commons {
    class ColorRGBA {
        private __r;
        private __g;
        private __b;
        private __a;
        constructor(r: number, g?: number, b?: number, a?: number);
        getRGBAString(a?: number): string;
        getHexString(includeOpacity?: boolean): string;
        static resolveSolidColorAsCssValue(colorObject: {
            color: string;
        }): string;
        static resolveSolidColorAsRGBA(colorObject: {
            color: string;
        }): ColorRGBA;
    }
    interface ThemedResource {
        [key: string]: string | number | {
            color: string;
        } | ColorRGBA;
    }
    const ColorRGBA_Black: ColorRGBA;
    const ColorRGBA_White: ColorRGBA;
    const ColorRGBA_Red: ColorRGBA;
    const ColorRGBA_Orange: ColorRGBA;
    const ColorRGBA_DimGray: ColorRGBA;
    const ColorRGBA_Success: ColorRGBA;
    const ColorRGBA_SuccessLight: ColorRGBA;
    const ColorRGBA_Warning: ColorRGBA;
    const ColorRGBA_WarningLight: ColorRGBA;
    const ColorRGBA_Error: ColorRGBA;
    const ColorRGBA_ErrorDark: ColorRGBA;
    const ColorRGBA_ErrorLight: ColorRGBA;
}
declare module EcDiagnostics.Commons {
    class ElementWithCallback extends HTMLElement {
        constructor();
        addFnToCallOnRemove(fn: (...args: any[]) => void): void;
        private __fnToCallOnRemove;
        __executeFnToCallOnRemove(): void;
        disconnectedCallback(): void;
        remove(): void;
    }
}
declare module EcDiagnostics.Commons {
    class CanvasTooltip extends ElementWithCallback {
        constructor();
        private __hoverEventListener;
        connectedCallback(): void;
        disconnectedCallback(): void;
        private __removeEvents;
        hide(): void;
        show(content: HTMLElement, x: number, y: number): void;
    }
}
declare module EcDiagnostics.Commons {
    class PopUp extends ElementWithCallback {
        constructor();
        private __firstAttach;
        connectedCallback(): void;
        private readonly __innerFrame;
        private readonly __header;
        private readonly __title;
        private readonly __closeBtn;
        private readonly __removeTargets;
        setTitle(localization: Localization, contentKey: string): void;
        private __removeTargetFn;
        close(): void;
    }
}
declare module EcDiagnostics.Commons {
    interface EntryGroups {
        prev: {
            names: string[];
            wrapper: HTMLElement[];
        };
        current: {
            names: string[];
            wrapper: HTMLElement[];
        };
    }
    class ProcessDataView extends HTMLElement {
        constructor(slave: Slave, localization: Localization);
        connectedCallback(): void;
        disconnectedCallback(): void;
        private __slave;
        private __localization;
        private __pdo_types;
        private __createTableHeaders;
        private __createTableEntries;
        private __createTableEntryParent;
        private __createTableEntry;
        private __init;
        private __setAllValues;
        private __forceAllValues;
        private __releaseAllValues;
        private __setValue;
        private __forceValue;
        private __releaseValue;
        private __addProcessDataHistoryChart;
        private __drawProcessDataHistoryChart;
        private __removeProcessDataHistoryChart;
    }
}
declare module EcDiagnostics.Commons {
    class SlaveListView extends HTMLElement {
        constructor(master: Master, localization: Localization);
        private __forcedStateWrappers;
        private __forceStateInfo;
        private __releaseAllProcessDataBtn;
        private __listViewWrapper;
        updateForcedStates: (data: number[]) => void;
        connectedCallback(): void;
        disconnectedCallback(): void;
        private __preInit;
        private __init;
        private __addSlaveList;
        private __insertComponentEntry;
        private __master;
        private __localization;
    }
}
declare module EcDiagnostics.Commons {
    const enum OptionalBoolStateOrder {
        'TrueFalseNull' = 0,
        'FalseTrueNull' = 1
    }
    class OptionalBoolInput extends HTMLElement {
        constructor();
        private __state;
        private __mappedValue;
        private __stateOrder;
        get value(): boolean | null;
        set value(value: boolean | null);
        connectedCallback(): void;
        mapValue(mappedValue: ProcessDataOnlineEntry<any> | undefined): void;
        private __updateDom;
        __goToNextState(): void;
    }
}
declare module EcDiagnostics.Commons {
    interface ColorRGBA {
        r: number;
        g: number;
        b: number;
        a: number;
    }
    interface Theming {
        fontFamily: string;
        hover: {
            border: {
                color: ColorRGBA;
                width: number;
            };
        };
        adsState: {
            run: ColorRGBA;
            config: ColorRGBA;
            error: ColorRGBA;
        };
        msgLevel: {
            fallback: ColorRGBA;
            disabled: ColorRGBA;
            info: ColorRGBA;
            success: ColorRGBA;
            warning: ColorRGBA;
            error: ColorRGBA;
        };
        stateMachine: {
            init: {
                bgColor: ColorRGBA;
            };
            preop: {
                bgColor: ColorRGBA;
            };
            boot: {
                bgColor: ColorRGBA;
            };
            safeop: {
                bgColor: ColorRGBA;
            };
            operational: {
                bgColor: ColorRGBA;
            };
            invalid: {
                bgColor: ColorRGBA;
            };
        };
        statusFlag: {
            border: {
                color: ColorRGBA;
                width: number;
            };
        };
        master: {
            frame: {
                bgColor: ColorRGBA;
                border: {
                    color: ColorRGBA;
                    width: number;
                };
            };
            textColor: ColorRGBA;
        };
        trace: {
            label: {
                bgColor: ColorRGBA;
                textColor: ColorRGBA;
            };
        };
        slave: {
            frame: {
                bgColor: ColorRGBA;
                bgColorDisabled: ColorRGBA;
                border: {
                    color: ColorRGBA;
                    width: number;
                };
            };
            notPresent: {
                frame: {
                    bgColor: ColorRGBA;
                    border: {
                        color: ColorRGBA;
                        width: number;
                    };
                };
                /** opacity of drawing inside component (between 0 and 1) */
                interiorOpacity: number;
            };
            disabled: {
                frame: {
                    bgColor: ColorRGBA;
                    border: {
                        color: ColorRGBA;
                        width: number;
                    };
                };
                interiorOpacity: number;
            };
            attachedLabel: {
                error: {
                    bgColor: ColorRGBA;
                    textColor: ColorRGBA;
                };
                warning: {
                    bgColor: ColorRGBA;
                    textColor: ColorRGBA;
                };
            };
            syncUnitHighlight: {
                noError: {
                    frame: {
                        border: {
                            width: number;
                            color: ColorRGBA;
                        };
                    };
                };
                warning: {
                    frame: {
                        border: {
                            width: number;
                            color: ColorRGBA;
                        };
                    };
                };
                error: {
                    frame: {
                        border: {
                            width: number;
                            color: ColorRGBA;
                        };
                    };
                };
            };
            label: {
                noError: {
                    textColor: ColorRGBA;
                };
                vprsWarning: {
                    textColor: ColorRGBA;
                };
                vprsError: {
                    textColor: ColorRGBA;
                };
            };
        };
        slaveTerminalGroup: {
            label: {
                textColor: ColorRGBA;
            };
        };
        slaveCouplerGroup: {
            label: {
                textColor: ColorRGBA;
            };
        };
        cable: {
            notPresent: {
                strokeColor: ColorRGBA;
            };
            noError: {
                strokeColor: ColorRGBA;
            };
            error: {
                strokeColor: ColorRGBA;
            };
        };
        port: {
            label: {
                error: {
                    bgColor: ColorRGBA;
                    textColor: ColorRGBA;
                };
                warning: {
                    bgColor: ColorRGBA;
                    textColor: ColorRGBA;
                };
                success: {
                    bgColor: ColorRGBA;
                    textColor: ColorRGBA;
                };
                noError: {
                    bgColor: ColorRGBA;
                    textColor: ColorRGBA;
                };
            };
            EBus: {
                error: {
                    border: {
                        width: number;
                        color: ColorRGBA;
                    };
                };
                warning: {
                    border: {
                        width: number;
                        color: ColorRGBA;
                    };
                };
            };
            PHY: {
                noError: {
                    bgColor: ColorRGBA;
                    border: {
                        width: number;
                        color: ColorRGBA;
                    };
                };
                warning: {
                    bgColor: ColorRGBA;
                    border: {
                        width: number;
                        color: ColorRGBA;
                    };
                };
                error: {
                    bgColor: ColorRGBA;
                    border: {
                        width: number;
                        color: ColorRGBA;
                    };
                };
            };
        };
        processData: {
            historyChart: {
                grid: {
                    lineColor: ColorRGBA;
                    lineWidth: number;
                    numOfVerticalLines: number;
                    numOfHorizontalLines: number;
                    yOffsetBelow: number;
                    yOffsetAbove: number;
                    zeroValue: {
                        lineColor: ColorRGBA;
                        lineWidth: number;
                    };
                    minValue: {
                        lineColor: ColorRGBA;
                        lineWidth: number;
                    };
                    maxValue: {
                        lineColor: ColorRGBA;
                        lineWidth: number;
                    };
                };
                forcedValue: {
                    color: ColorRGBA;
                    width: number;
                };
                releasedValue: {
                    color: ColorRGBA;
                    width: number;
                };
            };
        };
    }
    interface VisualConfig {
        topology: {
            marginRows: {
                above: number;
                below: number;
            };
        };
        statusFlag: {
            height: number;
        };
        master: {
            frame: {
                dimension: {
                    width: number;
                    height: number;
                };
            };
            interior: {
                width: number;
            };
        };
        slave: {
            frame: {
                dimension: {
                    width: number;
                    height: number;
                };
            };
            label: {
                height: number;
            };
        };
        slaveTerminalGroup: {
            dimension: {
                width: number;
                height: number;
            };
        };
        slaveCouplerGroup: {
            dimension: {
                width: number;
                height: number;
            };
        };
        port: {
            PHY: {
                dimension: {
                    width: number;
                    height: number;
                };
            };
        };
    }
    type Appearance = Theming & VisualConfig;
    const visualConfig: VisualConfig;
    function processTheming(theming: Theming): void;
    function processThemingDeepMerge(mergedObject: any, objectToMerge: any): void;
    let appearance: Appearance | null;
}
declare module EcDiagnostics.Commons {
    class EcDiagnostics {
        constructor(elementRoot: HTMLElement, localization: Localization, commonPath: string, config: ClientConfigControl | ClientConfigStandalone);
        private __commonPath;
        private __localization;
        getLocalization(): Localization;
        setCustomTopMostLayerFunction(addFn: (element: HTMLElement) => void, removeFn: (element: HTMLElement) => void): void;
        private __customAddTopMostLayerFunction;
        private __customRemoveTopMostLayerFunction;
        setThemedResource(): void;
        clearAllNotifications(): void;
        get notification(): Notifications;
        clearNotification(category?: string | NotificationCategory, level?: NotificationLevel): void;
        setNotification(text: string, level: NotificationLevel, category: NotificationCategory | string, displayTime?: number): void;
        createNotification(key: string, params: any): void;
        private __targets;
        private __selectedDevice;
        getSelectedDevice(): SelectedDevice | null;
        private __notification;
        private __localConfig;
        get config(): ClientConfigControl | ClientConfigStandalone;
        private __view;
        private __elementRoot;
        getElementRoot(): HTMLElement;
        private __comObj;
        set comObj(comObj: Communication | null);
        get comObj(): Communication | null;
        displayView(): void;
        get view(): {
            name: TopologyView;
            target?: Target | undefined;
            master?: Master | undefined;
        };
        updateConfigDevice(device: string, executeInitOnSuccess: boolean): void;
        updateConfigAllowZoomAndPan(allowZoomAndPan: boolean, executeInitOnSuccess: boolean): void;
        updateConfigToolboxResetView(toolboxResetView: boolean, executeInitOnSuccess: boolean): void;
        updateConfigInitTopology(initTopology: InitTopologyView, executeInitOnSuccess: boolean): void;
        private __configDevicesSubscription;
        private __currentUserSubscription;
        private __targetSubscription;
        private __initialized;
        preInit(executeInitOnSuccess?: boolean): void;
        init(): void;
        private __symbolAccess;
        getSymbolAccess(symbol: string): boolean;
        private __symbolAccessSubscription;
        private __checkSymbolAccess;
        destroy(): void;
        cleanUp(cleanOnlyFromInit?: boolean): void;
        private __updateTarget;
        setViewMaster(master: Master): void;
        updateView(target: Target, master?: Master): void;
        reload(): void;
        resetView(): void;
        private setView;
        private __clearTargets;
        private __addOrUpdateTarget;
        private __templates;
        loadTemplates(): Promise<void>;
        getTemplate(name: string): HTMLElement | null;
        private __contentWrapper;
        get contentWrapper(): HTMLElement;
        addTopMostLayer(element: ElementWithCallback): void;
        addPopUp(popup: PopUp): void;
    }
    interface SlavesScannedIdentity {
        updated: string;
        slaves: SlaveScannedIdentity[];
    }
    interface SlaveScannedIdentity {
        addr: number;
        productCode: number;
        revisionNumber: number;
        serialNumber: number;
        vendorId: number;
        vendorLabelName: string;
        vendorMemberName: string;
    }
    interface PopUpParameter {
        content: HTMLElement | null;
    }
    interface ClientConfigStandalone extends ClientConfigBase {
        tchmiServerHostname: string;
        tchmiServerPort: string;
        tchmiServerSecureConnection: boolean;
        lang: string;
        theme: string;
        logLevel: string;
    }
    interface ClientConfigControl extends ClientConfigBase {
    }
    interface ClientConfigBase {
        device: string;
        allowZoomAndPan: boolean;
        toolboxResetView: boolean;
        initTopologyViewPosX: number;
        initTopologyViewPosY: number;
        initTopologyViewZoom: number | null;
    }
    interface MatrixCoordinates {
        row: MatrixRow;
        col: number;
    }
    interface MatrixRow {
        index: number;
        yOffset: number;
        width: number;
        height: number;
    }
    interface SlaveData {
        EtherCAT: SlaveData_EtherCAT;
        online: SlaveData_online;
        processData?: Slave_ProcessData;
        scannedIdentity: SlaveScannedIdentity | null;
    }
    interface SlaveData_EtherCAT {
        hotConnect: SlaveData_HotConnect;
        identity: SlaveData_Identity;
        syncUnitsAssignment: number[];
    }
    interface SlaveData_Identity {
        addrs: SlaveAddrs;
        name: OnlineEntry<string>;
        type: OnlineEntry<string>;
        vendor: SlaveData_Vendor;
        product: OnlineEntry<number>;
        revision: OnlineEntry<number>;
        serial: OnlineEntry<number>;
    }
    interface SlaveData_Vendor {
        id: OnlineEntry<number>;
        memberNameLong: OnlineEntry<string>;
        memberNameShort: OnlineEntry<string>;
    }
    interface SlaveData_HotConnect {
        isHotConnectHead: boolean;
        isHotConnectSlave: boolean;
        slaveCountActual: number;
        slaveCountConfig: number;
    }
    interface SlaveData_online {
        current: {
            stateMachine: {
                code: OnlineEntry<number | null>;
                name: OnlineEntry<string | null>;
            };
            presence: {
                notPresent: OnlineEntry<boolean | null>;
                notPresentOnPrevSlaves: OnlineEntry<boolean | null>;
            };
            identity: {
                isInvalid: OnlineEntry<boolean | null>;
                isInvalidOnPrevSlaves: OnlineEntry<boolean | null>;
            };
            disabled: OnlineEntry<boolean | null>;
            initError: OnlineEntry<boolean | null>;
            signalsError: OnlineEntry<boolean | null>;
        };
        requested: {
            stateMachine: {
                code: OnlineEntry<number | null>;
                name: OnlineEntry<string | null>;
            };
        };
        counter: {
            crc: {
                sum: OnlineEntry<number | null>;
                highestWarningLevel: OnlineEntry<number | null>;
            };
            abnormalChanges: OnlineEntry<number | null>;
            connectionLosses: OnlineEntry<number | null>;
        };
        syncUnits: Map<number, SyncUnitFaultCount>;
        labels: SlaveLabel[];
        messages: OnlineEntry<string | null>;
    }
    interface SyncUnitFaultCount {
        error: OnlineEntry<boolean>;
        faultCounter: OnlineEntry<number>;
        framesMissedCount: OnlineEntry<number>;
    }
    interface SlaveLabel {
        warningLevel: number;
        text: string;
    }
    interface ProcessDataOnlineEntry<T> {
        forced: boolean | null;
        value: T;
        domElements: Set<HTMLElement>;
        errorElements: Set<HTMLElement>;
    }
    interface OnlineEntry<T> {
        value: T;
        domElements: Set<HTMLElement>;
        errorElements?: Set<HTMLElement>;
    }
    type HTMLElements = Set<HTMLElement>;
    type OnlineEntryAll = OnlineEntry<OnlineEntryValueTypes>;
    type OnlineEntryValueTypes = HTMLElements | boolean | number | string | null;
    const domElementsCache: Map<PossibleCtxNames, Map<OnlineEntry<OnlineEntryValueTypes>, HTMLElements>>;
    type PossibleCtxNames = 'ExtendedInfoOfMaster' | 'ExtendedInfoOfSlave';
    function removeGarbageElements(ctx: PossibleCtxNames): void;
    function addDomElement(ctx: PossibleCtxNames, entry: OnlineEntry<OnlineEntryValueTypes> | undefined, valueEl: HTMLElement | null, errorEl?: HTMLElement): void;
    function setOnlineData(entry: OnlineEntry<OnlineEntryValueTypes> | undefined, value?: OnlineEntryValueTypes): void;
    interface PortData {
        index: number;
        physic: PortPhysic;
        configured: boolean;
        configuredSlave: SR_Slave | null;
        redundancy: boolean;
        redundancyPath: boolean;
        autoIncAddr: number;
        alignment?: InnerAlignment;
    }
    interface InnerAlignment {
        row: number;
        col: number;
        rowspan: number;
        colspan: number;
    }
    interface DrawingLayer {
        canvas: HTMLCanvasElement;
        ctx: CanvasRenderingContext2D;
    }
    interface Limits {
        min: number;
        max: number;
    }
    interface CanvasEventTarget<T> {
        x: number;
        y: number;
        w: number;
        h: number;
        target?: T;
        hoverText?: string;
        primaryPointerFn?: () => void;
        secondaryPointerFn?: () => void;
    }
    interface Dimension {
        width: number;
        height: number;
    }
    interface ComponentDesign {
        dimension: Dimension;
        color: Color;
        labelHeight: number;
        labelColor: string;
        interior: {
            offset: XY;
            dimension: Dimension;
            section: {
                cols: number;
                rows: number;
            };
        };
    }
    interface Color {
        r: number;
        g: number;
        b: number;
    }
    interface XY {
        x: number;
        y: number;
    }
    interface InitTopologyView {
        pos: {
            x: number;
            y: number;
        };
        zoom: number | null;
    }
    interface MatrixCoordinates {
        col: number;
        row: MatrixRow;
    }
    enum PortOrientation {
        'nirvana' = 0,
        'left' = 1,
        'right' = 2,
        'up' = 3,
        'down' = 4
    }
    enum NotificationLevel {
        'info' = 0,
        'success' = 1,
        'warning' = 2,
        'error' = 3
    }
    enum NotificationCategory {
        'task' = 0,
        'ws' = 1
    }
    enum StateMachineStateType {
        'init' = 1,
        'preOp' = 2,
        'boot' = 3,
        'safeOp' = 4,
        'operational' = 8
    }
    enum StateMachineStateName {
        'Init' = 1,
        'PreOp' = 2,
        'Boot' = 3,
        'SafeOp' = 4,
        'Operational' = 8,
        'Invalid' = 9
    }
    const StateMachineStateNameReverse: {
        Init: number;
        PreOp: number;
        Boot: number;
        SafeOp: number;
        Operational: number;
        Invalid: number;
    };
    const SlaveMachineStates_Color: Map<number, string>;
    enum TopologyView {
        'None' = -1,
        'Target' = 0,
        'Master' = 1,
        'Network' = 2,
        'Trace' = 3,
        'Slave' = 4
    }
    enum PortName {
        'A' = 0,
        'D' = 1,
        'B' = 2,
        'C' = 3
    }
    enum SymbolAccess {
        'None' = 0,
        'Read' = 1,
        'Write' = 2,
        'ReadWrite' = 3
    }
}
declare module EcDiagnostics.Commons {
    interface TimestampValue {
        ts: number;
        value: number;
        forced: boolean;
    }
    interface SlaveAddrs {
        autoInc: number;
        phys: number;
    }
    interface SelectedDevice {
        targetNetId: string;
        masterNetId: string;
    }
    interface SR_Config_Devices {
        [key: string]: SR_Config_Device;
    }
    interface SR_Config_Device {
        enabled: boolean;
        targetNetId: string;
        masterNetId: string;
    }
    interface SR_GetTarget {
        available: boolean;
        config: {
            masterNetId: string;
        };
        name: string;
        netId: string;
        sysServiceAdsState: number;
    }
    interface SR_GetMaster {
        netId: string;
        name: string;
    }
    interface SR_GetSlaves {
        slavesCount: number;
        disabledSlaves: SR_Slave[];
        hotConnectGroups: SR_Slave[];
        master: SR_GetSlaves_Master;
    }
    interface SR_GetSlaves_Master {
        configuredSlave: SR_Slave;
        portPhysic: PortPhysic;
    }
    interface SR_Slave {
        EtherCAT: SR_Slave_EtherCAT;
        hotConnect: SR_Slave_HotConnect;
        ports: SR_Slave_Port[];
        processData?: Slave_ProcessData;
    }
    interface SR_Slave_EtherCAT {
        identity: SR_Slave_Identity;
        syncUnitsAssignment: number[];
    }
    interface Slave_ProcessData {
        input: Slave_ProcessDataObject[];
        output: Slave_ProcessDataObject[];
    }
    interface Slave_ProcessDataObject {
        index: string;
        name: string;
        entries: Slave_ProcessDataObjectEntry[];
    }
    interface Slave_ProcessDataObjectEntry {
        bitLength: number;
        index: string;
        subIndex: string;
        name: string;
        type: string;
        value?: ProcessDataOnlineEntry<any>;
        showValueAsHex?: boolean;
        preparedValue?: HTMLInputElement | OptionalBoolInput;
        historyValue?: TimestampValue[];
        historyChartUpdateInterval?: number;
        historyChartShowValuesRange?: boolean;
        historyChartsVisible?: Set<HTMLElement>;
    }
    interface Slave_ProcessDataValueObjectEntry {
        index: string;
        subIndex: string;
        value: any;
        error?: {
            code?: number;
            message?: string;
            reason?: string;
        };
        forced: boolean;
    }
    interface Slave_ProcessDataValueObject {
        entries: Slave_ProcessDataValueObjectEntry[];
        index: string;
    }
    interface SR_GetProcessDataValues {
        input: Slave_ProcessDataValueObject[];
        output: Slave_ProcessDataValueObject[];
    }
    interface SR_Slave_HotConnect {
        isHotConnectSlave: boolean;
        isHotConnectHead: boolean;
        slaveCountActual: number;
        slaveCountConfig: number;
    }
    interface SR_Slave_Identity {
        addrs: SlaveAddrs;
        name: string;
        type: string;
        product: number;
        revision: number;
        serial: number;
        vendor: SR_Slave_Vendor;
    }
    interface SR_Slave_Vendor {
        id: number;
        memberNameLong: string;
        memberNameShort: string;
    }
    interface SR_Slave_Port {
        physAddr: number;
        autoIncAddr: number;
        physic: PortPhysic;
        configured: boolean;
        configuredSlave?: SR_Slave;
    }
    interface SR_GetSlavesOnlineInfo {
        slaves: Record<string, SR_SlaveOnlineInfo>;
    }
    interface SR_SlaveOnlineInfo {
        counter: {
            abnormalChanges: number;
            connectionLosses: number;
        };
        current: {
            disabled: boolean;
            identity: {
                isInvalid: boolean;
                isInvalidOnPrevSlaves: number;
            };
            initError: boolean;
            presence: {
                notPresent: boolean;
                notPresentOnPrevSlaves: number;
            };
            signalsError: boolean;
            stateMachine: number;
        };
        requested: {
            stateMachine: 0;
        };
        ports: SR_PortOnlineInfo[];
        syncUnits: Record<string, SR_SyncUnitOnlineInfo>;
    }
    interface SR_PortOnlineInfo {
        counter: {
            crc: {
                errorOnPrevPort: false;
                total: 0;
            };
        };
        current: {
            linkError: boolean;
            missingLink: boolean;
            unexpectedLink: boolean;
        };
    }
    interface SR_SyncUnitOnlineInfo {
        frameMissedCounter: number;
        wcFaultCounter: number;
        error: boolean;
    }
}
declare module EcDiagnostics.Commons {
    type WSTickCallback = (data: any, first: boolean) => any;
    type WSCallback = (data: any) => any;
    interface SubscriptionCallback {
        tickCallback: WSTickCallback;
        initCallback?: WSCallback;
        initialized?: boolean;
        cmdGroup?: boolean;
        errorEl?: HTMLElement;
    }
    namespace ServerDef {
        export enum ServerErrors {
            HMI_E_SYMBOL_NOT_MAPPED = 513,
            HMI_E_INVALID_DOMAIN = 2050,
            HMI_E_INSUFFICIENT_ACCESS = 4101,
            HMI_EC_DIAGNOSTICS_E_NOT_READY_YET = 2097190
        }
        export enum FrameworkErrors {
            NONE = 0,
            ERROR = 1,
            E_PARAMETER_INVALID = 2,
            E_TIMEOUT = 3,
            E_EXCEPTION = 4,
            E_INVALID = 5,
            E_NOT_UNIQUE = 6,
            E_NOT_SUPPORTED = 100,
            E_SYSTEM_NOT_READY = 105,
            E_NOT_ALLOWED = 110,
            E_UNKNOWN = 115,
            E_UNKNOWN_TYPE = 120,
            E_KEY_NOT_FOUND = 130,
            E_TYPE_INVALID = 150,
            E_VALUE_INVALID = 160,
            E_REGISTRATION_MISSING = 180,
            E_REGISTRATION_ERROR = 190,
            E_MODULE_MISSING = 200,
            E_MODULE_ERROR = 210,
            E_WEBSOCKET_NOT_READY = 1000,
            E_WEBSOCKET_CLOSED = 1001,
            E_WEBSOCKET_NOT_SUPPORTED = 1404,
            E_WEBSOCKET_OPEN_SERVER_LICENSE_CHECK_FAILED = 1500,
            E_WEBSOCKET_OPEN_SERVER_LICENSE_MISSING = 1501,
            E_WEBSOCKET_OPEN_SERVER_NO_ACCESS = 1502,
            E_SYMBOL_STATE_INVALID = 2000,
            E_SYMBOL_VALUE_INVALID = 2001,
            E_SYMBOL_RESOLVE_SCHEMA = 2002,
            E_SYMBOL_READONLY = 2003,
            E_SYMBOL_UNKNOWN = 2010,
            E_SYMBOL_INVALID_DATA_PROVIDER_ENTRY = 2020,
            E_SYMBOL_INVALID_PATH = 2030,
            E_SYMBOL_SUBSYMBOL_ERROR = 2040,
            E_SYMBOL_OBJECT_RESOLVE = 2050,
            E_SYMBOL_UNKNOWN_ATTRIBUTE = 2100,
            E_SERVER_RESPONSE_ERROR = 3000,
            E_SERVER_COMMAND_ERROR = 3005,
            E_SERVER_INVALID_RESPONSE = 3010,
            E_SERVER_COMMANDS_MISSING = 3015,
            E_SERVER_COMMAND_MISSING = 3016,
            E_SERVER_READVALUE_MISSING = 3020,
            E_SERVER_WRITEVALUE_MISSING = 3025,
            E_SERVER_RESPONSE_MISSING = 3030,
            E_SERVER_DOMAIN_UNKNOWN = 3100,
            E_SERVER_HANDSHAKE = 3200,
            E_FUNCTION_MISSING_FUNCTION_REFERENCE = 4000,
            E_FUNCTION_MISSING_FUNCTION_DESCRIPTION = 4005,
            E_FUNCTION_INVALID_CONFIGURATION = 4010,
            E_FUNCTION_EXCEPTION = 4020,
            E_FUNCTION_UNKNOWN = 4030,
            E_FUNCTION_RESTPARAMETER_DEFINITION_MISSING = 4040,
            E_FUNCTION_RESOLVING_PARAMETER_FAILED = 4050,
            /** Value of the FunctionExpression is known synchronous. The caller is responsible for the value! */
            E_FUNCTION_HANDLED_VIA_RETURN_VALUE = 4060,
            E_FUNCTION_EXPRESSION_PARSER_ERROR = 4100,
            E_FUNCTION_EXPRESSION_EXCEPTION = 4120,
            E_FUNCTION_CALL_ABORTED = 4130,
            E_FUNCTION_DESTROYED = 4140,
            E_TRIGGER_ACTION_EXCEPTION = 5050,
            E_TRIGGER_JAVASCRIPT_EVAL_EXCEPTION = 5055,
            E_TRIGGER_FUNCTION_EXPRESSION_EXCEPTION = 5060,
            E_TRIGGER_RESOLVE_CONDITION_EXPRESSION_EXCEPTION = 5065,
            E_TRIGGER_CONDITION_INVALID = 5200,
            E_CONTROL_INSTANCE_NOT_FOUND = 6000,
            E_CONTROL_INVALID_CONFIGURATION = 6001,
            E_CONTROL_ATTRIBUTE_NOT_FOUND = 6005,
            E_CONTROL_ATTRIBUTE_INVALID_CONFIGURATION = 6010,
            E_CONTROL_INSTANCE_NO_LONGER_AVAILABLE = 6020,
            E_SCHEMA_INVALID = 7000,
            E_SCHEMA_INVALID_PATH = 7010,
            E_SCHEMA_INVALID_REF_ID = 7020,
            /** Deprecated. Use E_SCHEMA_UNKNOWN_SOURCE instead. */
            E_SCHEMA_UNKNOWN_FILE = 7030,
            E_SCHEMA_UNKNOWN_SOURCE = 7030,
            E_SCHEMA_UNKNOWN_DEFINITION = 7040,
            E_SCHEMA_NOT_RESOLVED = 7050,
            E_PACKAGE = 8000,
            E_LOCALIZATION_UNKNOWN_KEY = 9000
        }
        interface Error {
            name: string;
            message: string;
            stack?: string;
        }
        /**
         * tchmi:server#/definitions/accessEnum
         *
         * NONE = 0,
         * READ = 1,
         * WRITE = 2,
         * READWRITE = 3
         */
        export enum ACCESS {
            NONE = 0,
            READ = 1,
            WRITE = 2,
            READWRITE = 3
        }
        export interface LogicOperator {
            logic: 'AND' | 'OR';
        }
        export interface Filter extends Array<Comparison | LogicOperator | Filter> {
        }
        export interface Comparison {
            path?: string;
            comparator: '==' | '!=' | '<' | '>' | '<=' | '>=' | 'contains' | 'contains not' | '== [ignore case]' | '!= [ignore case]' | 'contains [ignore case]' | 'contains not [ignore case]';
            value: string | number | Date | boolean | null;
        }
        /**
         * One command for the server.
         * @template W Type of the write value. Use any (or omit) if this interface contains multiple different types.
         * @template R Type of the read value.Use any (or omit) if this interface contains multiple different types.
         */
        export interface Command<W = any, R = W> {
            /** Name of the symbol */
            symbol: string;
            /** Custom string which will be forwared to the response */
            customerData?: string;
            /** Write value */
            writeValue?: W;
            /** Read value */
            readValue?: R;
            /** Error of the command */
            error?: IErrorDetails;
            /** Command options */
            commandOptions?: CommandOptions[];
            /** Filter for arrays and maps. */
            filter?: Filter | string;
            /** Maps the filtered, sorted, and paged values to their original positions */
            filterMap?: number[];
            /** Order by settings. This is processed before limit and offset are used. */
            orderBy?: string;
            /** Should/is the request restricted in amount of array entries? 0 disables the limit. */
            limit?: number;
            /** Array entries should/do not start at the beginning (Zero-based numbering) */
            offset?: number;
            /** The answer has this amount of entries */
            maxEntries?: number;
            /** The time the command processing has started as iso 8601 string. */
            processedStart?: string;
            /** The time the command processing has ended as iso 8601 string. */
            processedEnd?: string;
            /** The amount of sub symbol levels*/
            maxSubSymbolDepth?: number;
        }
        /** Supported types of requests of the server. */
        export type RequestType = 'ReadWrite' | 'Subscription' | 'Event';
        /** Supported commands options of requests of the server. */
        export type CommandOptions = 'Add'
        /** Do not get read value, just check access rights for this command. */
         | 'Check' | 'Config' | 'Delete'
        /** This needs to be set for all commands writing the symbol to work. */
         | 'ForceSingleWrite' | 'Import' | 'Offline' | 'PagingHandled'
        /** Send response with every tick, even if nothing changed. */
         | 'Poll' | 'Replace' | 'SendErrorMessage' | 'SendWriteValue' | 'Transaction'
        /** Validate outgoing values too. */
         | 'ValidateRead'
        /** Subscriptions will not be merged if this is set. */
         | 'UniqueHash'
        /** Request timings (processedStart, processedEnd) will be send as iso-8601 duration instead of iso-8601 timestamp. */
         | 'ProcessTimingAsTimespan' | 'Extension1' | 'Extension2' | 'Extension3' | 'Extension4';
        export interface IErrorDetails {
            /** The error code. */
            code: FrameworkErrors | number;
            /** The enum name of error code and not a plain-text message. Use reason for a plaintext description of the error. */
            message?: string;
            /** Plaintext description of the error. */
            reason?: string;
            /** The name of the server or framework domain where the error occurred. */
            domain?: string;
            /** Optional Error object for exceptions */
            exception?: Error;
            /** A list of errors which lead to the current error. */
            errors?: IErrorDetails[];
        }
        export interface IResultObject<W = any, R = W> {
            error: FrameworkErrors;
            details?: IErrorDetails | undefined;
            /** The response of the server. */
            response?: IMessage<W, R>;
            /** Read values per command */
            results?: IValueResultObject<R>[];
        }
        /**
         * Result object with value of a command.
         */
        export interface IValueResultObject<T = any> extends IResultObject {
            symbol?: string;
            value?: T;
        }
        /**
         * A message to the server.
         * @template W Type of the write value. Use any (or omit) if this interface contains multiple different types.
         * @template R Type of the read value.Use any (or omit) if this interface contains multiple different types.
         */
        export type IMessage<W = any, R = W> = IReadWriteMessage<W, R> | ISubscriptionMessage<W, R> | IEventMessage<W, R>;
        /**
         * Message common interface.
         * @template W Type of the write value. Use any (or omit) if this interface contains multiple different types.
         * @template R Type of the read value.Use any (or omit) if this interface contains multiple different types.
         */
        export interface IMessageBase<W = any, R = W> {
            apiVersion?: string;
            id?: number;
            sessionId?: string;
            /** Id of the server instance (cookies are shared with all servers on the same host) */
            serverId?: string;
            error?: IErrorDetails;
            /** custom string which will be in the answer again */
            customerData?: string;
            commands?: Command<W, R>[];
        }
        /**
         * A message to read or write to the server.
         * @template W Type of the write value. Use any (or omit) if this interface contains multiple different types.
         * @template R Type of the read value.Use any (or omit) if this interface contains multiple different types.
         */
        export interface IReadWriteMessage<W = any, R = W> extends IMessageBase<W, R> {
            requestType: 'ReadWrite';
        }
        /**
         * A message to request a subscription in the server.
         * @template W Type of the write value. Use any (or omit) if this interface contains multiple different types.
         * @template R Type of the read value.Use any (or omit) if this interface contains multiple different types.
         */
        export interface ISubscriptionMessage<W = any, R = W> extends IMessageBase<W, R> {
            requestType: 'Subscription';
            /** Minimal time the subscription ticks will be fired on symbol changes. If not set the default of the project will be used */
            intervalTime?: number | null;
        }
        /**
         * A message to request an event in the server.
         * @template W Type of the write value. Use any (or omit) if this interface contains multiple different types.
         * @template R Type of the read value.Use any (or omit) if this interface contains multiple different types.
         */
        export interface IEventMessage<W = any, R = W> extends IMessageBase<W, R> {
            requestType: 'Event';
        }
        export {};
    }
    abstract class Communication {
        constructor(ecDiagnostics: EcDiagnostics);
        protected __ecDiagnostics: EcDiagnostics;
        abstract subscribe(commands: ServerDef.Command | ServerDef.Command[], interval: number, tickCallback: WSTickCallback, initCallback?: WSCallback): number | null;
        abstract unsubscribe(subscriptionId: number | null | undefined, callback?: WSCallback): number | null;
        abstract unsubscribeAll(): void;
        abstract writeSymbol(symbol: string, writeValue: any, callback?: WSCallback, cbErrorEl?: HTMLElement): void;
        private __evaluateCommandError;
        protected processReadValues<T = any>(subscriptionCallback: SubscriptionCallback, response: ServerDef.IMessage<T>): void;
    }
}
declare module EcDiagnostics.Commons {
    interface LocalizedTextsFile {
        $schema: string;
        locale: string;
        localizedText: LocalizedTexts;
    }
    interface LocalizedTexts {
        [key: string]: string;
    }
    type LocalizedTextPlaceholder = string | number | HTMLElement;
    interface ElementData {
        contentKey: string;
        placeholders?: LocalizedTextPlaceholder[];
    }
    abstract class Localization {
        constructor(lang?: string);
        protected __lang: string;
        protected __localizedTexts: LocalizedTexts | null;
        protected __elements: Map<HTMLElement, ElementData>;
        abstract getLocalizedText(contentKey: string): string;
        destroy(): void;
        cleanUp(): void;
        createLocalizedElement(content: string, elType?: keyof HTMLElementTagNameMap): HTMLCanvasElement | HTMLElement | HTMLDivElement | HTMLButtonElement | HTMLSpanElement | HTMLFormElement | HTMLLabelElement | HTMLSlotElement | HTMLObjectElement | HTMLAnchorElement | HTMLAreaElement | HTMLAudioElement | HTMLBaseElement | HTMLQuoteElement | HTMLBodyElement | HTMLBRElement | HTMLTableCaptionElement | HTMLTableColElement | HTMLDataElement | HTMLDataListElement | HTMLModElement | HTMLDetailsElement | HTMLDialogElement | HTMLDListElement | HTMLEmbedElement | HTMLFieldSetElement | HTMLHeadingElement | HTMLHeadElement | HTMLHRElement | HTMLHtmlElement | HTMLIFrameElement | HTMLImageElement | HTMLInputElement | HTMLLegendElement | HTMLLIElement | HTMLLinkElement | HTMLMapElement | HTMLMenuElement | HTMLMetaElement | HTMLMeterElement | HTMLOListElement | HTMLOptGroupElement | HTMLOptionElement | HTMLOutputElement | HTMLParagraphElement | HTMLPictureElement | HTMLPreElement | HTMLProgressElement | HTMLScriptElement | HTMLSelectElement | HTMLSourceElement | HTMLStyleElement | HTMLTableElement | HTMLTableSectionElement | HTMLTableCellElement | HTMLTemplateElement | HTMLTextAreaElement | HTMLTimeElement | HTMLTitleElement | HTMLTableRowElement | HTMLTrackElement | HTMLUListElement | HTMLVideoElement;
        addElement(el: HTMLElement, contentKey: string, placeholders?: LocalizedTextPlaceholder[]): void;
        private __insertLocalizedText;
        updateAllElements(): void;
        addAllLocalizedElements(parent: HTMLElement): void;
    }
}
declare module EcDiagnostics.Commons {
    class Target {
        constructor(main: EcDiagnostics, netId: string, name: string, available: boolean, sysServiceAdsState: number);
        private __init;
        getNetIdAndName(): {
            netId: string;
            name: string;
        };
        update(name: string, available: boolean, sysServiceAdsState: number, selectedDeviceChanged: boolean): void;
        updateView(master?: Master): void;
        displayView(): void;
        private __getMaster;
        private __clearMasters;
        private __subscriptions;
        private __subscriptionInitialized;
        private __available;
        private __sysServiceAdsState;
        get sysServiceAdsState(): number;
        private get comObj();
        private __main;
        get main(): EcDiagnostics;
        private __netId;
        get netId(): string;
        private __name;
        get name(): string;
        private __masters;
        countMasters(): number;
        private __addMaster;
        private __deleteAllMasters;
        private __updateMaster;
        private __updateView;
        setView(view: TopologyView, masterNetId?: string | null): void;
        destroy(): void;
    }
}
declare module EcDiagnostics.Commons {
    abstract class Component {
        protected __index: number;
        constructor(index: number);
        abstract get master(): Master;
        get main(): EcDiagnostics;
        protected abstract __ports: Port[];
        protected abstract __trace: Trace | null;
        protected abstract __pos: any;
        get index(): number;
        abstract set startCoordinates(coordinates: MatrixCoordinates);
        private __redundancyPort;
        get redundancyPort(): Port | null;
        set redundancyPort(port: Port | null);
        private __outgoingEBusPort;
        get outgoingEBusPort(): Port | null;
        set outgoingEBusPort(port: Port | null);
        private __outgoingConfiguredEBusPort;
        get outgoingConfiguredEBusPort(): Port | null;
        set outgoingConfiguredEBusPort(port: Port | null);
        private __cableLinkPorts;
        get cableLinkPorts(): Port[];
        addCableLinkPort(port: Port): number;
        private __outgoingConfiguredCableLinkPorts;
        get outgoingConfiguredCableLinkPorts(): Port[];
        addOutgoingConfiguredCableLinkPort(port: Port): number;
        protected __hasOutgoingConfiguredEBusPort: boolean;
        get hasOutgoingConfiguredEBusPort(): boolean;
        protected __hasIncomingCableLinkPort: boolean;
        get hasIncomingCableLinkPort(): boolean;
        protected __numOfOutgoingConfiguredCableLinkPorts: number;
        get numOfOutgoingConfiguredCableLinkPorts(): number;
        protected __numOfCableLinkPorts: number;
        get numOfCableLinkPorts(): number;
        protected __numOfConfiguredPorts: number;
        get numOfConfiguredPorts(): number;
        protected abstract __design: ComponentDesign;
        get design(): ComponentDesign;
        abstract follow(xOffset?: number): void;
        reset(): void;
    }
}
declare module EcDiagnostics.Commons {
    interface MatrixDesign {
        margin: number;
        marginRows: {
            top: number;
            bottom: number;
        };
    }
    enum TopologyType {
        'master' = 0,
        'hotConnect' = 1,
        'disabled' = 2
    }
    class Topology {
        constructor(network: Network, firstData: Master | SR_Slave, type: TopologyType);
        private __firstComponent?;
        private __network;
        get network(): Network;
        get master(): Master;
        private __topologyType;
        private __matrixDesign;
        private __matrixComponentOrder;
        get componentOrder(): Components[];
        private __matrixRows;
        get matrixRows(): MatrixRow[];
        addRow(index: number, startDimension: Dimension): MatrixRow;
        private __matrixDimension;
        get matrixDimension(): Dimension;
        private __chronologicalPortList;
        get chronologicalPortList(): Port[];
        addPortToChronologicalPortList(port: Port): void;
        private __traces;
        get traces(): Traces;
        addTrace(): Trace;
        calcNetwork(): void;
        calcMatrix(): void;
        groupAllTerminalGroups(): void;
        ungroupAllTerminalGroups(): void;
        hasGroupedSlaves(): boolean;
    }
    type Traces = Trace[];
    type Components = Master | Slave | SlaveGroup;
}
declare module EcDiagnostics.Commons {
    class Network {
        constructor(master: Master);
        private __media?;
        private __updatePixelRatio;
        destroy(): void;
        private __resizeObserver;
        private __master;
        get master(): Master;
        get target(): Target;
        get main(): EcDiagnostics;
        reload(): void;
        resetView(): void;
        update(slavesData: SR_GetSlaves): void;
        get masterTopology(): Topology | null;
        private __hotConnectTopologies;
        getHotConnectTopologies(): Topology[];
        private __disabledSlaveTopologies;
        getDisabledSlaves(): Topology[];
        __addMasterTopology(): void;
        __addMasterSlaveTopology(slavesOfMaster: SR_GetSlaves_Master): void;
        __addHotConnectTopology(slave: SR_Slave): void;
        __addDisabledSlave(slave: SR_Slave): void;
        toggleExpansion(): void;
        private __isExpand;
        get isExpand(): boolean;
        setToNotExpand(): void;
        recalcNetwork(focusedComponent?: Master | Slave | SlaveTerminalGroup): void;
        private __resizeEvent;
        private __networkView;
        private __combinedMatrix;
        drawMatrix(): void;
        private __drawMatrix;
    }
}
declare module EcDiagnostics.Commons {
    class Master extends Component {
        constructor(target: Target, netId: string, name: string);
        reload(): void;
        resetView(): void;
        getNetIdAndName(): {
            netId: string;
            name: string;
        };
        getTargetAndMasterNetIdAndName(): {
            target: {
                netId: string;
                name: string;
            };
            master: {
                netId: string;
                name: string;
            };
        };
        set startCoordinates(coordinates: MatrixCoordinates);
        get coordinates(): MatrixCoordinates;
        set networkPos(value: XY);
        get networkPos(): XY;
        follow(): void;
        protected __pos: {
            coordinates: MatrixCoordinates;
            network: XY;
        };
        get pos(): {
            coordinates: MatrixCoordinates;
            network: XY;
        };
        private __topology;
        get topology(): Topology | null;
        set topology(value: Topology | null);
        private __network;
        get network(): Network;
        protected __trace: null;
        get trace(): null;
        private __subscriptions;
        get main(): EcDiagnostics;
        displayView(): void;
        hideView(): void;
        init_networkView(): void;
        private __deleteOldSubscriptions;
        private __syncUnits;
        get syncUnits(): SyncUnits;
        private __clearSyncUnits;
        addSlaveToSyncUnit(slave: Slave): void;
        private __selectedSyncUnit;
        set selectedSyncUnit(syncUnitId: number | null);
        get selectedSyncUnit(): number | null;
        private __target;
        get target(): Target;
        get netId(): string;
        private __name;
        get name(): string;
        get master(): this;
        private __data;
        get data(): MasterData;
        private __masterWriteValue;
        private __slaves;
        private __numOfSlaves;
        getSlave(addr: number): Slave | undefined;
        addSlave(slave: Slave): void;
        get slaves(): Map<number, Slave>;
        private __slavesSorted;
        addSortedSlave(slave: Slave): void;
        clearSlaves(): void;
        get numOfSlaves(): number;
        private __slavesScanned;
        get slavesScanned(): SlavesScannedIdentity | null;
        private __slavesScanInProgress;
        get isSlavesScanInProgress(): boolean;
        set slavesScanInProgress(value: boolean);
        private __extendedInfoOfMaster;
        private __extendedInfoOfSlave;
        private __extendedInfoTabName;
        setExtendedInfoTabName(component: string, tabName: string): void;
        getExtendedInfoTabName(component: 'Master' | 'Slave'): string | null;
        getExtendedInfoOfMaster(): ExtendedInfoOfMaster | null;
        getExtendedInfoOfSlave(): ExtendedInfoOfSlave | null;
        setExtendedInfoOfMaster(extendedInfo: ExtendedInfoOfMaster): void;
        setExtendedInfoOfSlave(extendedInfo: ExtendedInfoOfSlave): void;
        removeExtendedInfoOfMaster(extendedInfo: ExtendedInfoOfMaster): void;
        removeExtendedInfoOfSlave(extendedInfo: ExtendedInfoOfSlave): void;
        private __netId;
        protected __ports: PortMaster[];
        get ports(): PortMaster[];
        setPort(index: number, port: PortMaster): void;
        checkPresence(): void;
        get isPresent(): boolean;
        checkPortState(): void;
        checkIdentity(): void;
        private __state;
        set state(state: number);
        protected __design: ComponentDesign;
        private __calculateDesign;
        private __subscriptionReadValues;
        private __subscriptionOldReadValues;
        destroy(): void;
        hide(): void;
        __updateSlaves(data?: SR_GetSlaves | null): void;
        updateMasterOnlineInfo(data?: MasterOnlineInfo | null): void;
        updateSlavesScanned(data: false | SlavesScannedIdentity): void;
        private __hasForcedProcessData;
        set hasForcedProcessData(value: boolean);
        get hasForcedProcessData(): boolean;
        forcedProcessDataCbs: Set<(data: number[]) => void>;
        updateSlavesWithForcedProcessData(physAddrOfSlavesWithForcedProcessData: number[]): void;
        updateSlavesOnlineInfo(data?: SR_GetSlavesOnlineInfo | null): void;
        findScannedSlaveByIdentity(vendor: number, product: number, revision: number, onlyIdentityInvalid?: boolean): Slave | null;
        findSlaveByIdentity(vendor: number, product: number, revision: number, onlyIdentityInvalidOrNotPresent?: boolean): Slave | null;
        findFirstNotPresentSlave(): Slave | null;
        processOnlineChanges(changes: MasterOnlineChanges): void;
    }
    interface MasterData {
        online: {
            stateMachine: {
                code: OnlineEntry<number | null>;
                name: OnlineEntry<string | null>;
            };
            stateMachineRequested: {
                code: OnlineEntry<number | null>;
                name: OnlineEntry<string | null>;
            };
            frames: {
                total: {
                    cyclic: OnlineEntry<number | null>;
                    acyclic: OnlineEntry<number | null>;
                };
                missed: {
                    cyclic: OnlineEntry<number | null>;
                    acyclic: OnlineEntry<number | null>;
                };
                perSec: {
                    cyclic: OnlineEntry<number | null>;
                    acyclic: OnlineEntry<number | null>;
                };
                damaged: {
                    sent: OnlineEntry<number | null>;
                    received: OnlineEntry<number | null>;
                };
            };
        };
    }
    interface MasterOnlineInfo {
        frames: {
            total: {
                cyclic: number;
                acyclic: number;
            };
            missed: {
                cyclic: number;
                acyclic: number;
            };
            perSec: {
                cyclic: number;
                acyclic: number;
            };
            damaged: {
                sent: number;
                received: number;
            };
        };
        stateMachine: number;
        stateMachineRequested: number;
    }
    interface MasterOnlineChanges {
        frames?: {
            total?: {
                cyclic?: number;
                acyclic?: number;
            };
            missed?: {
                cyclic?: number;
                acyclic?: number;
            };
            perSec?: {
                cyclic?: number;
                acyclic?: number;
            };
            damaged?: {
                sent?: number;
                received?: number;
            };
        };
        stateMachine?: number;
        stateMachineRequested?: number;
    }
}
declare module EcDiagnostics.Commons {
    class Trace {
        constructor(topology: Topology);
        private __slaves;
        private __pos;
        get pos(): MatrixCoordinates | null;
        set pos(value: MatrixCoordinates | null);
        addWidth(value: number): void;
        set height(value: number);
        private __dimension;
        get dimension(): Dimension;
        get slaves(): Slave[];
        addSlave(slave: Slave): number;
        private __topology;
        get topology(): Topology;
        get network(): Network;
        get master(): Master;
        private __slaveTerminalGroups;
        addSlaveTerminalGroup(group: SlaveTerminalGroup): void;
        hasSlaveTerminalGroups(): boolean;
        hasGroupedSlaves(): boolean | null;
        ungroupSlaveTerminalGroups(): void;
        groupSlaveTerminalGroups(): void;
        toggleSlaveTerminalGroups(): void;
    }
}
declare module EcDiagnostics.Commons {
    class Slave extends Component {
        constructor(srSlaveData: SR_Slave, trace: Trace, connection: PortConnection | null, slaveTerminalGroup: SlaveTerminalGroup | null, parentSubSlaves: Slave[]);
        /**
         * Shorten a string but try to keep important information
         * @param type
         */
        static getShortSlaveType(type: string): string;
        protected __trace: Trace;
        get trace(): Trace;
        get topology(): Topology;
        get network(): Network;
        get master(): Master;
        get main(): EcDiagnostics;
        private __subSlaves;
        get subSlaves(): Slave[];
        get numOfSubSlaves(): number;
        private __slaveTerminalGroup;
        get slaveTerminalGroup(): SlaveTerminalGroup | null;
        private __expansion;
        get expansion(): boolean;
        set expansion(value: boolean);
        toggleExpansion(): void;
        private __specialTerminals;
        private __initPorts;
        protected __pos: {
            slave: XY | null;
            traceXOffset: number;
            trace: XY | null;
            networkTraceXOffset: number;
            network: XY;
        };
        set networkPos(value: XY);
        get networkPos(): XY;
        get pos(): {
            slave: XY | null;
            traceXOffset: number;
            trace: XY | null;
            networkTraceXOffset: number;
            network: XY;
        };
        get coordinates(): {
            col: number;
            row: MatrixRow;
        } | null;
        get syncUnitIds(): number[];
        private __data;
        get data(): SlaveData;
        get name(): string;
        get addr(): number;
        get autoIncAddr(): number;
        private __processDataSubscription;
        readProcessDataValues(updateForcedState?: boolean): void;
        hasProcessDataObjects(): boolean | undefined;
        __processDataValuesSubscriptionCounter: number;
        subscribeToProcessDataValues(): void;
        unsubscribeProcessValueSubscription(): void;
        private __removeProcessDataValues;
        private __hasForcedProcessData;
        set hasForcedProcessData(value: boolean);
        get hasForcedProcessData(): boolean;
        couplerGroupHasForcedProcessData(): boolean;
        setProcessDataValues(values: {
            io: string;
            objectIndex: string;
            entryIndex: string;
            entrySubIndex: string;
            entryValue: any;
        }[], cbErrorEl?: HTMLElement): void;
        forceProcessDataValues(values: {
            io: string;
            objectIndex: string;
            entryIndex: string;
            entrySubIndex: string;
            entryValue: any;
        }[], cbErrorEl?: HTMLElement): void;
        releaseProcessDataValues(values: {
            io: keyof Slave_ProcessData;
            objectIndex: string;
            entryIndex: string;
            entrySubIndex: string;
        }[], cbErrorEl?: HTMLElement): void;
        getProcessDataObjects(io: string): Slave_ProcessDataObject[] | undefined;
        getProcessDataObject(objects: Slave_ProcessDataObject[], index: string): Slave_ProcessDataObject | null;
        getProcessDataObjectEntry(object: Slave_ProcessDataObject, index: string, subIndex: string): Slave_ProcessDataObjectEntry | null;
        private __processProcessDataValues;
        private __processDataValues;
        getProcessDataValues(pdoType: string, objectIndex: string, entryIndex: string, entrySubIndex: string): any;
        setProcessDataValue(entry: Slave_ProcessDataObjectEntry, value: any, forced: boolean): boolean;
        updateProcessDataValuesOnlineElements(entry: Slave_ProcessDataObjectEntry): boolean;
        addProcessDataValueElement(entry: OnlineEntry<any>, el: HTMLElement): void;
        private __errorMessages;
        get onlineData(): SlaveData_online;
        get processData(): Slave_ProcessData | undefined;
        getStateMachineState(hexString: string): string;
        processScannedIdentity(scannedIdentity: SlaveScannedIdentity | null): void;
        processOnlineChanges(changes: SlaveOnlineChanges | null): void;
        private setScannedIdentityCheck;
        private __addErrorElement;
        private __clearErrorMessages;
        get isPresent(): boolean;
        get isNotPresent(): boolean | null;
        get isDisabled(): boolean | null;
        get hasNotPresentSlavesBefore(): boolean | null;
        get hasInvalidIdentity(): boolean | null;
        get hasInvalidIdentityBefore(): boolean | null;
        get crcSum(): number | null;
        get crcHighestWarningLevel(): number | null;
        protected __design: ComponentDesign;
        private __calculateDesign;
        protected __ports: PortSlave[];
        get ports(): PortSlave[];
        private __electricalCurrent;
        private __dependentSlaves;
        get dependentSlaves(): Slave[] | null;
        set dependentSlaves(slaves: Slave[] | null);
        private __remainingCurrent;
        set remainingCurrent(remainingCurrent: number | null);
        get remainingCurrent(): number | null;
        get electricalCurrent(): number | null;
        set electricalCurrent(electricalCurrent: number | null);
        get identity(): SlaveData_Identity;
        getPortByIndex(index: PortName): PortSlave;
        getPortPhysByIndex(index: PortName): number;
        get staticInfo(): SlaveData_EtherCAT;
        private __visibility;
        get visibility(): boolean;
        set visibility(value: boolean);
        set startCoordinates(coordinates: MatrixCoordinates);
        follow(xOffset: number): void;
        followPorts(xOffset: number): void;
    }
    interface SlaveOnlineChanges {
        current?: {
            stateMachine?: number;
            presence?: {
                notPresent?: boolean;
                notPresentOnPrevSlaves?: number;
            };
            identity?: {
                isInvalid?: boolean;
                isInvalidOnPrevSlaves?: number;
            };
            disabled?: boolean;
            initError?: boolean;
            signalsError?: boolean;
        };
        requested?: {
            stateMachine?: number;
        };
        counter?: {
            abnormalChanges: number;
            connectionLosses: number;
        };
        ports?: PortOnlineChanges[];
        syncUnits?: Record<string, SyncUnitOnlineChanges>;
    }
    interface PortOnlineChanges {
        current?: {
            unexpectedLink?: boolean;
            missingLink?: boolean;
            linkError?: boolean;
        };
        counter?: {
            crc?: {
                total?: number;
                errorOnPrevPort?: boolean;
            };
        };
    }
    interface SyncUnitOnlineChanges {
        frameMissedCounter?: number;
        wcFaultCounter?: number;
        error?: boolean;
    }
}
declare module EcDiagnostics.Commons {
    export class Port {
        constructor(component: Master | Slave, index: 0 | 1 | 2 | 3, data: PortData, connection: PortConnection | null, slaveTerminalGroup: SlaveTerminalGroup | null, subSlaves: Slave[]);
        private __connection;
        get connection(): PortConnection | null;
        private __state;
        get state(): PortStates;
        set state(value: PortStates);
        private __isCableLink;
        get isCableLink(): boolean;
        private __isEBus;
        get isEBus(): boolean;
        private __exists;
        get exists(): boolean;
        private __hotConnectGroupStart;
        get hotConnectGroupStart(): boolean;
        private __orientation;
        get orientation(): PortOrientation;
        private __defineIncoming;
        private __defineOutgoing;
        private __evaluateAlignment;
        private __initNext;
        private __pos;
        get pos(): {
            rel: XY;
            slave: XY | null;
            trace: XY | null;
            network: XY;
        };
        private __configuredSlaveData;
        private __configuredComponent;
        get configuredComponent(): Slave | Master | null;
        private __nextSlave;
        get nextSlave(): Slave | null;
        private __nextTrace;
        get nextTrace(): Trace | null;
        get offsetNextSlave(): {
            x: number;
            y: number;
        };
        private __alignment;
        private __component;
        get component(): Slave | Master;
        private __master;
        private __index;
        get index(): 0 | 1 | 2 | 3;
        private __configured;
        get configured(): boolean;
        private __physic;
        get physic(): number;
        get typeName(): string;
        private __redundancy;
        get redundancy(): boolean;
        private __redundancyPath;
        get redundancyPath(): boolean;
    }
    export class PortMaster extends Port {
        constructor(master: Master, index: 0 | 1, physic: PortPhysic, connection: PortConnection | null, configuredSlaveData?: SR_Slave | null);
    }
    export class PortSlave extends Port {
        constructor(slave: Slave, index: 0 | 1 | 2 | 3, portData: PortData, connection: PortConnection | null, slaveTerminalGroup: SlaveTerminalGroup | null, subSlaves: Slave[]);
        private __online;
        get online(): SlavePortOnline;
        addMessage(localization: Localization, contentKeys: string[], errorLevel: NotificationLevel): void;
        clearMessages(): void;
        updateMessages(): void;
    }
    interface SlavePortOnline {
        current: {
            unexpectedLink: OnlineEntry<boolean | null>;
            missingLink: OnlineEntry<boolean | null>;
            linkError: OnlineEntry<boolean | null>;
        };
        counter: {
            crc: {
                total: OnlineEntry<number | null>;
                errorOnPrevPort: OnlineEntry<boolean | null>;
            };
        };
        messages: OnlineEntry<Set<HTMLElement>>;
    }
    export interface PortConnection {
        inPort: Port | null;
        outPort: Port;
        state: PortStates;
    }
    export enum PortStates {
        'notInitialized' = -1,
        'noError' = 0,
        'notPresent' = 1,
        'error' = 2
    }
    /** ports physic.. */
    export enum PortPhysic {
        'NONE' = 0,
        'MII' = 1,
        'EBUS' = 3,
        'FastHotConnect' = 4
    }
    export enum PortNames {
        'A' = 0,
        'D' = 1,
        'B' = 2,
        'C' = 3
    }
    export {};
}
declare module EcDiagnostics.Commons {
    class SlaveGroup extends Component {
        constructor(firstSlave: Slave);
        private __grouped;
        get grouped(): boolean;
        group(): void;
        ungroup(): void;
        protected __subSlaves: Slave[];
        get subSlaves(): Slave[];
        get numOfSubSlaves(): number;
        addSubSlave(slave: Slave): void;
        get firstSubSlave(): Slave;
        protected __trace: Trace;
        get trace(): Trace;
        get topology(): Topology;
        get network(): Network;
        get master(): Master;
        get main(): EcDiagnostics;
        get name(): string;
        protected __pos: {
            networkTraceXOffset: number;
            network: XY;
        };
        set networkPos(value: XY);
        get networkPos(): XY;
        get lastSubSlave(): Slave;
        get pos(): {
            networkTraceXOffset: number;
            network: XY;
        };
        get coordinates(): {
            col: number;
            row: MatrixRow;
        } | null;
        get hasForcedProcessData(): boolean;
        protected __ports: Port[];
        set startCoordinates(coordinates: MatrixCoordinates);
        protected __design: ComponentDesign;
        follow(xOffset: number): void;
    }
    class SlaveTerminalGroup extends SlaveGroup {
        constructor(firstSlave: Slave);
        group(): void;
        isSlaveGroup(): boolean;
    }
}
declare module EcDiagnostics.Commons {
    class SyncUnits {
        constructor();
        private __syncUnits;
        add(id: number, syncUnit: SyncUnit): void;
        getAll(): Map<number, SyncUnit>;
        get(id: number): SyncUnit | undefined;
        getOrCreate(id: number): SyncUnit;
        remove(id: number): void;
        clear(): void;
        addSlave(id: number, slave: Slave): void;
    }
    interface SyncUnit {
        slaves: Slave[];
        error?: boolean;
        faultCounter?: number;
    }
}
declare module EcDiagnostics.Commons {
    class Layers extends HTMLElement {
        constructor();
        connectedCallback(): void;
        private __translation;
        get translation(): XY;
        private __zoomLevel;
        private __shift;
        private __layers;
        private __addLayer;
        getCanvas(name: LayerName): HTMLCanvasElement;
        getContext(name: LayerName): CanvasRenderingContext2D;
        resizeEvent(): void;
        translateAll(x: number, y: number): void;
        setFocusedZoomAndShift(zoomLevel: number, shift: XY): void;
        setFocusedShift(shift: XY): void;
        setFocusedZoom(zoomLevel: number): void;
        setBackgroundZoom(zoomLevel: number): void;
        showAllLayer(): void;
        hideAllLayers(): void;
        setTransparency(transparency?: number): void;
        saveContext(): void;
        restoreContext(): void;
        erase(name?: LayerName): void;
        private __eraseContext;
        destroy(): void;
    }
    interface RequiredLayer {
        name: string;
    }
    enum LayerName {
        frame = 0,
        processData = 1,
        text = 2,
        syncUnit = 3,
        error = 4,
        hover = 5
    }
}
declare module EcDiagnostics.Commons {
    function getGlobalOffset(el: HTMLElement): {
        left: number;
        top: number;
    };
    function getGlobalScroll(el: HTMLElement | null): XY;
    abstract class Drawing extends HTMLElement {
        protected constructor(master: Master, view: TopologyView, dimension?: Dimension);
        protected __tooltip: CanvasTooltip;
        protected __translation: XY[];
        protected __master: Master;
        protected __focusedLayers: Layers;
        get focusedLayers(): Layers;
        protected __view: TopologyView;
        protected __layerWrapper: HTMLElement;
        protected __pointerPos: {
            down: XY | null;
            move: XY | null;
            hover: XY | null;
        };
        protected __lastTouchDistance: number;
        protected __eventTargets: CanvasEventTarget<Master | Slave | SlaveGroup>[];
        protected __canvasMargin: XY;
        protected __dimension: {
            initial: Dimension;
            zoomed: Dimension;
        };
        setInitialDimension(value: Dimension): void;
        private __calcZoomedDimension;
        initDrawing(): void;
        update(): void;
        protected __applyZoomedDimension(): void;
        protected __shift: XY;
        protected __zoomLevel: number;
        protected __zoomLevelLimits: Limits;
        protected __drawingInfo: HTMLDivElement;
        protected __absoluteMinZoomLevel: number;
        addZoomLevel(zoomModification?: number, checkLimits?: boolean): number;
        setZoomLevel(zoomLevel: number | null, checkLimits?: boolean): void;
        protected __showUpdatedViewInfo(): void;
        destroy(): void;
        protected __findTargetByPosition(pos: XY): CanvasEventTarget<Slave | Master | SlaveGroup> | null;
        protected __handleClick(e: PointerEvent): void;
        protected __handleContextMenu(e: PointerEvent): void;
        protected __preventEvents(e: PointerEvent | WheelEvent): void;
        drawMaster(master: Master, layers: Layers): void;
        drawSlave(slave: Slave, layers: Layers, drawingDimension?: Dimension | undefined): void;
        drawFrame(dimension: Dimension, layers: Layers, componentIsActive: boolean, color?: Color): void;
        drawLabel(labelPos: XY, design: ComponentDesign, manufacturer: string, type: string, warningLevel: number | undefined, layers: Layers, componentIsActive: boolean): void;
        drawErrorLabels(slave: Slave, layers: Layers): void;
        drawErrorLabel(label: SlaveLabel, labelPos: XY, labelWidth: number, layers: Layers): void;
        drawPort(pos: XY, hotConnect: boolean | undefined, state: number | undefined, layers: Layers): void;
        protected __drawCurrentState(component: Master | Slave | SlaveGroup | null, layers: Layers, state?: number): void;
        __drawForcedState(component: Master | Slave | SlaveGroup, layers: Layers, couplerGroup?: boolean): void;
        drawStatusFlag(component: Master | Slave, layers: Layers): void;
        clearCanvas(): void;
        protected __originPosition: XY;
        protected __translatePositionStack: XY[];
        protected __translateOrigin(layers: Layers, pos: XY): void;
        protected __revertOriginTranslation(layers: Layers): void;
        protected __addEventTarget(value: {
            relativePos?: XY;
            dimension: Dimension;
            target?: Master | Slave | SlaveGroup;
            hoverText?: string;
            primaryPointerFn?: () => void;
            secondaryPointerFn?: () => void;
        }): void;
        protected __multilineText(ctx: CanvasRenderingContext2D, pos: XY, text: string, desiredFontSize: number, maxDimension: Dimension): void;
    }
    interface Offset {
        left: number;
        top: number;
    }
}
declare module EcDiagnostics.Commons {
    enum WheelDeltaMode {
        DOM_DELTA_PIXEL = 0,
        DOM_DELTA_LINE = 1,
        DOM_DELTA_PAGE = 2
    }
    abstract class DrawingInteraction extends Drawing {
        protected constructor(master: Master, view: TopologyView, dimension?: Dimension, redrawFn?: () => void);
        protected __redrawFn?: () => void;
        protected __focused: boolean;
        protected __userInteracted: boolean;
        protected __zoomAndPan: boolean;
        destroy(): void;
        protected __activePointers: Map<number, PointerEvent>;
        reload(): void;
        resetView(initTopologyViewPosX: number, initTopologyViewPosY: number, initTopologyViewZoom: number | null): void;
        resizeEvent(callback: () => any): void;
        /**
         * click will executed on pointerup event in case the pointer did not move to far from pointerdown position
         *  this prevents the execution of a click event after a user intend to pan
         */
        protected __obeyClick: boolean;
        protected __handlePointerOver: (e: PointerEvent) => void;
        protected __handlePointerDown: (e: PointerEvent) => void;
        updateHover(e?: PointerEvent): void;
        protected __handlePointerMove: (e: PointerEvent) => void;
        protected __handlePointerUp: (e: PointerEvent) => void;
        protected __handlePointerUpMove: (e: PointerEvent) => void;
        protected __handleHover(e: PointerEvent | null): any;
        private __handlePan;
        protected __handleWheel: (mouseWheelEvent: WheelEvent) => void;
        shiftCanvasRelByZoomLevel(modification: XY): void;
        shiftCanvasRel(modification: XY): void;
        protected __shiftCanvas(newShift: XY): void;
        addZoomAndPan(): void;
        preDrawingEvent(): void;
        protected __calcZoomPositionCorrection(zoomPos: XY, relativeZoomLevel: number): {
            x: number;
            y: number;
        };
        protected __applyZoom(position: XY, modification: number): void;
        calcZoomLevelLimits(): void;
    }
}
declare module EcDiagnostics.Commons {
    function createElementAndAddText(elementType: string, content: string): HTMLElement;
    class DrawingNetwork extends DrawingInteraction {
        constructor(network: Network, redrawFn: () => void);
        disconnectedCallback(): void;
        private __network;
        get network(): Network;
        initDrawing(): void;
        resetView(): void;
        drawCableLinkConnectionOrientation(outputPort: Port, layers: Layers): void;
        drawCableLinkConnectionRedundancyOrientation(inputPort: Port, layers: Layers): void;
        private __getConnectionOrientationGradient;
        drawCableLinkConnection(inputPort: Port, layers: Layers): void;
        drawCableLinkConnectionRedundancy(inputPort: Port, layers: Layers): void;
        drawComponent(component: Master | Slave | SlaveGroup, layers: Layers): void;
        drawSlave(slave: Slave, layers: Layers): void;
        private __drawTraceFlag;
        drawSlaveCouplerGroup(coupler: Slave, layers: Layers): void;
        drawSlaveTerminalGroup(slaveTerminalGroup: SlaveTerminalGroup, layers: Layers): void;
        drawMaster(master: Master, layers: Layers): void;
        __addMasterEventTarget(master: Master, layers: Layers): void;
        drawMasterPort(master: Master, layers: Layers): void;
        drawMasterRedundancyPort(master: Master, layers: Layers): void;
        drawMasterFlag(master: Master, layers: Layers): void;
    }
}
declare module EcDiagnostics.Commons {
    class DrawingTrace extends DrawingInteraction {
        constructor(trace: Trace);
        disconnectedCallback(): void;
        private __trace;
        drawSlave(slave: Slave, layers: Layers): void;
        update(): void;
    }
}
declare module EcDiagnostics.Commons {
    const DrawingSlaveSettings: {
        scale: number;
        padding: {
            x: number;
            y: number;
        };
    };
    class DrawingSlave extends DrawingInteraction {
        constructor(slave: Slave);
        private __initSetTimeout;
        connectedCallback(): void;
        disconnectedCallback(): void;
        private __slave;
        setInitialDimension(dimension: Dimension): void;
        drawSlave(): void;
        update(): void;
        private __drawPortLabels;
    }
}
declare module EcDiagnostics.Commons {
    abstract class ExtendedInfo {
        constructor(master: Master, component: 'Master' | 'Slave');
        protected __component: 'Master' | 'Slave';
        protected __popUp: PopUp | null;
        protected __tabName: string | null;
        protected __master: Master;
        protected __open(popUp: PopUp): void;
        destroy(): void;
        close(): void;
        protected __popup: PopUpParameter | null;
        get popup(): PopUpParameter | null;
        abstract updateDrawings(): boolean;
    }
    class ExtendedInfoOfMaster extends ExtendedInfo {
        constructor(master: Master);
        destroy(): void;
        protected __masterContentTabs: TcHmi.Controls.Helpers.ContentTabs | null;
        protected __open(): void;
        updateDrawings(): boolean;
        createSlaveList(): void;
        private __slaveListRecursive;
    }
    class ExtendedInfoOfSlave extends ExtendedInfo {
        private __slave;
        private __slaveDrawing;
        private __traceDrawing;
        constructor(slave: Slave);
        destroy(): void;
        protected __slaveContentTabs: TcHmi.Controls.Helpers.ContentTabs | null;
        protected __open(): void;
        updateDrawings(): boolean;
    }
}
declare module EcDiagnostics.Commons {
    class Utility {
        static getRandomInt(max: number): number;
        static selectContainsOptionValue(select: HTMLSelectElement, value: string): boolean;
        static isDataComplex(val: any): boolean;
        static compareObjectsRecursion<T extends object>(oldObj: T, newObj: T, changes: Partial<T>): false | Partial<T>;
        static compareObjects<T extends object>(oldObj: T, newObj: T): Partial<T>;
        static baseConverter(num: string, baseFrom: number, baseTo: number): string;
        static fillStringToLength(character: string, numOfCharacters: number, stringToFillUp: string): string;
        static removeNotConnectedDomElements(domElements: Set<HTMLElement> | Map<HTMLElement, any>): void;
        static toHexString(dec: number): string;
    }
    class Vector {
        static getDirectionalVector(p1: XY, p2: XY): XY;
        static getVectorLength(p1: XY, p2?: XY): number;
        static getCenter(p1: XY, p2: XY): XY;
        static scalarProduct(scalar: number, p: XY): {
            x: number;
            y: number;
        };
        static sumVector(p1: XY, p2: XY): XY;
    }
}
declare module EcDiagnostics.Commons {
    class DrawUtility {
        static createCanvasLayers(parentEl: HTMLElement, numberOfLayers: number): DrawingLayer[];
        static drawGrid(ctx: CanvasRenderingContext2D, numberOfRows: number, numberOfCols: number, gridSpacing: number): void;
        static drawComponent(ctx: CanvasRenderingContext2D, colIndex: number, rowIndex: number, width: number, height: number, size: number): void;
    }
}
declare module EcDiagnostics.Commons {
    class Notifications {
        constructor(destinationElement: HTMLElement);
        private __wrapper;
        private __notifications;
        resetNotification(key: string): void;
        clearAllNotifications(): void;
        clearNotifications(category?: string | NotificationCategory, level?: NotificationLevel): void;
        private __removeNotification;
        setNotificationElement(el: HTMLElement, level: NotificationLevel, category: NotificationCategory | string, displayTime?: number): void;
        setNotification(content: string | HTMLElement, level: NotificationLevel, category: NotificationCategory | string, displayTime?: number): void;
        private __checkForDuplicatedNotifications;
        create(key: string, localization: Localization, params?: any): void;
    }
    interface Notification {
        element: HTMLElement;
        timeout: number | undefined;
    }
}
declare module TcHmi.Controls.Beckhoff.TcHmiEcDiagnosticsClasses {
    class ControlCommunication extends EcDiagnostics.Commons.Communication {
        constructor(ecDiagnostics: EcDiagnostics.Commons.EcDiagnostics);
        private __subscriptionIds;
        subscribe(commands: TcHmi.Server.ICommand[] | TcHmi.Server.ICommand, interval: number, tickCallback: EcDiagnostics.Commons.WSTickCallback, initCallback?: EcDiagnostics.Commons.WSCallback): number | null;
        unsubscribe(subscriptionId: number | null | undefined, callback?: (data: any) => any): number | null;
        unsubscribeAll(): void;
        writeSymbol(symbol: string, writeValue: any, callback?: (data: any) => any, cbErrorEl?: HTMLElement): void;
    }
}
declare module TcHmi.Controls.Beckhoff.TcHmiEcDiagnosticsClasses {
    class ControlLocalization extends EcDiagnostics.Commons.Localization {
        constructor(tchmiControlLocalization: Locale.ControlLocalization);
        private __localizationReader;
        private __destroyLocalizationWatch;
        getLocalizedText(contentKey: string): string;
        destroy(): void;
    }
}
declare module TcHmi.Controls.Beckhoff {
    class TcHmiEcDiagnostics extends TcHmi.Controls.System.TcHmiControl {
        #private;
        constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
        protected __ecDiagnostics: EcDiagnostics.Commons.EcDiagnostics;
        protected __loadTemplatePromise: Promise<void> | null;
        /**
         * Internal reference to the attribute "data-tchmi-device"
         */
        protected __device: string | undefined;
        /**
         * Internal reference to the attribute "data-tchmi-allow-zoom-and-pan"
         */
        protected __allowZoomAndPan: boolean;
        /**
         * Internal reference to the attribute "data-tchmi-toolbox-reset-view"
         */
        protected __toolboxResetView: boolean;
        /**
         * Internal reference to the attribute "data-tchmi-init-topology-view"
         */
        protected __initTopologyView?: TcHmiEcDiagnostics.InitTopologyViewFlat | null;
        /** Reference to the root dom element of the current control template as  jquery object. */
        protected __elementTemplateRoot: JQuery;
        /**
         * If raised, the control object exists in control cache and constructor of each inheritation level was called.
         */
        __previnit(): void;
        /**
         * If raised, all attributes have been set to it's default or dom values.
         */
        __init(): void;
        private __themeDataChangedDestroyFn?;
        /**
         * Is called by the system after the control instance gets part of the current DOM.
         * Is only allowed to be called from the framework itself!
         */
        __attach(): void;
        resetView(): void;
        addTopMostLayer(element: HTMLElement): void;
        removeTopMostLayer(element: HTMLElement): void;
        __updateTheme(): void;
        /**
         * Is called by the system after the control instance is no longer part of the current DOM.
         * Is only allowed to be called from the framework itself!
         */
        __detach(): void;
        /**
         * Destroy the current control instance.
         * Will be called automatically if system destroys control!
         */
        destroy(): void;
        /**
         * Sets the value of the member variable "device" if the new value is not equal to the current value
         * @param valueNew The new value for device.
         */
        setDevice(valueNew: string | null): void;
        getDevice(): string | undefined;
        /**
         * Sets the value of the member variable "allowZoomAndPan" if the new value is not equal to the current value
         * @param valueNew The new value for boolean allowZoomAndPan.
         */
        setAllowZoomAndPan(valueNew: boolean | null): void;
        getAllowZoomAndPan(): boolean;
        /**
         * Sets the value of the member variable "toolboxResetView" if the new value is not equal to the current value
         * @param valueNew The new value for boolean toolboxResetView.
         */
        setToolboxResetView(valueNew: boolean | null): void;
        getToolboxResetView(): boolean;
        protected __processEcDiagnosticsConfig(): void;
        /**
         * Sets the value of the member variable "setInitTopologyView" if the new value is not equal to the current value
         * @param valueNew The new value for object setInitTopologyView.
         */
        setInitTopologyView(valueNew: TcHmiEcDiagnostics.InitTopologyViewFlat | null): void;
        /**
         * The watch callback for the initTopologyView object resolver.
         */
        protected __onResolverForInitTopologyViewCallback: (data: Symbol.ObjectResolver.IWatchResultObject<TcHmiEcDiagnostics.InitTopologyViewFlat | null>) => void;
        getInitTopologyView(): TcHmiEcDiagnostics.InitTopologyViewFlat | null | undefined;
    }
    namespace TcHmiEcDiagnostics {
        interface InitTopologyViewFlat {
            posX: number;
            posY: number;
            zoom: number | null;
        }
    }
}
//# sourceMappingURL=TcHmiEcDiagnostics.d.ts.map