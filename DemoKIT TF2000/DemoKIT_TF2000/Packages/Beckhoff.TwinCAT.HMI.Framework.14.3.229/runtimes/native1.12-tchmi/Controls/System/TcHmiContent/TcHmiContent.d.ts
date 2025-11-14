export declare class TcHmiContent extends TcHmi.Controls.System.TcHmiPartial {
    #private;
    constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
    /**
     * Destroy the current control instance.
     * Will be called automatically if system destroys control!
     */
    destroy(): void;
}
declare const _TcHmiContent: typeof TcHmiContent;
type tTcHmiContent = TcHmiContent;
declare global {
    namespace TcHmi.Controls.System {
        const TcHmiContent: typeof _TcHmiContent;
        type TcHmiContent = tTcHmiContent;
    }
}
export {};