import { TcHmiPartial } from '../dist/TcHmiPartial.esm.js';
export declare class TcHmiView extends TcHmiPartial {
    #private;
    constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
    /**
     * Shows/hides the control depending of the current 'observe' right
     */
    __processAccessConfig(): void;
}
declare const _TcHmiView: typeof TcHmiView;
type tTcHmiView = TcHmiView;
declare global {
    namespace TcHmi.Controls.System {
        const TcHmiView: typeof _TcHmiView;
        type TcHmiView = tTcHmiView;
    }
}
export {};
//# sourceMappingURL=TcHmiView.esm.d.ts.map