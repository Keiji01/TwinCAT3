declare namespace TcHmi.Controls.Beckhoff {
    class TcHmiPieChart extends TcHmi.Controls.System.TcHmiControl {
        #private;
        constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
        /** member variables */
        /** Reference to the root dom element of the current control template as  jquery object. */
        protected __elementTemplateRoot: JQuery;
        /** Reference to the div element used as chart container as jquery object. */
        protected __elementChart: JQuery;
        /** Reference to the div element used as legend as jquery object. */
        protected __elementLegend: JQuery;
        /** PieChart element */
        protected __pieChart: TcHmiCharting.PieChart | null;
        /** Internal reference to the attribute 'data-tchmi-y-axis-width' */
        protected __sectionsBackgroundColor: TcHmi.Color | null | undefined;
        /**  Internal reference to the attribute 'data-tchmi-pie-graph-descriptions' */
        protected __pieGraphDescriptions: TcHmiPieChart.PieGraphDescription[] | null | undefined;
        /** Only pieGraphColors that have been selected from __pieGraphDescriptionsInternal as an array of TcHmi.SolidColor or null */
        protected __pieGraphDescriptionsSelected: TcHmiPieChart.PieGraphDescription[] | null | undefined;
        /**  Internal reference to the attribute 'data-tchmi-line-graph-data' */
        protected __pieGraphData: number[] | null | undefined;
        /** Only pieGraphData that have been selected from __pieGraphDataArray as an array of arrays with numbers or null */
        protected __pieGraphDataSelected: number[] | null | undefined;
        /** Internal reference to the attribute 'data-tchmi-legend-font-family' */
        protected __legendFontFamily: FontFamily | undefined;
        /** Internal reference to the attribute 'data-tchmi-legend-font-size' */
        protected __legendFontSize: number | undefined;
        /** Internal reference to the attribute 'data-tchmi-legend-font-style' */
        protected __legendFontStyle: FontStyle | undefined;
        /** Internal reference to the attribute 'data-tchmi-legend-font-weight' */
        protected __legendFontWeight: FontWeight | undefined;
        /** Internal variable for legend */
        protected __showLegend: boolean | undefined;
        /** Internal reference to the attribute 'data-tchmi-label-unit' */
        protected __labelUnit: string | undefined;
        /** Internal reference to the attribute 'data-tchmi-label-position' */
        protected __labelPosition: 'Inside' | 'Outside' | undefined;
        /** Internal reference to the attribute 'data-tchmi-percent-label-decimal-places' */
        protected __percentLabelDecimalPlaces: number | undefined;
        /** Internal reference to the attribute 'data-tchmi-value-label-decimal-places' */
        protected __valueLabelDecimalPlaces: number | undefined;
        /** Internal reference to the attribute 'data-tchmi-label-font-family' */
        protected __labelFontFamily: FontFamily | undefined;
        /** Internal reference to the attribute 'data-tchmi-label-font-size' */
        protected __labelFontSize: number | undefined;
        /** Internal reference to the attribute 'data-tchmi-label-font-weight' */
        protected __labelFontWeight: FontWeight | undefined;
        protected __storage: LocalStorage<{
            activeLegendElements: number[];
        }, {
            activeLegendElements: number;
        }> | undefined;
        protected __activeLegendElements: number[] | undefined;
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
        /**
         * Is raised if the control are resized.
         */
        protected __rebuild(_event: EventProvider.Event, ctrl: Controls.System.TcHmiControl): void;
        /**
         * Is called initial and and if size changed.
         */
        __drawPieChart(): void;
        /**
         * Created legend
         */
        __createLegend(useOldElements?: boolean): void;
        /**
         * Returns the current value of the member variable legend.
         */
        protected getCurrentGraphLength(): number;
        /**
         * Is raised if mouseDown on legend.
         * @param e The event of mouseDown.
         */
        protected __onCheckboxMouseDown(event: MouseEvent): void;
        /**
         * Is raised if touchstart on legend.
         * @param e The event of touchstart.
         */
        protected __onCheckboxTouchStart(event: TouchEvent): void;
        /**
         * Sets the background value and calls the associated process function.
         * @param valueNew The new value for the background attribute as object.
         */
        setSectionsBackgroundColor(valueNew: Color | null): void;
        /**
         * The watch callback for the sectionsBackgroundColor object resolver.
         */
        protected __onResolverForSectionsBackgroundColorWatchCallback(data: Symbol.ObjectResolver.IWatchResultObject<Color>): void;
        /**
         * Returns the current background value.
         */
        getSectionsBackgroundColor(): Color | null | undefined;
        /**
         * Processes the current border-color attribute.
         */
        protected __processSectionsBackgroundColor(): void;
        /**
         * Sets the value of the member variable 'pieGraphDescriptions' if the new value is not equal to the current value
         * and calls the associated process function (processpieGraphDescriptions) after that.
         * @param valueNew The new value for pieGraphDescriptions.
         */
        setPieGraphDescriptions(valueNew: TcHmiPieChart.PieGraphDescription[] | null): void;
        /**
         * The watch callback for the pieGraphDescriptions object resolver.
         */
        protected __onResolverForPieGraphDescriptionsWatchCallback(data: Symbol.ObjectResolver.IWatchResultObject<TcHmiPieChart.PieGraphDescription[]>): void;
        /**
         * Returns the current value of the member variable pieGraphDescriptions.
         */
        getPieGraphDescriptions(): TcHmiPieChart.PieGraphDescription[] | null | undefined;
        /**
         * Processes the current value of pieGraphDescriptions.
         */
        protected __processPieGraphDescriptions(): void;
        /**
         * Sets the value of pieGraphData
         * @param valueNew The new value for pieGraphData
         */
        setPieGraphData(valueNew: number[] | number[][] | null): void;
        /**
         * The watch callback for the pieGraphData object resolver.
         */
        protected __onResolverForPieGraphDataWatchCallback(data: Symbol.ObjectResolver.IWatchResultObject<number[]>): void;
        /**
         * Gets the value of pieGraphData
         */
        getPieGraphData(): number[] | null | undefined;
        /**
         * Processes pieGraphData
         */
        protected __processPieGraphData(): void;
        /**
         * Sets the value of showLegend
         * @param valueNew The new value for showLegend
         */
        setShowLegend(valueNew: boolean | null): void;
        /**
         * Gets the value of showLegend
         * @returns The current value of showLegend
         */
        getShowLegend(): boolean | undefined;
        /**
         * Processes showLegend
         */
        protected __processShowLegend(): void;
        /**
         * Sets the value of legendFontFamily
         * @param valueNew The new value for legendFontFamily
         */
        setLegendFontFamily(valueNew: FontFamily | null): void;
        /**
         * Gets the value of legendFontFamily
         * @returns The current value of legendFontFamily
         */
        getLegendFontFamily(): string | undefined;
        /**
         * Processes legendFontFamily
         */
        protected __processLegendFontFamily(): void;
        /**
         * Sets the value of legendFontSize
         * @param valueNew The new value for legendFontSize
         */
        setLegendFontSize(valueNew: number | null): void;
        /**
         * Gets the value of legendFontSize
         * @returns The current value of legendFontSize
         */
        getLegendFontSize(): number | undefined;
        /**
         * Processes legendFontSize
         */
        protected __processLegendFontSize(): void;
        /**
         * Gets the value of legendFontSizeUnit
         * @returns The current value of legendFontSizeUnit
         */
        getLegendFontSizeUnit(): string;
        /**
         * Sets the legend font style and calls the associated process function.
         * @param valueNew The new value for legendFontStyle
         */
        setLegendFontStyle(valueNew: FontStyle | null): void;
        /**
         * Returns the current value of legendFontStyle.
         * @returns The current value of legendFontStyle.
         */
        getLegendFontStyle(): FontStyle | undefined;
        /**
         * Processes the current legendFontStyle.
         */
        protected __processLegendFontStyle(): void;
        /**
         * Sets the value of legendFontWeight
         * @param valueNew The new value for legendFontWeight
         */
        setLegendFontWeight(valueNew: FontWeight | null): void;
        /**
         * Gets the value of legendFontWeight
         * @returns The current value of legendFontWeight
         */
        getLegendFontWeight(): FontWeight | undefined;
        /**
         * Processes legendFontWeight
         */
        protected __processLegendFontWeight(): void;
        /**
         * Sets the value of LabelUnit
         * @param valueNew The new value for LabelUnit
         */
        setLabelUnit(valueNew: string | null): void;
        /**
         * Gets the value of LabelUnit
         * @returns The current value of LabelUnit
         */
        getLabelUnit(): string | undefined;
        /**
         * Processes LabelUnit
         */
        protected __processLabelUnit(): void;
        /**
         * Sets the labelPosition attribute.
         * @param valueNew The new value for labelPosition.
         */
        setLabelPosition(valueNew: 'Inside' | 'Outside' | null): void;
        /**
         * Returns the current value of labelPosition.
         */
        getLabelPosition(): "Inside" | "Outside" | undefined;
        /**
         * Processes the current value of attribute labelposition.
         */
        protected __processLabelPosition(): void;
        /**
         * Sets the value of percentLabelDecimalPlaces
         * @param valueNew The new value for percentLabelDecimalPlaces
         */
        setPercentLabelDecimalPlaces(valueNew: number | null): void;
        /**
         * Gets the value of percentLabelDecimalPlaces
         * @returns The current value of percentLabelDecimalPlaces
         */
        getPercentLabelDecimalPlaces(): number | undefined;
        /**
         * Processes percentLabelDecimalPlaces
         */
        protected __processPercentLabelDecimalPlaces(): void;
        /**
         * Sets the value of valueLabelDecimalPlaces
         * @param valueNew The new value for valueLabelDecimalPlaces
         */
        setValueLabelDecimalPlaces(valueNew: number | null): void;
        /**
         * Gets the value of valueLabelDecimalPlaces
         * @returns The current value of valueLabelDecimalPlaces
         */
        getValueLabelDecimalPlaces(): number | undefined;
        /**
         * Processes valueLabelDecimalPlaces
         */
        protected __processValueLabelDecimalPlaces(): void;
        /**
         * Sets the value of LabelFontFamily
         * @param valueNew The new value for LabelFontFamily
         */
        setLabelFontFamily(valueNew: FontFamily | null): void;
        /**
         * Gets the value of LabelFontFamily
         * @returns The current value of LabelFontFamily
         */
        getLabelFontFamily(): string | undefined;
        /**
         * Processes LabelFontFamily
         */
        protected __processLabelFontFamily(): void;
        /**
         * Sets the value of LabelFontSize
         * @param valueNew The new value for LabelFontSize
         */
        setLabelFontSize(valueNew: number | null): void;
        /**
         * Gets the value of LabelFontSize
         * @returns The current value of LabelFontSize
         */
        getLabelFontSize(): number | undefined;
        /**
         * Processes LabelFontSize
         */
        protected __processLabelFontSize(): void;
        /**
         * Gets the value of LabelFontSizeUnit
         * @returns The current value of LabelFontSizeUnit
         */
        getLabelFontSizeUnit(): string;
        /**
         * Sets the value of LabelFontWeight
         * @param valueNew The new value for LabelFontWeight
         */
        setLabelFontWeight(valueNew: FontWeight | null): void;
        /**
         * Gets the value of LabelFontWeight
         * @returns The current value of LabelFontWeight
         */
        getLabelFontWeight(): FontWeight | undefined;
        /**
         * Processes LabelFontWeight
         */
        protected __processLabelFontWeight(): void;
    }
    namespace TcHmiPieChart {
        interface PieGraphDescription {
            pieColor?: TcHmi.SolidColor;
            labelColor?: TcHmi.SolidColor;
            name: string;
            showName: boolean;
            showPercentLabel: boolean;
            showValueLabel: boolean;
            showUnit?: boolean;
        }
    }
}
//# sourceMappingURL=TcHmiPieChart.d.ts.map