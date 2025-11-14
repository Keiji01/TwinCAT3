declare namespace TcHmi.Controls.Beckhoff {
    class TcHmiTextbox extends TcHmi.Controls.System.TcHmiControl {
        #private;
        constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
        /** Reference to the root dom element of the current control template as  jquery object. */
        protected __elementTemplateRoot: JQuery;
        /** Reference to the dom element in current control template which handles the border style as jquery object. */
        protected __elementBorder: JQuery;
        /** Reference to the element containing the text input element as jquery object. */
        protected __elementContainer: JQuery;
        /**
         * Reference to the underlying html text textarea or input element as jquery object.
         * Will be populated on demand in setters since 1.12
         */
        protected __elementInput: JQuery<HTMLInputElement | HTMLTextAreaElement> | undefined;
        /** Reference to the dom element in current control template which handles the focus style as jquery object. */
        protected __elementFocusBorder: JQuery;
        /**
         * Is set to true if the control is locked and to false if the control is unlocked.
         * When the control is locked, calls to setText are ignored.
         */
        protected __locked: boolean;
        /**  Internal reference to the attribute "data-tchmi-text" */
        protected __text: string | undefined;
        /**  Internal reference to the attribute "data-tchmi-system-keyboard-input-mode" */
        protected __systemKeyboardInputMode: TcHmi.Keyboard.KeyboardInputMode | undefined;
        /**  Internal reference to the attribute "data-tchmi-ignore-escape-sequences" */
        protected __ignoreEscapeSequences: boolean | undefined;
        /** Text at focusin time */
        protected __oldText: string | undefined;
        /** Internal reference to the attribute "data-tchmi-text-horizontal-alignment */
        protected __textHorizontalAlignment: TcHmi.HorizontalAlignment | null | undefined;
        /**
         * Internal reference to the attribute "data-tchmi-content-padding"
         */
        protected __contentPadding: TcHmi.FourSidedCss | null | undefined;
        /**
         * Internal reference to the attribute "data-tchmi-text-font-size"
         */
        protected __textFontSize: number | undefined;
        /**
         * Internal reference to the attribute "data-tchmi-text-font-size-unit"
         */
        protected __textFontSizeUnit: FontSizeUnit | undefined;
        /**
         * Internal reference to the attribute "data-tchmi-text-font-family"
         */
        protected __textFontFamily: FontFamily | null | undefined;
        /**
         * Internal reference to the attribute "data-tchmi-text-font-style"
         */
        protected __textFontStyle: FontStyle | undefined;
        /**
         * Internal reference to the attribute "data-tchmi-text-font-style"
         */
        protected __textFontWeight: FontWeight | undefined;
        /**
         * Internal reference to the attribute "data-tchmi-multiline"
         */
        protected __multiline: boolean | undefined;
        /**
         * Internal reference to the attribute "data-tchmi-word-wrap"
         */
        protected __wordWrap: boolean | undefined;
        /**
         * Internal reference to the attribute "data-tchmi-placeholder"
         */
        protected __placeholder: string | null | undefined;
        /**
         * Internal reference to the attribute "data-tchmi-text-color"
         */
        protected __textColor: TcHmi.SolidColor | null | undefined;
        /**
         * Internal reference to the attribute "data-tchmi-auto-focus-out"
         */
        protected __autoFocusOut: boolean | undefined;
        /**
         * Internal reference to the attribute "data-tchmi-auto-select-text"
         */
        protected __autoSelectText: boolean | undefined;
        /**
         * Internal reference to the attribute "data-tchmi-horizontal-scroll"
         */
        protected __horizontalScroll: TcHmiTextbox.ScrollMode | undefined;
        /**
         * Internal reference to the attribute "data-tchmi-vertical-scroll"
         */
        protected __verticalScroll: TcHmiTextbox.ScrollMode | undefined;
        /**
         * ReadOnly state of the control.
         */
        protected __isReadOnly: boolean | undefined;
        /**
         * MaxTextLength value of the input.
         */
        protected __maxTextLength: number | undefined | null;
        /** Internal reference to the attribute "data-tchmi-reset-to-last-valid-value" */
        protected __resetToLastValidValue: boolean | undefined;
        protected __valueBuffer: Helpers.ValueBuffer<string> | undefined;
        /** Localization */
        protected __localizedCustomValidity: {
            key: string;
            parameters: any[];
        };
        protected __localizationReader: Locale.LocalizationReader | undefined;
        /** Reference to the invalid notification label element as html label element. */
        protected __elementInvalidNotificationLabel: HTMLLabelElement;
        /** Interaction has started so we should raise event after it. */
        protected __triggerUIFinishedOnBlur: boolean;
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
         * Handle submit on keydown
         */
        protected __onKeydown(event: KeyboardEvent): void;
        /**
         * Handle value change on "input" to support virtual keyboards on mobile devices
         * which caches the value while editing (iOS for example)
         * input is fired when the keys has changed text
         */
        protected __onInput(_event: Event): void;
        /**
         * Is raised if text is pasted into the underlying textarea element.
         */
        protected __onPaste(_event: Event): void;
        /**
         * Is raised if text is cut from the underlying textarea element.
         */
        protected __onCut(_event: Event): void;
        /**
         * Is raised if the underlying input element gets the focus.
         */
        protected __onFocusIn(event: FocusEvent): void;
        /**
         * Is raised if the underlying input element has lost its focus.
         */
        protected __onFocusOut(event: FocusEvent): void;
        /**
         * Performs the steps after a focusout event was received.
         * @param event The focusout event.
         */
        protected __performFocusOut(event: Event): void;
        /**
         * Is raised after successful interaction with a TcHmiKeyboard control with indirect input.
         * @param event
         */
        protected __onIndirectInputFinished(_event: Event): void;
        /**
         * Is raised after canceled interaction with a TcHmiKeyboard control with indirect input.
         * @param event
         */
        protected __onIndirectInputCanceled(event: Event): void;
        /**
         * Sets the value of the member variable "text" if the new value is not equal to the current value
         * or the current control instance is locked and calls the associated process function (processText) after that.
         * @param valueNew The new value for text.
         */
        setText(valueNew: string | null): void;
        /**
         * Sets the value of the member variable "text" regardless of lock.
         * @param valueNew The new value for text
         */
        protected __setText(valueNew: string | null | undefined, process?: boolean): void;
        /**
         * Returns the current value of the member variable text.
         */
        getText(): string | undefined;
        /**
         * Processes the current value of text and forwards it to the value attribute of the underlying input variable.
         * The current value of text is only forwarded if it is no binding expression.
         */
        protected __processText(): void;
        /**
         * Sets the value of the member variable SystemKeyboardInputMode.
         * @param valueNew The new value for SystemKeyboardInputMode.
         */
        setSystemKeyboardInputMode(valueNew: TcHmi.Keyboard.KeyboardInputMode | null): void;
        /**
         * Returns the current value of the member variable text.
         * @returns the current value of the member variable text.
         */
        getSystemKeyboardInputMode(): string | undefined;
        protected __processSystemKeyboardInputMode(): void;
        /**
         * Sets the value of the member variable IgnoreEscapeSequences.
         * @param valueNew The new value for IgnoreEscapeSequences
         */
        setIgnoreEscapeSequences(valueNew: boolean | null | undefined): void;
        /**
         * Returns the current value of IgnoreEscapeSequences.
         * @returns The current value of IgnoreEscapeSequences.
         */
        getIgnoreEscapeSequences(): boolean | undefined;
        /**
         * Sets the text horizontal alignment and calls the associated process function (processTextHorizontalAlignment).
         * @param valueNew The new value for textHorizontalAlignment.
         */
        setTextHorizontalAlignment(valueNew: HorizontalAlignment | null): void;
        /**
         * Returns the current value of textHorizontalAlignment.
         * @returns The current value of textHorizontalAlignment.
         */
        getTextHorizontalAlignment(): HorizontalAlignment | null | undefined;
        /**
         * Processes the current textHorizontalAlignment attribute value.
         */
        protected __processTextHorizontalAlignment(): void;
        /**
         * Sets the contentPadding value and calls the associated process function (processContentPadding) after it.
         * @param valueNew The new value for the contentPadding attribute as object.
         */
        setContentPadding(valueNew: FourSidedCss | null): void;
        /**
         * The watch callback for the contentPadding object resolver.
         */
        protected __onResolverForContentPaddingWatchCallback(data: Symbol.ObjectResolver.IWatchResultObject<FourSidedCss>): void;
        /**
         * Returns the current contentPadding value.
         * @returns The current value of the contentPadding member variable as json in string format.
         */
        getContentPadding(): FourSidedCss | null | undefined;
        /**
         * Processes the current contentPadding attribute.
         */
        protected __processContentPadding(): void;
        /**
         * Sets the font size and calls the associated process function (processTextFontSize).
         * @param valueNew The new value for textFontSize.
         */
        setTextFontSize(valueNew: number | null): void;
        /**
         * Returns the current value of textFontSize.
         * @returns The current value of textFontSize.
         */
        getTextFontSize(): number | undefined;
        /**
         * Processes the current textFontSize attribute value.
         */
        protected __processTextFontSize(): void;
        /**
         * Sets the font size and calls the associated process function (processTextFontSizeUnit).
         * @param valueNew The new value for textFontSize.
         */
        setTextFontSizeUnit(valueNew: FontSizeUnit | null): void;
        /**
         * Returns the current value of textFontSizeUnit.
         * @returns The current value of textFontSizeUnit.
         */
        getTextFontSizeUnit(): FontSizeUnit | undefined;
        /**
         * Processes the current textFontSizeUnit attribute value.
         */
        protected __processTextFontSizeUnit(): void;
        /**
         * Sets the font family and calls the associated process function (processTextFontFamily).
         * @param valueNew The new value for textFontFamily.
         */
        setTextFontFamily(valueNew: FontFamily | null): void;
        /**
         * Returns the current value of textFontFamily.
         * @returns The current value of textFontFamily.
         */
        getTextFontFamily(): string | null | undefined;
        /**
         * Processes the current textFontFamily attribute value.
         */
        protected __processTextFontFamily(): void;
        /**
         * Sets the font style and calls the associated process function (processTextFontStyle).
         * @param valueNew The new value for textFontStyle.
         */
        setTextFontStyle(valueNew: FontStyle | null): void;
        /**
         * Returns the current value of textFontStyle.
         * @returns The current value of textFontStyle.
         */
        getTextFontStyle(): FontStyle | undefined;
        /**
         * Processes the current textFontStyle attribute value.
         */
        protected __processTextFontStyle(): void;
        /**
         * Sets the font weight and calls the associated process function (processTextFontWeight).
         * @param valueNew The new value for textFontWeight.
         */
        setTextFontWeight(valueNew: FontWeight | null): void;
        /**
         * Returns the current value of textFontWeight.
         * @returns The current value of textFontWeight.
         */
        getTextFontWeight(): FontWeight | undefined;
        /**
         * Processes the current textFontWeight attribute value.
         */
        protected __processTextFontWeight(): void;
        /**
         * Sets the multiline value and calls the associated process function (processMultiline).
         * @param valueNew The new value for multiline.
         */
        setMultiline(valueNew: boolean | null): void;
        /**
         * Returns the current value of multiline.
         * @returns The current value of multiline.
         */
        getMultiline(): boolean | undefined;
        /**
         * Processes the current multiline attribute value.
         */
        protected __processMultiline(): void;
        /**
         * Sets the wordWrap value and calls the associated process function (processWordWrap).
         * @param valueNew The new value for wordWrap.
         */
        setWordWrap(valueNew: boolean | null): void;
        /**
         * Returns the current value of wordWrap.
         * @returns The current value of wordWrap.
         */
        getWordWrap(): boolean | undefined;
        /**
         * Processes the current wordWrap attribute value.
         */
        protected __processWordWrap(): void;
        /**
         * Sets the placeholder value and calls the associated process function (processPlaceholder).
         * @param valueNew The new value for placeholder.
         */
        setPlaceholder(valueNew: string | null): void;
        /**
         * Returns the current value of placeholder.
         * @returns The current value of placeholder.
         */
        getPlaceholder(): string | null | undefined;
        /**
         * Processes the current placeholder attribute value.
         */
        protected __processPlaceholder(): void;
        /**
         * Sets the text color and calls the associated process function (processTextColor).
         * @param valueNew The new value for textColor.
         */
        setTextColor(valueNew: SolidColor | null): void;
        /**
         * The watch callback for the textColor object resolver.
         */
        protected __onResolverForTextColorWatchCallback(data: Symbol.ObjectResolver.IWatchResultObject<SolidColor>): void;
        /**
         * Returns the current value of textColor.
         * @returns The current value of textColor.
         */
        getTextColor(): SolidColor | null | undefined;
        /**
         * Processes the current textColor attribute value.
         */
        protected __processTextColor(): void;
        /**
         * Sets the auto focus out attribute and calls the associated process function (processAutoFocusOut).
         * @param valueNew The new value for autoFocusOut.
         */
        setAutoFocusOut(valueNew: boolean | null): void;
        /**
         * Returns the current value of autoFocusOut.
         * @returns The current value of autoFocusOut.
         */
        getAutoFocusOut(): boolean | undefined;
        /**
         * Processes the current autoFocusOut attribute value.
         */
        protected __processAutoFocusOut(): void;
        /**
         * Sets the auto select text attribute and calls the associated process function (processAutoSelectText).
         * @param valueNew The new value for autoSelectText.
         */
        setAutoSelectText(valueNew: boolean | null): void;
        /**
         * Returns the current value of autoSelectText.
         * @returns The current value of autoSelectText.
         */
        getAutoSelectText(): boolean | undefined;
        /**
         * Sets the horizontal scroll attribute and calls the associated process function (processHorizontalScroll).
         * @param valueNew The new value for horizontalScroll.
         */
        setHorizontalScroll(valueNew: TcHmiTextbox.ScrollMode | keyof typeof TcHmiTextbox.ScrollMode | null): void;
        /**
         * Returns the current value of horizontalScroll.
         * @returns The current value of horizontalScroll.
         */
        getHorizontalScroll(): "Auto" | "Never" | "Always" | undefined;
        /**
         * Processes the current horizontalScroll attribute value.
         */
        protected __processHorizontalScroll(): void;
        /**
         * Sets the vertical scroll attribute and calls the associated process function (processVerticalScroll).
         * @param valueNew The new value for verticalScroll.
         */
        setVerticalScroll(valueNew: TcHmiTextbox.ScrollMode | keyof typeof TcHmiTextbox.ScrollMode | null): void;
        /**
         * Returns the current value of verticalScroll.
         * @returns The current value of verticalScroll.
         */
        getVerticalScroll(): "Auto" | "Never" | "Always" | undefined;
        /**
         * Processes the current verticalScroll attribute value.
         */
        protected __processVerticalScroll(): void;
        /** Lock handling */
        /**
         * Lock the control. Calls to setText will be ignored until control is unlocked.
         */
        __lock(): void;
        /**
         * Unlocks the control.
         */
        __unlock(): void;
        /**
         * Checks if the Control is deactivated and adjusts the visualization
         */
        protected __processControlActivation(): void;
        /**
         * Processes the current isEnabled attribute value.
         */
        __processIsEnabled(): void;
        /**
         * Processes the current AccessConfig attribute value.
         */
        __processAccessConfig(): void;
        /**
         * Sets the isReadOnly attribute and calls the associated process function (processIsReadOnly).
         * @preserve (Part of the public API)
         */
        setIsReadOnly(valueNew: boolean | null): void;
        /**
         * Returns the effective value of isReadOnly based on own and parent isReadOnly variable.
         */
        getIsReadOnly(): boolean | undefined;
        /**
         * Process IsReadOnly.
         */
        protected __processIsReadOnly(): void;
        /**
         * Sets the focus to the html input / textarea element.
         */
        focus(): void;
        /**
         * Sets the maxTextLength attribute and calls the associated process function (processMaxTextLength).
         * @preserve (Part of the public API)
         */
        setMaxTextLength(valueNew: number | null): void;
        /**
         * Returns the value of maxTextLength.
         */
        getMaxTextLength(): number | null | undefined;
        /**
         * Process MaxTextLength.
         */
        protected __processMaxTextLength(): void;
        /**
         * Validates the value of the html input element.
         * Higlights the controls if value is out of range.
         */
        protected __validateTextValue(newValue: string | undefined): boolean;
        /**
         * Sets the resetToLastValidValue attribute.
         * @param valueNew The new value for resetToLastValidValue.
         */
        setResetToLastValidValue(valueNew: boolean | null): void;
        /**
         * Returns the current value of resetToLastValidValue.
         * @returns The current value of resetToLastValidValue.
         */
        getResetToLastValidValue(): boolean | undefined;
        /**
         * Processes the current ResetToLastValidValue attribute value.
         */
        __processResetToLastValidValue(): void;
        /**
         * Sets the inputProcessingPoint attribute.
         * @param valueNew The new value for inputProcessingPoint.
         */
        setInputProcessingPoint(valueNew: Helpers.InputProcessingPoint | keyof typeof Helpers.InputProcessingPoint | null): void;
        /**
         * Returns the current value of inputProcessingPoint.
         * @returns The current value of inputProcessingPoint.
         */
        getInputProcessingPoint(): Helpers.InputProcessingPoint | undefined;
        /**
         * Processes the current InputProcessingPoint attribute value.
         */
        __processInputProcessingPoint(): void;
        /**
         * Change the localization of the input elements validity
         * @param key The localization key.
         * @param parameters Optional parameters to pass to tchmi_format_string.
         */
        private __setLocalizedInputValidity;
    }
    namespace TcHmiTextbox {
        enum ScrollMode {
            Never = 0,
            Always = 1,
            Auto = 2
        }
    }
}
//# sourceMappingURL=TcHmiTextbox.d.ts.map