declare namespace TcHmi.Controls.Beckhoff {
    class TcHmiButton extends TcHmi.Controls.System.TcHmiControl {
        #private;
        constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
        /** Reference to the root dom element of the current control template as  jquery object. */
        protected __elementTemplateRoot: JQuery;
        /** Reference to the span element which is used to display the text value as jquery object. */
        protected __elementContentTextSpan: JQuery;
        /**
         * Internal reference to the attribute "data-tchmi-text"
         */
        protected __text: string | undefined;
        /**  Internal reference to the attribute "data-tchmi-ignore-escape-sequences" */
        protected __ignoreEscapeSequences: boolean | undefined;
        /**
         * Internal reference to the attribute "data-tchmi-text-padding"
         */
        protected __textPadding: TcHmi.FourSidedCss | null | undefined;
        /**
         * Internal reference to the attribute "data-tchmi-horizontal-text-alignment"
         */
        protected __textHorizontalAlignment: TcHmi.HorizontalAlignment | null | undefined;
        /**
         * Internal reference to the attribute "data-tchmi-vertical-text-alignment"
         */
        protected __textVerticalAlignment: TcHmi.VerticalAlignment | null | undefined;
        /**
         * Internal reference to the icon attributes.
         */
        protected __icon: Partial<TcHmi.Background>;
        /**
         * Internal reference to the attribute "data-tchmi-text-color"
         */
        protected __textColor: TcHmi.SolidColor | null | undefined;
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
         * Internal reference to the attribute "data-tchmi-word-wrap"
         */
        protected __wordWrap: boolean | undefined;
        /**
         * Internal reference to the attribute "data-tchmi-state-symbol"
         */
        protected __stateSymbol: TcHmi.Symbol<boolean> | undefined | null;
        /**
         * Used to determine if this.__stateSymbol has ben initially read at least once before a write is processed to the symbol.
         * Because the state symbol state has a higher priority than internal or configured state.
         */
        protected __stateSymbolInitialized: boolean;
        /**
         * ReadOnly state of the control.
         */
        protected __isReadOnly: boolean | undefined;
        protected __mousedown: boolean;
        /** Active touches over this control */
        protected __touches: Touch[];
        protected __state: boolean;
        /** We have an active mouse/touch down */
        protected __stateLock: boolean;
        protected __touchLock: boolean;
        protected __touchLockTimeoutId: number;
        /** Destroy functions */
        protected __destroyStateSymbolWatch: DestroyFunction | null;
        protected __isDown: boolean;
        protected __interactionLockRefCount: number;
        protected __interactionLock: boolean;
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
         * Writes the given state to the state symbol, if it exists. Otherwise just sets the internal state variable.
         * @param state The state to write.
         * @param source What caused the state change. Could be 'userInteraction', the change of an 'attribute' or the state symbol, or, in case of the ToggleButton, the 'toggleGroup'.
         */
        protected __writeState(state: boolean, source: string): Promise<boolean>;
        /**
         * Sets the internal state variable and raises state change events if state has changed.
         * @param state The new state of the control.
         * @param source What caused the state change. Could be 'userInteraction', the change of an 'attribute' or the state symbol, or, in case of the ToggleButton, the 'toggleGroup'. This parameter is used in ToggleButton, so it has to be specified here too since the signatures need to match.
         */
        protected __setInternalState(state: boolean, source: string): void;
        /**
         * Writes the state symbol, or just sets the internal state variable, depending on the value of forwardStateSymbol.
         * @param state The new state.
         * @param forwardStateSymbol Whether to write the state symbol or just set the internal state variable.
         * @param source What caused the state change. Could be 'userInteraction', the change of an 'attribute' or the state symbol, or, in case of the ToggleButton, the 'toggleGroup'.
         */
        protected __processState(state: boolean, forwardStateSymbol: boolean, source: string): void;
        /**
         * Sets whether the button should be displayed in a down, i.e. pressed, state or not.
         * @param valueNew The new down state.
         */
        protected __setIsDown(valueNew: boolean): void;
        /**
         * Event handler for the __onPropertyIsEnabledChanged Event.
         * @param _event The event that is handled. Unused.
         * @param _data The event data. Unused.
         */
        protected __onPropertyIsEnabledChanged(_event: EventProvider.Event, _data: {
            propertyName: string;
            dirtyPaths?: string[];
        }): void;
        /**
         * Returns an event handler for contextmenu event.
         */
        protected __onContextMenu(event: Event): void;
        /**
         * Returns an event handler for the mousedown event.
         */
        protected __onMouseDown(event: MouseEvent): void;
        /**
         * Returns an event handler for the mouseup event.
         */
        protected __onMouseUp(event: MouseEvent): void;
        /**
         * Returns an event handler for the mouseenter event.
         */
        protected __onMouseEnter(event: MouseEvent): void;
        /**
         * Returns an event handler for the mouseleave event.
         */
        protected __onMouseLeave(event: MouseEvent): void;
        /**
         * Returns an event handler for the touchstart event.
         */
        protected __onTouchStart(event: TouchEvent): void;
        /**
         * Returns an event handler for the touchend and touchcancel events.
         */
        protected __onTouchEndOrCancel(event: TouchEvent): void;
        /**
         * Sets the value of the width mode attribute.
         * @param valueNew The new width mode value..
         */
        setWidthMode(valueNew: SizeModeWithContent | null): void;
        /**
         * Processes the current width and width unit.
         */
        __processWidth(): void;
        /**
         * Returns the calculated width in pixel if self defined (not percent based) or based on the children.
         */
        __getContentWidth(): number | null;
        /**
         * Sets the value of the height mode attribute.
         * @param valueNew The new height mode value..
         */
        setHeightMode(valueNew: SizeModeWithContent | null): void;
        /**
         * Processes the current height and height unit.
         */
        __processHeight(): void;
        /**
         * Returns the calculated height in pixel if self defined (not percent based) or based on the children.
         */
        __getContentHeight(): number | null;
        /**
         * Sets the value of the member variable "text" if the new value is not equal to the current value
         * and calls the associated process function (processText) after that.
         * @param valueNew The new value for text.
         */
        setText(valueNew: string | null): void;
        /**
         * Returns the current value of the member variable text.
         */
        getText(): string | undefined;
        /**
         * Processes the current value of text and forwards it to the target span element in template html.
         * The current value of text is only forwarded if it is no binding expression.
         */
        protected __processText(): void;
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
         * Sets the value of the member variable "textPadding" if the new value is not equal to the current value
         * and calls the associated process function (processTextPadding) after that.
         * @param valueNew The new value for textPadding.
         */
        setTextPadding(valueNew: FourSidedCss | null): void;
        /**
         * The watch callback for the textPadding object resolver.
         */
        protected __onResolverForTextPaddingWatchCallback(data: Symbol.ObjectResolver.IWatchResultObject<FourSidedCss>): void;
        /**
         * Returns the current value of the member variable textPadding.
         */
        getTextPadding(): FourSidedCss | null | undefined;
        /**
         * Processes the current value of textPadding and forwards it to the target span element in template html.
         * The current value of textPadding is only forwarded if it is no binding expression.
         */
        protected __processTextPadding(): void;
        /**
         * Sets the textHorizontalAlignment value and calls the associated process function (processTextHorizontalAlignment).
         * @param valueNew The new value for textHorizontalAlignment.
         */
        setTextHorizontalAlignment(valueNew: TcHmi.HorizontalAlignment | null): void;
        /**
         * Returns the current value of horizontalTextAligment.
         * @returns The current value of horizontalTextAligment.
         */
        getTextHorizontalAlignment(): HorizontalAlignment | null | undefined;
        /**
         * Processes the current textHorizontalAlignment attribute value.
         */
        protected __processTextHorizontalAlignment(): void;
        /**
         * Sets the textVerticalAlignment value and calls the associated process function (processTextVerticalAlignment).
         * @param valueNew The new value for textVerticalAlignment.
         */
        setTextVerticalAlignment(valueNew: TcHmi.VerticalAlignment | null): void;
        /**
         * Returns the current value of textVerticalAlignment.
         */
        getTextVerticalAlignment(): VerticalAlignment | null | undefined;
        /**
         * Processes the current textVerticalAlignment attribute value.
         */
        protected __processTextVerticalAlignment(): void;
        /**
         * Sets the value of the member variable "icon" if the new value is not equal to the current value.
         * and calls the associated process function (processIcon) after that.
         * @param valueNew The new value for icon.
         */
        setIcon(valueNew: string | null): void;
        /**
         * Returns the current value of the member variable icon.
         */
        getIcon(): string | null | undefined;
        /**
         * Processes the current value of icon and forwards it to the target html container element.
         */
        protected __processIcon(): void;
        /**
         * Sets the value of the member variable "iconPadding" if the new value is not equal to the current value
         * and calls the associated process function (processIconPadding) after that.
         * @param valueNew The new value for iconPadding.
         */
        setIconPadding(valueNew: FourSidedCss | null): void;
        /**
         * The watch callback for the iconPadding object resolver.
         */
        protected __onResolverForIconPaddingWatchCallback(data: Symbol.ObjectResolver.IWatchResultObject<FourSidedCss>): void;
        /**
         * Returns the current value of the member variable iconPadding.
         */
        getIconPadding(): FourSidedCss | null | undefined;
        /**
         * Processes the current value of iconPadding and forwards it to the target span element in template html.
         * The current value of iconPadding is only forwarded if it is no binding expression.
         */
        protected __processIconPadding(): void;
        /**
         * Sets the value of the member variable "iconWidth" if the new value is not equal to the current value.
         * and calls the associated process function (processIconWidth) after that.
         * @param valueNew The new value for iconWidth.
         */
        setIconWidth(valueNew: number | null): void;
        /**
         * Returns the current value of the member variable iconWidth.
         */
        getIconWidth(): number | null | undefined;
        /**
         * Processes the current value of iconWidth and forwards it to the target html container element.
         */
        protected __processIconWidth(): void;
        /**
         * Sets the value of the member variable "iconWidthUnit" if the new value is not equal to the current value.
         * and calls the associated process function (processIconWidthUnit) after that.
         * @param valueNew The new value for iconWidthUnit.
         */
        setIconWidthUnit(valueNew: DimensionUnit | null): void;
        /**
         * Returns the current value of the member variable iconWidthUnit.
         */
        getIconWidthUnit(): DimensionUnit | undefined;
        /**
         * Processes the current value of iconWidthUnit and forwards it to the target html container element.
         */
        protected __processIconWidthUnit(): void;
        /**
         * Sets the value of the member variable "iconHeight" if the new value is not equal to the current value.
         * and calls the associated process function (processIconHeight) after that.
         * @param valueNew The new value for iconHeight.
         */
        setIconHeight(valueNew: number | null): void;
        /**
         * Returns the current value of the member variable iconHeight.
         */
        getIconHeight(): number | null | undefined;
        /**
         * Processes the current value of iconHeight and forwards it to the target html container element.
         */
        protected __processIconHeight(): void;
        /**
         * Sets the value of the member variable "iconHeightUnit" if the new value is not equal to the current value.
         * and calls the associated process function (processIconHeightUnit) after that.
         * @param valueNew The new value for iconHeightUnit.
         */
        setIconHeightUnit(valueNew: DimensionUnit | null): void;
        /**
         * Returns the current value of the member variable iconHeightUnit.
         */
        getIconHeightUnit(): DimensionUnit | undefined;
        /**
         * Processes the current value of iconHeightUnit and forwards it to the target html container element.
         */
        protected __processIconHeightUnit(): void;
        /**
         * Sets the iconHorizontalAlignment value and calls the associated process function (processIconHorizontalAlignment).
         * @param valueNew The new value for iconHorizontalAlignment.
         */
        setIconHorizontalAlignment(valueNew: HorizontalAlignment | null): void;
        /**
         * Returns the current value of horizontalIconAligment.
         */
        getIconHorizontalAlignment(): HorizontalAlignment | undefined;
        /**
         * Processes the current iconHorizontalAlignment attribute value.
         */
        protected __processIconHorizontalAlignment(): void;
        /**
         * Sets the iconVerticalAlignment value and calls the associated process function (processIconVerticalAlignment).
         * @param valueNew The new value for iconVerticalAlignment.
         */
        setIconVerticalAlignment(valueNew: TcHmi.VerticalAlignment | null): void;
        /**
         * Returns the current value of iconVerticalAlignment.
         */
        getIconVerticalAlignment(): VerticalAlignment | undefined;
        /**
         * Processes the current iconVerticalAlignment attribute value.
         */
        protected __processIconVerticalAlignment(): void;
        /**
         * Sets the text color and calls the associated process function (processTextColor).
         * @param valueNew The new value for textFColor.
         */
        setTextColor(valueNew: SolidColor | null): void;
        /**
         * The watch callback for the textColor object resolver.
         */
        protected __onResolverForTextColorWatchCallback(data: Symbol.ObjectResolver.IWatchResultObject<SolidColor>): void;
        /**
         * Returns the current value of textColor.
         */
        getTextColor(): SolidColor | null | undefined;
        /**
         * Processes the current textColor attribute value.
         */
        protected __processTextColor(): void;
        /**
         * Sets the font size and calls the associated process function (processTextFontSize).
         * @param valueNew The new value for textFontSize.
         */
        setTextFontSize(valueNew: number | null): void;
        /**
         * Returns the current value of textFontSize.
         */
        getTextFontSize(): number | undefined;
        /**
         * Processes the current textFontSize attribute value.
         */
        protected __processTextFontSize(): void;
        /**
         * Sets the font size unit and calls the associated process function (processTextFontSizeUnit).
         * @param valueNew The new value for textFontSizeUnit.
         */
        setTextFontSizeUnit(valueNew: FontSizeUnit | null): void;
        /**
         * Returns the current value of textFontSizeUnit.
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
         */
        getTextFontWeight(): FontWeight | undefined;
        /**
         * Processes the current textFontWeight attribute value.
         */
        protected __processTextFontWeight(): void;
        /**
         * Sets the wordWrap value and calls the associated process function (processWordWrap).
         * @param valueNew The new value for wordWrap.
         */
        setWordWrap(valueNew: boolean | null): void;
        /**
         * Returns the current value of wordWrap.
         */
        getWordWrap(): boolean | undefined;
        /**
         * Processes the current wordWrap attribute value.
         */
        protected __processWordWrap(): void;
        protected __processStateSymbolResult(data: TcHmi.Symbol.IReadResultObject<boolean>): void;
        /**
         * The watch callback for the StateSymbol.
         * @param data Object containing the new value of the StateSymbol.
         */
        protected __onStateSymbolWatch(data: TcHmi.Symbol.IReadResultObject<boolean>): void;
        /**
         * @param valueNew
         */
        setStateSymbol(valueNew: TcHmi.Symbol | null): void;
        /**
         */
        getStateSymbol(): Symbol<boolean> | null | undefined;
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
    }
}
//# sourceMappingURL=TcHmiButton.d.ts.map