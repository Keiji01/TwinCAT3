declare namespace TcHmi.Controls.Beckhoff {
    class TcHmiAccordionRegion extends TcHmi.Controls.System.TcHmiControl {
        #private;
        /**
         * Constructor of the control
         * @param element Element from HTML (internal, do not use)
         * @param pcElement precompiled Element (internal, do not use)
         * @param attrs Attributes defined in HTML in a special format (internal, do not use)
         */
        constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
        /** HTML root template */
        protected __elementTemplateRoot: HTMLElement;
        /** Base tchmi-accordion elements */
        protected __elementBaseAccordion: Helpers.TcHmiAccordion.Accordion;
        /** The List of accordion items to be displayed in the control */
        protected __accordionItems: TcHmiAccordionRegion.AccordionItem[] | null | undefined;
        protected __oldAccordionItems: TcHmiAccordionRegion.AccordionItem[] | null | undefined;
        /** Marks if there is completely new data for the accordion items attribute */
        protected __newAccordionItemsData: boolean;
        /** Cache the file host attributes to be able to pass symbols to the file host */
        protected __fileHostAttributesCache: Map<string, string | Dictionary<any> | undefined>;
        /** Defines if only one item can be opened at a time */
        protected __autoCollapse: boolean | undefined;
        /** The horizontal alignment of the text */
        protected __textHorizontalAlignment: TcHmi.HorizontalAlignment | null | undefined;
        /** The vertical alignment of the text */
        protected __textVerticalAlignment: TcHmi.VerticalAlignment | null | undefined;
        /** The font size of the text */
        protected __textFontSize: number | undefined;
        /** The font size unit of text */
        protected __textFontSizeUnit: FontSizeUnit | undefined;
        /** The font family of the text */
        protected __textFontFamily: FontFamily | null | undefined;
        /** The font style of the text */
        protected __textFontStyle: FontStyle | undefined;
        /** The font weight of the text */
        protected __textFontWeight: FontWeight | undefined;
        /** The padding of the text */
        protected __textPadding: TcHmi.FourSidedCss | null | undefined;
        /**
         * If raised, the control object exists in control cache and constructor of each inheritation level was called.
         * This function is only to be used by the System. Other function calls are not intended.
         */
        __previnit(): void;
        /**
         * Is called during control initialize phase after attribute setter have been called based on it's default or initial html dom values.
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
         * Remove accordionItems from the control and destroy the file host.
         * @param accordionItems
         */
        protected __removeAccordionItems(accordionItems: TcHmiAccordionRegion.AccordionItem[] | null | undefined, destroy?: boolean): void;
        /**
         * Get the names of the open Items
         */
        protected __getOpenItems(items: TcHmiAccordionRegion.AccordionItem[]): string[];
        /**
         * Builds the file host instance based on TargetFile and TargetFileHostAttributes for a single accordionItem.
         */
        protected __buildFileHost(accordionItem: TcHmiAccordionRegion.AccordionItem): void;
        /** Append the target file host of a specific accordionItem to its contentElement */
        protected __attachTargetFileHost(accordionItem: TcHmiAccordionRegion.AccordionItem): void;
        /** Detach target file host */
        protected __detachTargetFileHost(accordionItem: TcHmiAccordionRegion.AccordionItem): void;
        /**
         * Set the height of the contentElement.
         */
        protected __setContentElementHeight(accordionItem: TcHmiAccordionRegion.AccordionItem, setMaxHeight?: boolean): void;
        /**
         * Build the header element for a single accordionItem.
         * @param accordionItem
         */
        protected __buildHeader(accordionItem: TcHmiAccordionRegion.AccordionItem): void;
        /**
         * Build the icon element for a accordionItem if the icon data is given.
         */
        protected __buildIcon(accordionItem: TcHmiAccordionRegion.AccordionItem): void;
        /**
         * Callback function that is called when an item is opened.
         */
        protected __onItemOpened(item: Helpers.TcHmiAccordion.AccordionItem): void;
        /**
         * Callback function that is called when an item is opened.
         */
        protected __onItemClosed(item: Helpers.TcHmiAccordion.AccordionItem): void;
        /** Callback function for a user change */
        protected __onUserDataChanged(): void;
        /**
         * Get AccessConfig with injected access rights of the navigation elements
         */
        getAccessConfig(): AccessControl[];
        /**
         * get access rights of the accordion items
         * @param items items structure
         * @param accesList List of accesData
         */
        protected __getSubRights(items: TcHmiAccordionRegion.AccordionItem[], accessList: AccessControl[]): AccessControl[];
        /**
         * Our navigation-only rights should be default true
         * @param name Name of the navigation-only right (?) to check
         */
        getDescriptionAccessByName(name: string): TcHmi.Controls.ControlAccessDescription | null;
        /**
         * Sets the content value and calls the associated process function (processAccordionItems).
         * @param valueNew The new value for the accordionItems attribute.
         */
        setAccordionItems(valueNew: TcHmiAccordionRegion.AccordionItem[] | null): void;
        /**
         * The watch callback for the accordionItems object resolver.
         */
        protected __onResolverForAccordionItemsWatchCallback(data: Symbol.ObjectResolver.IWatchResultObject<TcHmiAccordionRegion.AccordionItem[]>): void;
        /**
         * Returns the current value of the accordionItems attribute.
         */
        getAccordionItems(): TcHmiAccordionRegion.AccordionItem[] | null | undefined;
        /**
         * Processes the accordionItems.
         */
        protected __processAccordionItems(): void;
        /**
         * Sets the value of the member variable AutoCollapse.
         * @param valueNew The new value for AutoCollapse
         */
        setAutoCollapse(valueNew: boolean | null | undefined): void;
        /**
         * Returns the current value of AutoCollapse.
         * @returns The current value of AutoCollapse.
         */
        getAutoCollapse(): boolean | undefined;
        /**
         * Process the value of allow only one opened item.
         */
        protected __processAutoCollapse(): void;
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
    }
    namespace TcHmiAccordionRegion {
        interface AccordionItem {
            name: string;
            text: string;
            targetFile: TargetFile;
            targetFileHostPreload: boolean;
            targetFileHostPreAttach: boolean;
            targetFileHostKeepAlive: boolean;
            accessRights?: AccessControl[];
            fileHost?: TcHmi.Controls.System.TcHmiRegion | TcHmi.Controls.System.TcHmiUserControlHost;
            headerElement?: HTMLElement;
            contentElement?: HTMLElement;
            scrollContainer?: HTMLElement;
            maxContentHeight?: number;
            icon?: Icon;
            iconElement?: HTMLElement;
        }
        type TargetFile = TcHmi.Controls.System.TcHmiPopup.TargetFile;
        interface Icon {
            iconPath: string;
            iconWidth?: number;
            iconWidthUnit?: 'px' | '%';
            iconHeight?: number;
            iconHeightUnit?: 'px' | '%';
        }
    }
}
//# sourceMappingURL=TcHmiAccordionRegion.d.ts.map