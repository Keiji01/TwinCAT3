declare namespace TcHmi.Controls.Helpers {
    class Banner {
        #private;
        protected readonly __parentControl?: (TcHmi.Controls.System.TcHmiControl | null) | undefined;
        protected __name: string;
        protected __targetElement: HTMLElement;
        protected __element: HTMLDivElement;
        protected __elementHeaderContainer: HTMLDivElement;
        protected __elementHeader: HTMLHeadingElement;
        protected __elementContent: HTMLDivElement;
        protected __elementFooter: HTMLDivElement;
        /** Controls in this array will be destroyed automatically when the popup is destroyed */
        protected __childControls: TcHmi.Controls.System.TcHmiControl[];
        /** Destroyers in this array will be called automatically when the popup is destroyed */
        protected __destroyers: DestroyFunction[];
        protected __isShowing: boolean;
        protected __localizationSymbols: Map<string, {
            symbol: Symbol<string>;
            destroyWatch: DestroyFunction;
        }>;
        protected readonly __className = "TcHmi_Controls_Helpers_Banner";
        /**
         * Creates a new Banner instance.
         * @param targetElement The element the banner is placed over.
         * @param __parentControl The control which owns the Banner.
         */
        constructor(targetElement: HTMLElement, __parentControl?: (TcHmi.Controls.System.TcHmiControl | null) | undefined);
        /**
         * Gets a value indicating if the banner is currently shown to the user.
         */
        isShowing(): boolean;
        /**
         * Shows the banner.
         */
        show(): void;
        /**
         * Hides the banner.
         */
        hide(): void;
        /**
         * Destroys the banner and all its controls.
         * @param force If true, child controls will be removed from the parent control before destruction, to ensure destruction in case of keepAlive === true.
         */
        destroy(force?: boolean): void;
        /**
         * Watch the given symbol and call the onChange callback every time it changes with the resolved and formatted symbol value.
         * @param name The name for this symbol. Must be unique across all inheritance layers and further calls for the same localization must use the same name.
         * @param localization The localization to watch.
         * @param onChange The callback that is called with the localized and formatted text as a parameter.
         */
        protected __watchLocalization(name: string, localization: FormattedLocalizable, onChange: (localizedText: string) => void): void;
        /**
         * Destroys the localization watch with the given name, if it exists.
         * @param name The name that was used with __watchLoclalization to start watching the symbol.
         */
        protected __unwatchLocalization(name: string): void;
        /**
         * Sets texts which can either be localizable or static.
         */
        setTexts(texts: Partial<Banner.LocalizableTexts>): void;
    }
    namespace Banner {
        interface LocalizableTexts {
            headerText: Localizable;
            contentText: Localizable;
        }
    }
}
declare namespace TcHmi.Controls.Helpers {
    class ApprovalBanner extends Banner {
        protected readonly __parentControl?: (TcHmi.Controls.System.TcHmiControl | null) | undefined;
        protected __approveButton: TcHmi.Controls.Beckhoff.TcHmiButton;
        protected __repetitionCheckbox: TcHmi.Controls.Beckhoff.TcHmiCheckbox;
        protected __storage: LocalStorage<{
            dontShowAgain: boolean;
        }> | undefined;
        /**
         * Creates a new Banner instance.
         * @param targetElement The element the banner is placed over.
         * @param storageId The storage id to rember if the banner should not be displayed anymore
         * @param __parentControl The control which owns the Banner.
         */
        constructor(targetElement: HTMLElement, storageId: string | null, __parentControl?: (TcHmi.Controls.System.TcHmiControl | null) | undefined);
        show(): void;
        /**
         * Handler for the onPressed event of the OK button.
         */
        protected __onApproved(): void;
        /**
         * Sets texts which can either be localizable or static.
         */
        setTexts(texts: Partial<ApprovalBanner.LocalizableTexts>): void;
    }
    namespace ApprovalBanner {
        interface LocalizableTexts extends Banner.LocalizableTexts {
            buttonText: Localizable;
            checkboxText: Localizable;
        }
    }
}
//# sourceMappingURL=TcHmiBanners.d.ts.map