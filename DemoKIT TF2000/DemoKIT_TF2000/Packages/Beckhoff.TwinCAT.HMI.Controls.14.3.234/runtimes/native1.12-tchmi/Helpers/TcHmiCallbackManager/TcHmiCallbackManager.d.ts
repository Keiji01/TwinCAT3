declare namespace TcHmi.Controls.Helpers {
    abstract class CallbackManagerBase<C extends (...args: any[]) => any> {
        protected __callbacks: Set<C>;
        /**
         * Add a callback.
         * @param callback The callback to add.
         */
        add(callback: C): DestroyFunction;
        /**
         * Remove callback.
         * @param callback The callback to remove.
         */
        remove(callback: C): void;
        /**
         * Returns a frozen object containig the add and remove methods. Useful for exposing these methods to the public
         * without also exposing the trigger method.
         */
        getManipulators(): Readonly<{
            add: (callback: C) => DestroyFunction;
            remove: (callback: C) => void;
        }>;
    }
    export class CallbackManager<C extends (...args: any[]) => any> extends CallbackManagerBase<C> {
        /**
         * Call all registered callbacks with the provided arguments.
         */
        trigger(...args: Parameters<C>): PromiseSettledResult<ReturnType<C>>[];
    }
    export class AsyncCallbackManager<C extends (...args: any[]) => Promise<any>> extends CallbackManagerBase<C> {
        /**
         * Call all registered callbacks with the provided arguments.
         */
        trigger(...args: Parameters<C>): Promise<PromiseSettledResult<Awaited<ReturnType<C>>>[]>;
    }
    export {};
}
//# sourceMappingURL=TcHmiCallbackManager.d.ts.map