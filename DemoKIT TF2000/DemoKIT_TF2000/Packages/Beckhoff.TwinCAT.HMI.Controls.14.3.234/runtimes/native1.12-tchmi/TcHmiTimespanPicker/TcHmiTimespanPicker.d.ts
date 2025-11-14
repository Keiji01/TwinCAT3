declare namespace TcHmi.Controls.Beckhoff {
    class TcHmiTimespanPicker extends TcHmi.Controls.System.TcHmiControl {
        #private;
        constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
        /** member variables */
        /** Reference to the root dom element of the current control template as  jquery object. */
        protected __elementTemplateRoot: HTMLElement;
        /** Reference to the root dom element of the current control template as  jquery object. */
        protected __elementTSTemplate: JQuery;
        /** Reference to the first timespan block as jquery object. */
        protected __elementTSFirstBlockTemplate: JQuery;
        /** Reference to the second timespan block as jquery object. */
        protected __elementTSSecondBlockTemplate: JQuery;
        /** Reference to the button template dom element of the current control as  jquery object. */
        protected __elementButtonTemplate: HTMLElement;
        /**
         * Internal reference to the attribute "data-tchmi-value"
         */
        protected __value: string | undefined;
        /**
         * A maximum for the value in iso 8601 format
         */
        protected __maxValue: string | undefined;
        /**  Internal reference to the attribute 'data-tchmi-value-symbol' */
        protected __valueSymbol: Symbol<string> | undefined | null;
        protected __valueSymbolCurrentValue: string | undefined | null;
        protected __valueSymbolSchema: JsonSchema | undefined | null;
        protected __maxValueSymbol: string | undefined;
        /**
         * Internal reference to the attribute "data-tchmi-direct-display"
         */
        protected __directDisplay: boolean | undefined;
        /**
         * Internal reference to the attribute "data-tchmi-show-confirmation-buttons"
         */
        protected __showConfirmationButtons: boolean | undefined;
        /**
         * ReadOnly state of the control.
         */
        protected __isReadOnly: boolean | undefined;
        /** Regex to validate an ISO 8601 duration. See https://regexr.com/5d2q2 for tests. */
        protected __REGEX_ISO_8601: RegExp;
        /** Stores the controls as System.TcHmiControl[] */
        protected __baseControls: {
            cancelButton?: TcHmiButton;
            okButton?: TcHmiButton;
            spinboxes: {
                year?: TcHmiSpinboxInput;
                month?: TcHmiSpinboxInput;
                day?: TcHmiSpinboxInput;
                hour?: TcHmiSpinboxInput;
                minute?: TcHmiSpinboxInput;
                second?: TcHmiSpinboxInput;
                millisecond?: TcHmiSpinboxInput;
            };
        };
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
         * Created a documentFragment with controls (textbox, button, textbox and a second button).
         * @param name The name of the region.
         * @returns The documentFragment with controls.
         */
        private __addControls;
        /**
         * Convert milliseconds to iso 8601 string
         * @param milliSec Milliseconds
         */
        protected __timespanObjectToIso(timespanObject: {
            years: number;
            months: number;
            days: number;
            hours: number;
            minutes: number;
            seconds: number;
            milliseconds: number;
        }): string;
        /**
         * updates the value of the control if the control is directly displayed in the view and the confirmation buttons are hidden.
         */
        protected __updateValue(): void;
        /**
         * Convert iso 8601 string to milliseconds
         * @param t Iso 8601 string
         */
        isoToTimespanObject(timespan: string): {
            years: number;
            months: number;
            days: number;
            hours: number;
            minutes: number;
            seconds: number;
            milliseconds: number;
        };
        /**
         * Convert timespan object to milliseconds
         */
        convertToMilliseconds(obj: {
            years: number;
            months: number;
            days: number;
            hours: number;
            minutes: number;
            seconds: number;
            milliseconds: number;
        }): number;
        /**
         * Returns an event handler for the mousedown event.
         */
        protected __onMousedown(event: MouseEvent): void;
        /**
         * Is called if focusout event  has raised.
         */
        private __onFocusOut;
        /**
         * Is called if keypress event  has raised.
         */
        private __onKeyPress;
        /**
         * Open the timespanPicker (in TopMostLayer).
         */
        openTimespanPicker(): void;
        /**
         * Close the timespanPicker without changes (delete from TopMostLayer).
         */
        closeTimespanPicker(): void;
        /**
         * Return the currently configured timespan object.
         */
        protected __getTimespanObject(): {
            years: number;
            months: number;
            days: number;
            hours: number;
            minutes: number;
            seconds: number;
            milliseconds: number;
        };
        /**
         * Is called if onPressed event of buttons has raised.
         */
        private __onPressed;
        /**
         * Is called if onUserInteractionFinished event of SpinboxInput has raised.
         */
        private __onUserInteractionFinished;
        /**
         * Is called if onPropertyChanged event for property IsValid of SpinboxInput has raised.
         */
        private __onIsValidChanged;
        private __setIsEnabledOfOkButton;
        /**
         * Sets the value of value
         * @param valueNew The new value for value
         */
        setValue(valueNew: string | null): void;
        protected __setValue(valueNew: string | null, process?: boolean): void;
        /**
         * Gets the value of value
         */
        getValue(): string | undefined;
        /**
         * Processes value
         */
        protected __processValue(): void;
        /**
         * Sets the value of DirectDisplay
         * @param valueNew The new value for DirectDisplay
         */
        setDirectDisplay(valueNew: boolean | null): void;
        /**
         * Gets the value of DirectDisplay
         */
        getDirectDisplay(): boolean | undefined;
        /**
         * Process the value of DirectDisplay
         */
        protected __processDirectDisplay(): void;
        /**
         * Sets the value of ShowConfirmationButtons
         * @param valueNew The new value for ShowConfirmationButtons
         */
        setShowConfirmationButtons(valueNew: boolean | null): void;
        /**
         * Gets the value of ShowConfirmationButtons
         */
        getShowConfirmationButtons(): boolean | undefined;
        /**
         * Process the value of ShowConfirmationButtons
         */
        protected __processShowConfirmationButtons(): void;
        /**
         * Processes the current enabled state.
         */
        __processIsEnabled(): void;
        /**
         * Sets the isReadOnly attribute and calls the associated process function (processIsReadOnly).
         * @preserve (Part of the public API)
         */
        setIsReadOnly(valueNew: boolean | null): void;
        /**
         * Returns the effective value of isReadOnly based on own and parent isReadOnly variable.
         */
        getIsReadOnly(): boolean | undefined;
        /**
         * Process IsReadOnly.
         */
        protected __processIsReadOnly(): void;
        setMaxValue(valueNew: string | null): void;
        /**
         * Sets the value of maxValue
         */
        protected __setMaxValue(valueNew: string | null): void;
        /**
         * Gets the value of maxValue
         */
        getMaxValue(): string | undefined;
        /**
         * Process formatMaximum
         */
        protected __processMaxValue(): void;
        /**
         * @param valueNew
         */
        setValueSymbol(valueNew: TcHmi.Symbol<string> | null): void;
        /**
         * Gets the valueSymbol
         */
        getValueSymbol(): Symbol<string> | null | undefined;
        /**
         * Gets the valueSymbolCurrentValue
         */
        getValueSymbolCurrentValue(): string | null | undefined;
        protected __destroyValueSymbolWatch: DestroyFunction | null;
        protected __onValueSymbolWatch(data: TcHmi.Symbol.IReadResultObject<string>): void;
        protected __processValueSymbol(): void;
        protected __processValueSymbolCurrentValue(): void;
        protected __processMaxSymbolValue(): void;
        getMaxValueSymbol(): string | undefined;
        protected __isMaxReached(): boolean;
        protected __reuseValue(): void;
        protected __setSpinboxesMax(): void;
    }
}
//# sourceMappingURL=TcHmiTimespanPicker.d.ts.map