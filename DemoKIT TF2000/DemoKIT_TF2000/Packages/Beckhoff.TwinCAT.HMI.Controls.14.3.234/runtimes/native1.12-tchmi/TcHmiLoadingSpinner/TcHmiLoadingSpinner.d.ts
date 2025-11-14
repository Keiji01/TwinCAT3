declare namespace TcHmi.Controls.Beckhoff {
    class TcHmiLoadingSpinner extends TcHmi.Controls.System.TcHmiControl {
        #private;
        protected __elementTemplateRoot: HTMLElement;
        /** The Loading spinner HTML element */
        protected __elementLoadingSpinner: HTMLElement;
        protected __loadingSpinnerDivs: NodeListOf<HTMLDivElement>;
        /** Internal reference to the attribute data-tchmi-color. */
        protected __spinnerColor: TcHmi.SolidColor | null | undefined;
        /** Internal reference to the attribute data-tchmi-stroke-thickness. */
        protected __strokeThickness: number | null | undefined;
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
         * Sets the spinner color and calls the associated process function (processColor).
         * @param valueNew The new value for spinnerColor.
         */
        setColor(valueNew: SolidColor | null): void;
        /**
         * The watch callback for the spinnerColor object resolver.
         */
        protected __onResolverForSpinnerColorWatchCallback(data: Symbol.ObjectResolver.IWatchResultObject<SolidColor>): void;
        /**
         * Returns the current value of spinnerColor.
         * @returns The current value of spinnerColor.
         */
        getColor(): SolidColor | null | undefined;
        /**
         * Processes the current color attribute value.
         */
        protected __processColor(): void;
        /**
         * Sets the value of the stroke thickness attribute.
         * @param valueNew
         * @preserve (Part of the public API)
         */
        setStrokeThickness(valueNew: number | null): void;
        /**
         * Gets the value of the stroke thickness attribute.
         * @param valueNew
         * @preserve (Part of the public API)
         */
        getStrokeThickness(): number | null | undefined;
        /**
         * Processes the current stroke thickness and stroke thickness unit value.
         */
        protected __processStrokeThickness(): void;
        /**
         * Gets the value of the stroke thickness unit attribute.
         * @param valueNew
         * @preserve (Part of the public API)
         */
        getStrokeThicknessUnit(): string;
    }
}
//# sourceMappingURL=TcHmiLoadingSpinner.d.ts.map