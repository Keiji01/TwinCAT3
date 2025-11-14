declare namespace TcHmi.Controls.Beckhoff {
    class TcHmiUserGuidance extends TcHmi.Controls.System.TcHmiControl {
        #private;
        constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
        protected __destroyParamChange: Map<string, DestroyFunction>;
        /** Reference to the root dom element of the current control template as HTMLElement. */
        protected __elementTemplateRoot: HTMLElement;
        /** Reference to the content tabs dom element of the control */
        protected __elementContentTabs: TcHmi.Controls.Helpers.ContentTabs;
        /** Reference to the message element */
        protected __elementMessage: HTMLElement;
        /**The Next button*/
        protected __buttonNext: TcHmi.Controls.Beckhoff.TcHmiButton;
        /**The Back button*/
        protected __buttonBack: TcHmi.Controls.Beckhoff.TcHmiButton;
        /**The Cancel button*/
        protected __buttonCancel: TcHmi.Controls.Beckhoff.TcHmiButton;
        /** Path to the Circles indicating the page status */
        protected __iconPath: string;
        /** Lists of pages and pages metadata to be displayed in the control */
        protected __pages: TcHmiUserGuidance.Page[] | null | undefined;
        protected __pagesMap: WeakMap<TcHmiUserGuidance.Page, TcHmiUserGuidance.PageMetadata>;
        protected __oldPages: TcHmiUserGuidance.Page[] | null | undefined;
        protected __oldPagesMap: WeakMap<TcHmiUserGuidance.Page, TcHmiUserGuidance.PageMetadata>;
        /** Marks if there is completely new data for the pages attribute */
        protected __newPagesData: boolean;
        /** Cache the file host attributes to be able to pass symbols to the file host */
        protected __fileHostAttributesCache: Map<string, string | Dictionary<any> | undefined>;
        /** The name of the active page */
        protected __activePageName: string | undefined;
        /** The alignment of the progress bar */
        protected __progressBarAlignment: Helpers.ContentTabs.TabAlignment | null | undefined;
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
        /** Visibility of the Control */
        protected __guidanceFinished: boolean;
        /** Number of pages shown in control */
        protected __maximumNumberOfPages: number;
        protected __elementSVG: HTMLElement;
        /** Localization */
        protected __localizedElements: Map<HTMLElement, {
            key: string;
            parameters?: any[];
        }>;
        protected __localizationReader: Locale.LocalizationReader | undefined;
        protected __asyncWorkData: TcHmiUserGuidance.IControlSpecificData;
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
         * Event watching the Parameters of UserControls
         * Changes button states if necessary
         */
        protected __onParamChange(page: TcHmiUserGuidance.Page): (event: TcHmi.EventProvider.Event, data: any) => void;
        /**
         * EventHandler for the onResized event.
         */
        protected __onResized(): void;
        /**
         * Determine maximum number of pages displayed due to the size of the content pages.
         */
        protected __updateMaximumNumberOfPages(): void;
        /**
         * Enable buttons and set correct localization to them.
         */
        protected __updateButtons(activePageIndex: number): void;
        /**
         * Event for the Next Button.
         */
        protected __openNextPage(event: TcHmi.EventProvider.Event): void;
        /**
         * Event for the Back Button.
         */
        protected __openPreviousPage(event: TcHmi.EventProvider.Event): void;
        /**
         * Event for pressing the Cancel Button.
         */
        protected __onButtonCancel(event: TcHmi.EventProvider.Event): void;
        /**
         * Reloads the lines connecting the Status Icons of each page
         */
        protected __updatePageLines(): void;
        /**
         * Builds the file host instance based on TargetFile and TargetFileHostAttributes for a single page
         * and appends it to the pages contentElement.
         */
        protected __buildFileHost(page: TcHmiUserGuidance.Page): void;
        /** Append the target file host of a specific page to its contentElement */
        protected __attachTargetFileHost(page: TcHmiUserGuidance.Page): void;
        /** Detach target file host */
        protected __detachTargetFileHost(page: TcHmiUserGuidance.Page): void;
        /**
         * Build the link element for a single page.
         * @param page
         */
        protected __buildLink(page: TcHmiUserGuidance.Page): void;
        /**
         * Build the icon element for a page if the icon data is given.
         */
        protected __buildIcon(page: TcHmiUserGuidance.Page): void;
        /**
         * Remove pages from the control and destroy the file host.
         * @param pages
         */
        protected __removePages(pages: TcHmiUserGuidance.Page[] | null | undefined, destroy?: boolean): void;
        /**
         * Reset the current progress of the control.
         */
        protected __reset(): void;
        /**
         * Sets the content value and calls the associated process function (processPages).
         * @param valueNew The new value for the pages attribute.
         */
        setPages(valueNew: TcHmiUserGuidance.Page[] | null): void;
        /**
         * The watch callback for the pages object resolver.
         */
        protected __onResolverForPagesWatchCallback: (data: Symbol.ObjectResolver.IWatchResultObject<TcHmiUserGuidance.Page[]>) => void;
        /**
         * Returns the current value of the pages attribute.
         */
        getPages(): TcHmiUserGuidance.Page[] | null | undefined;
        /**
         * Processes the pages.
         */
        protected __processPages(direction?: number): void;
        protected __selectDisplayedPages(activePageIndex: number, pages: TcHmiUserGuidance.Page[]): void;
        protected drawSVG(target: SVGLineElement, oldIconBCR: DOMRect, IconBCR: DOMRect, oldNameBCR: DOMRect, nameBCR: DOMRect): void;
        /**
         * Sets the PageAlignment attribute.
         * @param valueNew The new value for PageAlignment.
         */
        setProgressBarAlignment(valueNew: Helpers.ContentTabs.TabAlignment | null): void;
        /**
         * Returns the current value of ProgressBarAlignment.
         */
        getProgressBarAlignment(): Helpers.ContentTabs.TabAlignment | null | undefined;
        /**
         * Processes the current value of attribute ProgressBarAlignment.
         */
        protected __processProgressBarAlignment(): void;
        /**
         * Returns the current value of ActivePageName.
         */
        getActivePageName(): string | undefined;
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
        protected __onResolverForTextPaddingWatchCallback: (data: Symbol.ObjectResolver.IWatchResultObject<FourSidedCss>) => void;
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
         * Sets if the guidance finished.
         */
        protected __setGuidanceFinished(newValue: boolean): void;
        /**
         * Returns the value for user guidance finished.
         */
        getGuidanceFinished(): boolean;
        /**
         * Restarts the user guidance process.
         */
        restartUserGuidance(force?: boolean): void;
    }
    namespace TcHmiUserGuidance {
        interface IControlSpecificData extends System.TcHmiControl.IControlSpecificData {
            'Controls.Beckhoff.TcHmiUserGuidance.triggerUpdatePageLines': boolean;
            'Controls.Beckhoff.TcHmiUserGuidance.triggerUpdateMaximumNumberOfPages': boolean;
        }
        interface Page {
            name: string;
            displayName: string;
            targetFile: TargetFile;
            scrolling?: 'No' | 'Yes' | 'Auto';
            hidden?: boolean;
            horizontalAlignment?: TcHmi.HorizontalAlignment;
            verticalAlignment?: TcHmi.VerticalAlignment;
        }
        interface PageMetadata {
            fileHost?: TcHmi.Controls.System.TcHmiRegion | TcHmi.Controls.System.TcHmiUserControlHost;
            displayed?: boolean;
            linkElement?: HTMLElement;
            contentElement?: HTMLElement;
            icon?: PageIcon;
            iconElement?: HTMLElement;
            /**
             * Pages with Content files always allow proceeding to the next page.
             * Pages with usercontrols only allow proceeding to the next page if the usercontrol has a parameter controlling it.
             */
            allowProceedToNextPage: boolean;
            nameElement: HTMLElement;
        }
        type TargetFile = TcHmi.Controls.System.TcHmiPopup.TargetFile;
        type PageIcon = 'Active' | 'Approved' | 'Done' | 'Default';
    }
}
//# sourceMappingURL=TcHmiUserGuidance.d.ts.map