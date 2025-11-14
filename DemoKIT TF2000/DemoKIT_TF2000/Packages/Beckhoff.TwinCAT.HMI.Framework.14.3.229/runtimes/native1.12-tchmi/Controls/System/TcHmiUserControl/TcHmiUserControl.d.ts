export declare class TcHmiUserControl extends TcHmi.Controls.System.TcHmiPartial {
    #private;
    constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
    /**
     * Destroy the current control instance.
     * Will be called automatically if system destroys control!
     */
    destroy(): void;
}
declare const _TcHmiUserControl: typeof TcHmiUserControl;
type tTcHmiUserControl = TcHmiUserControl;
declare global {
    namespace TcHmi.Controls.System {
        const TcHmiUserControl: typeof _TcHmiUserControl;
        type TcHmiUserControl = tTcHmiUserControl;
    }
}
export {};