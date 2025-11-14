declare namespace TcHmi.Functions.Beckhoff {
    /**
     * Converts Strings, Numbers (milliseconds since 1970) and JS Date Objects to strings containing the date.
     * @param date Strings, Numbers (milliseconds since 1970) and JS Date Objects to be converted
     * @param timeFormatLocale The locale of the return string.
     * If not set this will use the time format locale of the current user.
     * @param timeZone The timezone of the return string
     */
    function ToDateString(date: Date | any, timeFormatLocale?: string | null, timeZone?: string | undefined): string;
}
//# sourceMappingURL=ToDateString.d.ts.map