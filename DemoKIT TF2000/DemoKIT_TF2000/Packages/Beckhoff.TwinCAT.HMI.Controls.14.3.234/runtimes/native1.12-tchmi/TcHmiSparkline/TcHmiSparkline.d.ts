declare namespace TcHmi.Controls.Beckhoff {
    class TcHmiSparkline extends TcHmi.Controls.System.TcHmiControl {
        #private;
        constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
        /** member variables */
        /** Reference to the root dom element of the current control template as  jquery object. */
        protected __elementTemplateRoot: JQuery;
        /**  Internal reference to the attribute 'data-tchmi-line-graph-descriptions' */
        protected __lineGraphDescriptions: TcHmiSparkline.LineGraphDescription[] | null | undefined;
        /**  Internal lineDescription array as TcHmiSparkline.LineGraphDescription[] */
        protected __lineGraphDescriptionsInternal: TcHmiSparkline.LineGraphDescription[] | null | undefined;
        /**  Internal reference to the attribute 'data-tchmi-line-graph-data' */
        protected __lineGraphData: TcHmiSparkline.Point[][] | number[][] | number[] | null | undefined;
        /**  Internal lineGraph array as TcHmiSparkline.Point[][] */
        protected __lineGraphDataInternal: TcHmiSparkline.Point[][] | null;
        /** Internal reference to the attribute 'data-tchmi-x-axis-start' */
        __xAxisStart: number | null | undefined;
        /** Internal reference to the attribute 'data-tchmi-x-axis-end' */
        __xAxisEnd: number | null | undefined;
        /**  Internal reference to the attribute 'data-tchmi-show-label' */
        protected __showLabel: boolean | undefined;
        /** Internal reference to the attribute 'data-tchmi-label-color' */
        protected __labelColor: TcHmi.SolidColor | null | undefined;
        /** Internal reference to the attribute 'data-tchmi-label-position' */
        protected __labelPosition: keyof typeof TcHmiSparkline.LabelPosition | undefined;
        /** Internal reference to the attribute 'data-tchmi-label-font-family' */
        protected __labelFontFamily: FontFamily | undefined;
        /** Internal reference to the attribute 'data-tchmi-label-font-size' */
        protected __labelFontSize: number | undefined;
        /** Internal reference to the attribute 'data-tchmi-label-font-weight' */
        protected __labelFontWeight: FontWeight | undefined;
        /**  Internal reference to the attribute 'data-tchmi-show-y-axis' */
        protected __showYAxis: boolean | undefined;
        /** Internal reference to the attribute 'data-tchmi-y-axis-color' */
        protected __yAxisColor: TcHmi.SolidColor | null | undefined;
        /** Internal reference to the attribute 'data-tchmi-y-axis-position' */
        protected __yAxisPosition: keyof typeof TcHmiSparkline.Position | undefined;
        /** Internal reference to the attribute 'data-tchmi-y-axis-width' */
        protected __yAxisWidth: number | undefined;
        /** Internal reference to the attribute 'data-tchmi-y-label-font-family' */
        protected __yLabelFontFamily: FontFamily | undefined;
        /** Internal reference to the attribute 'data-tchmi-y-label-font-size' */
        protected __yLabelFontSize: number | undefined;
        /** Internal reference to the attribute 'data-tchmi-y-label-font-weight' */
        protected __yLabelFontWeight: FontWeight | undefined;
        /** Internal reference to the attribute 'data-tchmi-y-axis-decimal-places' */
        protected __yAxisDecimalPlaces: number | undefined;
        /** Linechart elements' */
        protected __lineCharts: TcHmiCharting.LineChart[];
        /** Localization */
        protected __localizedElements: Map<string, {
            element: HTMLElement;
            value: string | null;
        }>;
        protected __localizedEngineeringElements: Map<string, Element>;
        __localizationReader: Locale.LocalizationReader | undefined;
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
        /** Is raised if the control should be redrawn. */
        protected __rebuild(_event: EventProvider.Event, _ctrl?: Controls.System.TcHmiControl): void;
        /** Is called initial and and if size changed. */
        protected __drawLineChart(): void;
        /** Reset the linechart */
        protected __reset(): void;
        /**
         * Sets the value of the member variable 'lineGraphDescriptions' if the new value is not equal to the current value
         * and calls the associated process function (processlineGraphDescriptions) after that.
         * @param valueNew The new value for lineGraphDescriptions.
         */
        setLineGraphDescriptions(valueNew: TcHmiSparkline.LineGraphDescription[] | null): void;
        /**
         * The watch callback for the lineGraphDescriptions object resolver.
         */
        protected __onResolverForLineGraphDescriptionsWatchCallback(data: Symbol.ObjectResolver.IWatchResultObject<TcHmiSparkline.LineGraphDescription[]>): void;
        /**
         * Returns the current value of the member variable lineGraphDescriptions.
         */
        getLineGraphDescriptions(): TcHmiSparkline.LineGraphDescription[] | null | undefined;
        /**
         * Processes the current value of lineGraphDescriptions.
         */
        protected __processLineGraphDescriptions(): void;
        /**
         * Sets the value of the member variable 'lineGraphData' if the new value is not equal to the current value
         * and calls the associated process function (processLineGraphData) after that.
         * @param valueNew The new value for lineGraphData.
         */
        setLineGraphData(valueNew: TcHmiSparkline.Point[][] | number[][] | number[] | null): void;
        /**
         * The watch callback for the lineGraphData object resolver.
         */
        protected __onResolverForLineGraphDataWatchCallback(data: Symbol.ObjectResolver.IWatchResultObject<TcHmiSparkline.Point[][] | number[][] | number[]>): void;
        /**
         * Returns the current value of the member variable lineGraphData.
         */
        getLineGraphData(): TcHmiSparkline.Point[][] | number[] | number[][] | null | undefined;
        /**
         * Processes the current value of lineGraphData.
         */
        protected __processLineGraphData(): void;
        /**
         * Sets the value of xAxisStart
         * @param valueNew The new value for xAxisStart
         */
        setXAxisStart(valueNew: number | null | undefined): void;
        /** Gets the value of xAxisStart */
        getXAxisStart(): number | null | undefined;
        /** Processes xAxisStart */
        protected __processXAxisStart(): void;
        /**
         * Sets the value of xAxisEnd
         * @param valueNew The new value for xAxisEnd
         */
        setXAxisEnd(valueNew: number | null | undefined): void;
        /** Gets the value of xAxisEnd */
        getXAxisEnd(): number | null | undefined;
        /** Processes xAxisEnd */
        protected __processXAxisEnd(): void;
        /**
         * Sets the value of showLabel
         * @param valueNew The new value for showLabel
         */
        setShowLabel(valueNew: boolean | null): void;
        /** Gets the value of showLabel */
        getShowLabel(): boolean | undefined;
        /** Processes showLabel */
        protected __processShowLabel(): void;
        /**
         * Sets the labelColor value and calls the associated process function (processLabelColor).
         * @param valueNew The new value for the LabelColor attribute as object.
         */
        setLabelColor(valueNew: SolidColor | null): void;
        /** The watch callback for the labelColor object resolver. */
        protected __onResolverForLabelColorWatchCallback(data: Symbol.ObjectResolver.IWatchResultObject<SolidColor>): void;
        /** Returns the current labelColor value. */
        getLabelColor(): SolidColor | null | undefined;
        /** Processes the current labelColor attribute. */
        protected __processLabelColor(): void;
        /**
         * Sets the value of labelPosition
         * @param valueNew The new value for labelPosition
         */
        setLabelPosition(valueNew: keyof typeof TcHmiSparkline.Position | null): void;
        /** Gets the value of labelPosition */
        getLabelPosition(): "Left" | "Right" | "Center" | undefined;
        /** Processes labelPosition. */
        protected __processLabelPosition(): void;
        /**
         * Sets the value of labelFontFamily
         * @param valueNew The new value for labelFontFamily
         */
        setLabelFontFamily(valueNew: FontFamily | null): void;
        /** Gets the value of labelFontFamily */
        getLabelFontFamily(): string | undefined;
        /** Processes labelFontFamily */
        protected __processLabelFontFamily(): void;
        /**
         * Sets the value of labelFontSize
         * @param valueNew The new value for labelFontSize
         */
        setLabelFontSize(valueNew: number | null): void;
        /** Gets the value of labelFontSize */
        getLabelFontSize(): number | undefined;
        /** Processes labelFontSize */
        protected __processLabelFontSize(): void;
        /** Gets the value of labelFontSizeUnit */
        getLabelFontSizeUnit(): string;
        /**
         * Sets the value of labelFontWeight
         * @param valueNew The new value for labelFontWeight
         */
        setLabelFontWeight(valueNew: FontWeight | null): void;
        /** Gets the value of labelFontWeight */
        getLabelFontWeight(): FontWeight | undefined;
        /** Processes labelFontWeight */
        protected __processLabelFontWeight(): void;
        /**
         * Sets the value of showYAxis
         * @param valueNew The new value for showYAxis
         */
        setShowYAxis(valueNew: boolean | null): void;
        /** Gets the value of showYAxis */
        getShowYAxis(): boolean | undefined;
        /** Processes showYAxis */
        protected __processShowYAxis(): void;
        /**
         * Sets the yAxisColor value and calls the associated process function (processYAxisColor).
         * @param valueNew The new value for the yAxisColor attribute as object.
         */
        setYAxisColor(valueNew: SolidColor | null): void;
        /** The watch callback for the yAxisColor object resolver. */
        protected __onResolverForYAxisColorWatchCallback(data: Symbol.ObjectResolver.IWatchResultObject<SolidColor>): void;
        /** Returns the current yAxisColor value. */
        getYAxisColor(): SolidColor | null | undefined;
        /** Processes the current yAxisColor attribute. */
        protected __processYAxisColor(): void;
        /**
         * Sets the value of yAxisPosition
         * @param valueNew The new value for yAxisPosition
         */
        setYAxisPosition(valueNew: keyof typeof TcHmiSparkline.Position | null): void;
        /** Gets the value of yAxisPosition */
        getYAxisPosition(): "Left" | "Right" | undefined;
        /** Processes yAxisPosition. */
        protected __processYAxisPosition(): void;
        /**
         * Sets the value of yAxisDecimalPlaces
         * @param valueNew The new value for yAxisDecimalPlaces
         */
        setYAxisDecimalPlaces(valueNew: number | null): void;
        /** Gets the value of yAxisDecimalPlaces */
        getYAxisDecimalPlaces(): number | undefined;
        /** Processes yAxisDecimalPlaces */
        protected __processYAxisDecimalPlaces(): void;
        /**
         * Sets the value of yAxisWidth
         * @param valueNew The new value for yAxisWidth
         */
        setYAxisWidth(valueNew: number | null): void;
        /** Gets the value of yAxisWidth */
        getYAxisWidth(): number | undefined;
        /** Processes yAxisWidth */
        protected __processYAxisWidth(): void;
        /**
         * Sets the value of yLabelFontFamily
         * @param valueNew The new value for yLabelFontFamily
         */
        setYLabelFontFamily(valueNew: FontFamily | null): void;
        /** Gets the value of yLabelFontFamily */
        getYLabelFontFamily(): string | undefined;
        /** Processes yLabelFontFamily */
        protected __processYLabelFontFamily(): void;
        /**
         * Sets the value of yLabelFontSize
         * @param valueNew The new value for yLabelFontSize
         */
        setYLabelFontSize(valueNew: number | null): void;
        /** Gets the value of yLabelFontSize */
        getYLabelFontSize(): number | undefined;
        /** Processes yLabelFontSize */
        protected __processYLabelFontSize(): void;
        /** Gets the value of yLabelFontSizeUnit */
        getYLabelFontSizeUnit(): string;
        /**
         * Sets the value of yLabelFontWeight
         * @param valueNew The new value for yLabelFontWeight
         */
        setYLabelFontWeight(valueNew: FontWeight | null): void;
        /** Gets the value of yLabelFontWeight */
        getYLabelFontWeight(): FontWeight | undefined;
        /** Processes yLabelFontWeight */
        protected __processYLabelFontWeight(): void;
    }
    namespace TcHmiSparkline {
        interface LineGraphDescription {
            displayName?: string;
            lineWidth: number;
            lineColor?: TcHmi.SolidColor;
            referenceLines?: ReferenceLine[];
        }
        interface Point {
            x: number;
            y: number;
        }
        enum Datatype {
            Datetime = 0,
            Timespan = 1,
            Keyword = 2
        }
        interface ServerPoint {
            x: number;
            y?: number;
            error?: number;
        }
        interface ReferenceLine {
            show: boolean;
            value: number;
            color?: TcHmi.SolidColor;
            lineWidth: number;
        }
        enum Position {
            Left = 0,
            Right = 1
        }
        enum LabelPosition {
            Left = 0,
            Right = 1,
            Center = 2
        }
    }
}
//# sourceMappingURL=TcHmiSparkline.d.ts.map