declare namespace Intl {
    interface Locale {
        /**
         * Browser support is sparse as of 2025-07.
         */
        firstDay?: number;
        /**
         * Browser support is sparse as of 2025-07.
         */
        minimalDays?: number;
        /**
         * Browser support is sparse as of 2025-07.
         */
        getWeekInfo?: () => {
            weekend: number[];
        };
        /**
         * Support chromiums from 2022-2025
         */
        weekInfo?: {
            weekend: number[];
        };
    }
}
declare namespace TcHmi.Controls.Beckhoff {
    class TcHmiDateTimePicker extends TcHmi.Controls.System.TcHmiControl {
        #private;
        constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
        /** member variables */
        /** Reference to the root dom element of the current control template as  jquery object. */
        protected __elementTemplateRoot: HTMLElement;
        /** Reference to the root dom element of the current control template as  jquery object. */
        protected __elementDTPTemplate: JQuery;
        /** Reference to the div with calendar in the control template as jquery object. */
        protected __elementCalendarTemplate: JQuery;
        /** Reference to the div with calendar in the control template as jquery object. */
        protected __elementTimeAndButtonTemplate: JQuery;
        /** Reference to the button template dom element of the current control as  jquery object. */
        protected __elementButtonTemplate: HTMLElement;
        /** Reference to the div element used as error display (top most layer) as jquery object. */
        protected __elementInvalidNotification: HTMLElement;
        /**
         * Internal reference to the attribute "data-tchmi-value" (iso timestamp string)
         */
        protected __value: string | undefined;
        /**
         * Internal reference to the attribute "data-tchmi-min-value" (iso timestamp string)
         */
        protected __minValue: string | undefined;
        /**
         * Internal reference to the attribute "data-tchmi-max-value" (iso timestamp string)
         */
        protected __maxValue: string | undefined;
        /**
         * Internal reference to the attribute "data-tchmi-direct-display"
         */
        protected __directDisplay: boolean | undefined;
        /** Internal reference to the attribute 'data-tchmi-ignore-invalid-values' */
        protected __ignoreInvalidValues: boolean | undefined;
        /**
         * Internal reference to the attribute "data-tchmi-show-confirmation-buttons"
         */
        protected __showConfirmationButtons: boolean | undefined;
        /**
         * ReadOnly state of the control.
         */
        protected __isReadOnly: boolean | undefined;
        /** Stores the controls as System.TcHmiControl[] */
        protected __baseControls: {
            dateValueTextblock?: TcHmiTextblock;
            okButton?: TcHmiButton;
            cancelButton?: TcHmiButton;
            spinboxes: {
                hours?: TcHmiSpinboxInput;
                minutes?: TcHmiSpinboxInput;
                seconds?: TcHmiSpinboxInput;
                milliseconds?: TcHmiSpinboxInput;
            };
        };
        protected __localizationReader: Locale.LocalizationReader | undefined;
        /** Internal date-object */
        protected defaultDate: TcHmi.Localization.DateParts;
        /** Holds the data of the date of this.__value in parsed form in timezone of user. */
        protected __internalDateObject: TcHmi.Localization.DateParts;
        /** Holds the volatile data of the current editing in timezone of user. */
        protected __dateSelectionObject: TcHmi.Localization.DateParts;
        protected __internalMinDateObject: TcHmi.Localization.DateParts | null;
        protected __internalMaxDateObject: TcHmi.Localization.DateParts | null;
        /** Saved if the calendar is pressed */
        protected __isPressedCalendar: boolean;
        /** The interval timer for calendar interaction buttons */
        protected __intervalTimerCalendar: number;
        /** Millisecond offset to utc calculated from the current timeZone of the user */
        protected __utcOffset: number;
        /** Regex to validate a string after RFC 3339, the subset of ISO 8601 that is used in JsonSchema. See https://regexr.com/5cnhd for tests.*/
        protected readonly __REGEX_ISO_8601: RegExp;
        /** The interval timer for updateInvalidNotification */
        protected __updateInvalidNotificationTimer: number;
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
         * Is called if onResized event of control has raised.
         */
        protected __onResized(): void;
        /**
         * Update the invalid notification icon and adjusts OK button state.
         */
        protected __updateInvalidNotification(): void;
        protected __updateUtcOffset(): void;
        /**
         * Return the currently configured UTC date.
         */
        protected __getUtcDate(dateObject: Localization.DateParts): Date;
        /**
         * Compares two dates in the form of Date objects of ISO 8601 compatible strings. If strings are used, they can
         * be compared with nanosecond precision.
         * Returns -1 if the first date is earlier then the second, 1 if the second date is earlier and 0 if the dates
         * are equal.
         * @param a The first date to compare.
         * @param b The second date to compare.
         */
        protected __compareDates(a: string | Date, b: string | Date): -1 | 0 | 1;
        /**
         * Returns an event handler for the mousedown event.
         */
        protected __onMousedown(event: MouseEvent): void;
        /**
         * Returns an event handler for the mousedown event of the choice area element.
         */
        protected __onMousedownCalendar(event: MouseEvent): void;
        protected __updateHeaderDate(process?: boolean): void;
        /**
         * Is called if onPressed event of buttons has raised.
         */
        protected __onMouseup(event: MouseEvent): void;
        /**
         * Is called if onMouseDown event of buttons (ok and cancel) has raised.
         */
        protected __onPressed(event: EventProvider.Event): void;
        /**
         * Is called if the onUserInteractionFinished event of a spinbox was raised.
         */
        protected __generateUserInteractionFinishedHandler(spinbox: TcHmiSpinboxInput, action: (value: number) => void): (_event: EventProvider.Event) => void;
        /**
         * Is called if focusout event  has raised.
         */
        protected __onFocusOut(_event: FocusEvent): void;
        /**
         * Is called if keypress event  has raised.
         */
        protected __onKeyPress(event: KeyboardEvent): void;
        /**
         * Open the dateTimePicker (in TopMostLayer).
         */
        openDateTimePicker(): void;
        /**
         * Close the dateTimePicker without changes (delete from TopMostLayer).
         */
        closeDateTimePicker(): void;
        /**
         * Created a calendar for one year.
         */
        protected createCalendar(year: number, month: number, day: number): DocumentFragment;
        /**
         * Create a spinbox control
         */
        protected __createSpinbox(name: string, value: number, zeroPadding: number, maxValue: number): TcHmiSpinboxInput;
        /**
         * Create a separating element.
         */
        protected __createDivider(character: string): HTMLDivElement;
        /**
         * Created a time picker.
         */
        protected __createTime(hours: number, minutes: number, seconds: number, milliseconds: number): DocumentFragment;
        /**
         * Sets __internalValue and updates the textboxes.
         */
        protected __setInternalValue(value: string | undefined): void;
        /**
         * Checks if dateSelection is in the value range and sets it to internalDateObject or not.
         */
        protected __checkDateSelection(update?: boolean): void;
        /**
         * Checks if value is valid.
         */
        isValid(value: string | Date): boolean;
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
         * Sets the value of MinValue
         * @param valueNew The new value for MinValue
         */
        setMinValue(valueNew: string | null): void;
        /**
         * Gets the value of MinValue
         */
        getMinValue(): string | undefined;
        /**
         * Processes the value of MinValue
         */
        protected __processMinValue(): void;
        /**
         * Sets the value of MaxValue
         * @param valueNew The new value for MaxValue
         */
        setMaxValue(valueNew: string | null): void;
        /**
         * Gets the value of MaxValue
         */
        getMaxValue(): string | undefined;
        /**
         * Processes the value of MaxValue
         */
        protected __processMaxValue(): void;
        /**
         * Sets the ignoreInvalidValues attribute.
         * @param valueNew The new value for ignoreInvalidValues.
         */
        setIgnoreInvalidValues(valueNew: boolean | null): void;
        /**
         * Returns the current value of ignoreInvalidValues.
         * @returns The current value of ignoreInvalidValues.
         */
        getIgnoreInvalidValues(): boolean | undefined;
        /**
         * Processes the current value of attribute ignoreInvalidValues.
         */
        protected __processIgnoreInvalidValues(): void;
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
    }
}
//# sourceMappingURL=TcHmiDateTimePicker.d.ts.map