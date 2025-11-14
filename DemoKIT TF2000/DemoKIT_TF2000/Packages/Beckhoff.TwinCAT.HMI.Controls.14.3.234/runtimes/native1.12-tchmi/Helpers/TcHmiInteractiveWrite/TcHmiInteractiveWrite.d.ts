declare namespace TcHmi.Controls.Helpers {
    /**
     * Creates a prompt for writing to a symbol that requires either reauthentication or additional audit trail input like a comment.
     * Symbol will be written via an isolated websocket and the prompt will ask for reauthentication credentials if
     * this is required, allow adding further information and adjusting the new value before writing.
     * This prompt is not meant to be used directly but it is part of the UiProvider.PopupProvider for customization.
     * The framework will call the prompt via a queue system for any write request to this symbol when its necessary.
     */
    class InteractiveWritePrompt extends OkCancelPrompt<TcHmi.UiProvider.PopupProvider.InteractiveWritePrompt.Value, TcHmi.UiProvider.PopupProvider.InteractiveWritePrompt.Value> {
        /**
         * Creates a new InputPrompt instance.
         * @param parentControl The control which owns the popup.
         */
        constructor(symbol: TcHmi.UiProvider.PopupProvider.InteractiveWritePrompt.Symbol, options?: TcHmi.UiProvider.PopupProvider.InteractiveWritePrompt.Options | null, parentControl?: TcHmi.Controls.System.TcHmiControl | null);
        protected __texts: Partial<InteractiveWritePrompt.LocalizableTexts> | null;
        protected __controlTextblockMessageGeneral: TcHmi.Controls.Beckhoff.TcHmiTextblock | null;
        protected __options: TcHmi.UiProvider.PopupProvider.InteractiveWritePrompt.Options | null;
        protected __symbolName: string | null;
        protected __schema: TcHmi.JsonSchema | null;
        protected __reauthenticationRequired: boolean;
        protected __reviewerGroups: string[] | null;
        protected __commentRequired: boolean;
        protected __domainUserNames: Dictionary<string[]> | null;
        protected __reviewerDomainUserNames: Dictionary<string[]> | null;
        protected __defaultDomain: string | null;
        protected __targetDomain: string | null;
        protected __targetReviewerDomain: string | null;
        protected __result: TcHmi.Server.IValueResultObject | undefined;
        protected __error: IErrorDetails | null;
        protected __done: boolean;
        protected __editorNewValue: Helpers.Editor<any, Helpers.Editor.EditorInfo> | null;
        protected __editorPrevValue: Helpers.Editor<any, Helpers.Editor.EditorInfo> | null;
        protected __controlTextblockMessage: TcHmi.Controls.Beckhoff.TcHmiTextblock | null;
        protected __controlTextboxComment: TcHmi.Controls.Beckhoff.TcHmiTextbox | null;
        protected __controlInputUsername: TcHmi.Controls.Beckhoff.TcHmiInput | null;
        protected __controlComboboxUsername: TcHmi.Controls.Beckhoff.TcHmiCombobox<string, string[]> | null;
        protected __controlInputPassword: TcHmi.Controls.Beckhoff.TcHmiPasswordInput | null;
        protected __controlTextblockDomainLabel: TcHmi.Controls.Beckhoff.TcHmiTextblock | null;
        protected __controlComboboxDomain: TcHmi.Controls.Beckhoff.TcHmiCombobox<string, string[]> | null;
        protected __controlTextblockUsernameLabel: TcHmi.Controls.Beckhoff.TcHmiTextblock | null;
        protected __controlInputReviewerUsername: TcHmi.Controls.Beckhoff.TcHmiInput | null;
        protected __controlComboboxReviewerUsername: TcHmi.Controls.Beckhoff.TcHmiCombobox<string, string[]> | null;
        protected __controlInputReviewerPassword: TcHmi.Controls.Beckhoff.TcHmiPasswordInput | null;
        protected __controlTextblockReviewerDomainLabel: TcHmi.Controls.Beckhoff.TcHmiTextblock | null;
        protected __controlComboboxReviewerDomain: TcHmi.Controls.Beckhoff.TcHmiCombobox<string, string[]> | null;
        protected __controlTextblockReviewerUsernameLabel: TcHmi.Controls.Beckhoff.TcHmiTextblock | null;
        protected __controlTextblockPrevValueLabel: TcHmi.Controls.Beckhoff.TcHmiTextblock | null;
        protected __controlTextblockNewValueLabel: TcHmi.Controls.Beckhoff.TcHmiTextblock | null;
        protected __controlTextblockCommentLabel: TcHmi.Controls.Beckhoff.TcHmiTextblock | null;
        protected __controlTextblockPasswordLabel: TcHmi.Controls.Beckhoff.TcHmiTextblock | null;
        protected __controlTextblockReviewerPasswordLabel: TcHmi.Controls.Beckhoff.TcHmiTextblock | null;
        protected __elementContentContainerUser: HTMLElement | null;
        protected __elementContentContainerReviewer: HTMLElement | null;
        protected __elementContentContainerValue: HTMLElement | null;
        protected __elementContentContainerAdditionalInformation: HTMLElement | null;
        protected __elementHeadlineUser: HTMLElement | null;
        protected __elementHeadlineReviewer: HTMLElement | null;
        protected __elementHeadlineValue: HTMLElement | null;
        protected __elementHeadlineAdditionalInformation: HTMLElement | null;
        protected __elementNewValueEditorContainer: HTMLElement | null;
        protected __elementPrevValueEditorContainer: HTMLElement | null;
        protected __elementProgressContainer: HTMLElement | null;
        protected __elementLoadingSpinnerContainerContainer: HTMLElement | null;
        protected __destroyComboboxDomainSelectionChanged: DestroyFunction | null;
        protected __destroyReviewerComboboxDomainSelectionChanged: DestroyFunction | null;
        /**
         * Destroys the popup and all its controls.
         * @param force If true, child controls will be removed from the parent control before destruction, to ensure destruction in case of keepAlive === true.
         */
        destroy(force?: boolean): void;
        /**
         * Raised when domain selection changes.
         */
        protected __onComboboxDomainSelectionChanged(_event: EventProvider.Event, data: {
            id: number | null;
            text: string | null;
            value: any;
        }): void;
        /**
         * Raised when domain selection changes.
         */
        protected __onComboboxReviewerDomainSelectionChanged(_event: EventProvider.Event, data: {
            id: number | null;
            text: string | null;
            value: any;
        }): void;
        /**
         * Performs the action for the OK button, i.e. calling prompt.answer().
         */
        protected __ok(): void;
        /**
         * Performs the action for the Cancel button.
         */
        protected __cancel(): void;
        /**
         * Shows an overall error message
         * @param message
         */
        protected __showError(message: string): void;
        /**
         * Clear existing overall error message
         * @param message
         */
        protected __clearError(): void;
        /**
         * Enables all controls for a specified symbol area.
         * @param symbol
         */
        protected __enableSymbolControls(): void;
        /**
         * Disables all controls for a specified symbol area.
         * @param symbol
         */
        protected __disableSymbolControls(): void;
        /**
         * Enables all controls for a specified symbol area.
         * @param focus Controls whether focus should be moved to one of the popups inputs.
         */
        protected __showSymbolControls(focus?: boolean): void;
        /**
         * Disables all controls for a specified symbol area.
         * @param symbol
         */
        protected __hideSymbolControls(): void;
        /**
         * Shows the loading state for a symbol area.
         * @param symbol
         */
        protected __showSymbolLoading(): void;
        /**
         * Shows an error message for a specified symbol area and disables all related controls.
         * @param symbol
         * @param message
         */
        protected __showSymbolError(message: string): void;
        /**
         * Clears an error message for a specified symbol area and enables all related controls.
         * @param symbol
         * @param message
         */
        protected __showSymbolSuccess(): void;
        /**
         * Clears an error message for a specified symbol area and enables all related controls.
         * @param symbol
         * @param message
         */
        protected __showSymbolReady(): void;
        /**
         *
         * @param texts
         */
        setTexts(texts: Partial<InteractiveWritePrompt.LocalizableTexts>): void;
    }
    namespace InteractiveWritePrompt {
        interface LocalizableTexts extends OkCancelPrompt.LocalizableTexts {
            headerText: Localizable;
            editorTexts: Partial<TcHmi.Controls.Helpers.Editor.LocalizableTexts>;
        }
    }
}
//# sourceMappingURL=TcHmiInteractiveWrite.d.ts.map