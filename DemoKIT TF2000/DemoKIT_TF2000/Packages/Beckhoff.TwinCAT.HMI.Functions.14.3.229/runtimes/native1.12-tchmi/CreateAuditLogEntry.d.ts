declare namespace TcHmi.Functions.Beckhoff {
    /**
     * Creates an audit trail log entry.
     * @param ctx Context object which provides context specific data and functions.
     * @param entry The data to be logged.
     */
    function CreateAuditLogEntry(ctx: SelectableRequired<TcHmi.Context, 'success' | 'error'>, entry: TcHmi.Server.AuditTrail.CreateAuditLogEntry.AuditLogEntry): void;
}
//# sourceMappingURL=CreateAuditLogEntry.d.ts.map