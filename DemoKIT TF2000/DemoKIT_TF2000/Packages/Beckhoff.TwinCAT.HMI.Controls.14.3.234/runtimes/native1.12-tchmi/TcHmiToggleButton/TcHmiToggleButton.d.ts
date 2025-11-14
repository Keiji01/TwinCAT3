declare namespace TcHmi.Controls.Beckhoff {
    class TcHmiToggleButton extends TcHmiButton {
        #private;
        constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
        /**
         * Internal reference to the attribute 'data-tchmi-toggle-group'.
         */
        protected __toggleGroup: string | null | undefined;
        /**
         * Internal reference to the attribute 'data-tchmi-toggle-state'.
         */
        protected __toggleState: ToggleState | undefined;
        protected __toggleLock: boolean;
        protected __onToggleGroupToggledEventDestroyEvent: DestroyFunction | null;
        /**
         * If raised, the control object exists in control cache and constructor of each inheritation level was called.
         */
        __previnit(): void;
        /**
         * If raised, all attributes have been set to it's default or dom values.
         */
        __init(): void;
        /**
         * Is called by the system after the control instance gets part of the current DOM.
         * Is only allowed to be called from the framework itself!
         */
        __attach(): void;
        /**
         * Is called by the system after the control instance is no longer part of the current DOM.
         * Is only allowed to be called from the framework itself!
         */
        __detach(): void;
        /**
         * Destroy the current control instance.
         * Will be called automatically if system destroys control!
         */
        destroy(): void;
        /**
         * Processes the current state if state has changed.
         * @param state The new state of the control.
         * @param forwardStateSymbol Controls if a change should be reflected to a possible existing state symbol. This is required to prevent changes from the symbol to be written to the symbol again.
         * @param source What caused the state change. Could be 'userInteraction', the change of an 'attribute' or the state symbol, or the 'toggleGroup'.
         */
        protected __setInternalState(state: boolean, source: string): void;
        /**
         * Event handler for the onPropertyChanged<IsEnabled> Event. Overrides __onPropertyIsEnabledChanged of TcHmiButton.
         * @param _event The event that is handled. Unused.
         * @param data The event data.
         */
        protected __onPropertyIsEnabledChanged(_event: EventProvider.Event, data: {
            propertyName: string;
            dirtyPaths?: string[];
        }): void;
        /**
         * Returns an event handler for the mousedown event.
         */
        protected __onMouseDown(event: MouseEvent): void;
        /**
         * Returns an event handler for the mouseup event.
         */
        protected __onMouseUp(event: MouseEvent): void;
        /**
         * Returns an event handler for the mouseenter event.
         */
        protected __onMouseEnter(): void;
        /**
         * Returns an event handler for the mouseleave event.
         */
        protected __onMouseLeave(event: MouseEvent): void;
        /**
         * Returns an event handler for the touchstart event.
         */
        protected __onTouchStart(event: TouchEvent): void;
        /**
         * Returns an event handler for the touchend and touchcancel events.
         */
        protected __onTouchEndOrCancel(event: TouchEvent): void;
        /**
         * Is raised if a member of 'toggleGroup' has raised the toggled event.
         * @param _event The event that is handled. Unused.
         * @param data The event data.
         */
        protected __onToggleGroupToggled(_event: EventProvider.Event, data: {
            ActiveElementId: string;
            source: string;
        }): void;
        /**
         * Sets the toggleGroup attribute to a new value.
         * @param valueNew The new value for the toggleGroup attribute.
         */
        setToggleGroup(valueNew: string | null): void;
        /**
         * Returns the current  value of the toggleGroup attribute
         */
        getToggleGroup(): string | null | undefined;
        /**
         * Processes the current value of the toggleGroup attribute.
         */
        protected __processToggleGroup(): void;
        /**
         * Sets the toggleState attribute to a new value.
         * @param valueNew The new value for the toggleState attribute.
         * @param forwardStateSymbol Does nothing, only exists for backwards compatibility purposes.
         * @param process Allows to disable underlying calls to processToggleState. Required if a StateSymbol change is reflected to the ToggleState.
         */
        protected __setToggleState(valueNew: ToggleState | null, forwardStateSymbol?: boolean, process?: boolean): void;
        /**
         * Sets the toggleState attribute to a new value.
         * @param valueNew The new value for the toggleState attribute.
         */
        setToggleState(valueNew: ToggleState | null): void;
        /**
         * Returns the current value of the toggleState attribute
         */
        getToggleState(): ToggleState | undefined;
        /**
         * Processes the current value of the toggleState attribute.
         * @param forwardStateSymbol Does nothing, only exists for backwards compatibility purposes.
         */
        protected __processToggleState(forwardStateSymbol?: boolean): void;
    }
}
//# sourceMappingURL=TcHmiToggleButton.d.ts.map