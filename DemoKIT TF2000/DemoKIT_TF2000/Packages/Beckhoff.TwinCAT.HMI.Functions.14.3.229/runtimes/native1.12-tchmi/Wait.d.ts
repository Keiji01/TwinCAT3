declare namespace TcHmi.Functions.Beckhoff {
    /**
     * Starts a timer and signals success once the timer has expired.
     * Signals success once that time has passed.
     * Can be used to delay subsequent actions.
     * @param ctx Context
     * @param time Time in milliseconds.
     */
    function Wait(ctx: SelectableRequired<TcHmi.Context, 'success' | 'error'>, time?: number): void;
}
//# sourceMappingURL=Wait.d.ts.map