declare namespace TcHmi.Controls.Helpers {
    class TcHmiSevenSegmentElement extends HTMLElement {
        /** The displayed value */
        protected __value: TcHmiSevenSegmentElement.Value | null | undefined;
        /** The svg of a single seven segment element. Each segment can be targeted via CSS */
        private __sevenSegmentSvg;
        /** The svg for a decimal point */
        private __decimalPointSvg;
        private __resizeObserver;
        constructor();
        /** Called when the element is conneted to the DOM */
        connectedCallback(): void;
        /** Called when the element is removed fromt the DOM */
        disconnectedCallback(): void;
        setValue(newValue: TcHmiSevenSegmentElement.Value | null): void;
        protected __processValue(): void;
        protected __updateDimensions(): void;
        protected __updateSVG(): void;
    }
    namespace TcHmiSevenSegmentElement {
        type Value = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | '-' | '.';
    }
}
//# sourceMappingURL=TcHmiSevenSegmentElement.d.ts.map