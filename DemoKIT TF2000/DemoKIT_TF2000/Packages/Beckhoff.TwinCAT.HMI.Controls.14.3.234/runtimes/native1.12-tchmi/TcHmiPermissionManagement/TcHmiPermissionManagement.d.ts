declare namespace TcHmi.Controls.Beckhoff {
    class PermissionCheckbox extends HTMLElement {
        constructor(para: {
            initValue?: boolean;
            changeCallback?: (...args: any[]) => void;
            unset?: boolean;
            colorCoded?: boolean;
            disabled?: boolean;
            readOnly?: boolean;
        });
        private __loading;
        private __checkboxContainer;
        private __checkbox;
        private __checkmark;
        connectedCallback(): void;
        disconnectedCallback(): void;
        private __changeCallback;
        set changeCallback(fn: ((...args: any[]) => void) | undefined);
        get checked(): boolean;
        set checked(value: boolean);
        loading(): void;
        private __readOnly;
        get readOnly(): boolean;
        set readOnly(value: boolean);
        private __colorCoded;
        get colorCoded(): boolean;
        set colorCoded(value: boolean);
        private __unset;
        set unset(value: boolean);
        private __disabled;
        get disabled(): boolean;
        set disabled(value: boolean);
        get enabled(): boolean;
        set enabled(value: boolean);
    }
}
declare namespace TcHmi.Controls.Beckhoff {
    class TcHmiPermissionManagement extends TcHmi.Controls.System.TcHmiControl {
        #private;
        constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
        /** Reference to the root dom element of the current control template as jquery object. */
        protected __elementTemplateRoot: HTMLElement;
        private __table;
        private __tableHead;
        private __tableBody;
        private __filter;
        private __regExForFilter;
        private __resourceSearch;
        private __resourceCount;
        private __shownResourceList;
        private __messageNoResourcesFound;
        private __checkboxElements;
        private __resource;
        private __externalResource;
        private __groupAsMuchAsPossible;
        protected __subscriptionsToUnsubscribeOnDetach: (number | null)[];
        setResources(resourceList: TcHmiPermissionManagement.SymbolList | null): void;
        /**
         * If raised, the control object exists in control cache and constructor of each inheritation level was called.
         * This function is only to be used by the System. Other function calls are not intended.
         */
        __previnit(): void;
        protected __elemScrollHandling(): void;
        private __initialized;
        protected __updateSymbolSearch(): void;
        /**
         * If raised, all attributes have been set to it's default or dom values.
         * This function is only to be used by the System. Other function calls are not intended.
         */
        __init(): void;
        protected __fetchRecursiveFiles(path: string, storage: Map<string, any>, finalCallback: () => void, // Step 2: Add a Final Callback
        pendingOperations?: {
            count: number;
        }): void;
        protected __recordToMap<K extends string | number, V>(record: Record<K, V>): Map<K, V>;
        private __cached_results;
        protected __subscriptionCallback(data: Server.IResultObject): void;
        private __removePreviousGenericElements;
        private __createGroupHeader;
        private __createGroupDefaultAccessElements;
        protected __allSymbolsChangeCallback(groupName: string, checkboxRead: PermissionCheckbox, checkboxWrite: PermissionCheckbox, targetCheckbox: PermissionCheckbox): void;
        protected __createGroupAllResourcesElements(groupName: string, groupElements: any, rowGroupAllSymbols: HTMLTableRowElement): void;
        protected __onInheritCheckboxChange(groupName: string, resourceList: string[], notCheckedFn: (...args: any[]) => any, inheritCheckbox: PermissionCheckbox): void;
        protected __removeAccessFromResources(groupName: string, resourceList: string[]): void;
        private __createResourceRows;
        __updateTableFiles(files: any, userGroups: any): void;
        __updateTableSymbols(symbolList: TcHmiPermissionManagement.SymbolList, userGroups: Record<string, any>): void;
        static getAccessValue(read_access: boolean, write_access: boolean): Server.ACCESS;
        static hasReadAccess(accessValue: Server.ACCESS): boolean;
        static hasWriteAccess(accessValue: Server.ACCESS): boolean;
        /**
         * Is called by the system after the control instance gets part of the current DOM.
         * This function is only to be used by the System. Other function calls are not intended.
         */
        __attach(): void;
        /**
         * Is called by the system after the control instance is no longer part of the current DOM.
         * This function is only to be used by the System. Other function calls are not intended.
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
        setFilter(valueNew: string | null): void;
        getFilter(): string;
        /**
         * Sets the value of the member variable "device" if the new value is not equal to the current value
         * @param valueNew The new value for device.
         */
        setRegExForFilter(valueNew: boolean | null): void;
        getRegExForFilter(): boolean | undefined;
    }
    namespace TcHmiPermissionManagement {
        type GroupName = string;
        type SymbolName = string;
        enum Resource {
            SYMBOL = 0,
            FILE = 1
        }
        type ResourceList = SymbolList;
        type ResourceListEntry<T = ResourceList> = {
            ACCESS: number | undefined;
            SCHEMA?: {
                readOnly?: boolean;
            };
            CONTENT?: T;
        };
        type SymbolList = Map<string, SymbolListEntry>;
        type SymbolListEntry = TcHmi.Symbol.IListSymbols & {
            CONTENT?: SymbolList;
        };
        interface ServerFile {
            fileFlags: ('Directory' | 'ReadOnly' | 'UserAccessReadOnly' | 'VirtualDirectory')[];
            fileSize?: number;
            link?: string;
            access?: TcHmi.Server.ACCESS;
            /** The md5 hash of the file */
            hash?: string;
            modificationTime?: string;
        }
    }
}
//# sourceMappingURL=TcHmiPermissionManagement.d.ts.map