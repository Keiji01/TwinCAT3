declare namespace TcHmi.Controls.Beckhoff {
    class TcHmiFileExplorer extends TcHmi.Controls.System.TcHmiControl {
        #private;
        /**
         * Constructor Creates a new control instance.
         * @param element The element that hosts the control.
         * @param pcElement Precompiled element.
         * @param attrs The control attributes.
         */
        constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
        protected __elementTemplateRoot: HTMLElement;
        protected __elementDirectoryTree: HTMLUListElement;
        protected __elementPathBox: HTMLDivElement;
        protected __elementBrowsingBox: HTMLUListElement;
        protected __elementMenuBar: HTMLDivElement;
        protected __buttons: {
            createFolder: TcHmiButton;
            download: TcHmiButton;
            upload: TcHmiButton;
            rename: TcHmiButton;
            copy: TcHmiButton;
            cut: TcHmiButton;
            paste: TcHmiButton;
            delete: TcHmiButton;
        };
        protected __elementSorting: HTMLDivElement;
        protected __inputSearch: TcHmiInput;
        protected __elementClearSearch: HTMLDivElement;
        protected __localizationReader: Locale.LocalizationReader | undefined;
        protected __directoryBrowser: Helpers.DirectoryBrowser<TcHmiFileExplorer.DirectoryNode, TcHmiFileExplorer.DirectoryNode>;
        protected __listBrowsingDisplay: Helpers.ListBrowsingDisplay;
        protected __directory: TcHmiFileExplorer.DirectoryNode;
        protected __clipboard: {
            action: 'cut' | 'copy';
            items: TcHmiFileExplorerComponents.Path[];
        } | null;
        protected __subscriptionId: number | null;
        protected __symbolAccessSubscriptionId: number | null;
        protected __symbolAccess: {
            Upload: TcHmiFileExplorer.SymbolAccess;
            Rename: TcHmiFileExplorer.SymbolAccess;
            Copy: TcHmiFileExplorer.SymbolAccess;
            Delete: TcHmiFileExplorer.SymbolAccess;
            'TcHmiSrv.Config': TcHmiFileExplorer.SymbolAccess;
        };
        protected __fileUploader: FileUploader | null;
        protected __filesBeingUploaded: Map<string, TcHmiFileExplorer.ServerFile>;
        protected __namePrompt: Helpers.InputPrompt | null;
        protected __confirmationPrompt: Helpers.TextAndButtonsPrompt<boolean> | null;
        protected __errorPrompt: Helpers.TextAndButtonsPrompt<void> | null;
        protected __errorPromptPromise: Promise<void>;
        protected __root: TcHmiFileExplorerComponents.Path<string> | undefined;
        protected __path: TcHmiFileExplorerComponents.Path<string> | undefined;
        protected __serverInterval: number | null | undefined;
        protected __showNavigationPane: boolean | undefined;
        protected __navigationPanePosition: 'Left' | 'Right' | undefined;
        protected __menuBarPosition: 'Top' | 'Bottom' | undefined;
        protected __menuBarHeight: number | undefined;
        protected __storage: TcHmi.LocalStorage<{
            sorting: TcHmiFileExplorer.FileSortingInfo[];
        }, {
            sorting: ReturnType<TcHmiFileExplorer['getSorting']>;
        }> | undefined;
        protected __sortConfigurator: TcHmiFileExplorerComponents.SortConfigurator<TcHmiFileExplorer.FileSortingInfo> | undefined;
        /**
         * If raised, the control object exists in control cache and constructor of each inheritation level was called.
         * This function is only to be used by the System. Other function calls are not intended.
         */
        __previnit(): void;
        /**
         * If raised, all attributes have been set to it's default or dom values.
         * This function is only to be used by the System. Other function calls are not intended.
         */
        __init(): void;
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
         * Handler for the pathChanged event of the directory browser.
         * @param currentItem The new current item.
         * @param path The new path.
         */
        protected __onPathChanged(currentItem: TcHmiFileExplorer.DirectoryItem | null, path: string[] | null): void;
        /**
         * Handler for the selectionChanged event of the directory browser.
         * @param selectedItems The currently selected items.
         */
        protected __onSelectionChanged(selectedItems: TcHmiFileExplorer.DescendantItem[] | null): void;
        /**
         * Handler for the pressed event of the create folder button.
         */
        protected __onCreateFolderPressed(): void;
        /**
         * Handler for the pressed event of the download button.
         */
        protected __onDownloadPressed(): void;
        /**
         * Handler for the pressed event of the upload button.
         */
        protected __onUploadPressed(): void;
        /**
         * Handler for the pressed event of the rename button.
         */
        protected __onRenamePressed(): void;
        /**
         * Handler for the pressed event of the copy button.
         */
        protected __onCopyPressed(): void;
        /**
         * Handler for the pressed event of the cut button.
         */
        protected __onCutPressed(): void;
        /**
         * Handler for the pressed event of the paste button.
         */
        protected __onPastePressed(): void;
        /**
         * Handler for the pressed event of the delete button.
         */
        protected __onDeletePressed(): void;
        /**
         * Handler for the textChanged event of the search input.
         */
        protected __onSearchChanged(): void;
        /**
         * Handler for the click event of the clear search element.
         * @param event The event that is handled.
         */
        protected __onClearSearchClick(event: MouseEvent): void;
        /**
         * Expands the given localization key to a full symbol expression.
         * @param key The key to expand.
         */
        protected __expandLocalizationSymbol(key: string): string;
        /**
         * Updates the isEnabled states of the menu bar buttons.
         */
        protected __updateButtonsEnabled(): void;
        /**
         * Forces the buttons operate rights to Deny if the user doesn't have the necessary symbol access.
         */
        protected __updateButtonAccess(): void;
        /**
         * Creates a new InputPrompt and sets the validationPatterns and localizations.
         */
        protected __createNamePrompt(): Helpers.InputPrompt;
        /**
         * Prompt the user for a name for the new folder and create this folder on the server.
         */
        protected __createFolder(path: TcHmiFileExplorerComponents.Path): Promise<void>;
        /**
         * Downloads the specified files. Folders are skipped.
         * @param path The path that contains the files to download.
         * @param items The files that should be downloaded.
         */
        protected __downloadFiles(path: TcHmiFileExplorerComponents.Path, items: TcHmiFileExplorer.DirectoryItem[]): void;
        /**
         * Shows a file selection window and uploads the selected files.
         */
        protected __upload(): Promise<void>;
        /**
         * Uploads the given files to the specified path.
         * @param path The path to upload to.
         * @param files The files to upload.
         * @param existingNames The names of already existing files or folders in the target location.
         */
        protected __uploadFiles(path: TcHmiFileExplorerComponents.Path, files: FileList, existingNames: Set<string>): Promise<void>;
        /**
         * Shows an error popup with the specified header and content text.
         * @param headerText The header text.
         * @param contentText The content text.
         */
        protected __showErrorPopup(headerText: Localizable, contentText: Localizable): Promise<void>;
        /**
         * Shows a popup asking the user how to resolve conflicting file names.
         * @param conflictingNames The names that conflict.
         * @param existingNames The names that already exist in the folder.
         */
        protected __resolveFileNameConflicts(conflictingNames: Iterable<string>, existingNames: Iterable<string>): Promise<{
            isOk: true;
            value: Map<string, string>;
        } | {
            isOk: false;
            value?: void | undefined;
        } | {
            readonly isOk: false;
        }>;
        /**
         * Renames the given file in the given path.
         * @param path The path where the file to be renamed can be found.
         * @param name The name of the file to rename.
         */
        protected __rename(path: TcHmiFileExplorerComponents.Path, name: string): Promise<void>;
        /**
         * Pastes the items in the clipboard to the given path.
         * @param targetPath The path to paste into.
         * @param existingNames The names of already existing files or folders in the target location.
         */
        protected __paste(targetPath: TcHmiFileExplorerComponents.Path, existingNames: Set<string>): Promise<void>;
        /**
         * Prompt the user to confirm if they really want to delete, then delete the given items from the server.
         * @param path The path where the items to be deleted can be found.
         * @param items The names of the items to delete.
         * @param skipConfirmation If true, the user will not be asked to confirm the deletion.
         */
        protected __delete(path: TcHmiFileExplorerComponents.Path, items: TcHmiFileExplorer.DescendantItem[], skipConfirmation?: boolean): Promise<void>;
        protected __localizeListBrowsingDisplay(): void;
        /**
         * Sets the current value of attribute Root.
         * @param valueNew The new value.
         */
        setRoot(valueNew: string | null): void;
        /**
         * Returns the current value of attribute Root.
         */
        getRoot(): string | undefined;
        /**
         * Processes the current value of attribute Root.
         */
        protected __processRoot(): void;
        /**
         * Sets the current value of attribute Path.
         * @param valueNew The new value.
         */
        setPath(valueNew: string | null): void;
        /**
         * Returns the current value of attribute Path.
         */
        getPath(): string | undefined;
        /**
         * Processes the current value of attribute Path.
         */
        protected __processPath(): Promise<void>;
        /**
         * Returns the current value of the readonly attribute FullPath.
         */
        getFullPath(): string;
        /**
         * Returns the current value of the readonly attribute SelectedItems.
         */
        getSelectedItems(): string[];
        /**
         * Sets the current value of attribute Sorting.
         * @param valueNew The new value.
         */
        setSorting(valueNew: TcHmiFileExplorer.FileSortingInfo[] | null): void;
        /**
         * The watch callback for the Sorting object resolver
         */
        protected __onResolverForSortingWatchCallback(data: Symbol.ObjectResolver.IWatchResultObject<TcHmiFileExplorer.FileSortingInfo[]>): void;
        /**
         * Returns the current value of attribute Sorting.
         */
        getSorting(): TcHmiFileExplorer.FileSortingInfo[] | undefined;
        /**
         * Processes the current value of attribute Sorting.
         */
        protected __processSorting(): void;
        /**
         * Sets the current value of attribute ServerInterval.
         * @param valueNew The new value.
         */
        setServerInterval(valueNew: number | null): void;
        /**
         * Returns the current value of attribute ServerInterval.
         */
        getServerInterval(): number | null | undefined;
        /**
         * Processes the current value of attribute ServerInterval.
         */
        protected __processServerInterval(): void;
        /**
         * Sets the current value of attribute MenuBarPosition.
         * @param valueNew The new value.
         */
        setMenuBarPosition(valueNew: 'Top' | 'Bottom' | null): void;
        /**
         * Returns the current value of attribute MenuBarPosition.
         */
        getMenuBarPosition(): "Top" | "Bottom" | undefined;
        /**
         * Sets the current value of attribute MenuBarHeight.
         * @param valueNew The new value.
         */
        setMenuBarHeight(valueNew: number | null): void;
        /**
         * Returns the current value of attribute MenuBarHeight.
         */
        getMenuBarHeight(): number | undefined;
        /**
         * Returns the current value of attribute MenuBarHeightUnit.
         */
        getMenuBarHeightUnit(): string;
        /**
         * Processes the current value of attributes MenuBarPosition, MenuBarHeight, ShowNavigationPane and NavigationPanePosition.
         */
        protected __processLayout(): void;
        /**
         * Unsubscribes and, if attached, resubscribes to ListFiles with updated writeValue.
         * @param unsubscribeOnly Set to true to only unsubscribe.
         */
        protected __updateSubscription(unsubscribeOnly?: boolean): Promise<void>;
        /**
         * Creates a callback function for the ListFiles response for the given path.
         * @param path The path to list files for.
         */
        protected __getListFilesHandler(path: TcHmiFileExplorerComponents.Path): (data: Server.IResultObject<string, TcHmiFileExplorer.ServerFileList>) => void;
        /**
         * Updates the given path of the directory.
         * @param fileList The current file list for the given path.
         * @param path The path.
         */
        protected __updateDirectory(fileList: TcHmiFileExplorer.ServerFileList, path: TcHmiFileExplorerComponents.Path): void;
        protected __updateSymbolAccessSubscription(unsubscribeOnly?: boolean): void;
    }
    namespace TcHmiFileExplorer {
        interface ServerFile {
            fileFlags: ('Directory' | 'ReadOnly' | 'UserAccessReadOnly' | 'VirtualDirectory')[];
            fileSize?: number;
            link?: string;
            access?: TcHmi.Server.ACCESS;
            /** The md5 hash of the file */
            hash?: string;
            modificationTime?: string;
            uploadStatus?: UploadStatus;
            uploadedSize?: number;
        }
        interface ServerFileList {
            [name: string]: ServerFile;
        }
        interface DirectoryNode extends ServerFile {
            children?: Map<string, DirectoryNode>;
        }
        enum UploadStatus {
            Pending = 0,
            InProgress = 1,
            Error = 2
        }
        interface DeleteWriteValue {
            fileName: string;
            domain?: string;
        }
        interface CopyRenameWriteValue {
            old: string;
            new: string;
            domain?: string;
            configuration?: string;
        }
        enum SymbolAccess {
            None = 0,
            Read = 1,
            Write = 2,
            ReadWrite = 3
        }
        type DirectoryItem = Helpers.DirectoryBrowser.Item<DirectoryNode, DirectoryNode>;
        type FolderLikeItem = Helpers.DirectoryBrowser.FolderLikeItem<DirectoryNode, DirectoryNode>;
        type DescendantItem = Helpers.DirectoryBrowser.DescendantItem<DirectoryNode, DirectoryNode>;
        interface FileSortingInfo extends SortingInfo {
            name: 'name' | 'type' | 'fileSize' | 'modificationTime';
        }
    }
}
declare namespace TcHmi.Controls.Beckhoff.TcHmiFileExplorerComponents {
    class Path<T extends string | string[] = string | string[]> {
        private readonly __original;
        private readonly __path;
        private readonly __rootParts;
        /**
         * Creates a new path object by validation the passed in path value.
         * @param path The original path value. If applicable, '..' will be resolved.
         * A path can either be a string, using '/' as the path separator, or an array, where each array item is a path item. It path is an array, its items must not contain '/'.
         * @param root Whether to treat the whole path as a root path, meaning its parents cannot be navigated to, or, if a number, how many path items belong to the root.
         */
        constructor(path: T, root?: boolean | number);
        /**
         * Returns the original value.
         */
        get original(): T;
        /**
         * Returns the length of the path array.
         */
        get length(): number;
        /**
         * Gets an individual part of the path.
         * @param index The index of the part to get.
         */
        get(index: number): string;
        /**
         * Returns the last part of the path, i. e. the name of the file or folder the path points to. Returns undefined if the path is empty.
         */
        getName(): string;
        /**
         * Returns the path in string representation.
         */
        toString(): string;
        /**
         * Returns the path in array representation.
         */
        toArray(): string[];
        /**
         * Combines this path with the given other path and returns the result as a new path.
         * @param path The path to combine this path with.
         */
        combine(path: Path | string | string[]): Path<string[]>;
        /**
         * Removes the last part of the path and returns it.
         */
        pop(): string | undefined;
        /**
         * Checks if the given path is equal to this path.
         * @param path The path to check.
         */
        equals(path: Path | string | string[]): boolean;
        /**
         * Provide an iterator.
         */
        [globalThis.Symbol.iterator](): IterableIterator<string>;
    }
}
declare namespace TcHmi.Controls.Beckhoff.TcHmiFileExplorerComponents {
    class FileConflictPrompt extends Helpers.OkCancelPrompt<Map<string, string>> {
        protected __existingNames: Set<string>;
        protected __elementLabel: HTMLElement;
        protected __rows: Map<string, {
            skip: TcHmiRadioButton;
            replace: TcHmiRadioButton;
            both: TcHmiRadioButton;
        }>;
        protected __doAll: {
            label: HTMLElement;
            controls: {
                skip: TcHmiRadioButton;
                replace: TcHmiRadioButton;
                both: TcHmiRadioButton;
            };
        } | undefined;
        /**
         * Creates a new FileConflictPrompt instance.
         * @param conflictingNames A map of the names that produce conflicts and whether the original file is replaceable (i. e. not read only).
         * @param parentControl The control which owns the popup.
         */
        constructor(conflictingNames: Map<string, boolean>, existingNames: Iterable<string>, parentControl: TcHmi.Controls.System.TcHmiControl);
        /**
         * Destroys the popup and all its controls.
         * @param force If true, child controls will be removed from the parent control before destruction, to ensure destruction in case of keepAlive === true.
         */
        destroy(force?: boolean): void;
        /**
         * Creates a container element with a label and three radio buttons.
         * @param labelText The text that is displayed in the label.
         * @param replaceable Whether to enable or disable the 'Replace' radio button.
         * @param eventHandler The event handler for the radioStateChanged event of the radio buttons.
         */
        protected __buildRow(labelText: string, replaceable?: boolean, eventHandler?: () => void): {
            container: HTMLDivElement;
            label: HTMLSpanElement;
            controls: {
                skip: TcHmiRadioButton;
                replace: TcHmiRadioButton;
                both: TcHmiRadioButton;
            };
        };
        /**
         * Event handler for the radioStateChanged event of the radio buttons
         */
        protected __onRadioStateChanged(): void;
        /**
         * Create an event handler for radioStateChanged event of an all
         * @param name
         */
        protected __getOnAllRadioStateChangedHandler(name: 'skip' | 'replace' | 'both'): () => void;
        /**
         * Performs the action for the OK button, i.e. calling prompt.answer().
         */
        protected __ok(): void;
        /**
         * Sets localizable texts to the given localization symbols.
         * @param texts A collection of localization symbol expressions.
         */
        setLocalizations(texts: Partial<FileConflictPrompt.LocalizableTexts>): void;
    }
    namespace FileConflictPrompt {
        interface LocalizableTexts extends Helpers.OkCancelPrompt.LocalizableTexts {
            headerText: Localizable;
            labelText: Localizable;
            radioTextSkip: Localizable;
            radioTextReplace: Localizable;
            radioTextKeepBoth: Localizable;
            labelDoForAll: Localizable;
        }
    }
}
declare namespace TcHmi.Controls.Beckhoff.TcHmiFileExplorerComponents {
    /**
     * Class to display a dropdown to configure sorting criterions.
     */
    class SortConfigurator<T extends SortingInfo> {
        protected __host: HTMLElement;
        protected __parentControl: System.TcHmiControl;
        protected __display: HTMLSpanElement;
        protected __dropdown: HTMLDivElement;
        protected __list: HTMLUListElement;
        protected __criterions: Map<T["name"], {
            localizationKey: string;
            element: HTMLLIElement;
            label: HTMLSpanElement;
        }>;
        protected __divider: HTMLLIElement;
        protected __attributeValue: T[] | undefined;
        protected __userValue: T[];
        protected __onValueChangeManager: Helpers.CallbackManager<(value: T[], isUserConfigured: boolean) => void>;
        onValueChange: Readonly<{
            add: (callback: (value: T[], isUserConfigured: boolean) => void) => DestroyFunction;
            remove: (callback: (value: T[], isUserConfigured: boolean) => void) => void;
        }>;
        protected __localizationReader: Locale.LocalizationReader | null;
        protected __destroyers: DestroyFunction[];
        protected __destroyOnClose: DestroyFunction[];
        protected __pointerEventDestroyers: DestroyFunction[];
        protected __isOpen: boolean;
        protected __dropdownResizeObserver: ResizeObserver | null;
        protected __dragOperations: Map<HTMLLIElement, {
            criterion: T;
            currentIndex: number;
            originalIndex: number;
            pointers: {
                id: number;
                offset: number;
            }[];
        }>;
        protected __workingCopy: T[] | null;
        protected __listItemGeometry: {
            height: number;
            gap: number;
        };
        /**
         * Create a new SortConfigurator
         * @param __host The element that displays the curent configuration and that when clicked on opens the dropdown.
         * @param sortingCriterions The available sorting criterions.
         * @param __parentControl The parent control.
         */
        constructor(__host: HTMLElement, sortingCriterions: {
            name: T['name'];
            localizationKey: string;
        }[], __parentControl: System.TcHmiControl);
        /**
         * Destroy the SortConfigurator.
         */
        destroy(): void;
        /**
         * Event handler for the click event of the host.
         * @param event The event that is handled.
         */
        protected __onHostClick(event: MouseEvent): void;
        /**
         * Event handler for the click event of the document.
         * @param event The event that is handled.
         */
        protected __onDocumentClick(event: MouseEvent): void;
        /**
         * Event handler for the pointerdown event of the dropdown.
         * @param event The event that is handled.
         */
        protected __onPointerDown(event: PointerEvent): void;
        /**
         * Event handler for the pointermove event of the dropdown.
         * @param event The event that is handled.
         */
        protected __onPointerMove(event: PointerEvent): void;
        /**
         * Event handler for the pointerup event of the dropdown.
         * @param event The event that is handled.
         */
        protected __onPointerUp(event: PointerEvent): void;
        /**
         * Event handler for the pointercancel event of the dropdown.
         * @param event The event that is handled.
         */
        protected __onPointerCancel(event: PointerEvent): void;
        /**
         * Event handler for the click event of the criterion list elements.
         * @param event The event that is handled.
         */
        protected __onCriterionClick(event: MouseEvent): void;
        /**
         * Open the dropdown.
         */
        protected __open(): void;
        /**
         * Close the dropdown.
         */
        protected __close(): void;
        /**
         * Set the value of the attribute. This value is used when the user clicks the reset button.
         * Setting this also sets the UserValue.
         * @param value The value of the attribute.
         */
        setAttributeValue(value: T[]): void;
        /**
         * Get the value of the attribute.
         */
        getAttributeValue(): T[] | undefined;
        /**
         * Set the value that is actually used.
         * @param value The value that is actually used.
         */
        setUserValue(value: T[]): void;
        /**
         * Set the value that is actually used.
         * @param value The value that is actually used.
         * @param isUserConfigured Whether this value was configured by the user or came from the attribute.
         */
        protected __setUserValue(value: T[], isUserConfigured?: boolean): void;
        /**
         * Get the value that is actually used.
         */
        getUserValue(): T[];
        /**
         * Write the current configuration to the display element as localized text.
         */
        protected __updateDisplay(): void;
        /**
         * Arrange the list items in the dropdown according to the given configuration and set their classes.
         * @param sorting The configuration to show.
         */
        protected __updateDropdown(sorting: T[]): void;
        /**
         * Position the dropdown as close to the host as possible.
         */
        protected __positionDropdown(): void;
    }
}
//# sourceMappingURL=TcHmiFileExplorer.d.ts.map