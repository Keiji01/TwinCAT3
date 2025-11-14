declare namespace TcHmi.Controls.Beckhoff {
    class TcHmiKeyboard extends TcHmi.Controls.System.TcHmiControl {
        #private;
        constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
        protected __elementTemplateRoot: JQuery;
        protected __elementPaddingContainer: JQuery;
        /** Localization Creator */
        protected __localizedElements: Map<string, Element>;
        protected __localizationReader: Locale.LocalizationReader | undefined;
        protected __layouts: TcHmiKeyboard.LayoutCollection | null;
        protected __currentLayout: TcHmiKeyboard.Layout;
        protected __layoutLoaded: Promise<void> | null;
        protected __fixedTargetInputElements: HTMLCollectionOf<HTMLInputElement> | null;
        protected __fixedTargetTextareaElements: HTMLCollectionOf<HTMLTextAreaElement> | null;
        /**
         * Internal reference to the attribute "data-tchmi-project-layout-file"
         */
        protected __layoutFile: string | null | undefined;
        /**
         * Internal reference to the attribute "data-tchmi-scale-mode"
         */
        protected __scaleMode: ScaleModeString | undefined;
        /**
         * Internal reference to the attribute "data-tchmi-fixed-target"
         */
        protected __fixedTarget: string | undefined;
        /**
         * Internal reference to the attribute "data-tchmi-release-sticky-keys-manually"
         */
        protected __releaseStickyKeysManually: boolean | undefined;
        /**
         * Internal reference to the attribute "data-tchmi-validate-input-hints"
         */
        protected __inputHintsValidation: TcHmiKeyboard.ValidationLevel | undefined;
        /**
         * Internal reference to the attribute "data-tchmi-keyboard-padding"
         */
        protected __keyboardPadding: PixelFourSidedCss | null | undefined;
        /**
         * Internal reference to the attribute "data-tchmi-key-padding"
         */
        protected __keyPadding: FourSidedCss | null | undefined;
        /**
         * Internal reference to the attribute "data-tchmi-additional-key-backdrop-padding"
         */
        protected __additionalKeyBackdropPadding: FourSidedCss | null | undefined;
        /**
         * Internal reference to the attribute "data-tchmi-longpress-delay"
         */
        protected __longpressDelay: number | undefined;
        /**
         * Internal reference to the attribute "data-tchmi-repetition-delay"
         */
        protected __repetitionDelay: number | undefined;
        /**
         * Internal reference to the attribute "data-tchmi-indirect-input-horizontal-alignment"
         */
        protected __indirectInputHorizontalAlignment: HorizontalAlignment | undefined;
        /**
         * Internal reference to the attribute "data-tchmi-indirect-input-font-size"
         */
        protected __indirectInputFontSize: number | null | undefined;
        /**
         * Internal reference to the attribute "data-tchmi-indirect-input-font-size-unit"
         */
        protected __indirectInputFontSizeUnit: FontSizeUnit | undefined;
        /**
         * Internal reference to the attribute "data-tchmi-indirect-input-padding"
         */
        protected __indirectInputPadding: FourSidedCss | null | undefined;
        /**
         * Internal reference to the attribute "data-tchmi-label-font-size"
         */
        protected __labelFontSize: number | undefined;
        /**
         * Internal reference to the attribute "data-tchmi-label-font-size-unit"
         */
        protected __labelFontSizeUnit: FontSizeUnit | undefined;
        /**
         * Internal reference to the attribute "data-tchmi-label-font-family"
         */
        protected __labelFontFamily: FontFamily | null | undefined;
        /**
         * Internal reference to the attribute "data-tchmi-label-font-style"
         */
        protected __labelFontStyle: FontStyle | undefined;
        /**
         * Internal reference to the attribute "data-tchmi-label-font-style"
         */
        protected __labelFontWeight: FontWeight | undefined;
        /**
         * Internal reference to the attribute "data-tchmi-label-stroke-thickness"
         */
        protected __labelStrokeThickness: number | null | undefined;
        /**
         * Internal reference to the attribute "data-tchmi-key-background-color"
         */
        protected __keyBackgroundColor: Color | null | undefined;
        /**
         * Internal reference to the attribute "data-tchmi-label-color"
         */
        protected __labelColor: SolidColor | null | undefined;
        /**
         * Internal reference to the attribute "data-tchmi-label-stroke-color"
         */
        protected __labelStrokeColor: SolidColor | null | undefined;
        /**
         * Internal reference to the attribute "data-tchmi-label-fill-color"
         */
        protected __labelFillColor: Color | null | undefined;
        /**
         * Internal reference to the attribute "data-tchmi-additional-key-backdrop-color"
         */
        protected __additionalKeyBackdropColor: Color | null | undefined;
        /** Store modifier keys */
        protected __modifiers: TcHmiKeyboard.Modifiers;
        protected __keys: Map<HTMLElement, TcHmiKeyboard.KeyDefinition>;
        protected __additionalKeys: Map<HTMLElement, HTMLElement>;
        /** Remember which keys are interacted with to reliably detect end of interaction */
        protected __pressedKeyMouse: HTMLElement | null;
        protected __pressedKeysTouch: {
            touchID: number;
            keyElement: HTMLElement | null;
        }[];
        protected __pressedKeys: {
            element: HTMLElement;
            key: TcHmiKeyboard.SimpleKey;
        }[];
        /**
         * Promises for each keyboard configs as object.
         * Key is the url.
         */
        protected static __layoutCache: Map<string, Promise<TcHmiKeyboard.LayoutCollection>>;
        protected __keyActions: Dictionary<{
            press: (key: TcHmiKeyboard.StandardKey, activeInput: HTMLInputElement | HTMLTextAreaElement | null, sequenceIndex: number) => void;
            release?: (key: TcHmiKeyboard.StandardKey, activeInput: HTMLInputElement | HTMLTextAreaElement | null, sequenceIndex: number) => void;
            getInputEventInit?: (key: TcHmiKeyboard.StandardKey, activeInput: HTMLInputElement | HTMLTextAreaElement | null, sequenceIndex: number) => InputEventInit | null;
        }>;
        protected __keyCodes: Dictionary<number>;
        protected __specialKeys: Dictionary<{
            char: string;
            code?: number;
        } | undefined>;
        protected __stickiedKeys: TcHmiKeyboard.StickiedKey[];
        protected __keysToStick: TcHmiKeyboard.StickiedKey[];
        protected __compositionKey: SelectableRequired<TcHmiKeyboard.StandardKey, 'composition'> | null;
        protected __interactedKeys: {
            element: HTMLElement;
            key: TcHmiKeyboard.Key;
            pressed: boolean;
            timeoutID: number;
            timedOut: boolean;
            hideAdditionalKeys?: boolean;
        }[];
        protected __additionalKeysBaseKey: {
            element: HTMLElement;
            dragging: boolean;
        } | null;
        protected __arrowUpDownTarget: {
            left: number;
            input: HTMLInputElement | HTMLTextAreaElement;
            selectionStart: number;
            selectionEnd: number;
        } | null;
        protected __shownLabels: Element[];
        protected __hiddenLabels: Element[];
        protected __indirectInputElement: HTMLInputElement | HTMLTextAreaElement | null;
        protected __indirectInputAcceptElements: HTMLElement[];
        protected __inputHints: TcHmiKeyboardHelpers.InputHints;
        /**
         * Element which is the target with indirect input layouts.
         * Direct input layouts write always to document.activeElement
         */
        protected __activeElement: HTMLInputElement | HTMLTextAreaElement | null;
        protected __fixedTargetObserver: MutationObserver | null;
        /** We are setting focus to another element but want to keep old reference. */
        protected __ignoreSetActiveElement: boolean;
        protected __indirectInputInProgress: boolean;
        protected __iframes: Set<HTMLIFrameElement>;
        protected __processWidthOnResized: boolean;
        protected __processHeightOnResized: boolean;
        /** Destroys the onAttached event of the fixed target control */
        protected __destroyOnAttached: DestroyFunction | null;
        /** Destroys the onDestroyed event of the fixed target control */
        protected __destroyOnDestroyed: DestroyFunction | null;
        protected __destroyOnHideAdditionalKeys: DestroyFunction[];
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
         * Handles the onResized event.
         */
        protected __onResized(_event: EventProvider.Event, _control: Controls.System.baseTcHmiControl): void;
        /**
         * Handles the iframeElementAdded event.
         * @param event The event object.
         * @param iFrame The iframe that was added to the DOM.
         */
        protected __onIframeElementAdded(_event: EventProvider.Event, iFrame: HTMLIFrameElement): void;
        /**
         * Handles the iframeElementRemoved event.
         * @param _event The event object.
         * @param iFrame The iframe that was removed from the DOM.
         */
        protected __onIframeElementRemoved(_event: EventProvider.Event, iFrame: HTMLIFrameElement): void;
        /**
         * Handles the load event of iframes.
         * @param event The event.
         */
        protected __onIframeLoad(event: Event): void;
        /**
         * Adds document level event listeners and, if needed, observes mutations in the iframe.
         * @param iframe The iframe that was added or loaded.
         */
        protected __handleIframeAddedOrLoaded(iframe: HTMLIFrameElement): void;
        /**
         * Handles the focusin events of all elements in the document.
         */
        protected __onFocusIn(event: FocusEvent): void;
        /**
         * Handles the focusout events of all elements in the document.
         */
        protected __onFocusOut(event: FocusEvent): void;
        /**
         * Handles the mousedown and touchstart events on the root element.
         */
        protected __onRootMouseDownOrTouchStart(event: MouseEvent | TouchEvent): void;
        /**
         * Handles the mousedown and touchstart events on the document root.
         */
        protected __onDocumentMouseDownOrTouchStart(event: MouseEvent | TouchEvent): void;
        /**
         * Handles the mousedown event.
         */
        protected __onMouseDown(event: MouseEvent): void;
        /**
         * Handles the mouseenter event.
         */
        protected __onMouseOver(event: MouseEvent): void;
        /**
         * Handles the mouseleave event.
         */
        protected __onMouseOut(event: MouseEvent): void;
        /**
         * Handles the mouseup event.
         */
        protected __onMouseUp(event: MouseEvent): void;
        /**
         * Handles the touchstart event.
         */
        protected __onTouchStart(event: TouchEvent): void;
        /**
         * Handles the touchmove event.
         */
        protected __onTouchMove(event: TouchEvent): void;
        /**
         * Handles the touchend and touchmove events.
         */
        protected __onTouchEndOrCancel(event: TouchEvent): void;
        /**
         * Handles the case when the mouse cursor or a touchpoint leaves the currently interacted with key.
         * @param keyElement The key HTML element that is being interacted with.
         * @param coordinates The coordinates of the mouse cursor or touch point.
         */
        protected __handleMouseOrTouchLeave(keyElement: HTMLElement, coordinates: {
            x: number;
            y: number;
        }): boolean;
        /**
         * Handles the input event of the indirect input element.
         * @param _event The event object.
         */
        protected __onInput(_event: InputEvent): void;
        /**
         * Adds listeners for the focusin, focusout, mousedown and touchstart events to the target.
         * @param target The document or window to add the event listeners to.
         */
        protected __addDocumentLevelEventListeners(target: Document): void;
        /**
         * Removes the listeners for the focusin, focusout, mousedown and touchstart events from the target.
         * @param target The document or window to remove the event listeners from.
         */
        protected __removeDocumentLevelEventListeners(target: Document): void;
        /**
         * Show additional keys.
         * @param keyElement The key HTML element containing the additional keys.
         */
        protected __showAdditionalKeys(keyElement: HTMLElement): void;
        /**
         * Hide additional keys and remove the key containing the additional keys from interactedKeys.
         */
        protected __hideAdditionalKeys(): void;
        /**
         * Handles beginning of interaction with keys. Registers the key as being interacted with and sets timeout functions if longpress action is not none.
         * @param keyElement The key HTML element on which the interaction has started.
         */
        protected __keyInteractionStarted(keyElement: HTMLElement): void;
        /**
         * Handles end of interaction with keys. Registers the key as a stickied key when it is marked as sticky, otherwise releases it.
         * @param keyElement The key HTML element on which the interaction has ended.
         */
        protected __keyInteractionEnded(keyElement: HTMLElement): void;
        /**
         * Dispatch events for the pressed key and call the associated action.
         * @param key The key to press.
         * @param repeat Whether the event is a repeating event.
         */
        protected __pressKey(key: TcHmiKeyboard.Key, repeat?: boolean): void;
        /**
         * Sends keypress, beforeinput and input events to targetElement and performs the key press action.
         * @param key The key to send.
         * @param targetElement The target element to send events to and whose value should be modified.
         * @param sequenceIndex The index of the key and code in the key object. Useful when more than one key is mapped
         * to one "physical" key.
         * @param repeat Whether the event is a repeating event.
         * @returns
         */
        protected __sendKeyPressToInput(key: TcHmiKeyboard.StandardKey, targetElement: Element, sequenceIndex: number, repeat: boolean): void;
        /**
         * Dispatch events for the released key and call the associated action.
         * @param key The key to release.
         */
        protected __releaseKey(key: TcHmiKeyboard.Key): void;
        /**
         * Get a key object from the HTMLElement which was interacted with.
         * @param keyElement The HTMLElement representing the key.
         */
        protected __getKey(keyElement: HTMLElement): TcHmiKeyboard.Key;
        /**
         * Gets the input or textarea element that KeyboardEvents should be sent to and characters typed into.
         */
        protected __getTargetElement(): Element | null;
        /**
         * Dispatch a keydown, keypress or keyup event.
         * @param target The element which will receive the event.
         * @param type The type of the event; keydown, keypress or keyup.
         * @param key The key which was pressed or released.
         * @param sequenceIndex The index of the key and code in the key object. Useful when more than one key is mapped
         * to one "physical" key.
         * @param repeat Whether the event is a repeating event.
         * @returns Whether the event propagated all the way to the root element or whether preventDefault was called.
         */
        protected __dispatchKeyEvent(target: EventTarget, type: 'keydown' | 'keypress' | 'keyup', key: TcHmiKeyboard.StandardKey, sequenceIndex: number, repeat?: boolean): boolean;
        /**
         * Changes the value of the specified modifier and sets the corresponding classes on the control root element.
         * @param key The modifier to change.
         * @param value The new value of the modifier. If this parameter is not specified, the modifier is inverted.
         */
        protected __toggleModifier(key: keyof TcHmiKeyboard.Modifiers, value?: boolean): void;
        /**
         * Updates the *-active classes on the control root element to reflect the currently active modifiers.
         */
        protected __updateActiveModifiers(): void;
        /**
         * Registers a key as stickied.
         * @param key The key to stick.
         * @param lock Setting this to true causes the key to remain stickied after another key was pressed. Locked keys
         * become unstickied only if the unlock parameter is passed to the __unstickKey function, which typically only
         * happens if the stickied key itself is pressed again.
         */
        protected __stickKey(key: TcHmiKeyboard.StandardKey, lock?: boolean): void;
        /**
         * Unregisters a stickied key and releases it.
         * @param key The key to unstick.
         * @param unlock Set this to true to unstick a locked stickied key.
         */
        protected __unstickKey(key: TcHmiKeyboard.StickiedKey | TcHmiKeyboard.StandardKey, unlock?: boolean): boolean | undefined;
        /**
         * Unregisters and releases all stickied keys.
         * @param force Set to true to unstick keys even if they are locked or releaseStickyKeysManually is true.
         */
        protected __unstickAllKeys(force?: boolean): void;
        /**
         * Finds and returns the first key in the given stickied key collection that matches the key and keyPath properties of the given search key.
         * @param searchKey The key to search for.
         * @param stickiedKeyCollection The collection in which to search.
         */
        protected __getStickiedKey(searchKey: TcHmiKeyboard.StandardKey, stickiedKeyCollection: TcHmiKeyboard.StickiedKey[]): TcHmiKeyboard.StickiedKey | undefined;
        /**
         * Copies all properties of a key into a new object and adds locked and stickTime properties.
         * @param key The key to convert.
         * @param locked Wheter the stickied key should be locked.
         */
        protected __keyToStickiedKey(key: TcHmiKeyboard.StandardKey, locked: boolean): TcHmiKeyboard.StickiedKey;
        /**
         * Gets the new caret position when an action is performed that moves the caret left. Respects the state of the
         * control key.
         * @param currentPosition The current position of the caret.
         * @param text The text the caret is positioned in.
         * @param ignoreModifiers Whether to respect the control key status. If the control key is pressed and not
         * ignored the caret will be moved to the previous word boundary.
         * @param ignoreWhitespace Whether to respect whitespace if control is pressed. Useful for password inputs.
         */
        protected __caretPositionLeft(currentPosition: number, text: string, ignoreModifiers: boolean, ignoreWhitespace: boolean): number;
        /**
         * Gets the new caret position when an action is performed that moves the caret right. Respects the state of the
         * control key.
         * @param currentPosition The current position of the caret.
         * @param text The text the caret is positioned in.
         * @param ignoreModifiers Whether to respect the control key status. If the control key is pressed and not
         * ignored the caret will be moved to the next word boundary.
         * @param ignoreWhitespace Whether to respect whitespace if control is pressed. Useful for password inputs.
         */
        protected __caretPositionRight(currentPosition: number, text: string, ignoreModifiers: boolean, ignoreWhitespace: boolean): number;
        /**
         * Moves the caret of activeInput in the specified direction to a position returned by positionFinder. Respects the state of the shift key and modifies selections accordingly.
         * @param activeInput The input element in which the caret should be moved
         * @param direction The direction in which the caret will be moved. Important to distinguish between selection expansion and reduction.
         * @param positionFinder A function returning the new position of the caret.
         * @param ignoreModifiers Whether to ignore modifiers for this movement.
         */
        protected __moveCaret(activeInput: HTMLInputElement | HTMLTextAreaElement, direction: 'forward' | 'backward', positionFinder: (currentPosition: number) => number, ignoreModifiers: boolean): [selectionStart: number, selectionEnd: number];
        /**
         * Sets selectionStart and selectionEnd of the specified element to the specified value and sets selectionDirection to 'forward'.
         * @param activeInput The element in which the caret position should be set.
         * @param position The new caret position.
         */
        protected __setCaretPosition(activeInput: HTMLInputElement | HTMLTextAreaElement, position: number): void;
        /**
         * Sets the caret position in the given element after clipping the given position to possible values.
         * @param activeInput The element in which the caret position should be set.
         * @param startOrEnd Whether to set the caret at the start or end of the current selection.
         * @param position The position to set the caret to.
         */
        protected __setSelectionStartOrEnd(activeInput: HTMLInputElement | HTMLTextAreaElement, startOrEnd: 'selectionStart' | 'selectionEnd', position: number): void;
        /**
         * Gets the caret position in the given element and clips it to possible values.
         * @param activeInput The element containing the caret.
         * @param startOrEnd Whether to get the caret at the start or at the end of the current selection.
         */
        protected __getSelectionStartOrEnd(activeInput: HTMLInputElement | HTMLTextAreaElement, startOrEnd: 'selectionStart' | 'selectionEnd'): number;
        /**
         * Scrolls activeInput so the caret is in view.
         * @param activeInput The element which should be scrolled.
         */
        protected __scrollCaretIntoViewbox(activeInput: HTMLInputElement | HTMLTextAreaElement): void;
        /**
         * Gets a div with the same styles as the passed HTMLElement. Only styles affecting text rendering are copied. Used in conjunction with __getCaretCoordinates.
         * @param element The element to mirror.
         */
        protected __getMirrorElement(element: HTMLElement): HTMLDivElement;
        /**
         * Gets the pixel coordinates of a caret placed in a text in the passed HTMLElement.
         * @param mirrorElement The element in which the text should be rendered.
         * @param text The text in which the caret is positioned.
         * @param caretPosition The position of the caret.
         */
        protected __getCaretCoordinates(mirrorElement: HTMLElement, text: string, caretPosition: number): {
            top: number;
            left: number;
        };
        /**
         * Replaces escaped characters with their unescaped counterparts.
         * @param value The string to unescape.
         */
        protected __unescape(value: string): string;
        /**
         * Checks if an element is a textarea or an input of type password, search, tel, text or url
         * Other input types do not support selection to allow future interfaces
         * https://html.spec.whatwg.org/multipage/input.html#do-not-apply
         * @param element The element to check
         * @param forIndirectInput Whether to check if the element is suitable for direct or indirect input
         */
        protected __isSuitableElement(element: Element | null, forIndirectInput?: boolean): element is HTMLInputElement | HTMLTextAreaElement;
        /**
         * Checks wether the keyboard can write into the given element with the current layout.
         * @param element The element to check.
         */
        isSupported(element: Element | null): Promise<boolean>;
        /**
         * Maps legacy layout names to their current counterparts.
         * @param oldName The legacy layout name.
         */
        private __mapLayoutNameToLayoutFileName;
        /**
         * Processes the current width and width unit.
         */
        __processWidth(): void;
        /**
         * Processes the current height and height unit.
         */
        __processHeight(): void;
        /**
         * Sets the value of the width mode attribute.
         * @param valueNew The new width mode value.
         */
        setWidthMode(valueNew: SizeModeWithContent | null): void;
        /**
         * Sets the value of the height mode attribute.
         * @param valueNew The new height mode value.
         */
        setHeightMode(valueNew: SizeModeWithContent | null): void;
        /**
         * Returns the calculated width in pixel if self defined (not percent based) or based on the content control.
         */
        __getContentWidth(): number | null;
        /**
         * Returns the calculated height in pixel if self defined (not percent based) or based on the children.
         */
        __getContentHeight(): number | null;
        /**
         * Sets the value via the legacy 'data-tchmi-layout' attribute. (legacy pre 1.12 api with layout in control)
         * @param valueNew The new value for layout.
         * @deprecated use setLayoutFile with adjusted parameter
         */
        setLayout(valueNew: string | null): void;
        /**
         * Returns null to prevent crashes in legacy JS code for the old 'data-tchmi-layout' attribute.
         * @deprecated use getLayoutFile
         */
        getLayout(): null;
        /**
         * Sets the value of the 'data-tchmi-layout-file' attribute for keyboard in project.
         * @param valueNew The new value for layoutFile.
         */
        setLayoutFile(valueNew: string | null): void;
        /**
         * Gets the value of the 'data-tchmi-layout-file' attribute.
         */
        getLayoutFile(): string | null | undefined;
        /**
         * Processes the value of the 'data-tchmi-layout-file' attribute.
         */
        protected __processLayoutFile(): Promise<void>;
        /**
         * Processes the content of the received layout file.
         */
        protected __processLayoutJsonFile(): void;
        /**
         * Creates HTMLElements according to the passed layout.
         * @param layout The layout to activate.
         */
        protected __activateLayout(layout: TcHmiKeyboard.Layout): void;
        /**
         * Creates a key HTML element.
         * @param definition The definition of the key.
         */
        protected __createKey(definition: TcHmiKeyboard.KeyDefinition): HTMLElement | undefined;
        /**
         * Creates a new indirect input element, if necessary.
         * @param definition The definiton for the indirect input textbox.
         * @param activeElement The currently active element.
         * @param replaceOld Set to true to replace the element in the DOM.
         */
        private __updateIndirectInputElement;
        /**
         * Sets the value of the 'data-tchmi-scale-mode' attribute.
         * @param valueNew The new value for scaleMode.
         */
        setScaleMode(valueNew: ScaleModeString | null): void;
        /**
         * Gets the value of the 'data-tchmi-scale-mode' attribute.
         */
        getScaleMode(): ScaleModeString | undefined;
        /**
         * Processes the value of the 'data-tchmi-scale-mode' attribute.
         */
        protected __processScaleMode(): void;
        /**
         * Sets the value of the 'data-tchmi-fixed-target' attribute.
         * @param valueNew The new value for fixedTarget.
         */
        setFixedTarget(valueNew: string | null): void;
        /**
         * Gets the value of the 'data-tchmi-fixed-target' attribute.
         */
        getFixedTarget(): string | undefined;
        /**
         * Processes the value of the 'data-tchmi-fixed-target' attribute.
         */
        protected __processFixedTarget(): void;
        /**
         * Sets the value of the 'data-tchmi-release-sticky-keys-manually' attribute.
         * @param valueNew The new value for releaseStickyKeysManually.
         */
        setReleaseStickyKeysManually(valueNew: boolean | null): void;
        /**
         * Gets the value of the 'data-tchmi-release-sticky-keys-manually' attribute.
         */
        getReleaseStickyKeysManually(): boolean | undefined;
        /**
         * Processes the value of the 'data-tchmi-release-sticky-keys-manually' attribute.
         */
        protected __processReleaseStickyKeysManually(): void;
        /**
         * Sets the value of the 'data-tchmi-input-hints-validation' attribute.
         * @param valueNew The new value for inputHintsValidation.
         */
        setInputHintsValidation(valueNew: TcHmiKeyboard.ValidationLevel | keyof typeof TcHmiKeyboard.ValidationLevel | null): void;
        /**
         * Gets the value of the 'data-tchmi-input-hints-validation' attribute.
         */
        getInputHintsValidation(): "None" | "HighlightHints" | "DisableAccept" | undefined;
        /**
         * Processes the value of the 'data-tchmi-input-hints-validation' attribute.
         */
        protected __processInputHintsValidation(): void;
        /**
         * Adds new entries to __pressedKeys and raises the .onKeyPressStarted Event.
         * @param keyElement The key element being pressed.
         */
        protected __raiseKeyPressStarted(keyElement: HTMLElement): void;
        /**
         * Removes entries from __pressedKeys and raises the .onKeyPressCanceled or .onKeyPressFinished Event and the .onKeyPressEnded Event.
         * @param keyElement The key element which was released.
         * @param canceledOrFinished Whether the key press was canceled or finished.
         */
        protected __raiseKeyPressEnded(keyElement: HTMLElement, canceledOrFinished: 'Canceled' | 'Finished'): void;
        /**
         * Sets enabled states on indirect input controls and sets the indirect input text.
         * @param element The new active element or null if the active element is not an input or textarea element.
         */
        protected __setActiveElement(element: HTMLInputElement | HTMLTextAreaElement | null): void;
        /**
         * Sets the initially active elements.
         */
        protected __setInitialActiveElements(): void;
        /**
         * Focuses the keyboard-owned textbox and sets its selection to that of the original active element, if possible.
         */
        protected __startIndirectInput(): void;
        /**
         * Focuses the original active element and sets its selection to that of the keyboard-owned textbox, if possible.
         */
        protected __endIndirectInput(canceled?: boolean): void;
        /**
         * Returns a value indicating whether indirect input is currently in progress.
         */
        getIsIndirectInputInProgress(): boolean;
        /**
         * Focuses the indirect input textbox, if it exists.
         */
        focusIndirectInputTextbox(): void;
        /**
         * Gets the value of the 'data-tchmi-pressed-keys' readonly attribute.
         */
        getPressedKeys(): TcHmiKeyboard.SimpleKey[];
        /**
         * Sets the given elements value to the given string, but only if the element is not disabled or read only.
         * @param element The element whose value should be set.
         * @param value The value to set.
         */
        protected __setInputElementValue(element: HTMLInputElement | HTMLTextAreaElement, value: string): void;
        /**
         * Sets the longpressDelay and calls the associated process function (processLongpressDelay).
         * @param valueNew The new value for longpressDelay.
         */
        setLongpressDelay(valueNew: number | null): void;
        /**
         * Returns the current value of longpressDelay.
         * @returns The current value of longpressDelay.
         */
        getLongpressDelay(): number | undefined;
        /**
         * Processes the current longpressDelay attribute value.
         */
        protected __processLongpressDelay(): void;
        /**
         * Sets the repetitionDelay and calls the associated process function (processRepetitionDelay).
         * @param valueNew The new value for repetitionDelay.
         */
        setRepetitionDelay(valueNew: number | null): void;
        /**
         * Returns the current value of repetitionDelay.
         * @returns The current value of repetitionDelay.
         */
        getRepetitionDelay(): number | undefined;
        /**
         * Processes the current repetitionDelay attribute value.
         */
        protected __processRepetitionDelay(): void;
        /**
         * Sets the indirectInputHorizontalAlignment value and calls the associated process function (processIndirectInputHorizontalAlignment).
         * @param valueNew The new value for indirectInputHorizontalAlignment.
         */
        setIndirectInputHorizontalAlignment(valueNew: HorizontalAlignment | null): void;
        /**
         * Returns the current value of indirectInputHorizontalAlignment.
         * @returns The current value of indirectInputHorizontalAlignment.
         */
        getIndirectInputHorizontalAlignment(): HorizontalAlignment | undefined;
        /**
         * Processes the current indirectInputHorizontalAlignment attribute value.
         */
        protected __processIndirectInputHorizontalAlignment(): void;
        /**
         * Sets the indirectInputFontSize value and calls the associated process function (processIndirectInputFontSize).
         * @param valueNew The new value for indirectInputFontSize.
         */
        setIndirectInputFontSize(valueNew: number | null): void;
        /**
         * Returns the current value of indirectInputFontSize.
         * @returns The current value of indirectInputFontSize.
         */
        getIndirectInputFontSize(): number | null | undefined;
        /**
         * Processes the current indirectInputFontSize attribute value.
         */
        protected __processIndirectInputFontSize(): void;
        /**
         * Sets the indirectInputFontSizeUnit value and calls the associated process function (processIndirectInputFontSizeUnit).
         * @param valueNew The new value for indirectInputFontSizeUnit.
         */
        setIndirectInputFontSizeUnit(valueNew: DimensionUnit | null): void;
        /**
         * Returns the current value of indirectInputFontSizeUnit.
         * @returns The current value of indirectInputFontSizeUnit.
         */
        getIndirectInputFontSizeUnit(): FontSizeUnit | undefined;
        /**
         * Processes the current indirectInputFontSizeUnit attribute value.
         */
        protected __processIndirectInputFontSizeUnit(): void;
        /**
         * Sets the indirectInputPadding value and calls the associated process function (processIndirectInputPadding).
         * @param valueNew The new value for indirectInputPadding.
         */
        setIndirectInputPadding(valueNew: FourSidedCss | null): void;
        /**
         * The watch callback for the keyboardPadding object resolver.
         */
        protected __onResolverForIndirectInputPaddingWatchCallback(data: Symbol.ObjectResolver.IWatchResultObject<PixelFourSidedCss>): void;
        /**
         * Returns the current value of indirectInputPadding.
         * @returns The current value of indirectInputPadding.
         */
        getIndirectInputPadding(): FourSidedCss | null | undefined;
        /**
         * Processes the current indirectInputPadding attribute value.
         */
        protected __processIndirectInputPadding(): void;
        /**
         * Sets the value of the 'data-tchmi-keyboard-padding' attribute.
         * @param valueNew The new value for keyboardPadding.
         */
        setKeyboardPadding(valueNew: PixelFourSidedCss | null): void;
        /**
         * The watch callback for the keyboardPadding object resolver.
         */
        protected __onResolverForKeyboardPaddingWatchCallback(data: Symbol.ObjectResolver.IWatchResultObject<PixelFourSidedCss>): void;
        /**
         * Gets the value of the 'data-tchmi-keyboard-padding' attribute.
         */
        getKeyboardPadding(): PixelFourSidedCss | null | undefined;
        /**
         * Processes the value of the 'data-tchmi-keyboard-padding' attribute.
         */
        protected __processKeyboardPadding(): void;
        /**
         * Sets the value of the 'data-tchmi-key-padding' attribute.
         * @param valueNew The new value for keyPadding.
         */
        setKeyPadding(valueNew: PixelFourSidedCss | null): void;
        /**
         * The watch callback for the keyPadding object resolver.
         */
        protected __onResolverForKeyPaddingWatchCallback(data: Symbol.ObjectResolver.IWatchResultObject<PixelFourSidedCss>): void;
        /**
         * Gets the value of the 'data-tchmi-key-padding' attribute.
         */
        getKeyPadding(): FourSidedCss | null | undefined;
        /**
         * Processes the value of the 'data-tchmi-key-padding' attribute.
         */
        protected __processKeyPadding(): void;
        /**
         * Sets the value of the 'data-tchmi-additional-key-backdrop-padding' attribute.
         * @param valueNew The new value for additionalKeyBackdropPadding.
         */
        setAdditionalKeyBackdropPadding(valueNew: FourSidedCss | null): void;
        /**
         * The watch callback for the additionalKeyBackdropPadding object resolver.
         */
        protected __onResolverForAdditionalKeyBackdropPaddingWatchCallback(data: Symbol.ObjectResolver.IWatchResultObject<FourSidedCss>): void;
        /**
         * Gets the value of the 'data-tchmi-additional-key-backdrop-padding' attribute.
         */
        getAdditionalKeyBackdropPadding(): FourSidedCss | null | undefined;
        /**
         * Processes the value of the 'data-tchmi-additional-key-backdrop-padding' attribute.
         */
        protected __processAdditionalKeyBackdropPadding(): void;
        /**
         * Sets the font size and calls the associated process function (processLabelFontSize).
         * @param valueNew The new value for labelFontSize.
         */
        setLabelFontSize(valueNew: number | null): void;
        /**
         * Returns the current value of labelFontSize.
         * @returns The current value of labelFontSize.
         */
        getLabelFontSize(): number | undefined;
        /**
         * Processes the current labelFontSize attribute value.
         */
        protected __processLabelFontSize(): void;
        /**
         * Sets the font size and calls the associated process function (processLabelFontSizeUnit).
         * @param valueNew The new value for labelFontSizeUnit.
         */
        setLabelFontSizeUnit(valueNew: FontSizeUnit | null): void;
        /**
         * Returns the current value of labelFontSizeUnit.
         * @returns The current value of labelFontSizeUnit.
         */
        getLabelFontSizeUnit(): FontSizeUnit | undefined;
        /**
         * Processes the current labelFontSizeUnit attribute value.
         */
        protected __processLabelFontSizeUnit(): void;
        /**
         * Sets the font family and calls the associated process function (processLabelFontFamily).
         * @param valueNew The new value for labelFontFamily.
         */
        setLabelFontFamily(valueNew: FontFamily | null): void;
        /**
         * Returns the current value of labelFontFamily.
         * @returns The current value of labelFontFamily.
         */
        getLabelFontFamily(): string | null | undefined;
        /**
         * Processes the current labelFontFamily attribute value.
         */
        protected __processLabelFontFamily(): void;
        /**
         * Sets the font style and calls the associated process function (processLabelFontStyle).
         * @param valueNew The new value for labelFontStyle.
         */
        setLabelFontStyle(valueNew: FontStyle | null): void;
        /**
         * Returns the current value of labelFontStyle.
         * @returns The current value of labelFontStyle.
         */
        getLabelFontStyle(): FontStyle | undefined;
        /**
         * Processes the current labelFontStyle attribute value.
         */
        protected __processLabelFontStyle(): void;
        /**
         * Sets the font weight and calls the associated process function (processLabelFontWeight).
         * @param valueNew The new value for labelFontWeight.
         */
        setLabelFontWeight(valueNew: FontWeight | null): void;
        /**
         * Returns the current value of labelFontWeight.
         * @returns The current value of labelFontWeight.
         */
        getLabelFontWeight(): FontWeight | undefined;
        /**
         * Processes the current labelFontWeight attribute value.
         */
        protected __processLabelFontWeight(): void;
        /**
         * Sets the font weight and calls the associated process function (processLabelStrokeThickness).
         * @param valueNew The new value for labelStrokeThickness.
         */
        setLabelStrokeThickness(valueNew: number | null): void;
        /**
         * Returns the current value of labelStrokeThickness.
         * @returns The current value of labelStrokeThickness.
         */
        getLabelStrokeThickness(): number | null | undefined;
        /**
         * Processes the current labelStrokeThickness attribute value.
         */
        protected __processLabelStrokeThickness(): void;
        /**
         * Sets the keyBackground color and calls the associated process function (processKeyBackgroundColor).
         * @param valueNew The new value for keyBackgroundColor.
         */
        setKeyBackgroundColor(valueNew: Color | null): void;
        /**
         * The watch callback for the keyBackgroundColor object resolver.
         */
        protected __onResolverForKeyBackgroundColorWatchCallback(data: Symbol.ObjectResolver.IWatchResultObject<Color>): void;
        /**
         * Returns the current value of keyBackgroundColor.
         * @returns The current value of keyBackgroundColor.
         */
        getKeyBackgroundColor(): Color | null | undefined;
        /**
         * Processes the current keyBackgroundColor attribute value.
         */
        protected __processKeyBackgroundColor(): void;
        /**
         * Sets the label color and calls the associated process function (processLabelColor).
         * @param valueNew The new value for labelColor.
         */
        setLabelColor(valueNew: SolidColor | null): void;
        /**
         * The watch callback for the labelColor object resolver.
         */
        protected __onResolverForLabelColorWatchCallback(data: Symbol.ObjectResolver.IWatchResultObject<SolidColor>): void;
        /**
         * Returns the current value of labelColor.
         * @returns The current value of labelColor.
         */
        getLabelColor(): SolidColor | null | undefined;
        /**
         * Processes the current labelColor attribute value.
         */
        protected __processLabelColor(): void;
        /**
         * Sets the labelStroke color and calls the associated process function (processLabelStrokeColor).
         * @param valueNew The new value for labelStrokeColor.
         */
        setLabelStrokeColor(valueNew: SolidColor | null): void;
        /**
         * The watch callback for the labelStrokeColor object resolver.
         */
        protected __onResolverForLabelStrokeColorWatchCallback(data: Symbol.ObjectResolver.IWatchResultObject<SolidColor>): void;
        /**
         * Returns the current value of labelStrokeColor.
         * @returns The current value of labelStrokeColor.
         */
        getLabelStrokeColor(): SolidColor | null | undefined;
        /**
         * Processes the current labelStrokeColor attribute value.
         */
        protected __processLabelStrokeColor(): void;
        /**
         * Sets the labelFill color and calls the associated process function (processLabelFillColor).
         * @param valueNew The new value for labelFillColor.
         */
        setLabelFillColor(valueNew: Color | null): void;
        /**
         * The watch callback for the labelFillColor object resolver.
         */
        protected __onResolverForLabelFillColorWatchCallback(data: Symbol.ObjectResolver.IWatchResultObject<Color>): void;
        /**
         * Returns the current value of labelFillColor.
         * @returns The current value of labelFillColor.
         */
        getLabelFillColor(): Color | null | undefined;
        /**
         * Processes the current labelFillColor attribute value.
         */
        protected __processLabelFillColor(): void;
        /**
         * Sets the additionalKeyBackdrop color and calls the associated process function (processAdditionalKeyBackdropColor).
         * @param valueNew The new value for additionalKeyBackdropColor.
         */
        setAdditionalKeyBackdropColor(valueNew: Color | null): void;
        /**
         * The watch callback for the additionalKeyBackdropColor object resolver.
         */
        protected __onResolverForAdditionalKeyBackdropColorWatchCallback(data: Symbol.ObjectResolver.IWatchResultObject<Color>): void;
        /**
         * Returns the current value of additionalKeyBackdropColor.
         * @returns The current value of additionalKeyBackdropColor.
         */
        getAdditionalKeyBackdropColor(): Color | null | undefined;
        /**
         * Processes the current additionalKeyBackdropColor attribute value.
         */
        protected __processAdditionalKeyBackdropColor(): void;
    }
    namespace TcHmiKeyboard {
        interface LayoutCollection {
            useIndirectInput?: boolean;
            showHintsInIndirectInputTextbox?: boolean;
            /** Used only for engineering */
            hasNumPad?: boolean;
            /** English name of the keyboard. Used only for engineering */
            displayName?: string;
            /** ISO name for the language used with the keyboard. Used only for engineering */
            localeName?: string;
            /** Script tag of the local (for example 'Latn' or 'Cyrl'). Currently unused, but intended for engineering */
            script?: string;
            layouts: Layout[];
        }
        interface Layout {
            name: string;
            dimensions: Dimensions;
            keys: KeyDefinition[];
        }
        type StandardKeyType = 'character' | 'modifier' | 'action' | 'edit';
        type KeyDefinition = StandardKeyDefinition | LayoutSwitchKeyDefinition | IndirectInputKeyDefinition | InputHintsKeyDefinition;
        interface BaseKeyDefinition {
            geometry: {
                /** Definition as percent of the full keyboard */
                top: number;
                /** Definition as percent of the full keyboard */
                left: number;
                /** Definition as percent of the full keyboard */
                width: number;
                /** Definition as percent of the full keyboard */
                height: number;
            };
            type?: StandardKeyType | 'layout-switch' | 'indirect-input' | 'input-hints';
            labels?: LabelDefinition[];
        }
        interface StandardKeyDefinition extends BaseKeyDefinition {
            mode?: 'normal' | 'sticky' | 'toggle';
            code: string;
            type?: StandardKeyType;
            shiftType?: StandardKeyType;
            ctrlType?: StandardKeyType;
            shiftCtrlType?: StandardKeyType;
            altType?: StandardKeyType;
            ctrlAltType?: StandardKeyType;
            shiftCtrlAltType?: StandardKeyType;
            numlockType?: StandardKeyType;
            key: string;
            shiftKey?: string;
            ctrlKey?: string;
            shiftCtrlKey?: string;
            altKey?: string;
            ctrlAltKey?: string;
            shiftCtrlAltKey?: string;
            numlockKey?: string;
            composition?: Dictionary<string>;
            shiftComposition?: Dictionary<string>;
            ctrlComposition?: Dictionary<string>;
            shiftCtrlComposition?: Dictionary<string>;
            altComposition?: Dictionary<string>;
            ctrlAltComposition?: Dictionary<string>;
            shiftCtrlAltComposition?: Dictionary<string>;
            numlockComposition?: Dictionary<string>;
            capsLock?: {
                type?: StandardKeyType;
                shiftType?: StandardKeyType;
                ctrlType?: StandardKeyType;
                shiftCtrlType?: StandardKeyType;
                altType?: StandardKeyType;
                ctrlAltType?: StandardKeyType;
                shiftCtrlAltType?: StandardKeyType;
                numlockType?: StandardKeyType;
                key: string;
                shiftKey?: string;
                ctrlKey?: string;
                shiftCtrlKey?: string;
                altKey?: string;
                ctrlAltKey?: string;
                shiftCtrlAltKey?: string;
                numlockKey?: string;
                composition?: Dictionary<string>;
                shiftComposition?: Dictionary<string>;
                ctrlComposition?: Dictionary<string>;
                shiftCtrlComposition?: Dictionary<string>;
                altComposition?: Dictionary<string>;
                ctrlAltComposition?: Dictionary<string>;
                shiftCtrlAltComposition?: Dictionary<string>;
                numlockComposition?: Dictionary<string>;
            };
            longpressAction?: 'none' | 'repeat' | 'additionalKeys' | 'lock';
            additionalKeys?: KeyDefinition[];
            location?: 'standard' | 'left' | 'right' | 'numpad' | 'left,right';
            noCapsLock?: boolean;
            ignoreModifiers?: boolean;
        }
        interface LayoutSwitchKeyDefinition extends BaseKeyDefinition {
            type: 'layout-switch';
            layoutName: string;
        }
        interface IndirectInputKeyDefinition extends BaseKeyDefinition {
            type: 'indirect-input';
            component: 'accept' | 'cancel' | 'textbox' | 'hints';
        }
        interface InputHintsKeyDefinition extends BaseKeyDefinition {
            type: 'input-hints';
        }
        function isStandardKeyDefinition(obj: KeyDefinition): obj is StandardKeyDefinition;
        type LabelDefinition = TextLabelDefinition | SvgLabelDefinition | ImageLabelDefinition;
        interface BaseLabelDefinition {
            type: 'text' | 'svg' | 'image';
            position?: string;
            visible?: string[];
            hidden?: string[];
        }
        interface TextLabelDefinition extends BaseLabelDefinition {
            type: 'text';
            text: string;
        }
        interface SvgLabelDefinition extends BaseLabelDefinition {
            type: 'svg';
            svg: {
                dimensions: Dimensions;
                path: string;
            };
        }
        interface ImageLabelDefinition extends BaseLabelDefinition {
            type: 'image';
            image: {
                dimensions?: Dimensions;
                source: string;
            };
        }
        interface Dimensions {
            width: number;
            height: number;
        }
        type Key = StandardKey | LayoutSwitch | IndirectInputKey | InputHints;
        interface StandardKey {
            code: string[];
            key: string[];
            keyPath: string[];
            unmodifiedKey: string[];
            type: KeyType.CHARACTER | KeyType.MODIFIER | KeyType.ACTION | KeyType.EDIT;
            mode: KeyMode;
            location: KeyLocation[];
            active: boolean;
            locked: boolean;
            noCapsLock: boolean;
            ignoreModifiers: boolean;
            valid: boolean;
            longpressAction: LongpressAction;
            composition?: Dictionary<string>;
            specialCapslock: boolean;
        }
        interface StickiedKey extends StandardKey {
            locked: boolean;
            stickTime: number;
        }
        interface SimpleKey {
            /** Special string for each physical key on the keyboard (does not have to be the same as the corresponding char) */
            code: string;
            /** Value of the key pressed */
            key: string;
            unmodifiedKey: string;
            /** Location of the pressed key  */
            location: 'standard' | 'left' | 'right' | 'numpad';
        }
        interface LayoutSwitch {
            type: KeyType.LAYOUTSWITCH;
            layoutName: string;
        }
        interface IndirectInputKey {
            type: KeyType.INDIRECTINPUT;
            component: IndirectInputComponent;
        }
        interface InputHints {
            type: KeyType.INPUTHINTS;
        }
        function isStandardKey(obj: Key): obj is StandardKey;
        enum KeyType {
            CHARACTER = 0,
            MODIFIER = 1,
            ACTION = 2,
            EDIT = 3,
            LAYOUTSWITCH = 4,
            INDIRECTINPUT = 5,
            INPUTHINTS = 6
        }
        enum KeyMode {
            NORMAL = 0,
            STICKY = 1,
            TOGGLE = 2
        }
        enum KeyLocation {
            STANDARD = 0,
            LEFT = 1,
            RIGHT = 2,
            NUMPAD = 3
        }
        enum LongpressAction {
            NONE = 0,
            REPEAT = 1,
            ADDITIONALKEYS = 2,
            LOCK = 3
        }
        enum IndirectInputComponent {
            TEXTBOX = 0,
            ACCEPT = 1,
            CANCEL = 2
        }
        interface Modifiers {
            Shift: boolean;
            Control: boolean;
            Alt: boolean;
            Meta: boolean;
            CapsLock: boolean;
            NumLock: boolean;
            Insert: boolean;
        }
        interface TcHmiKeyboardEventInit extends KeyboardEventInit {
            charCode?: number;
            keyCode?: number;
            which?: number;
        }
        enum ValidationLevel {
            None = 0,
            HighlightHints = 1,
            DisableAccept = 2
        }
    }
}
declare namespace TcHmi.Controls.Beckhoff.TcHmiKeyboardHelpers {
    export class InputHints {
        protected __keysHost: HTMLElement;
        protected __parentControl: Controls.System.TcHmiControl;
        protected __localization: Locale.ControlLocalization;
        protected __localizedElements: Map<HTMLElement, {
            key: string;
            parameters?: any[];
        }>;
        protected __localizationReader: Locale.LocalizationReader | undefined;
        protected __focusedElement: HTMLInputElement | HTMLTextAreaElement | null;
        protected __mutationObserver: MutationObserver;
        protected __onUpdate: Helpers.CallbackManager<() => void>;
        /**
         * Event that is triggered when the min or max values are updated.
         */
        onUpdate: Readonly<{
            add: (callback: () => void) => DestroyFunction;
            remove: (callback: () => void) => void;
        }>;
        protected __element: HTMLDivElement;
        protected __min: MinHint;
        protected __max: MaxHint;
        protected __displayType: InputHints.DisplayType;
        protected __alignment: 'Left' | 'Right';
        /**
         * Create a new InputHints instance.
         * @param __keysHost The element containing the keys in the DOM.
         * @param __parentControl The parent control instance.
         */
        constructor(__keysHost: HTMLElement, __parentControl: Controls.System.TcHmiControl);
        /**
         * Updates the hints values and visibility. Will add the hints to the DOM if necessary. Changes to the min and
         * max attributes of the focused element will be observed and trigger an update.
         * @param focusedElement The element that currently has focus.
         */
        update(focusedElement: HTMLInputElement | HTMLTextAreaElement | null): void;
        /**
         * Updates the hints values and visibility. Will add the hints to the DOM if necessary.
         */
        protected __update(): void;
        /**
         * Shows the hints, but only if displayType is not None.
         */
        protected __show(): void;
        /**
         * Hides the hints.
         */
        hide(): void;
        /**
         * Validates the current input and highlights any hints being violated. Returns false if at least one hint is violated.
         * @param currentInput The current input of the keyboard.
         */
        validate(currentInput: string): boolean;
        /**
         * Resets the validation highlighting.
         */
        resetValidation(): void;
        /**
         * Gets the element that contains the hints.
         */
        getElement(): HTMLDivElement;
        /**
         * Sets how the hints should be displayed: As an overlay over the indirect input textbox, at a position defined
         * by the layout, or not at all.
         * @param displayType The display type.
         */
        setDisplayType(displayType: InputHints.DisplayType): void;
        /**
         * Gets the display type.
         */
        getDisplayType(): InputHints.DisplayType;
        /**
         * Sets whether the hints should be left or right aligned.
         * @param alignment The new alignment.
         */
        setAlignment(alignment: 'Left' | 'Right'): void;
        /**
         * Gets the alignment.
         */
        getAlignment(): "Left" | "Right";
        /**
         * Add an element to be localized.
         * @param element The element.
         * @param key The localization key.
         * @param parameters Optional parameters to pass to tchmi_format_string.
         */
        protected __addLocalizedElement(element: HTMLElement, key: string, ...parameters: any[]): void;
        /**
         * Remove a localized element.
         * @param element The element to remove.
         */
        protected __removeLocalizedElement(element: HTMLElement): void;
    }
    export namespace InputHints {
        enum DisplayType {
            None = 0,
            TextboxOverlay = 1,
            LayoutDefined = 2
        }
    }
    abstract class InputHint {
        protected __parent: HTMLElement;
        protected __value: number | null;
        protected __displayValue: string | null;
        protected __elementLabel: HTMLSpanElement;
        protected __elementValue: HTMLSpanElement;
        /**
         * Creates a new InputHint instance to manage the hints DOM elements.
         * @param __parent The element that should contain the input hint elements.
         */
        constructor(__parent: HTMLElement);
        /**
         * Set the value of this input hint and write it to the DOM if no display value is defined. Also hides or shows the hint.
         * @param value The new value.
         */
        set value(value: number | null);
        /**
         * Get the value of this input hint.
         */
        get value(): number | null;
        /**
         * Set the displayed value of this input hint and write it to the DOM. Also hides or shows the hint.
         * @param value The new value.
         */
        set displayValue(value: string | null);
        /**
         * Get the displayed value of this input hint.
         */
        get displayValue(): string | null;
        /**
         * Writes the hints displayValue or value to the DOM and hides or shows the hint.
         */
        protected __updateHint(): void;
        /**
         * Show this input hint by adding it to the DOM.
         */
        abstract show(): void;
        /**
         * Hide this input hint by removing it from the DOM.
         */
        hide(): void;
        /**
         * Checks whether the given value is valid for this hint an updates the violated state accordingly.
         * @param value The value to check.
         */
        validate(value: number): boolean;
        /**
         * Checks whether the given value is valid.
         * @param value The value to check.
         */
        protected abstract __isValidValue(value: number): boolean;
        /**
         * Resets the validation highlighting.
         */
        resetValidation(): void;
        /**
         * Set the violated state of this input hint.
         * @param violated The violated state.
         */
        protected __setIsViolated(violated: boolean): void;
    }
    class MinHint extends InputHint {
        /**
         * Creates a new MinHint instance to manage the hints DOM elements.
         * @param parent The element that should contain the input hint elements.
         * @param localizer An object containig functions to add and remove elements to a localization collection.
         */
        constructor(parent: HTMLElement, localizer: {
            add: (element: HTMLElement, key: string, ...parameters: any[]) => void;
            remove: (element: HTMLElement) => void;
        });
        /**
         * Show this input hint by adding it to the DOM.
         */
        show(): void;
        /**
         * Checks whether the given value is valid.
         * @param value The value to check.
         */
        protected __isValidValue(value: number): boolean;
    }
    class MaxHint extends InputHint {
        /**
         * Creates a new MaxHint instance to manage the hints DOM elements.
         * @param parent The element that should contain the input hint elements.
         * @param localizer An object containig functions to add and remove elements to a localization collection.
         */
        constructor(parent: HTMLElement, localizer: {
            add: (element: HTMLElement, key: string, ...parameters: any[]) => void;
            remove: (element: HTMLElement) => void;
        });
        /**
         * Show this input hint by adding it to the DOM.
         */
        show(): void;
        /**
         * Checks whether the given value is valid.
         * @param value The value to check.
         */
        protected __isValidValue(value: number): boolean;
    }
    export {};
}
//# sourceMappingURL=TcHmiKeyboard.d.ts.map