declare namespace TcHmi.Controls.Beckhoff {
    class TcHmiProgressBar extends TcHmi.Controls.System.TcHmiControl {
        #private;
        constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
        /** Reference to the root dom element of the current control template as  jquery object. */
        protected __elementTemplateRoot: HTMLElement;
        protected __elementBar: HTMLElement;
        /**  Internal reference to the attribute "data-tchmi-value" */
        protected __value: number | null | undefined;
        /** Internal reference to the attribute "data-tchmi-min-value" */
        protected __maxValue: number | undefined;
        /** Internal reference to the attribute "data-tchmi-max-value" */
        protected __minValue: number | undefined;
        /** Internal reference to the attribute 'data-tchmi-base-animation-time' */
        protected __baseAnimationTime: number | undefined;
        /** The animation running on the progress bar */
        protected __progressBarAnimation: Animation | null;
        /** The progress value in percent */
        protected __progress: number;
        /** The internal min value */
        protected __internalMinValue: number;
        /** The internal max value */
        protected __internalMaxValue: number;
        /** Internal reference to the attribute 'data-tchmi-bar-color' */
        protected __barColor: TcHmi.Color | null | undefined;
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
         * Function that updates the progress bar.
         */
        protected __updateProgress(skipAnimation?: boolean): void;
        /**
         * Function to calculate the percentage to which the bar would be filled given a specific value.
         * @param value The value of the slider.
         */
        protected __calculatePercentage(value: number): number;
        /**
         * Sets the internalMinValue and internalMaxValue and checks if the current value is in the range.
         * Switches min and max value if minValue is bigger than maxValue.
         */
        protected __setInternalMinMaxValues(): void;
        /**
         * Sets the value of the member variable "value" and calls the associated process function (processValue) after that.
         * @param valueNew The new value for value.
         */
        setValue(valueNew: number | null): void;
        /**
         * Returns the value.
         * @returns the value.
         */
        getValue(): number | null | undefined;
        /**
         * Processes the current value of attribute value.
         */
        protected __processValue(): void;
        /**
         * Sets the minValue attribute.
         * @param valueNew The new value for minValue.
         */
        setMinValue(valueNew: number | null): void;
        /**
         * Returns the current value of minValue.
         * @returns The current value of minValue.
         */
        getMinValue(): number | undefined;
        /**
         * Processes the current value of attribute minvalue.
         */
        protected __processMinValue(): void;
        /**
         * Sets the maxValue attribute.
         * @param valueNew The new value for maxValue.
         */
        setMaxValue(valueNew: number | null): void;
        /**
         * Returns the current value of maxValue.
         * @returns The current value of maxValue.
         */
        getMaxValue(): number | undefined;
        /**
         * Processes the current value of attribute maxvalue.
         */
        protected __processMaxValue(): void;
        /**
         * Sets the progress bar color attribute.
         * @param valueNew The new value for barColor.
         */
        setBarColor(valueNew: Color | null): void;
        /**
         * The watch callback for the barColor object resolver.
         */
        protected __onResolverForBarColorWatchCallback(data: Symbol.ObjectResolver.IWatchResultObject<Color>): void;
        /**
         * Returns the current value of barColor.
         */
        getBarColor(): Color | null | undefined;
        /**
         * Processes the current value of attribute barColor.
         */
        protected __processBarColor(): void;
        /**
         * Sets the baseAnimationTime attribute.
         * @param valueNew The new value for baseAnimationTime.
         */
        setBaseAnimationTime(valueNew: number | null): void;
        /**
         * Returns the current value of baseAnimationTime.
         */
        getBaseAnimationTime(): number | undefined;
    }
}
//# sourceMappingURL=TcHmiProgressBar.d.ts.map