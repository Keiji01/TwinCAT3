declare namespace TcHmi.Controls.Beckhoff {
    class TcHmiTabNavigation extends TcHmi.Controls.System.TcHmiControl {
        #private;
        constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
        /** Reference to the root dom element of the current control template as HTMLElement. */
        protected __elementTemplateRoot: HTMLElement;
        /** Reference to the content tabs dom element of the control */
        protected __elementContentTabs: TcHmi.Controls.Helpers.ContentTabs;
        /** The List of tabs to be displayed in the control */
        protected __tabs: TcHmiTabNavigation.Tab[] | null | undefined;
        protected __oldTabs: TcHmiTabNavigation.Tab[] | null | undefined;
        /** Cache the file host attributes to be able to pass symbols to the file host */
        protected __fileHostAttributesCache: Map<string, string | Dictionary<any> | undefined>;
        /** The name of the active tab */
        protected __activeTabName: string | null | undefined;
        /** The name of the initially active tab */
        protected __initialTabName: string | null | undefined;
        /** The alignment of the tab bar */
        protected __tabAlignment: Helpers.ContentTabs.TabAlignment | null | undefined;
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
        /** The text color of the tabs */
        protected __tabTextColor: TcHmi.SolidColor | null | undefined;
        /** The text color of the tabs */
        protected __activeTabTextColor: TcHmi.SolidColor | null | undefined;
        /** The text color of the tabs */
        protected __activeTabColor: TcHmi.SolidColor | null | undefined;
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
         * Callback function which is fired on tab change
         **/
        protected __tabChangeCallback(newTabName: string): void;
        /**
         * Builds the file host instance based on TargetFile and TargetFileHostAttributes for a single tab
         * and appends it to the tabs contentElement.
         */
        protected __buildFileHost(tab: TcHmiTabNavigation.Tab): void;
        /** Append the target file host of a specific tab to its contentElement */
        protected __attachTargetFileHost(tab: TcHmiTabNavigation.Tab): void;
        /** Detach target file host */
        protected __detachTargetFileHost(tab: TcHmiTabNavigation.Tab): void;
        /**
         * Build the link element for a single tab.
         * @param tab
         */
        protected __buildLink(tab: TcHmiTabNavigation.Tab): void;
        /**
         * Build the icon element for a tab if the icon data is given.
         */
        protected __buildIcon(tab: TcHmiTabNavigation.Tab): void;
        /**
         * Remove tabs from the control and destroy the file host.
         * @param tabs
         */
        protected __removeTabs(tabs: TcHmiTabNavigation.Tab[] | null | undefined, destroy?: boolean): void;
        /**
         * Sets the content value and calls the associated process function (processTabs).
         * @param valueNew The new value for the tabs attribute.
         */
        setTabs(valueNew: TcHmiTabNavigation.Tab[] | null): void;
        /**
         * The watch callback for the tabs object resolver.
         */
        protected __onResolverForTabsWatchCallback(data: Symbol.ObjectResolver.IWatchResultObject<TcHmiTabNavigation.Tab[]>): void;
        /**
         * Returns the current value of the tabs attribute.
         */
        getTabs(): TcHmiTabNavigation.Tab[] | null | undefined;
        /**
         * Processes the tabs.
         */
        protected __processTabs(): void;
        /**
         * Sets the TabAlignment attribute.
         * @param valueNew The new value for TabAlignment.
         */
        setTabAlignment(valueNew: Helpers.ContentTabs.TabAlignment | null): void;
        /**
         * Returns the current value of TabAlignment.
         */
        getTabAlignment(): Helpers.ContentTabs.TabAlignment | null | undefined;
        /**
         * Processes the current value of attribute TabAlignment.
         */
        protected __processTabAlignment(): void;
        /**
         * Sets the activeTabName value and calls the associated process function (processActiveTabName).
         * @param valueNew The new value for activeTabName.
         */
        setActiveTabName(valueNew: string | null): void;
        /**
         * Returns the current value of ActiveTabName.
         */
        getActiveTabName(): string | null | undefined;
        protected __processActiveTabName(): void;
        /**
         * Sets the initialTabName value and calls the associated process function (processInitialTabName).
         * @param valueNew The new value for initialTabName.
         */
        setInitialTabName(valueNew: string | null): void;
        /**
         * Returns the current value of initialTabName.
         */
        getInitialTabName(): string | null | undefined;
        /**
         * Processes the current border-radius attribute.
         */
        protected __processBorderRadius(): void;
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
        /**
         * Processes the current background-color attribute.
         */
        protected __processBackgroundColor(): void;
        /**
         * Sets the text color and calls the associated process function (processTabTextColor).
         * @param valueNew The new value for tabTextColor.
         */
        setTabTextColor(valueNew: SolidColor | null): void;
        /**
         * The watch callback for the tabTextColor object resolver.
         * @param data Object containing the new value for tabTextColor
         */
        protected __onResolverForTabTextColorWatchCallback(data: Symbol.ObjectResolver.IWatchResultObject<SolidColor>): void;
        /**
         * Returns the current value of tabTextColor.
         * @returns The current value of tabTextColor.
         */
        getTabTextColor(): SolidColor | null | undefined;
        /**
         * Processes the current tabTextColor attribute value.
         */
        protected __processTabTextColor(): void;
        /**
         * Sets the text color and calls the associated process function (processActiveTabTextColor).
         * @param valueNew The new value for activeTabTextColor.
         */
        setActiveTabTextColor(valueNew: SolidColor | null): void;
        /**
         * The watch callback for the activeTabTextColor object resolver.
         * @param data Object containing the new value for activeTabTextColor
         */
        protected __onResolverForActiveTabTextColorWatchCallback(data: Symbol.ObjectResolver.IWatchResultObject<SolidColor>): void;
        /**
         * Returns the current value of activeTabTextColor.
         * @returns The current value of activeTabTextColor.
         */
        getActiveTabTextColor(): SolidColor | null | undefined;
        /**
         * Processes the current activeTabTextColor attribute value.
         */
        protected __processActiveTabTextColor(): void;
        /**
         * Sets the  color and calls the associated process function (processActiveTabColor).
         * @param valueNew The new value for activeTabColor.
         */
        setActiveTabColor(valueNew: SolidColor | null): void;
        /**
         * The watch callback for the activeTabColor object resolver.
         * @param data Object containing the new value for activeTabColor
         */
        protected __onResolverForActiveTabColorWatchCallback(data: Symbol.ObjectResolver.IWatchResultObject<SolidColor>): void;
        /**
         * Returns the current value of activeTabColor.
         * @returns The current value of activeTabColor.
         */
        getActiveTabColor(): SolidColor | null | undefined;
        /**
         * Processes the current activeTabColor attribute value.
         */
        protected __processActiveTabColor(): void;
    }
    namespace TcHmiTabNavigation {
        interface Tab {
            name: string;
            displayName: string;
            targetFile: TargetFile;
            targetFileHostPreload: boolean;
            targetFileHostPreAttach: boolean;
            targetFileHostKeepAlive: boolean;
            scrolling?: 'No' | 'Yes' | 'Auto';
            hidden?: boolean;
            fileHost?: TcHmi.Controls.System.TcHmiRegion | TcHmi.Controls.System.TcHmiUserControlHost;
            linkElement?: HTMLElement;
            contentElement?: HTMLElement;
            horizontalAlignment?: TcHmi.HorizontalAlignment;
            verticalAlignment?: TcHmi.VerticalAlignment;
            icon?: TabIcon;
            iconElement?: HTMLElement;
        }
        type TargetFile = TcHmi.Controls.System.TcHmiPopup.TargetFile;
        interface TabIcon {
            iconPath: string;
            iconWidth?: number;
            iconWidthUnit?: 'px' | '%';
            iconHeight?: number;
            iconHeightUnit?: 'px' | '%';
        }
    }
}
//# sourceMappingURL=TcHmiTabNavigation.d.ts.map