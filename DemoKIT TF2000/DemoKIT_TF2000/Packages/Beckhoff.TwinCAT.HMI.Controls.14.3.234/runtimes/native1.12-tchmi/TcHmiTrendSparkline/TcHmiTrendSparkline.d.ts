declare namespace TcHmi.Controls.Beckhoff {
    class TcHmiTrendSparkline extends TcHmi.Controls.System.TcHmiControl {
        #private;
        constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
        /** member variables */
        /** Reference to the root dom element of the current control template as  jquery object. */
        protected __elementTemplateRoot: JQuery;
        /**  Internal reference to the attribute 'data-tchmi-historized-symbols' */
        protected __historizedSymbols: TcHmiTrendSparkline.HistorizedSymbols[] | null | undefined;
        /** Internal reference to the attribute 'data-tchmi-start' */
        __start: string | null | undefined;
        /** Saved the internal start value from extension as utc datetime */
        protected __internalStart: string | null;
        /** Internal reference to the attribute 'data-tchmi-end' */
        __end: string | null | undefined;
        /** Saved the internal end value from extension as utc datetime */
        protected __internalEnd: string | null;
        /**  Internal reference to the attribute 'data-tchmi-server-doamin' */
        protected __serverDomain: string | undefined;
        /** Internal reference to the attribute 'data-tchmi-interval */
        protected __interval: number | undefined;
        /**  Internal reference to the attribute 'data-tchmi-show-label' */
        protected __showLabel: boolean | undefined;
        /** Internal reference to the attribute 'data-tchmi-label-color' */
        protected __labelColor: TcHmi.SolidColor | null | undefined;
        /** Internal reference to the attribute 'data-tchmi-label-position' */
        protected __labelPosition: keyof typeof TcHmiTrendSparkline.LabelPosition | undefined;
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
        protected __yAxisPosition: keyof typeof TcHmiTrendSparkline.Position | undefined;
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
        /** Internal line graph data from historize-extension (fill in getDataCallback) */
        protected __lineGraphDataFromServer: TcHmiTrendSparkline.ServerPoint[][] | null;
        /** Updated line graph data from historize-extension (fill in getDataCallback) */
        protected __lineGraphData: TcHmiCharting.LineAreaGraph.Point[][] | null;
        /** Subscription ID for GetTrendLineData and GetTrendLineWindow as number (null if no subscription is created) */
        protected __subscriptionId: number | null;
        /** Linechart elements' */
        protected __lineCharts: TcHmiCharting.LineAreaChart[];
        /** Reconnect timer */
        protected __reconnectTimer: number;
        protected __reconnectTime: number;
        /** Localization */
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
        /** Create the GetData and GetWindow subscription. */
        protected __openWebsocket(): void;
        /** Is raised if the openConnection callback is raised. */
        protected __openConnectionCallback(result: Server.IResultObject): void;
        /** Is called initial and and if size changed. */
        protected __drawLineChart(): void;
        /** Reset the linechart */
        protected __reset(): void;
        /**
         * Sets the value of the member variable 'historizedSymbols' if the new value is not equal to the current value
         * and calls the associated process function (processHistorizedSymbols) after that.
         * @param valueNew The new value for historizedSymbols.
         */
        setHistorizedSymbols(valueNew: string[] | null): void;
        /** The watch callback for the historizedSymbols object resolver. */
        protected __onResolverForHistorizedSymbolsWatchCallback(data: Symbol.ObjectResolver.IWatchResultObject<TcHmiTrendSparkline.HistorizedSymbols[]>): void;
        /** Returns the current value of the member variable historizedSymbols. */
        getHistorizedSymbols(): TcHmiTrendSparkline.HistorizedSymbols[] | null | undefined;
        /** Processes the current value of historizedSymbols. */
        __processHistorizedSymbols(): void;
        /**
         * Sets the mouseMode to zooming or panning
         * @param valueNew The new value for mouseMode
         */
        setServerDomain(valueNew: string | null): void;
        /** Gets the value of mouseMode */
        getServerDomain(): string | undefined;
        /** Processes the current value of attribute symbolList. */
        protected __processServerDomain(): void;
        /**
         * Sets the interval and calls the associated process function (processInterval).
         * @param valueNew The new value for interval.
         */
        setInterval(valueNew: number | null): void;
        /** Returns the current value of interval. */
        getInterval(): number | undefined;
        /** Processes the current interval attribute value. */
        protected __processInterval(): void;
        /**
         * Sets the value of start
         * @param valueNew The new value for start
         */
        setStart(valueNew: string | null | undefined): void;
        /** Gets the value of start */
        getStart(): string | null | undefined;
        /** Processes start */
        protected __processStart(): void;
        /**
         * Sets the value of end
         * @param valueNew The new value for end
         */
        setEnd(valueNew: string | null | undefined): void;
        /** Gets the value of end */
        getEnd(): string | null | undefined;
        /** Processes end */
        protected __processEnd(): void;
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
        setLabelPosition(valueNew: keyof typeof TcHmiTrendSparkline.Position | null): void;
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
        setYAxisPosition(valueNew: keyof typeof TcHmiTrendSparkline.Position | null): void;
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
    namespace TcHmiTrendSparkline {
        interface HistorizedSymbols {
            symbol: string;
            displayName?: string;
            lineWidth: number;
            lineColor?: TcHmi.SolidColor;
            referenceLines?: ReferenceLine[];
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
//# sourceMappingURL=TcHmiTrendSparkline.d.ts.map