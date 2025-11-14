import { TcHmiControl, type TcHmiControlSpecificData } from 'Beckhoff.TwinCAT.HMI.Framework/index.esm.js';
export declare class TcHmiBreadcrumb<ContentType = string> extends TcHmiControl {
    #private;
    /**
     * Constructor of the control
     * @param element Element from HTML (internal, do not use)
     * @param pcElement precompiled Element (internal, do not use)
     * @param attrs Attributes defined in HTML in a special format (internal, do not use)
     */
    constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
    /**HTML-Templateelements */
    protected __elementTemplateRoot: HTMLElement;
    /**TcHmiBreadcrumb data */
    protected __breadcrumbData: BreadcrumbData<ContentType>[];
    /** The currently pressed breadcrumb button */
    protected __buttonPressed: BreadcrumbData<ContentType> | null;
    /**Callback function */
    protected __callback: ((content: ContentType) => void) | null | undefined;
    /**standard text color */
    protected __textColor: TcHmi.SolidColor | null | undefined;
    /**text font size of the breadcrumb buttons */
    protected __textFontSize: number | null | undefined;
    /**text font size unit of the breadcrumb buttons */
    protected __textFontSizeUnit: TcHmi.FontSizeUnit | undefined;
    protected __asyncWorkData: IBreadcrumpSpecificData;
    /** Map of <button, <event, eventHandler>*/
    protected __buttonDestroyFunctions: Map<Window | Document | Element | Iterable<Element>, Map<string, TcHmi.DestroyFunction>>;
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
    protected __doAsyncWork(timestamp?: number): void;
    /**
     * EventHandler for the on localization changed event.
     */
    protected __onLocalizationChanged(): void;
    /**
     * DEPRECATED please use 'setBreadcrumbDataEx'
     * TcHmiBreadcrumb data Interface
     */
    setBreadcrumbData(valueNew: INavigationItem<ContentType>[], callback: ((content: ContentType) => void) | null | undefined): void;
    /**
     * Sets the breadcrumb data and the function called when an item is clicked.
     */
    setBreadcrumbDataEx(valueNew: BreadcrumbData<ContentType>[], callback: ((content: ContentType) => void) | null | undefined): void;
    /**
     * Create the breadcrumb bar.
     */
    protected __createBreadcrumb(): void;
    /**
     * Function to create a breadcrumb button with text, icon and events.
     * @param element The structure array of the displayed elements
     */
    protected __createTcHmiBreadcrumbButton(element: BreadcrumbData<ContentType>, backwards: boolean): void;
    /**
     * Add an event to an element and register its destroy function.
     */
    protected __addAndRegisterEvent(element: Element | Document | Window | Iterable<Element>, type: string, listener: (this: EventTarget, event: Event) => void, options?: AddEventListenerOptions): void;
    /**
     * Remove an event from an element and call its destroyer;
     */
    protected __removeEvent(element: Element | Document | Window | Iterable<Element>, type: string | string[]): void;
    /**
     * On button down event callback.
     */
    protected __onBreadcrumbButtonDown(event: Event): void;
    /**
     * On document mouseup event callback.
     */
    protected __onDocumentMouseUp(event: Event): void;
    /**
     * On button up event callback.
     */
    protected __onBreadcrumbButtonUp(event: Event): void;
    /**
     * On button leave event callback.
     */
    protected __onBreadcrumbButtonLeave(event: Event): void;
    /**
     * On button enter event callback.
     */
    protected __onBreadcrumbButtonEnter(event: Event): void;
    /**
     * Reset breadcrumb data
     */
    protected __resetTcHmiBreadcrumb(): void;
    /**
     * Sets the font size and calls the associated process function (processTextFontSize).
     * @param valueNew The new value for textFontSize.
     */
    setTextFontSize(valueNew: number | null): void;
    /**
     * Returns the current value of textFontSize.
     */
    getTextFontSize(): number | null | undefined;
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
    protected __processTextColor(): void;
}
/**
 * DEPRECATED please use the BreadcrumbData interface
 * @deprecated please use the BreadcrumbData interface
 */
export interface INavigationItem<ContentType = string> {
    name: string | HTMLElement;
    /** Additional custom information */
    content: ContentType;
    button?: HTMLElement;
    /** DEPRECATED This property is not used in any form */
    id: string;
    /** DEPRECATED This property is not used in any form */
    icon_n: string;
    /** DEPRECATED This property is not used in any form */
    icon_p: string;
    /** DEPRECATED This property is not used in any form */
    icon_a: string;
    /** DEPRECATED This property is not used in any form */
    subItem?: INavigationItem[];
    /** DEPRECATED This property is not used in any form */
    accessRights?: TcHmi.AccessControl[];
}
export interface BreadcrumbData<ContentType = string> {
    /** The name displayed in the breadcrumb item*/
    text: string | HTMLElement;
    /** The code that is returned in the callback when the item was clicked */
    code: ContentType;
    /** The breadcrumb button */
    button?: HTMLElement;
    /** Defines if the button is enabled and therefore clickable */
    isEnabled: boolean;
}
export interface IBreadcrumpSpecificData extends TcHmiControlSpecificData {
    'Controls.BaseTemplate.TcHmiBreadcrumb.triggerRebuild': boolean;
}
declare const _TcHmiBreadcrumb: typeof TcHmiBreadcrumb;
type tTcHmiBreadcrumb<ContentType = string> = TcHmiBreadcrumb<ContentType>;
type tBreadcrumbData<ContentType = string> = BreadcrumbData<ContentType>;
type tINavigationItem<ContentType = string> = INavigationItem<ContentType>;
type tIControlSpecificData = IBreadcrumpSpecificData;
declare global {
    namespace TcHmi.Controls.BaseTemplate {
        const TcHmiBreadcrumb: typeof _TcHmiBreadcrumb;
        type TcHmiBreadcrumb<ContentType = string> = tTcHmiBreadcrumb<ContentType>;
        namespace TcHmiBreadcrumb {
            type IControlSpecificData = tIControlSpecificData;
            type BreadcrumbData<ContentType = string> = tBreadcrumbData<ContentType>;
            type INavigationItem<ContentType = string> = tINavigationItem<ContentType>;
        }
    }
}
export {};
//# sourceMappingURL=TcHmiBreadcrumb.esm.d.ts.map