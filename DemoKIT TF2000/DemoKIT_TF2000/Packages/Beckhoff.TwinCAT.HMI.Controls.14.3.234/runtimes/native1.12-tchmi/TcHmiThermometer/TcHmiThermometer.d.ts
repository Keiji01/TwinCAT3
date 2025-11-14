declare namespace TcHmi.Controls.Beckhoff {
    class TcHmiThermometer extends TcHmiLinearGauge {
        #private;
        /** Internal reference to the attribute 'data-tchmi-filler-color' */
        protected __bulbColor: TcHmi.SolidColor | null | undefined;
        protected __resizeObserver: ResizeObserver;
        private __resizeObserverActive;
        constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
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
        protected __onResized(): void;
        /**
         * Resizes the bulb.
         * Will be called automatically by the resize observer.
         */
        protected __resizeBulb(): void;
        protected __processOrientation(): void;
        /**
         * Processes the current value of attribute progressForegroundColor.
         */
        protected __processProgressForegroundColor(): void;
    }
}
//# sourceMappingURL=TcHmiThermometer.d.ts.map