declare namespace TcHmi.Controls.Beckhoff {
    class TcHmiImage extends TcHmi.Controls.System.TcHmiControl {
        #private;
        constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
        /** Reference to the underlying html img element */
        protected __elementImage: HTMLImageElement;
        /**
         * Internal reference to the attribute "tchmi-src"
         * Possible Values: Relative path to the target image file based on the project directory as root.
         */
        protected __src: string | null | undefined;
        /**
         * Internal reference to the attribute "tchmi-alt"
         */
        protected __alt: string | undefined;
        private __runtimeWidthNeededForHeight;
        private __runtimeHeightNeededForWidth;
        protected __onResizedEventDestroyEvent: DestroyFunction | null;
        protected __asyncWorkData: TcHmiImage.IControlSpecificData;
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
        protected __onResized(_event: EventProvider.Event, _control: Controls.System.TcHmiControl): void;
        protected __doAsyncWork(timestamp?: number): void;
        /**
         * Processes the current width and width unit.
         */
        __processWidth(): void;
        /**
         * Processes the current height and height unit.
         */
        __processHeight(): void;
        /**
         * Sets the value of the width mode attribute.
         * @param valueNew The new width mode value..
         */
        setWidthMode(valueNew: SizeModeWithContent | null): void;
        /**
         * Sets the value of the height mode attribute.
         * @param valueNew The new height mode value..
         */
        setHeightMode(valueNew: SizeModeWithContent | null): void;
        __getContentWidth(): null | number;
        __getContentHeight(): null | number;
        /**
         * @returns The original width of the image.
         */
        getOriginalWidth(): number;
        /**
         * @returns The original height of the image.
         */
        getOriginalHeight(): number;
        /**
         * Loads Image if access is now possible
         */
        __processAccessConfig(): void;
        /**
         * Loads Image if access is now possible
         */
        __processIsEnabled(): void;
        /**
         * Sets the src attribute to a new value.
         * @param valueNew The new value for the src attribute;
         */
        setSrc(valueNew: string | null): void;
        /**
         * @returns The current value of the src attribute.
         */
        getSrc(): string | null | undefined;
        /**
         * Processes the current value of attribute src.
         */
        protected __processSrc(): void;
        /**
         * Sets the alt attribute to a new value.
         * @param valueNew The new value for the alt attribute;
         */
        setAlt(valueNew: string | null): void;
        /**
         * @returns The current value of the alt attribute.
         */
        getAlt(): string | undefined;
        /**
         * Processes the current value of attribute alt.
         */
        protected __processAlt(): void;
        /**
         * Is raised if the load event is raised
         */
        protected __onLoad(event: Event): void;
        /**
         * Is raised if the error event is raised
         */
        protected __onError(event: ErrorEvent): void;
    }
    namespace TcHmiImage {
        interface IControlSpecificData extends System.TcHmiControl.IControlSpecificData {
            'System.TcHmiImage.resized': boolean;
        }
    }
}
//# sourceMappingURL=TcHmiImage.d.ts.map