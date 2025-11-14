import { TcHmiControl, TcHmiRegion } from 'Beckhoff.TwinCAT.HMI.Framework/index.esm.js';
import { TcHmiBreadcrumb, type BreadcrumbData } from '../dist/TcHmiBreadcrumb.esm.js';
export declare class TcHmiAccordionNavigation extends TcHmiControl {
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
    protected __elementBaseAccordion: TcHmi.Controls.Helpers.TcHmiAccordion.Accordion;
    /** Back button element */
    protected __elementBackButton: HTMLElement;
    /** List of navigation items */
    protected __navigationItems: NavigationItem[] | null | undefined;
    protected __newNavigationData: boolean;
    /** target Region  */
    protected __targetRegion: TcHmiRegion | null | undefined;
    /** Optional BreadCrumb control to commit breadcrumb data */
    protected __breadcrumb: TcHmiBreadcrumb | null | undefined;
    /** Defines if only one item can be opened at a time */
    protected __autoCollapse: boolean | undefined;
    /** Defines if an open item is closed on a normal click */
    protected __closeWhenClicked: boolean | undefined;
    /** Defines whether the back button is displayed or not */
    protected __showBackButton: boolean | undefined;
    /** text font size of the navigation buttons */
    protected __textFontSize: number | undefined;
    /** text font size unit of the navigation buttons */
    protected __textFontSizeUnit: TcHmi.FontSizeUnit | undefined;
    /** random id counter */
    protected __idCounter: number;
    protected __activeItem: NavigationItem | null | undefined;
    protected __breakpoint: number | null | undefined;
    protected __smallMode: boolean;
    protected __pageHistory: string[];
    /** Region Content Changed Event Destroy Function */
    protected __regionChangeEvent: TcHmi.DestroyFunction | null | undefined;
    /** Localization */
    protected __localizedElements: Map<HTMLElement, {
        key: string;
        parameters?: any[];
    }>;
    protected __localizationReader: TcHmi.Locale.LocalizationReader | undefined;
    protected __previouslyOpenedElementIds: string[];
    protected __previouslyActiveElementId: string | null;
    protected __destroyOnMouseUp: TcHmi.DestroyFunction[];
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
    /**
     * Creates a level of the accordion navigation and recursively creates deeper levels.
     */
    protected __createNavigationLevel(items: NavigationItem[], accordionElement: TcHmi.Controls.Helpers.TcHmiAccordion.Accordion, even?: boolean): void;
    /**
     * Destroys the navigation items.
     */
    protected __destroyNavigation(): void;
    /**
     * Creates a accordion header element on the basis of a navigation item.
     */
    protected __createHeaderElement(item: NavigationItem): HTMLElement;
    /**
     * Function to update the icon of an navigation item's header.
     */
    protected __updateHeaderIcon(navigationItem: NavigationItem): void;
    /**
     * Callback function that is called when an item is selected.
     */
    protected __onItemSelected(item: TcHmi.Controls.Helpers.TcHmiAccordion.AccordionItem): void;
    /**
     * Updates the visual representation of the active item and the previously active items.
     */
    protected __updateDisplayOfActiveItem(activeItem: TcHmi.Controls.Helpers.TcHmiAccordion.AccordionItem): void;
    /**
     * Sets the Content of the targetRegion
     */
    protected __setRegionContent(item: NavigationItem | null): void;
    /**
     * Calls the function of an navigation item
     */
    protected __callFunction(item: NavigationItem): void;
    /**
     * Callback function for the back button click event.
     */
    protected __onBackButtonClick(): void;
    /**
     * Callback function for the back button mousedown event.
     */
    protected __onBackButtonDown(): void;
    /**
     * Callback function for the back button mouseleave event.
     */
    protected __onBackButtonLeave(): void;
    /**
     * Callback function for the back button mousedown event.
     */
    protected __onBackButtonEnter(): void;
    /**
     * Callback function for the back button mousedown event.
     */
    protected __onDocumentUp(): void;
    /**
     * Callback function that is called when the 'down' class is added to or removed from an item.
     */
    protected __onItemDownChanged(item: TcHmi.Controls.Helpers.TcHmiAccordion.AccordionItem): void;
    /**
     * Gets an navigation item by its id.
     */
    protected __getNavigationItemById(id: string | null, items?: NavigationItem[] | null | undefined): NavigationItem | null;
    /**
     * Gets an accordion item by its id.
     */
    protected __getAccordionItemById(id: string): TcHmi.Controls.Helpers.TcHmiAccordion.AccordionItem | null;
    /**
     * Get the Ids of all opened elements.
     */
    protected __getOpenElementIds(): string[];
    /** Callback function for a user change */
    protected __onUserDataChanged(): void;
    /** Callback function for the onResized event*/
    protected __onResized(): void;
    /**
     * Compare the current width with the breakpoint and handle the result.
     */
    protected __checkBreakpoint(): void;
    /**
     * Event Callbackfunction for Content changed in the target Region to detect external actions.
     */
    protected __onRegionContentChanged(): void;
    /**
     * Gets an item by a given content.
     */
    protected __getItemByContentName(contentName: string): NavigationItem | null;
    /**
     * Sets the currently active Item.
     */
    protected __setActiveItem(item: NavigationItem): void;
    /**
     * Gets the parent item of a given item if there is one.
     */
    protected __getParentItem(item: NavigationItem): TcHmi.Controls.Helpers.TcHmiAccordion.AccordionItem | null;
    /**
     * Creates BreadcrumbData and sends it to connected breadcrumb control
     */
    protected __createBreadcrumb(): void;
    /**
     * Callback function for breadcrumb interaction
     * @param code
     * @returns
     */
    protected __breadcrumbCallbackFunction(code: string): void;
    /**
     * Recursive function to create the Breadcrumb items
     * @param element The element structure
     */
    protected __getBreadcrumbItems(element: NavigationItem[]): BreadcrumbData[] | null;
    /**
     * Get AccessConfig with injected access rights of the navigation elements
     */
    getAccessConfig(): TcHmi.AccessControl[];
    /**
     * get access rights of the navigation items
     * @param items items structure
     * @param accesList List of accesData
     */
    protected __getSubRights(items: NavigationItem[], accessList: TcHmi.AccessControl[]): TcHmi.AccessControl[];
    /**
     * Our navigation-only rights should be default true
     * @param name Name of the navigation-only right (?) to check
     */
    getDescriptionAccessByName(name: string): TcHmi.Controls.ControlAccessDescription | null;
    /**
     * Expands the parents of a given item to display the item.
     */
    showItem(id: string): void;
    /**
     * Returns the current value of activeItem.
     * @returns The current value of activeItem.
     */
    getActiveItem(): NavigationItem | null | undefined;
    /**
     * Sets the content value and calls the associated process function (processNavigationItems).
     * @param valueNew The new value for the navigation structure attribute.
     */
    setNavigationItems(valueNew: NavigationItem[] | null): void;
    /**
     * The watch callback for the textActiveColor object resolver.
     */
    protected __onResolverForNavigationStructureWatchCallback(data: TcHmi.Symbol.ObjectResolver.IWatchResultObject<NavigationItem[]>): void;
    /**
     * Returns the current content value.
     */
    getNavigationItems(): NavigationItem[] | null | undefined;
    protected __processNavigationItems(): void;
    /**
     * Sets the content value and calls the associated process function (processContent).
     * @param valueNew The new value for the target region attribute
     *
     */
    setTargetRegion(valueNew: TcHmiRegion | null): void;
    /**
     * Returns the current targetRegion value.
     */
    getTargetRegion(): TcHmiRegion | null | undefined;
    protected __processTargetRegion(): void;
    /**
     * Sets the content value and calls the associated process function (processContent).
     * @param valueNew The new value for the breadcrump attribute
     */
    setBreadcrumb(valueNew: TcHmiBreadcrumb | null): void;
    /**
     * Returns the current TcHmiBreadcrumb value.
     */
    getBreadcrumb(): TcHmiBreadcrumb<string> | null | undefined;
    protected __processBreadcrumb(): void;
    getBreadcrumbPath(): (string | HTMLElement)[];
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
     * Sets the value of the member variable CloseWhenClicked.
     * @param valueNew The new value for CloseWhenClicked
     */
    setCloseWhenClicked(valueNew: boolean | null | undefined): void;
    /**
     * Returns the current value of CloseWhenClicked.
     * @returns The current value of CloseWhenClicked.
     */
    getCloseWhenClicked(): boolean | undefined;
    /**
     * Process the value of allow only one opened item.
     */
    protected __processCloseWhenClicked(): void;
    /**
     * Sets the value of the member variable ShowBackButton.
     * @param valueNew The new value for ShowBackButton
     */
    setShowBackButton(valueNew: boolean | null | undefined): void;
    /**
     * Returns the current value of ShowBackButton.
     * @returns The current value of ShowBackButton.
     */
    getShowBackButton(): boolean | undefined;
    /**
     * Process the value of show back button item.
     */
    protected __processShowBackButton(): void;
    /**
     * Sets the breakpoint and calls the associated process function (processBreakpoint).
     * @param valueNew The new value for Breakpoint.
     */
    setBreakpoint(valueNew: number | null): void;
    /**
     * Returns the current value of Breakpoint.
     * @returns The current value of Breakpoint.
     */
    getBreakpoint(): number | null | undefined;
    /**
     * Processes the current Breakpoint attribute value.
     */
    protected __processBreakpoint(): void;
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
     * Processes the current textFontSize and textFontSizeUnit attribute value.
     */
    protected __processTextFontSize(): void;
    /**
     * Sets the font size unit and calls the associated process function (processTextFontSizeUnit).
     * @param valueNew The new value for textFontSizeUnit.
     */
    setTextFontSizeUnit(valueNew: TcHmi.FontSizeUnit | null): void;
    /**
     * Returns the current value of textFontSizeUnit.
     */
    getTextFontSizeUnit(): TcHmi.FontSizeUnit | undefined;
}
export interface NavigationItem {
    name: string;
    id: string;
    content?: string;
    function: TcHmi.IFunction;
    subItems?: NavigationItem[];
    accessRights?: TcHmi.AccessControl[];
    icon?: string;
    iconPressed?: string;
    iconActive?: string;
    iconWidth?: number;
    iconWidthUnit?: 'px' | '%';
    iconHeight?: number;
    iconHeightUnit?: 'px' | '%';
}
declare const _TcHmiAccordionNavigation: typeof TcHmiAccordionNavigation;
type tTcHmiAccordionNavigation = TcHmiAccordionNavigation;
type tNavigationItem = NavigationItem;
declare global {
    namespace TcHmi.Controls.BaseTemplate {
        const TcHmiAccordionNavigation: typeof _TcHmiAccordionNavigation;
        type TcHmiAccordionNavigation = tTcHmiAccordionNavigation;
        namespace TcHmiAccordionNavigation {
            type NavigationItem = tNavigationItem;
        }
    }
}
export {};
//# sourceMappingURL=TcHmiAccordionNavigation.esm.d.ts.map