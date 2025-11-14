/** TwinCAT HMI API */
declare const TcHmi: typeof globalThis.TcHmi;
import { TcHmiControl } from 'Beckhoff.TwinCAT.HMI.Framework/index.esm.js';
export declare class TcHmiBurgerMenu extends TcHmi.Controls.Beckhoff.TcHmiToggleButton {
    #private;
    /**
     * Constructor of the control
     * @param element Element from HTML (internal, do not use)
     * @param pcElement precompiled Element (internal, do not use)
     * @param attrs Attributes defined in HTML in a special format (internal, do not use)
     */
    constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
    /** the control which will be affected by this control */
    protected __targetControl: TcHmiControl | null | undefined;
    /** top most layer control container*/
    protected __targetControlContainer: HTMLElement;
    /** top most layer control container*/
    protected __targetControlContainer_2: HTMLElement;
    /** target Control parent */
    protected __targetControl_Parent: JQuery | null | undefined;
    /**Save the current target control on Theme Change */
    protected __targetControlSave: TcHmiControl | null | undefined;
    /**boolean to show if dropdownbox is open */
    protected __dropdownboxOpen: boolean;
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
     * onPressed function for this control
     */
    protected __onPressed(_event: TcHmi.EventProvider.Event): void;
    /**
     * function to build or destroy Popup
     * @param valueNew Toogles the dropdown
     */
    protected __setDropDownboxOpen(valueNew?: boolean): void;
    closeMenu(): void;
    /**
     * grab the Target Control and remove it from the DOM
     */
    protected __grabTargetControl(): void;
    /**
     * Replace the target Control to the original position
     */
    protected __replaceTargetControl(): void;
    /**
     * set the container size to the target control size
     */
    protected __setContainerSize(): void;
    /**
     * save the current target control on theme change because it might be set to null
     */
    protected __onThemeChanged(): void;
    /**
     * save the current target control on theme change because it might be set to null
     */
    protected __onWindowResize(): void;
    /**
     * Sets the content value and calls the associated process function (__processTargetControl).
     * @param valueNew The new value for the target control attribute
     */
    setTargetControl(valueNew: TcHmiControl | null): void;
    /**
     * Returns the current targetControl value.
     */
    getTargetControl(): TcHmiControl | null | undefined;
    __processTargetControl(): void;
}
declare const _TcHmiBurgerMenu: typeof TcHmiBurgerMenu;
type tTcHmiBurgerMenu = TcHmiBurgerMenu;
declare global {
    namespace TcHmi.Controls.BaseTemplate {
        const TcHmiBurgerMenu: typeof _TcHmiBurgerMenu;
        type TcHmiBurgerMenu = tTcHmiBurgerMenu;
    }
}
export {};
//# sourceMappingURL=TcHmiBurgerMenu.esm.d.ts.map