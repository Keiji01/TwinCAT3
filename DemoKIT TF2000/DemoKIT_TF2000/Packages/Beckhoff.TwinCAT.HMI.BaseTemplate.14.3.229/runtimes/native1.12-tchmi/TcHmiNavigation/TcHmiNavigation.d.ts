export declare class TcHmiNavigation extends TcHmi.Controls.System.TcHmiControl {
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
    /** HTML navigation root*/
    protected __elementNavigationRoot: HTMLElement;
    /** HTML static navigation root*/
    protected __elementStaticRoot: HTMLElement;
    /** HTML context navigation root*/
    protected __elementContextRoot: HTMLElement;
    /** HTML static Shadow element */
    protected __elementStaticShadow: HTMLElement;
    /** HTML context shadow element */
    protected __elementContextShadow: HTMLElement;
    /** HTML back button root*/
    protected __elementBackRoot: HTMLElement;
    /** active Content */
    protected __activeElementId: string | null;
    /** The Id of the element that sub items are displayed in the context Menu */
    protected __contextElementId: string | null;
    /** target Region  */
    protected __targetRegion: TcHmiRegion | null | undefined;
    /** Region Content Changed Event Destroy Function */
    protected __regionChangeEvent: TcHmi.DestroyFunction | null | undefined;
    /** Optional BreadCrumb control to commit breadcrumb data */
    protected __breadcrumb: TcHmiBreadcrumb | null | undefined;
    /** Navigation Treestructure element */
    protected __navigationStructure: INavigationItem[] | null | undefined;
    /** Navgiation button map */
    protected __navigationButtonMap: Map<string, NavigationButton>;
    /** Navigation History for BackButton & Breadcrumb creation. Contains the ids of the elements*/
    protected __activeHistory: string[];
    /** Backbutton */
    protected __buttonBack: TcHmi.Controls.Beckhoff.TcHmiButton | undefined;
    /** text color of the buttons */
    protected __textColor: TcHmi.SolidColor | null | undefined;
    /** text color of the buttons */
    protected __textColorActive: TcHmi.SolidColor | null | undefined;
    /** text color of the buttons */
    protected __textColorPressed: TcHmi.SolidColor | null | undefined;
    /** background color of the buttons */
    protected __buttonBackgroundColor: TcHmi.Color | null | undefined;
    /** background color of the buttons in active State */
    protected __buttonBackgroundColorActive: TcHmi.Color | null | undefined;
    /** background color of the buttons in pressed State */
    protected __buttonBackgroundColorPressed: TcHmi.Color | null | undefined;
    /** text font size of the navigation buttons */
    protected __textFontSize: number | undefined;
    /** text font size unit of the navigation buttons */
    protected __textFontSizeUnit: TcHmi.FontSizeUnit | undefined;
    /** icon height */
    protected __iconHeight: number | null | undefined;
    /** icon height unit */
    protected __iconHeightUnit: TcHmi.DimensionUnit | undefined;
    /** icon width */
    protected __iconWidth: number | null | undefined;
    /** icon height unit */
    protected __iconWidthUnit: TcHmi.DimensionUnit | undefined;
    /** static menu height */
    protected __staticMenuHeight: number | null | undefined;
    /** static menu height */
    protected __staticMenuHeightUnit: TcHmi.DimensionUnit | undefined;
    /** defines pressed button */
    protected __mouseDownButton: TcHmi.Controls.Beckhoff.TcHmiButton | undefined;
    /** random id counter */
    protected __elementIdCounter: number;
    /** active theme for adapting icon paths */
    protected __navigationOrientation: 'Horizontal' | 'Vertical' | undefined;
    /** keep lowest sub entries when selected */
    protected __keepLowestLevel: boolean | undefined;
    /** keep lowest sub entries when selected */
    protected __showBreadcrumb: boolean | null | undefined;
    protected __contextBreadcrumb: TcHmiBreadcrumb | undefined;
    protected __breadcrumbItems: BreadcrumbItem[];
    /**  Internal reference to the attribute "data-tchmi-scrollbar-style" */
    protected __scrollbarStyle: 'Auto' | 'None' | undefined;
    /** display back button */
    protected __showBackButton: boolean | undefined;
    protected __newData: boolean;
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
     * Create all navigation buttons
     */
    protected __createNavigation(): void;
    /**
     * Sets the Content of the targetRegion
     * @param element The element which icon sizes will be set.
     */
    protected __setRegionContent(element: INavigationItem): void;
    /**
     * set the height of static and content menu
     */
    protected __setContentHeights(): void;
    /**
     * Create a button for a Struct-Element, sets Icon for the button and add Events.
     * @param element The element containing information of a navigation button.
     */
    protected __createNavButton(element: INavigationItem): void;
    /**
     * Creates and appends Backbutton
     */
    protected __createBackButton(): void;
    /**
     * Destroy the ContextMenu
     */
    protected __destroyStaticMenu(): void;
    /**
     * Destroy the ContextMenu
     */
    protected __destroyContextMenu(): void;
    /**
     * Create the ContextMenu
     */
    protected __createContextMenu(): void;
    /**
     * Create a breadcrumb path to the specified element.
     */
    protected __createInternalBreadcrumb(): void;
    /**
     * The callback function for the internal breadcrumb control
     */
    protected __internalBreadcrumbCallback(code: string): void;
    /**
     * Creates Breadcrumb INavigationItem and sends it to connected breadcrumb control
     */
    protected __createBreadcrumb(): void;
    protected __breadcrumbCallbackFunction(code: string): void;
    /**
     * Recursive function to create the Breadcrumb path
     */
    protected __getBreadcrumbItems(baseElement: INavigationItem[], targetId: string, disableEmptyElement?: boolean): BreadcrumbData[] | null;
    /**
     * Set active Struct-Element. Handle activeHistory and create a new context menu.
     * @param element Element structure
     */
    protected __setActiveElement(element: INavigationItem): void;
    /**
     * display the last entry in the page history. called by back button
     */
    protected __backAction(): void;
    /**
     * recursive function to search active Content in navigation structure
     * @param element Element structure
     */
    protected __searchForActiveContent(element: INavigationItem[]): void;
    /**
     * Get the parent Structure of an element
     * @param structure
     * @param childElement
     */
    protected __getParentStructure(structure: INavigationItem[], childElement: INavigationItem): INavigationItem[] | null;
    /**
     * Get the parent of an element if existant.
     */
    protected __getParent(structure: INavigationItem[], childElement: INavigationItem): INavigationItem | null;
    /**
     * Get a navigation item by its id
     * @param structure
     * @param id
     */
    protected __getItemById(structure: INavigationItem[], id: string): INavigationItem | null;
    /**
     * Set the current scroll position of an HTMLElement
     * @param element
     */
    protected __setScrollData(element: HTMLElement, displayeElement: HTMLElement): void;
    /**
     * Callback function for scroll event of the static menu
     **/
    protected __onStaticMenuScroll(_event: MouseEvent): void;
    /**
     * Callback function for scroll event of the context menu
     **/
    protected __onContextMenuScroll(_event: MouseEvent): void;
    /**
     * Callback function for the onResized event of the control
     */
    protected __onResized(_event: TcHmi.EventProvider.Event): void;
    /**
     * Callback function for the onUserDataChanged event of the control
     */
    protected __onUserDataChanged(_event: TcHmi.EventProvider.Event): void;
    /**
     * Set normal text & icon for a struct-button
     * @param element Element structure
     */
    protected __setNormalIcon(element: INavigationItem): void;
    /**
     * Set pressed text & icon for a struct-button
     * @param element Element structure
     */
    protected __setPressedIcon(element: INavigationItem): void;
    /**
     * Set active text & icon for a struct-button
     * @param element Element structure
     */
    protected __setActiveIcon(element: INavigationItem): void;
    /**
     * update icons of displayed elements after Theme change
     */
    protected __updateIcons(): void;
    /**
     * Set the icon of a navigation button
     * @param button
     * @param iconPath
     */
    protected __setIcon(button: TcHmi.Controls.Beckhoff.TcHmiButton, iconPath: string): void;
    /**
     * set icon width and height
     */
    protected __setIconDimensions(button: TcHmi.Controls.Beckhoff.TcHmiButton): void;
    /**
     * Get AccessConfig with injected access rights of the navigation elements
     */
    getAccessConfig(): TcHmi.AccessControl[];
    /**
     * get access rights of the navigation elements
     * @param element Element structure
     * @param accesList List of accesData
     */
    protected __getSubRights(elements: INavigationItem[], accessList: TcHmi.AccessControl[]): TcHmi.AccessControl[];
    /**
     * Our navigation-only rights should be default true
     * @param name Name of the navigation-only right (?) to check
     */
    getDescriptionAccessByName(name: string): TcHmi.Controls.ControlAccessDescription | null;
    /**
     * Generic 'OnButtonUp'-/ 'onTouchEnd' Event Callbackfunction for any Struct-Element-Button
     * @param element Element structure
     */
    protected __onMouseUp(element?: INavigationItem): (_event: MouseEvent | TouchEvent | TcHmi.EventProvider.Event) => void;
    /**
     * Generic 'OnButtonDown'-/ 'onTouchStart' Event Callbackfunction for any Struct-Element-Button
     * @param element Element structure
     */
    protected __onNavButtonDown(element: INavigationItem): (_event: TcHmi.EventProvider.Event) => void;
    /**
     * Generic 'OnButtonLeave'-/ 'onTouchCancel' Event Callbackfunction for any Struct-Element-Button
     * @param element Element structure
     */
    protected __onNavButtonCancel(element: INavigationItem): (_event: TcHmi.EventProvider.Event) => void;
    /**
     * Generic 'OnButtonLeave'-/ 'onTouchCancel' Event Callbackfunction for any Struct-Element-Button
     * @param element Element structure
     */
    protected __onNavButtonEnter(element: INavigationItem): (_event: TcHmi.EventProvider.Event) => void;
    /**
     * 'OnPressed' Event Callbackfunction for BackButton.
     */
    protected __onBackButtonPressed(_event: TcHmi.EventProvider.Event): void;
    /**
     * 'OnButtonDown' - / 'onTouchStart' Event Callbackfunction for BackButton.
     */
    protected __onBackButtonDown(_event: TcHmi.EventProvider.Event): void;
    /**
     * 'OnButtonLeave'-/ 'onTouchCancel' Event Callbackfunction for BackButton.
     */
    protected __onBackButtonCancel(_event: TcHmi.EventProvider.Event): void;
    /**
     * 'OnButtonEnter' Event Callbackfunction for BackButton.
     */
    protected __onBackButtonEnter(_event: TcHmi.EventProvider.Event): void;
    /**
     * Event Callbackfunction for Content changed in the target Region to detect external actions.
     */
    protected __onRegionContentChanged(_event: TcHmi.EventProvider.Event): void;
    /**
     * Sets the content value and calls the associated process function (processNavigationStructure).
     * @param valueNew The new value for the navigation structure attribute.
     */
    setNavigationStructure(valueNew: INavigationItem[] | null): void;
    /**
     * The watch callback for the textActiveColor object resolver.
     */
    protected __onResolverForNavgiationStructureWatchCallback(data: TcHmi.Symbol.ObjectResolver.IWatchResultObject<INavigationItem[]>): void;
    /**
     * Returns the current content value.
     */
    getNavigationStructure(): INavigationItem[] | null | undefined;
    protected __processNavigationStructure(): void;
    /**
     * give each element in the navigationstructure an id
     * @param element The root element of the structure
     */
    protected __setNavElementId(element: INavigationItem[]): void;
    /**
     * Sets the text color and calls the associated process function (processTextColor).
     * @param valueNew The new value for textFColor.
     */
    setTextColor(valueNew: TcHmi.SolidColor | null): void;
    /**
     * The watch callback for the textColor object resolver.
     */
    protected __onResolverForTextColorWatchCallback(data: TcHmi.Symbol.ObjectResolver.IWatchResultObject<TcHmi.SolidColor>): void;
    /**
     * Returns the current value of textColor.
     */
    getTextColor(): TcHmi.SolidColor | null | undefined;
    /**
     * Processes the current textColor attribute value.
     */
    protected __processTextColor(): void;
    /**
     * Sets the text color and calls the associated process function (processTextColorActive).
     * @param valueNew The new value for textFColor.
     */
    setTextColorActive(valueNew: TcHmi.SolidColor | null): void;
    /**
     * The watch callback for the textColorActive object resolver.
     */
    protected __onResolverForTextColorActiveWatchCallback(data: TcHmi.Symbol.ObjectResolver.IWatchResultObject<TcHmi.SolidColor>): void;
    /**
     * Returns the current value of textColorActive.
     */
    getTextColorActive(): TcHmi.SolidColor | null | undefined;
    /**
     * Sets the text color and calls the associated process function (processTextColorPressed).
     * @param valueNew The new value for textFColor.
     */
    setTextColorPressed(valueNew: TcHmi.SolidColor | null): void;
    /**
     * The watch callback for the textColorPressed object resolver.
     */
    protected __onResolverForTextColorPressedWatchCallback(data: TcHmi.Symbol.ObjectResolver.IWatchResultObject<TcHmi.SolidColor>): void;
    /**
     * Returns the current value of textColorPressed.
     */
    getTextColorPressed(): TcHmi.SolidColor | null | undefined;
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
    setTextFontSizeUnit(valueNew: TcHmi.FontSizeUnit | null): void;
    /**
     * Returns the current value of textFontSizeUnit.
     */
    getTextFontSizeUnit(): TcHmi.FontSizeUnit | undefined;
    /**
     * Processes the current textFontSizeUnit attribute value.
     */
    protected __processTextFontSizeUnit(): void;
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
    setIconWidthUnit(valueNew: TcHmi.DimensionUnit | null): void;
    /**
     * Returns the current value of the member variable iconWidthUnit.
     */
    getIconWidthUnit(): TcHmi.DimensionUnit | undefined;
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
    setIconHeightUnit(valueNew: TcHmi.DimensionUnit | null): void;
    /**
     * Returns the current value of the member variable iconHeightUnit.
     */
    getIconHeightUnit(): TcHmi.DimensionUnit | undefined;
    /**
     * Processes the current value of iconHeightUnit and forwards it to the target html container element.
     */
    protected __processIconHeightUnit(): void;
    /**
     * Process the widht and height of the active buttons
     */
    protected __processIconDimensions(): void;
    /**
     * Sets the value of the member variable "StaticMenuHeight" if the new value is not equal to the current value.
     * and calls the associated process function (__processStaticMenuHeight) after that.
     * @param valueNew The new value for StaticMenuHeight.
     */
    setStaticMenuHeight(valueNew: number | null): void;
    /**
     * Returns the current value of the member variable StaticMenuHeight.
     */
    getStaticMenuHeight(): number | null | undefined;
    /**
     * Processes the current value of StaticMenuHeight and forwards it to the target html container element.
     */
    protected __processStaticMenuHeight(): void;
    /**
     * Sets the value of the member variable "StaticMenuHeighttUnit" if the new value is not equal to the current value.
     * and calls the associated process function (processStaticMenuHeightUnit) after that.
     * @param valueNew The new value for StaticMenuHeightUnit.
     */
    setStaticMenuHeightUnit(valueNew: TcHmi.DimensionUnit | null): void;
    /**
     * Returns the current value of the member variable StaticMenuHeightUnit.
     */
    getStaticMenuHeightUnit(): TcHmi.DimensionUnit | undefined;
    /**
     * Processes the current value of StaticMenuHeightUnit and forwards it to the target html container element.
     */
    protected __processStaticMenuHeightUnit(): void;
    /**
     * Sets the value of the member variable "NavigationOrientation" if the new value is not equal to the current value
     * and calls the associated process function (processNavigationOrientation) after that.
     * @param valueNew The new value for backButtonText.
     */
    setNavigationOrientation(valueNew: 'Horizontal' | 'Vertical' | null): void;
    /**
     * Returns the current value of the member variable NavigationOrientation.
     */
    getNavigationOrientation(): "Horizontal" | "Vertical" | undefined;
    /**
     * Processes the current value of NavigationOrientation.
     */
    protected __processNavigationOrientation(): void;
    /**
     * Sets the value of KeepLowestLevel and calls the associated process function (processKeepLowestLevel).
     * @param valueNew The new value for KeepLowestLevel.
     */
    setKeepLowestLevel(valueNew: boolean | null): void;
    /**
     * Returns the current value of KeepLowestLevel.
     */
    getKeepLowestLevel(): boolean | undefined;
    /**
     * Sets the value of ShowBreadcrumb and calls the associated process function (processShowBreadcrumb).
     * @param valueNew The new value for ShowBreadcrumb.
     */
    setShowBreadcrumb(valueNew: boolean | null): void;
    /**
     * Returns the current value of ShowBreadcrumb.
     */
    getShowBreadcrumb(): boolean | null | undefined;
    /**
     * Processes the current value of ShowBreadcrumb.
     */
    protected __processShowBreadcrumb(): void;
    /**
     * Sets the value of ScrollbarStyle and calls the associated process function (processScrollbarStyle).
     * @param valueNew The new value for ScrollbarStyle.
     */
    setScrollbarStyle(valueNew: 'Auto' | 'None' | null): void;
    /**
     * Returns the current value of ScrollbarStyle.
     */
    getScrollbarStyle(): "Auto" | "None" | undefined;
    /**
     * Processes the current value of ScrollbarStyle.
     */
    protected __processScrollbarStyle(): void;
    /**
     * Sets the value of ShowBackButton and calls the associated process function (processShowBackButton).
     * @param valueNew The new value for ShowBackButton.
     */
    setShowBackButton(valueNew: boolean | null): void;
    /**
     * Returns the current value of ShowBackButton.
     */
    getShowBackButton(): boolean | undefined;
    /**
     * Processes the current value of ShowBackButton.
     */
    protected __processShowBackButton(): void;
    /**
     * Sets the background value and calls the associated process function.
     * @param valueNew
     * @preserve (Part of the public API)
     */
    setButtonBackgroundColor(valueNew: TcHmi.Color | null): void;
    /**
     * Returns the current background value.
     * @preserve (Part of the public API)
     */
    getButtonBackgroundColor(): TcHmi.Color | null | undefined;
    /**
     * The watch callback for the buttonBackgroundColor object resolver.
     */
    protected __onResolverForButtonBackgroundColorWatchCallback(data: TcHmi.Symbol.ObjectResolver.IWatchResultObject<TcHmi.Color>): void;
    /**
     * Processes the current background-color attribute.
     */
    protected __processButtonBackgroundColor(): void;
    /**
     * Sets the background value and calls the associated process function.
     * @param valueNew
     * @preserve (Part of the public API)
     */
    setButtonBackgroundColorActive(valueNew: TcHmi.Color | null): void;
    /**
     * Returns the current background value.
     * @preserve (Part of the public API)
     */
    getButtonBackgroundColorActive(): TcHmi.Color | null | undefined;
    /**
     * The watch callback for the buttonBackgroundColorActive object resolver.
     */
    protected __onResolverForButtonBackgroundColorActiveWatchCallback(data: TcHmi.Symbol.ObjectResolver.IWatchResultObject<TcHmi.Color>): void;
    /**
     * Sets the background value and calls the associated process function.
     * @param valueNew
     * @preserve (Part of the public API)
     */
    setButtonBackgroundColorPressed(valueNew: TcHmi.Color | null): void;
    /**
     * Returns the current background value.
     * @preserve (Part of the public API)
     */
    getButtonBackgroundColorPressed(): TcHmi.Color | null | undefined;
    /**
     * The watch callback for the buttonBackgroundColorPressed object resolver.
     */
    protected __onResolverForButtonBackgroundColorPressedWatchCallback(data: TcHmi.Symbol.ObjectResolver.IWatchResultObject<TcHmi.Color>): void;
}
export interface INavigationItem {
    name: string;
    /** internal identifier */
    id: string;
    content?: string;
    icon_n?: string;
    icon_p?: string;
    icon_a?: string;
    subItem?: INavigationItem[];
    accessRights?: TcHmi.AccessControl[];
}
export interface BreadcrumbItem {
    element: HTMLElement;
    callback?: () => void;
}
export interface NavigationButton {
    tchmi_button?: TcHmi.Controls.Beckhoff.TcHmiButton;
    events: TcHmi.DestroyFunction[];
}
declare const _TcHmiNavigation: typeof TcHmiNavigation;
type tTcHmiNavigation = TcHmiNavigation;
type tINavigationItem = INavigationItem;
type tBreadcrumbItem = BreadcrumbItem;
type tNavigationButton = NavigationButton;
declare global {
    namespace TcHmi.Controls.BaseTemplate {
        const TcHmiNavigation: typeof _TcHmiNavigation;
        type TcHmiNavigation = tTcHmiNavigation;
        namespace TcHmiNavigation {
            type INavigationItem = tINavigationItem;
            type BreadcrumbItem = tBreadcrumbItem;
            type NavigationButton = tNavigationButton;
        }
    }
}
export {};