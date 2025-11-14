declare namespace TcHmi.Controls.Helpers {
    abstract class Popup<T> {
        #private;
        protected readonly __parentControl?: (TcHmi.Controls.System.TcHmiControl | null) | undefined;
        protected __name: string;
        protected __element: HTMLDivElement;
        protected __elementHeaderContainer: HTMLDivElement;
        protected __elementHeader: HTMLHeadingElement;
        protected __elementClose: HTMLAnchorElement;
        protected __elementContent: HTMLDivElement;
        protected __elementFooter: HTMLDivElement;
        /** Controls in this array will be destroyed automatically when the popup is destroyed */
        protected __childControls: TcHmi.Controls.System.TcHmiControl[];
        /** Destroyers in this array will be called automatically when the popup is destroyed */
        protected __destroyers: DestroyFunction[];
        protected __destroyOnHide: DestroyFunction[];
        protected __prompt: {
            answer: (value: T | PromiseLike<T>) => void;
            error: (reason?: Error) => void;
        } | null;
        protected __isShowing: boolean;
        protected __onShowManager: CallbackManager<() => void>;
        onShow: Readonly<{
            add: (callback: () => void) => DestroyFunction;
            remove: (callback: () => void) => void;
        }>;
        protected __onHideManager: CallbackManager<() => void>;
        onHide: Readonly<{
            add: (callback: () => void) => DestroyFunction;
            remove: (callback: () => void) => void;
        }>;
        protected __onBoundsChangeManager: CallbackManager<(data: {
            bounds: TcHmi.UiProvider.PopupProvider.Bounds | null;
        }) => void>;
        onBoundsChange: Readonly<{
            add: (callback: (data: {
                bounds: TcHmi.UiProvider.PopupProvider.Bounds | null;
            }) => void) => DestroyFunction;
            remove: (callback: (data: {
                bounds: TcHmi.UiProvider.PopupProvider.Bounds | null;
            }) => void) => void;
        }>;
        protected __backgroundAction: Popup.BackgroundAction<string>;
        protected __closeButton: Popup.CloseButton<string>;
        protected __backgroundMode: Popup.BackgroundMode;
        protected __positioningMode: Popup.PositioningMode;
        protected __bounds: Popup.Bounds | null;
        protected __movable: boolean;
        protected __justAbove: TcHmi.TopMostLayer.IOptionsEx['justAbove'];
        protected readonly __className = "TcHmi_Controls_Helpers_Popup";
        protected __localizationSymbols: Map<string, {
            symbol: Symbol<string>;
            destroyWatch: DestroyFunction;
        }>;
        private static readonly __passiveEventOptions;
        protected __documentMouseMoveDestroyer: DestroyFunction | null;
        protected __documentMouseUpDestroyer: DestroyFunction | null;
        protected __documentTouchMoveDestroyer: DestroyFunction | null;
        protected __documentTouchEndDestroyer: DestroyFunction | null;
        protected __documentTouchCancelDestroyer: DestroyFunction | null;
        /** Prevents mouse event while touch interaction is in progress. */
        protected __touchLock: boolean;
        protected __touchLockTimeoutId: number;
        /** Store active touches by their IDs. */
        protected __activeTouches: Map<number, {
            useForDragging: false;
        } | {
            useForDragging: true;
            offsetLeft: number;
            offsetTop: number;
        }>;
        protected __movingInfo: {
            moving: boolean;
            /** Offset from the interaction coordinates to element left side */
            startLeftOffset: number;
            /** Offset from the interaction coordinates to element top side */
            startTopOffset: number;
            /** A popup should be movable partly outside the screen but 50px should be always visible. */
            minLeft: number;
            /** A popup should be movable partly outside the screen but not at the top. */
            minTop: number;
            /** A popup should be movable partly outside the screen but 50px should be always visible. */
            maxLeft: number;
            /** A popup should be movable partly outside the screen but 50px should be always visible. */
            maxTop: number;
        };
        protected __activePointerInteraction: boolean;
        protected __animationFrameId: number;
        protected __storage: LocalStorage<{
            bounds: Popup.Bounds;
        }, {
            bounds: Popup.Bounds | null;
        }> | undefined;
        protected __storageSettings: TcHmi.UiProvider.PopupProvider.StorageSettings | undefined;
        private __resizeObserver;
        /**
         * Creates a new Popup instance.
         * @param __parentControl The control which owns the popup.
         */
        constructor(__parentControl?: (TcHmi.Controls.System.TcHmiControl | null) | undefined);
        /**
         * Keeps popup visible after when the window or the popup is resized. If the popup shrinks it could disappear
         * beyond the left edge of the window. If the window shrinks, the popup could disappear beyond the right or
         * bottom edge.
         */
        private __handleResize;
        /**
         * Shows the popup.
         */
        show(): void;
        /**
         * Hides the popup.
         */
        hide(): void;
        /**
         * Shows the popup and waits for the user to answer the prompt. A Promise is returned that will be resolved with the value the user provides.
         */
        prompt(): Promise<T>;
        /**
         * Aborts a prompted popup and performs the given action to answer the prompt. If no action is specified, the promise is rejected.
         * @param action The action to perform to answer the prompt.
         */
        abort(action?: Popup.PromptAction<string>): void;
        /**
         * Destroys the popup and all its controls.
         * @param force If true, child controls will be removed from the parent control before destruction, to ensure destruction in case of keepAlive === true.
         */
        destroy(force?: boolean): void;
        /**
         * Gets a value indicating if the popup is currently shown to the user.
         */
        isShowing(): boolean;
        /**
         * Gets a value indicating if the popup has a prompt that is still pending to be answered by the user.
         * If that is the case, calling prompt() againg will result in an error. If the popup is not currently
         * showing, you can call show() to display the popup again and wait for the user to answer the prompt.
         */
        hasActivePrompt(): boolean;
        /**
         * Gets the root element of the popup.
         */
        getElement(): HTMLDivElement;
        /**
         * Resets the size and position of the Popup and clears that data from localStorage.
         */
        resetBounds(): void;
        /**
         * Sets what happens when the user clicks the background while the popup is showing, or when the prompt is
         * aborted via API call. Default is { close: true }.
         * @param action The action to perform. If the popup should be closed, further action can be specified.
         */
        setBackgroundAction(action: Popup.BackgroundAction<string>): void;
        /**
         * Sets the background mode of the TopMostLayer used for displaying the popup.
         * @param mode
         */
        setBackgroundMode(mode: Popup.BackgroundMode): void;
        /**
         * Sets the positioning mode of the popup in the TopMostLayer.
         * @param mode
         */
        setPositioningMode(mode: Popup.PositioningMode): void;
        /**
         * Sets the bounds of the popup. Does only have any effect if PositioningMode.Floating is used.
         * @param bounds
         */
        setBounds(bounds: Popup.Bounds | null): void;
        /**
         * Process the given Popup.Bounds.
         * @param bounds
         */
        protected __processBounds(bounds: Popup.Bounds | null): void;
        /**
         * Sets the movable option.
         * Does only have an effect when setPositioningMode is also set:
         * `popup.setPositioningMode(TcHmi.UiProvider.PopupProvider.PositioningMode.Floating)`
         */
        setMovable(movable: boolean): void;
        /**
         * Sets the local storage settings and initializes the storage.
         */
        setStorageSettings(settings: TcHmi.UiProvider.PopupProvider.StorageSettings): void;
        /**
         * Sets if the close button should be used or not.
         * @param button Defines whether to show the button and if yes, what action should be taken to answer the prompt
         */
        setCloseButton(button: Popup.CloseButton<string>): void;
        /**
         * Sets if the close button should be used or not.
         * @param show Defines whether to show the button
         */
        setCloseButton(show: boolean): void;
        /**
         * Gets the close button configuration.
         */
        getCloseButton(): Popup.CloseButton<string>;
        /**
         * Performs the close action. Must be implemented by inheriting classes.
         */
        protected abstract __performPromptAction(toPerform: Popup.PromptAction<string>): void;
        /**
         * Display the popup just above the given reference element.
         * @param reference The popup will be as close as possible in the TopMostLayer stack to this element.
         * @param conflictResolution If there are multiple elements that want to be just above the reference, you can
         * specify in which direction conflicts should be resolved. Defaults to Up.
         */
        setJustAbove(reference: Element, conflictResolution?: TopMostLayer.ConflictResolution): void;
        /**
         * Reset the justAbove handling.
         * @param reference Pass null to reset the justAbove handling.
         */
        setJustAbove(reference: null): void;
        /**
         * Returns whether the popup is currently being interacted with by mouse, touch or keyboard.
         */
        hasActiveUserInteraction(): boolean;
        /**
         * Handles the onPressed event of the close button.
         */
        protected __onCloseClick(_event: MouseEvent): void;
        /**
         * Handles the popup mousedown event.
         */
        protected __onPopupMouseDown(event: MouseEvent): void;
        /**
         * Handles the document mouseup event.
         */
        protected __onDocumentMouseUp(_event: MouseEvent): void;
        /**
         * Handles the document mousemove event.
         */
        protected __onDocumentMouseMove(event: MouseEvent): void;
        /**
         * Handles the popup touchstart event.
         */
        protected __onPopupTouchStart(event: TouchEvent): void;
        /**
         * Handles the document touch end and cancel events.
         */
        protected __onDocumentTouchEndOrCancel(event: TouchEvent): void;
        /**
         * Handles the document touchmove event.
         */
        protected __onDocumentTouchMove(event: TouchEvent): void;
        /**
         * AnimationFrame handler for drawing
         */
        protected __updatePosition(): void;
        /**
         * Write potentially localized texts to a DOM Elements textContent property.
         * @param name A name for the localized text.
         * @param text The text to apply.
         * @param element The element to apply the text to.
         */
        protected __applyTextToElement(name: string, text: Localizable | null | undefined, element: Element): void;
        /**
         * Write potentially localized texts to a DOM Element using the given setter function.
         * @param name A name for the localized text.
         * @param text The text to apply.
         * @param setter The setter that writes the text to the DOM.
         */
        protected __applyTextToElement(name: string, text: Localizable | null | undefined, setter: (text: string) => void): void;
        /**
         * Write potentially localized texts to a control property
         * @param name A name for the localized text.
         * @param text The text to apply.
         * @param control The control to write to.
         * @param property The property name to write to.
         */
        protected __applyTextToControl(name: string, text: Localizable | null | undefined, control: System.TcHmiControl, property: string): void;
        /**
         * Watch the given symbol and call the onChange callback every time it changes with the resolved and formatted symbol value.
         * @param name The name for this symbol. Must be unique across all inheritance layers and further calls for the same localization must use the same name.
         * @param localization The localization to watch.
         * @param onChange The callback that is called with the localized and formatted text as a parameter.
         */
        protected __watchLocalization(name: string, localization: FormattedLocalizable, onChange: (localizedText: string) => void): void;
        /**
         * Destroys the localization watch with the given name, if it exists.
         * @param name The name that was used with __watchLoclalization to start watching the symbol.
         */
        protected __unwatchLocalization(name: string): void;
    }
    namespace Popup {
        type BackgroundAction<A extends string> = {
            close: false;
        } | {
            close: true;
            action?: A;
        };
        type CloseButton<A extends string> = {
            show: false;
        } | {
            show: true;
            action?: A;
        };
        type PromptAction<A extends string> = {
            action?: A;
        };
        enum PositioningMode {
            Centered = 1,
            Floating = 2
        }
        enum BackgroundMode {
            None = 1,
            Dimmed = 2
        }
        interface Bounds {
            width?: number | null;
            widthUnit?: 'px' | '%';
            height?: number | null;
            heightUnit?: 'px' | '%';
            left?: number | null;
            leftUnit?: 'px' | '%';
            top?: number | null;
            topUnit?: 'px' | '%';
            bottom?: number | null;
            bottomUnit?: 'px' | '%';
            right?: number | null;
            rightUnit?: 'px' | '%';
        }
    }
}
declare namespace TcHmi.Controls.Helpers {
    abstract class ButtonsPrompt<T> extends Popup<T> {
        protected __buttons: Map<string, {
            value: T;
            button: Beckhoff.TcHmiButton;
        }>;
        protected __onButtonPressedManager: CallbackManager<(name: string, value: T) => void>;
        onButtonPressed: Readonly<{
            add: (callback: (name: string, value: T) => void) => DestroyFunction;
            remove: (callback: (name: string, value: T) => void) => void;
        }>;
        protected __backgroundAction: ButtonsPrompt.BackgroundAction<T>;
        protected __closeButton: ButtonsPrompt.CloseButton<T>;
        /**
         * Creates a new ButtonsPrompt instance.
         * @param buttons A collection of attributes to generate buttons from and the value that should be used in the prompt answer for each button.
         * @param parentControl The control which owns the popup.
         */
        constructor(buttons: Dictionary<{
            value: T;
            attributes: Dictionary<any>;
            keepPopupOpen?: boolean;
        }>, parentControl?: TcHmi.Controls.System.TcHmiControl | null);
        /**
         * Destroys the popup and all its controls.
         * @param force If true, child controls will be removed from the parent control before destruction, to ensure destruction in case of keepAlive === true.
         */
        destroy(force?: boolean): void;
        /**
         * Aborts a prompted popup and performs the given action to answer the prompt. If no action is specified, the promise is rejected.
         * @param action The action to perform to answer the prompt.
         */
        abort(action?: ButtonsPrompt.PromptAction<T>): void;
        /**
         * Creates a handler for the pressed event of a button.
         * @param value The value that should be used to answer the prompt when the button is clicked.
         */
        protected __createPressedHandler(value: T, name: string, closePopup: boolean): () => void;
        /**
         * Returns the created buttons.
         */
        getButtons(): Map<string, {
            value: T;
            button: Beckhoff.TcHmiButton;
        }>;
        /**
         * Sets what happens when the user clicks the background while the popup is showing, or when the prompt is
         * aborted via API call.
         * @param action The action to perform. If the popup should be closed, you can specify the name of a button to
         * get the prompt to be answered as if this button was clicked, or directly specify a result to answer the
         * prompt with.
         */
        setBackgroundAction(action: ButtonsPrompt.BackgroundAction<T>): void;
        /**
         * Sets if the close button should be used or not.
         * @param button Defines whether to show the button and if yes, what action should be taken to answer the prompt.
         */
        setCloseButton(button: ButtonsPrompt.CloseButton<T>): void;
        /**
         * Sets if the close button should be used or not.
         * @param show Defines whether to show the button.
         */
        setCloseButton(show: boolean): void;
        /**
         * Performs the background action.
         */
        protected __performPromptAction(toPerform: ButtonsPrompt.PromptAction<T>): void;
        /**
         * DEPRECATED
         * Please use setTexts
         * @param texts A collection of localization symbol expressions.
         * @deprecated Please use setTexts
         */
        setLocalizations(texts: Partial<ButtonsPrompt.LocalizableTexts>): void;
        /**
         * Sets texts which can either be localizable or static.
         */
        setTexts(texts: Partial<ButtonsPrompt.LocalizableTexts>): void;
    }
    namespace ButtonsPrompt {
        interface LocalizableTexts {
            headerText: Localizable;
            buttons: Dictionary<{
                text?: Localizable;
                tooltip?: Localizable;
            }>;
        }
        type BackgroundAction<R = any> = Popup.BackgroundAction<string> | {
            close: true;
            result: R;
        };
        type CloseButton<R = any> = Popup.CloseButton<string> | {
            show: true;
            result: R;
        };
        type PromptAction<R = any> = Popup.PromptAction<string> | {
            result: R;
        };
    }
}
declare namespace TcHmi.Controls.Helpers {
    class HtmlAndButtonsPrompt<T> extends ButtonsPrompt<T> {
        protected __elementContentContent: HTMLElement | null;
        /**
         * Creates a new TextAndButtonsPrompt instance.
         * @param buttons A collection of attributes to generate buttons from and the value that should be used in the prompt answer for each button.
         * @param parentControl The control which owns the popup.
         */
        constructor(buttons: Dictionary<{
            value: T;
            attributes: Dictionary<any>;
        }>, parentControl?: TcHmi.Controls.System.TcHmiControl | null);
        /**
         * Destroys the popup and all its controls.
         * @param force If true, child controls will be removed from the parent control before destruction, to ensure destruction in case of keepAlive === true.
         */
        destroy(force?: boolean): void;
        /**
         * Sets the content element.
         * @param element
         */
        setContentElement(element: HTMLElement): void;
    }
}
declare namespace TcHmi.Controls.Helpers {
    class TextAndButtonsPrompt<T> extends ButtonsPrompt<T> {
        /**
         * Creates a new TextAndButtonsPrompt instance.
         * @param buttons A collection of attributes to generate buttons from and the value that should be used in the prompt answer for each button.
         * @param parentControl The control which owns the popup.
         */
        constructor(buttons: Dictionary<{
            value: T;
            attributes: Dictionary<any>;
        }>, parentControl?: TcHmi.Controls.System.TcHmiControl | null);
        /**
         * DEPRECATED
         * Please use setTexts
         * @param texts A collection of localization symbol expressions.
         * @deprecated Please use setTexts
         */
        setLocalizations(texts: Partial<TextAndButtonsPrompt.LocalizableTexts>): void;
        /**
         * Sets texts which can either be localizable or static.
         */
        setTexts(texts: Partial<TextAndButtonsPrompt.LocalizableTexts>): void;
    }
    namespace TextAndButtonsPrompt {
        interface LocalizableTexts extends ButtonsPrompt.LocalizableTexts {
            contentText: Localizable;
        }
    }
}
declare namespace TcHmi.Controls.Helpers {
    abstract class OkCancelPrompt<T, T2 = void> extends Popup<{
        isOk: true;
        value: T;
    } | {
        isOk: false;
        value?: T2;
    }> {
        protected __okButton: Beckhoff.TcHmiButton;
        protected __cancelButton: Beckhoff.TcHmiButton;
        protected __backgroundAction: Popup.BackgroundAction<OkCancelPrompt.AvailableActions>;
        protected __closeButton: Popup.CloseButton<OkCancelPrompt.AvailableActions>;
        /**
         * Creates a new OkCancelPrompt instance.
         * @param localizations A collection of localization symbol expressions to localize texts in the control.
         * @param parentControl The control which owns the popup.
         */
        constructor(parentControl?: TcHmi.Controls.System.TcHmiControl | null);
        /**
         * Destroys the popup and all its controls.
         * @param force If true, child controls will be removed from the parent control before destruction, to ensure destruction in case of keepAlive === true.
         */
        destroy(force?: boolean): void;
        /**
         * Aborts a prompted popup and performs the given action to answer the prompt. If no action is specified, the promise is rejected.
         * @param action The action to perform to answer the prompt.
         */
        abort(action?: Popup.PromptAction<OkCancelPrompt.AvailableActions>): void;
        /**
         * Handler for the onPressed event of the OK button.
         */
        protected __onOkPressed(): void;
        /**
         * Handler for the onPressed event of the cancel button.
         */
        protected __onCancelPressed(): void;
        /**
         * Performs the action for the OK button, i.e. calling prompt.answer(). Must be implemented by inheriting class.
         * Please check validity in this method and don't rely on the OK buttons isEnabled state, as this method might be called on background click or other events too.
         */
        protected abstract __ok(): void;
        /**
         * Performs the action for the Cancel button.
         */
        protected __cancel(): void;
        /**
         * Sets what happens when the user clicks the background while the popup is showing, or when the prompt is
         * aborted via API call.
         * @param action The action to perform. If the popup should be closed, you can specify ok or cancel to perform
         * the associated action.
         */
        setBackgroundAction(action: Popup.BackgroundAction<OkCancelPrompt.AvailableActions>): void;
        /**
         * Performs the background action.
         */
        protected __performBackgroundAction(): void;
        /**
         * Sets if the close button should be used or not.
         * @param button Defines whether to show the button and if yes, what action should be taken to answer the prompt.
         */
        setCloseButton(button: Popup.CloseButton<OkCancelPrompt.AvailableActions>): void;
        /**
         * Sets if the close button should be used or not.
         * @param show Defines whether to show the button.
         */
        setCloseButton(show: boolean): void;
        /**
         * Performs the given action.
         */
        protected __performPromptAction(toPerform: Popup.PromptAction<OkCancelPrompt.AvailableActions>): void;
        /**
         * DEPRECATED
         * Please use setTexts
         * @param texts A collection of localization symbol expressions.
         * @deprecated Please use setTexts
         */
        setLocalizations(texts: Partial<OkCancelPrompt.LocalizableTexts>): void;
        /**
         * Sets texts which can either be localizable or static.
         */
        setTexts(texts: Partial<OkCancelPrompt.LocalizableTexts>): void;
    }
    namespace OkCancelPrompt {
        interface LocalizableTexts {
            buttonTextOk: Localizable;
            buttonTooltipOk: Localizable;
            buttonTextCancel: Localizable;
            buttonTooltipCancel: Localizable;
        }
        type AvailableActions = 'ok' | 'cancel';
    }
}
declare namespace TcHmi.Controls.Helpers {
    class InputPrompt extends OkCancelPrompt<string> {
        protected __input: Beckhoff.TcHmiInput;
        protected __forbiddenValues: Set<string>;
        protected __validationPatterns: {
            pattern: RegExp;
            expectedTestResult: boolean;
        }[];
        protected __elementLabel: HTMLElement;
        /**
         * Creates a new InputPrompt instance.
         * @param parentControl The control which owns the popup.
         */
        constructor(parentControl?: TcHmi.Controls.System.TcHmiControl | null);
        /**
         * Handler for the onTextChanged event of the input.
         */
        protected __onTextChanged(): void;
        /**
         * Handler for the keydown event of the popup element.
         */
        protected __onKeydown(event: KeyboardEvent): void;
        /**
         * Checks if the text of the input is valid and sets the isEnabled state of the button and the invalid class of the input accordingly.
         */
        protected __validate(): void;
        /**
         * Validates the given text.
         * @param text The text to validate.
         */
        protected __isValid(text: string): boolean;
        /**
         * Performs the action for the OK button, i.e. calling prompt.answer().
         */
        protected __ok(): void;
        /**
         * Shows the popup and waits for the user to answer the prompt. A Promise is returned that will be resolved with the value the user provides.
         * @param forbiddenValues Values that cannot be entered (i.e. because another item with this name already exists).
         * @param defaultValue The default to fill the input with.
         */
        prompt(forbiddenValues?: Iterable<string> | null, defaultValue?: string): Promise<{
            isOk: true;
            value: string;
        } | {
            isOk: false;
            value?: void | undefined;
        }>;
        /**
         * Shows the popup and waits for the user to answer the prompt. A Promise is returned that will be resolved with the value the user provides.
         */
        show(): void;
        setValidationPatterns(patterns: {
            pattern: RegExp;
            expectedTestResult: boolean;
        }[]): void;
        getValidationPatterns(): {
            pattern: RegExp;
            expectedTestResult: boolean;
        }[];
        /**
         * DEPRECATED
         * Please use setTexts
         * @param texts A collection of localization symbol expressions.
         * @deprecated Please use setTexts
         */
        setLocalizations(texts: Partial<InputPrompt.LocalizableTexts>): void;
        /**
         * Sets texts which can either be localizable or static.
         */
        setTexts(texts: Partial<InputPrompt.LocalizableTexts>): void;
    }
    namespace InputPrompt {
        interface LocalizableTexts extends OkCancelPrompt.LocalizableTexts {
            labelText: Localizable;
            headerText: Localizable;
        }
    }
}
declare namespace TcHmi.Controls.Helpers {
    class FilterPrompt extends Popup<Filter> {
        protected __okButton: Beckhoff.TcHmiButton;
        protected __cancelButton: Beckhoff.TcHmiButton;
        protected __resetButton: Beckhoff.TcHmiButton;
        protected __removeButton: Beckhoff.TcHmiButton;
        protected __groupButton: Beckhoff.TcHmiButton;
        protected __ungroupButton: Beckhoff.TcHmiButton;
        protected __elementMenuBar: HTMLElement;
        protected __elementFilterTableHeader: HTMLElement;
        /** The element used to save the space for the group brackets */
        protected __elementIndentationHeader: HTMLElement;
        protected __elementFilterTable: HTMLElement;
        protected __elementFilterTableBody: HTMLElement;
        protected __filter: TcHmi.Filter;
        protected __currentFilter: TcHmi.Filter;
        protected __originalFilter: TcHmi.Filter;
        protected __schemaInfo: FilterPopup.SchemaInfo;
        protected __localizableEnums: FilterPopup.PathInfo[];
        protected __domainPaths: Map<string, FilterPopup.PathInfo>;
        protected __rows: FilterPopup.RowData[];
        protected __selectedRows: FilterPopup.SelectedRow[];
        protected __updateRequired: boolean;
        protected __groupInfo: {
            parent: FilterPopup.FilterNesting;
            toGroup: (Comparison | Filter)[];
        } | null;
        protected __ungroupInfo: {
            parent: FilterPopup.FilterNesting;
            toUngroup: FilterPopup.FilterNesting;
        } | null;
        protected __onScroll(_event: Event): void;
        protected __onLocaleChangedDestroyer: DestroyFunction | null;
        protected __onLocaleChanged(): void;
        protected __localizeRequestId: number | null;
        protected __localization: TcHmi.Locale.PackageLocalization;
        protected __localizedElements: Map<HTMLElement, {
            key: string;
            parameters?: any[];
        }>;
        protected __localizationReader: Locale.LocalizationReader | undefined;
        protected __listDomainsSubscriptionId: number | null;
        protected __backgroundAction: Popup.BackgroundAction<OkCancelPrompt.AvailableActions>;
        protected __closeButton: Popup.CloseButton<OkCancelPrompt.AvailableActions>;
        /**
         * Creates a new OkCancelPrompt instance.
         * @param localizations A collection of localization symbol expressions to localize texts in the control.
         * @param parentControl The control which owns the popup.
         */
        constructor(schema: JsonSchema | null, originalFilter: Filter, parentControl?: TcHmi.Controls.System.TcHmiControl | null);
        /**
         * Destroys the popup and all its controls.
         * @param force If true, child controls will be removed from the parent control before destruction, to ensure destruction in case of keepAlive === true.
         */
        destroy(force?: boolean): void;
        /**
         * Aborts a prompted popup and performs the given action to answer the prompt. If no action is specified, the promise is rejected.
         * @param action The action to perform to answer the prompt.
         */
        abort(action?: Popup.PromptAction<OkCancelPrompt.AvailableActions>): void;
        /**
         * Handler for the onPressed event of the OK button.
         */
        protected __onOkPressed(): void;
        /**
         * Handler for the onPressed event of the cancel button.
         */
        protected __onCancelPressed(): void;
        /**
         * Performs the action for the OK button, i.e. calling prompt.answer().
         */
        protected __ok(): void;
        /**
         * Performs the action for the Cancel button.
         */
        protected __cancel(): void;
        /**
         * Performs the action for the Reset button.
         */
        protected __reset(): void;
        /**
         * Returns the original filter.
         */
        getOriginalFilter(): Filter;
        /**
         * Sets what happens when the user clicks the background while the popup is showing, or when the prompt is
         * aborted via API call.
         * @param action The action to perform. If the popup should be closed, you can specify ok or cancel to perform
         * the associated action.
         */
        setBackgroundAction(action: Popup.BackgroundAction<OkCancelPrompt.AvailableActions>): void;
        /**
         * Sets if the close button should be used or not.
         * @param button Defines whether to show the button and if yes, what action should be taken to answer the prompt.
         */
        setCloseButton(button: Popup.CloseButton<OkCancelPrompt.AvailableActions>): void;
        /**
         * Sets if the close button should be used or not.
         * @param show Defines whether to show the button.
         */
        setCloseButton(show: boolean): void;
        /**
         * Performs the given action.
         */
        protected __performPromptAction(toPerform: Popup.PromptAction<OkCancelPrompt.AvailableActions>): void;
        /**
         * Updates the filter configuration.
         * @param filter The current filter configuration.
         * @param resetable Whether the reset button should be enabled or disabled.
         */
        update(filter: TcHmi.Filter, _resetable: boolean): void;
        /**
         * Update the visual representation of the filter
         */
        protected __update(): void;
        /**
         * Shows the popup.
         */
        show(): void;
        /**
         * Hides the popup and clears the content of the table if necessary.
         */
        hide(): void;
        /**
         * Clears the content of the table.
         */
        protected __clear(): void;
        /**
         * Creates a new row for the filter configuration table.
         * @param indentation The indentation levels and whether this row marks the beginnig, end or middle of an indentation.
         * @param comparison The comparison to configure in this row.
         * @param logic The logic to configure in this row.
         */
        protected __createRow(indentation: FilterPopup.GroupingLevel[], parent: FilterPopup.FilterNesting, comparison: Comparison, logic?: LogicOperator): HTMLTableRowElement;
        /**
         * Updates the controls for comparator and value after path has been changed or row has been created.
         * @param row An object containing the filter objects, table cell elements and controls
         */
        protected __updateControls(row: FilterPopup.RowData): void;
        /**
         * Gets the pathInfo for a given path.
         * @param path The path to get info for.
         */
        protected __getPathInfo(path?: string): FilterPopup.PathInfo | null;
        /**
         * Adds the given row to the __selectedRows collection and enables/disables remove, group and ungroup buttons accordingly.
         * @param row The row to select
         */
        protected __selectRow(row: FilterPopup.SelectedRow): void;
        /**
         * Removes the given row from the __selectedRows collection and enables/disables remove, group and ungroup buttons accordingly.
         * @param row The row to deselect
         */
        protected __deselectRow(row: FilterPopup.SelectedRow): void;
        /**
         * Adds a new row below the lowest selected row or at the end of the table.
         */
        protected __add(): void;
        /**
         * Removes the selected rows.
         */
        protected __remove(): void;
        /**
         * Groups the selected rows if possible.
         */
        protected __group(): void;
        /**
         * Ungroups the selected rows if possible.
         */
        protected __ungroup(ungroupInfo: {
            parent: FilterPopup.FilterNesting;
            toUngroup: FilterPopup.FilterNesting;
        }, rows: FilterPopup.SelectedRow[]): void;
        /**
         * Enables/disables remove, group and ungroup buttons according to currently selected rows.
         */
        protected __processSelection(): void;
        /**
         * Resizes indentation header to match the table content.
         */
        protected __resizeIndentationHeader(): void;
        /**
         * Generates a string consisting of the parentControlId, the name of the popup and a guid to be used as a control id.
         */
        protected __newControlId(): string;
        /**
         * Clones a nesting object while leaving references to filters intact
         * @param nesting The object to clone
         */
        protected __cloneNesting(nesting: FilterPopup.FilterNesting): FilterPopup.FilterNesting;
        /**
         * Parses a JsonSchema into an object detailing which paths are available with which comparators and values.
         * @param schema The JsonSchema to parse.
         */
        protected __parseSchema(schema: JsonSchema | null): {
            schemaInfo: FilterPopup.SchemaInfo;
            localizationInfo: FilterPopup.PathInfo[];
            domainPaths: string[];
        };
        /**
         * Localizes enum labels and updates comboboxes using them.
         */
        protected __localizeEnumLabels(): void;
        /**
         * Subscribes to ListDomains and updates the schemaInfo, if paths containing "domain" exist in the schemaInfo.
         */
        protected __subscribeListDomains(): void;
    }
    namespace FilterPopup {
        interface SchemaInfo {
            availablePaths: Map<string, PathInfo>;
            freePath: PathInfo | null;
            availableLogic: string[];
        }
        interface PathInfo {
            comparators: string[];
            values: any[];
            labels: Map<string | number, string>;
            localizedLabels: Map<string | number, string>;
            allowFreeValue: boolean;
            valueIsDate: boolean;
            valueType: 'string' | 'number' | 'integer' | 'boolean' | 'any';
            nullable: boolean;
            isSuggestion: boolean;
        }
        interface RowData {
            row: HTMLTableRowElement;
            logicOperator?: LogicOperator;
            comparison: Comparison;
            parent: FilterNesting;
            selection: {
                control: Beckhoff.TcHmiCheckbox;
                destroyer: DestroyFunction;
            };
            logic?: {
                control: Beckhoff.TcHmiCombobox<TcHmi.LogicOperator['logic']>;
                destroyer: DestroyFunction;
            };
            path: {
                control: Beckhoff.TcHmiCombobox | Beckhoff.TcHmiTextbox | null;
                destroyer: DestroyFunction | null;
            };
            comparator: {
                cell: HTMLTableCellElement;
                control: Beckhoff.TcHmiCombobox<string, Beckhoff.TcHmiCombobox.ListItemGeneric<string>[]> | null;
                destroyer: DestroyFunction | null;
            };
            value: {
                cell: HTMLTableCellElement;
                control: Beckhoff.TcHmiCombobox | Beckhoff.TcHmiTextbox | Beckhoff.TcHmiDateTimeInput | null;
                destroyer: DestroyFunction | null;
            };
        }
        interface SelectedRow {
            rowElement: HTMLTableRowElement;
            comparison: Comparison;
            parent: FilterNesting;
        }
        interface FilterNesting {
            filter: Filter;
            parent: FilterNesting | null;
        }
        interface GroupingLevel {
            opens: boolean;
            closes: boolean;
        }
    }
}
//# sourceMappingURL=TcHmiPopups.d.ts.map