declare namespace TcHmi.Controls.Helpers {
    class SplitView extends HTMLElement {
        static resizeBarTolerance: number;
        private __localStorage;
        constructor(options?: {
            initSizeOfFirstContainer?: number;
            alignment?: SplitView.Alignment;
        });
        protected __alignment: SplitView.Alignment;
        protected __resizeInProgress: boolean;
        protected __startPointerPos: number;
        protected __startSize: number;
        protected __children: [HTMLElement, HTMLElement] | undefined;
        protected __eventDestroyers: DestroyFunction[];
        protected __pointerMoveEventDestroyer: DestroyFunction | null;
        protected __pointerUpEventDestroyer: DestroyFunction | null;
        protected __doubleClickEventDestroyer: DestroyFunction | null;
        connectedCallback(): void;
        setInitialFlexProperties(): void;
        disconnectedCallback(): void;
        /**
         * Changes the cursor when the pointer is near the resize divider.
         */
        private __onPointerMoveOverContainer;
        /**
         * Resets the cursor when the pointer leaves the container.
         */
        private __onPointerLeaveContainer;
        /**
         * Starts the resizing process when the pointer is near the divider.
         */
        private __onPointerDownContainer;
        /**
         * Adjusts the size of the panes based on the pointer movement.
         */
        private __onPointerMove;
        private __setViewSize;
        /**
         * Ends the resizing process.
         */
        private __onPointerUp;
        /**
         * Resets the split view to initial properties.
         */
        private __onDoubleClick;
        /**
         * Removes all event listeners.
         */
        private __removeEvents;
        /**
         * Indicates whether a resizing process is in progress.
         */
        isResizeInProgress(): boolean;
    }
    namespace SplitView {
        enum Alignment {
            horizontal = 0,
            vertical = 1
        }
    }
}
//# sourceMappingURL=TcHmiSplitView.d.ts.map