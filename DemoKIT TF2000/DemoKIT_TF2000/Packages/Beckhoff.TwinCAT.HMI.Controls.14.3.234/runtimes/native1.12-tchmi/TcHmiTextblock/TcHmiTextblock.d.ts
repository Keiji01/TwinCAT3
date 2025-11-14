declare namespace TcHmi.Controls.Beckhoff {
    class TcHmiTextblock extends TcHmi.Controls.System.TcHmiControl {
        #private;
        constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
        /** Reference to the root dom element of the current control template as jquery object. */
        protected __elementTemplateRoot: JQuery;
        protected __elementTextContainer: JQuery;
        /**
         * Internal reference to the attribute "data-tchmi-horizontal-text-alignment"
         */
        protected __textHorizontalAlignment: TcHmi.HorizontalAlignment | null | undefined;
        /**
         * Internal reference to the attribute "data-tchmi-vertical-text-alignment"
         */
        protected __textVerticalAlignment: TcHmi.VerticalAlignment | null | undefined;
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
         * Internal reference to the attribute "data-tchmi-text-color"
         */
        protected __textColor: TcHmi.SolidColor | null | undefined;
        /**  Internal reference to the attribute "data-tchmi-text" */
        protected __text: string | undefined;
        /**  Internal reference to the attribute "data-tchmi-ignore-escape-sequences" */
        protected __ignoreEscapeSequences: boolean | undefined;
        /**
         * Internal reference to the attribute "data-tchmi-word-wrap"
         */
        protected __wordWrap: boolean | undefined;
        /**
         * Internal reference to the attribute "data-tchmi-horizontal-scroll"
         */
        protected __horizontalScroll: TcHmiTextblock.ScrollMode | undefined;
        /**
         * Internal reference to the attribute "data-tchmi-vertical-scroll"
         */
        protected __verticalScroll: TcHmiTextblock.ScrollMode | undefined;
        /**
         * Internal reference to the attribute "data-tchmi-horizontal-scroll-position"
         */
        protected __horizontalScrollPosition: number | null | undefined;
        /**
         * Internal reference to the attribute "data-tchmi-vertical-scroll-position"
         */
        protected __verticalScrollPosition: number | null | undefined;
        protected __scrollEventDestroyer: DestroyFunction | null;
        /**
         * Internal reference to the attribute "data-tchmi-content-padding"
         */
        protected __contentPadding: TcHmi.FourSidedCss | null | undefined;
        protected __asyncWorkData: TcHmiTextblock.IControlSpecificData;
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
        protected __doAsyncWork(timestamp?: number): void;
        /**
         * Sets the value of the width mode attribute.
         * @param valueNew The new width mode value..
         */
        setWidthMode(valueNew: SizeModeWithContent | null): void;
        __processWidthMode(): void;
        /**
         * Update the text container position depending on the height and width mode.
         * The position of the text container has to be relative if height and/or width mode is 'Content'.
         */
        protected __updateTextContainerPosition(): void;
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
        __processHeightMode(): void;
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
         * or the current control instance is locked and calls the associated process function (processText) after that.
         * @param valueNew The new value for text.
         */
        setText(valueNew: string | null): void;
        /**
         * Returns the current value of the member variable text.
         */
        getText(): string | undefined;
        /**
         * Processes the current value of text.
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
         * Sets the textHorizontalAlignment value and calls the associated process function (processTextHorizontalAlignment).
         * @param valueNew The new value for textHorizontalAlignment.
         */
        setTextHorizontalAlignment(valueNew: TcHmi.HorizontalAlignment | null): void;
        /**
         * Returns the current value of horizontalTextAligment.
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
         * Sets the font size and calls the associated process function (processTextFontSizeUnit).
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
         * @returns The current value of textColor.
         */
        getTextColor(): SolidColor | null | undefined;
        /**
         * Processes the current textColor attribute value.
         */
        protected __processTextColor(): void;
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
         * On scroll event callback.
         */
        protected __onScroll(): void;
        /**
         * Sets the horizontal scroll attribute and calls the associated process function (processHorizontalScroll).
         * @param valueNew The new value for horizontalScroll.
         */
        setHorizontalScroll(valueNew: TcHmiTextblock.ScrollMode | keyof typeof TcHmiTextblock.ScrollMode | null): void;
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
        setVerticalScroll(valueNew: TcHmiTextblock.ScrollMode | keyof typeof TcHmiTextblock.ScrollMode | null): void;
        /**
         * Returns the current value of verticalScroll.
         * @returns The current value of verticalScroll.
         */
        getVerticalScroll(): "Auto" | "Never" | "Always" | undefined;
        /**
         * Processes the current verticalScroll attribute value.
         */
        protected __processVerticalScroll(): void;
        /**
         * Check if the scroll evnent is needed and add/remove it.
         */
        protected __checkScrollEvent(): void;
        /**
         * Sets the horiizontal scroll position attribute and calls the associated process function (processHorizontalScrollPosition).
         * @param valueNew The new value for horizontalScrollPosition.
         */
        setHorizontalScrollPosition(valueNew: number | null): void;
        /**
         * Return the current horizontal scroll position.
         */
        getHorizontalScrollPosition(): number | null | undefined;
        protected __processHorizontalScrollPosition(): void;
        /**
         * Sets the vertical scroll position attribute and calls the associated process function (processVerticalScrollPosition).
         * @param valueNew The new value for verticalScrollPosition.
         */
        setVerticalScrollPosition(valueNew: number | null): void;
        /**
         * Return the current vertical scroll position.
         */
        getVerticalScrollPosition(): number | null | undefined;
        protected __processVerticalScrollPosition(): void;
    }
    namespace TcHmiTextblock {
        interface IControlSpecificData extends System.TcHmiControl.IControlSpecificData {
            'Controls.Beckhoff.TcHmiTextblock.triggerProcessHorizontalAlignment': boolean;
            'Controls.Beckhoff.TcHmiTextblock.triggerProcessVerticalAlignment': boolean;
        }
        enum ScrollMode {
            Never = 0,
            Always = 1,
            Auto = 2
        }
    }
}
//# sourceMappingURL=TcHmiTextblock.d.ts.map