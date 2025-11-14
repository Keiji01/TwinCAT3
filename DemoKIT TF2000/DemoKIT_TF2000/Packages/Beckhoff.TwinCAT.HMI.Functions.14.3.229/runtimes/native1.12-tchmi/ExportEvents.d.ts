declare namespace TcHmi.Functions.Beckhoff {
    /**
     * Exports filtered events.
     * This needs to be triggered by a user interaction (not on load or symbol change).
     * @param ctx An object holding functions for success and error.
     * @param filter The filter to use for the export. If this is an empty array this exports all events.
     * @param filename The filename for the exported file. If this is null/unset a default name is used.
     */
    function ExportEvents(ctx: SelectableRequired<TcHmi.Context<void>, 'success' | 'error'>, filter?: Filter | null, filename?: string): void;
}
//# sourceMappingURL=ExportEvents.d.ts.map