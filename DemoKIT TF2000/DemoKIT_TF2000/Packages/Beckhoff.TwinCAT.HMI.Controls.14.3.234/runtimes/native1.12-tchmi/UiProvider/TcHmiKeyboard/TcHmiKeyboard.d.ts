declare namespace TcHmi.Controls.UiProvider.Keyboard {
    class TcHmiKeyboard extends TcHmi.UiProvider.KeyboardProvider {
        static readonly providerName = "Beckhoff.TcHmiKeyboard";
        private static readonly keyboardClassFqn;
        constructor();
        private __keyboardCtrl;
        private __popup;
        private __popupEventDestroyers;
        private __mutationObserver;
        /** Also the marker of active keyboard */
        private __activeTextElement;
        /** Container for the footer view (contains keyboard and close icon) */
        private __footerElement;
        private __localeChangedRegistered;
        private __deviceHasOSK;
        refreshConfig(): void;
        open(textElement: HTMLInputElement | HTMLTextAreaElement): IErrorDetails;
        private __closeViaApi;
        close(): IErrorDetails;
        private __activePointerInteraction;
        private __handlePointerInteraction;
        /**
         * Returns whether the keyboard is currently being interacted with by mouse, touch or physical keyboard.
         */
        hasActiveUserInteraction(): boolean;
    }
}
//# sourceMappingURL=TcHmiKeyboard.d.ts.map