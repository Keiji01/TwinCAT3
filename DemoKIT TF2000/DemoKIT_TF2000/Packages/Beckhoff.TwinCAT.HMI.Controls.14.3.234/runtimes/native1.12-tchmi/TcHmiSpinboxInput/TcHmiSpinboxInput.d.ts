declare namespace TcHmi.Controls.Beckhoff {
    class TcHmiSpinboxInput extends TcHmi.Controls.Beckhoff.TcHmiNumericInput {
        #private;
        constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
        /** Reference to the root dom element of the current control template as  jquery object. */
        protected __elementButtonContainerStart: HTMLElement;
        /** Reference to the element containing the text input element as jquery object. */
        protected __elementButtonContainerEnd: HTMLElement;
        protected __inputBackgroundColor: Color | null | undefined;
        protected __buttonPlus: HTMLElement | undefined;
        protected __buttonMinus: HTMLElement | undefined;
        protected __autoStep: boolean | undefined;
        protected __autoStepTimeStamp: number;
        /** Saved if a time button is pressed */
        protected __isPressed: boolean;
        /** The interval timer for time buttons */
        protected __intervalTimer: number;
        /** Internal reference to the attribute 'data-tchmi-step' */
        protected __step: number | bigint | null | undefined;
        protected __stepInit: number | bigint | null | undefined;
        /** Internal reference to the attribute 'data-tchmi-button-position' */
        protected __buttonPosition: TcHmiSpinboxInput.ButtonPosition | undefined;
        /** formatter to fix floating point notation errors */
        protected readonly __floatingPointFormatter: Intl.NumberFormat;
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
         * Callback function of the resize observer
         */
        protected __onResize(): void;
        protected __createAndAppendButtons(): void;
        /**
         * Execute a single step.
         */
        protected __executeStep(direction: 'increment' | 'decrement'): void;
        /**
         * Eventhandler for the plus button
         **/
        protected __onButtonPlus(event: MouseEvent): void;
        /**
         * Eventhandler for the minus button
         **/
        protected __onButtonMinus(event: MouseEvent): void;
        /**
         * Eventhandler for the plus button PointerDown
         **/
        protected __onPointerDownButtonPlus(event: MouseEvent): void;
        /**
         * Eventhandler for the minus button PointerDown
         **/
        protected __onPointerDownButtonMinus(event: MouseEvent): void;
        /**
         * Is called if onPressed event of buttons has raised.
         */
        private __onMouseUp;
        /**
         * Returns an event handler for contextmenu event.
         */
        protected __onContextMenu(event: Event): void;
        /**
         * Processes the current value of valueType by calling all setter functions related to valueType.
         */
        protected __processValueType(): void;
        /**
         * Sets the step attribute.
         * @param valueNew The new value for step.
         */
        setStep(valueNew: number | bigint | null): void;
        /**
         * Returns the current value of step.
         * @returns The current value of step.
         */
        getStep<T extends number | bigint = number>(): T | null | undefined;
        /**
         * Processes the current value of attribute step.
         */
        protected __processStep(): void;
        /**
         * Sets the buttonPosition attribute.
         * @param valueNew The new value for buttonPosition.
         */
        setButtonPosition(valueNew: TcHmiSpinboxInput.ButtonPosition | null): void;
        /**
         * Returns the current value of buttonPosition.
         */
        getButtonPosition(): TcHmiSpinboxInput.ButtonPosition | undefined;
        /**
         * Processes the current value of attribute buttonPosition.
         */
        protected __processButtonPosition(): void;
        protected __processUnitPosition(): void;
        /**
         * Sets the input background color and calls the associated process function (processInputBackgroundColor).
         * @param valueNew
         */
        setInputBackgroundColor(valueNew: Color | null): void;
        /**
         * The watch callback for the InputBackgroundColor object resolver.
         */
        protected __onResolverForInputBackgroundColorWatchCallback(data: Symbol.ObjectResolver.IWatchResultObject<Color>): void;
        /**
         * Returns the current input background color.
         */
        getInputBackgroundColor(): Color | null | undefined;
        /**
         * Processes the current input background color attribute.
         */
        protected __processInputBackgroundColor(): void;
        /**
         * Sets the auto focus out attribute and calls the associated process function (processAutoStep).
         * @param valueNew The new value for autoStep.
         */
        setAutoStep(valueNew: boolean | null): void;
        /**
         * Returns the current value of autoStep.
         * @returns The current value of autoStep.
         */
        getAutoStep(): boolean | undefined;
        /**
         * Processes the current autoStep attribute value.
         */
        protected __processAutoStep(): void;
    }
    namespace TcHmiSpinboxInput {
        type ButtonPosition = 'BothLeft' | 'BothRight' | 'PlusLeftAndMinusRight' | 'MinusLeftAndPlusRight' | 'PlusTopAndMinusBottom' | 'MinusTopAndPlusBottom';
    }
}
//# sourceMappingURL=TcHmiSpinboxInput.d.ts.map