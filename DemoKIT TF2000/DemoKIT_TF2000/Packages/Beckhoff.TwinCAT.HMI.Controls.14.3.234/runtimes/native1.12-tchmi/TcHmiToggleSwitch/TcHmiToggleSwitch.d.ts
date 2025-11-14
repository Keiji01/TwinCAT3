declare namespace TcHmi.Controls.Beckhoff {
    class TcHmiToggleSwitch extends TcHmi.Controls.Beckhoff.TcHmiCheckbox {
        #private;
        constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
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
         * Returns an event handler function for the onResized event.
         */
        protected __onResized(): void;
        /**
         * Processes the current toggleStateIconColor attribute value.
         */
        protected __processToggleStateIconColor(): void;
    }
}
//# sourceMappingURL=TcHmiToggleSwitch.d.ts.map