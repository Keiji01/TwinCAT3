export declare function ResponsiveBehaviour(mediaQueries: MediaQuery[], affectedControls: affectedControl[]): string | undefined;
export declare namespace ResponsiveBehaviour {
    var currentMediaQuery: MediaQuery | null;
    var controlsAttached: boolean;
    var controlDimensionsInitialized: boolean;
    var controlDimensionMap: Map<string, IControlDimensions>;
}
export interface MediaQuery {
    name: string;
    maxWidth: number;
    minWidth: number;
    maxHeight: number;
    minHeight: number;
    controlBehaviourList: controlBehaviour[] | null;
}
export interface controlBehaviour {
    controlType: string;
    controlID: string;
    displayOption: 'full' | 'icons' | 'burger_top' | 'burger_bottom';
}
export interface affectedControl {
    controlID: string;
    position: 'Top' | 'Bottom' | 'Left' | 'Right' | 'Center';
    onlyIconsSize: null | number;
}
export interface IControlDimensions {
    height: number | string | null;
    heightUnit: 'px' | '%' | string | null;
    width: number | string | null;
    widthUnit: 'px' | '%' | string | null;
    top: number | string | null;
    topUnit: 'px' | '%' | string | null;
    bottom: number | string | null;
    bottomUnit: 'px' | '%' | string | null;
    left: number | string | null;
    leftUnit: 'px' | '%' | string | null;
    right: number | string | null;
    rightUnit: 'px' | '%' | string | null;
}
export type controlDimensions = 'Height' | 'Width' | 'Top' | 'Bottom' | 'Left' | 'Right';