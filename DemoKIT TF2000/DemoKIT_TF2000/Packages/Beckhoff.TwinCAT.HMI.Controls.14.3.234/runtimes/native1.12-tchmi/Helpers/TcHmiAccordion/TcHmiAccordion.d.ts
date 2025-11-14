declare namespace TcHmi.Controls.Helpers.TcHmiAccordion {
    /**
     * How to use
     * HTML example
    <tchmi-accordion>
        <tchmi-accordion-item name="Item1" open>
            <tchmi-accordion-header>Header 1</tchmi-accordion-header>
            <tchmi-accordion-content">Content 1</tchmi-accordion-content>
        </tchmi-accordion-item>
        <tchmi-accordion-item name="Item2">
            <tchmi-accordion-header>Header 2</tchmi-accordion-header>
            <tchmi-accordion-content>Content 1</tchmi-accordion-content>
        </tchmi-accordion-item>
        <tchmi-accordion-item name="Item3">
            <tchmi-accordion-header>Header Only</tchmi-accordion-header>
        </tchmi-accordion-item>
    </tchmi-accordion>
     **/
    class Accordion extends HTMLElement {
        /**
         * Map of all valid AccordionItems including content and header
         * Key is the name of the AccordionItem
         */
        private __items;
        /** When set to true only one opened item per level is allowed */
        private __autoCollapse;
        /**
         * Contains all functions which are fired on item change.
         */
        private __itemClickedCallbacks;
        /**
         * Contains all functions which are fired on item down is changed.
         */
        private __itemDownChangedCallbacks;
        private __itemContentOpenedCallbacks;
        private __itemContentClosedCallbacks;
        constructor();
        /**
         * Is called when the element is connected to the DOM.
         */
        connectedCallback(): void;
        /**
         * Is called when the element is disconnected from the DOM.
         */
        disconnectedCallback(): void;
        /**
         * Adds an item to the accordion.
         */
        addItem(name: string, header: HTMLElement, content?: HTMLElement): AccordionItem | null;
        /**
         * Removes an item from the accordion.
         */
        removeItemByName(name: string): void;
        protected __headerClickedCallback(clickedItem: AccordionItem): void;
        protected __headerExpandedCallback(expandedItem: AccordionItem): void;
        protected __headerDownChangedCallback(changedItem: AccordionItem): void;
        protected __itemContentOpenedCallback(changedItem: AccordionItem): void;
        protected __itemContentClosedCallback(changedItem: AccordionItem): void;
        /**
         * Add callback, which is fired when an item is clicked.
         * @param cb Function which is fired when an item is clicked.
         */
        addItemClickedCallback(cb: (item: AccordionItem) => void): void;
        /**
         * Remove callback, which is fired when an item is clicked.
         * @param cb Function which is fired when an item is clicked.
         */
        removeItemClickedCallback(cb: (item: AccordionItem) => void): void;
        /**
         * Add callback, which is fired when the down class is added or removed from an item.
         * @param cb Function which is fired when the down class is added or removed from an item.
         */
        addItemDownChangedCallback(cb: (changedItem: AccordionItem) => void): void;
        /**
         * Remove callback, which is fired when the down class is added or removed from an item.
         * @param cb Function which is fired when the down class is added or removed from an item.
         */
        removeItemDownChangedCallback(cb: (changedItem: AccordionItem) => void): void;
        /**
         * Add callback, which is fired when the content is opened.
         * @param cb Function which is fired when the content is opened.
         */
        addItemContentOpenedCallback(cb: (changedItem: AccordionItem) => void): void;
        /**
         * Remove callback, which is fired when the content is opened.
         * @param cb Function which is fired when the content is opened.
         */
        removeItemContentOpenedCallback(cb: (changedItem: AccordionItem) => void): void;
        /**
         * Add callback, which is fired when the content is closed.
         * @param cb Function which is fired when the content is closed.
         */
        addItemContentClosedCallback(cb: (changedItem: AccordionItem) => void): void;
        /**
         * Remove callback, which is fired when the content is closed.
         * @param cb Function which is fired when the content is closed.
         */
        removeItemContentClosedCallback(cb: (changedItem: AccordionItem) => void): void;
        /**
         * Function to set the auto collapse value.
         */
        setAutoCollapse(value: boolean): void;
        /**
         * Returns the current auto collapse value
         * @returns
         */
        getAutoCollapse(): boolean;
        /**
         * Returns the items of the accordion.
         */
        getItems(): Map<string, AccordionItem>;
        /**
         * Returns a specific item by its name.
         */
        getItemByName(name: string): AccordionItem | undefined;
    }
}
declare namespace TcHmi.Controls.Helpers.TcHmiAccordion {
    class AccordionItem extends HTMLElement {
        #private;
        private __name?;
        private __header?;
        private __content?;
        private __disabled;
        private __isOpen;
        private __expanderElement;
        /** Defines if an open item is closed on a normal click */
        private __closeWhenClicked;
        private __destroyOnDisconnect;
        private __headerDestroyFunctions;
        private __pointerUpDestroyer;
        private __headerPointerLeaveDestroyer;
        private __headerPointerEnterDestroyer;
        private __expanderPointerLeaveDestroyer;
        private __expanderPointerEnterDestroyer;
        /**
         * Contains all functions which are fired on item change.
         */
        private __headerClickedCallbacks;
        private __headerDownChangedCallbacks;
        private __headerExpandedCallbacks;
        private __contentOpenedCallbacks;
        private __contentClosedCallbacks;
        constructor();
        /**
         * Is called when the element is connected to the DOM.
         */
        connectedCallback(): void;
        /**
         * Is called when the element is disconnected from the DOM.
         */
        disconnectedCallback(): void;
        /**
         * Callback function for a click on the header.
         */
        protected __onHeaderClick(): void;
        /**
         * Callback function for a click on the expander.
         */
        protected __onExpanderClick(event: Event): void;
        /**
         * Disables or enables the item.
         */
        disable(disable: boolean): void;
        /**
         * Returns true if the element is disabled.
         */
        isDisabled(): boolean;
        /**
         * Function to set a header element.
         */
        setHeader(header: HTMLElement | undefined): void;
        /**
         * Return the current header element.
         */
        getHeader(): HTMLElement | undefined;
        /**
         * Function to set the content element.
         */
        setContent(content: HTMLElement | undefined): void;
        /**
         * Returns the content element.
         */
        getContent(): HTMLElement | undefined;
        /**
         * Function to set the name of the item.
         */
        setName(name: string): void;
        /**
         * Returns the name of the Item.
         */
        getName(): string | undefined;
        /**
         * Opens or closes the content of the item.
         */
        protected __changeState(): void;
        /**
         * Opens the item.
         * @param animationList A list of animation functions. Store the animations of parent elements on a recuresive use of the function. Can be set to "null" if the animation should be skipped.
         */
        open(animationList?: (() => void)[] | null): void;
        /**
         * Closes the element and its child elements.
         */
        close(): void;
        /**
         * Returns the if the element is opened.
         */
        IsOpen(): boolean;
        /**
         * Defines if an open item is closed on a normal click.
         */
        setCloseWhenClicked(valueNew: boolean): void;
        getCloseWhenClicked(): boolean;
        /**
         * Add callback, which is fired when the header is clicked.
         * @param cb Function which is fired when the header is clicked.
         */
        addHeaderClickedCallback(cb: (clickedItem: AccordionItem) => void): void;
        /**
         * Remove callback, which is fired when the header is clicked.
         * @param cb Function which is fired when the header is clicked.
         */
        removeHeaderClickedCallback(cb: (clickedItem: AccordionItem) => void): void;
        /**
         * Add callback, which is fired when the down class is added or removed from the header.
         * @param cb Function which is fired when the down class is added or removed from the header.
         */
        addHeaderDownChangedCallback(cb: (changedItem: AccordionItem) => void): void;
        /**
         * Remove callback, which is fired when the down class is added or removed from the header.
         * @param cb Function which is fired when the down class is added or removed from the header.
         */
        removeHeaderDownChangedCallback(cb: (changedItem: AccordionItem) => void): void;
        /**
         * Add callback, which is fired when the header is expanded.
         * @param cb Function which is fired when the header is expanded.
         */
        addHeaderExpandedCallback(cb: (changedItem: AccordionItem) => void): void;
        /**
         * Remove callback, which is fired when the header is expanded.
         * @param cb Function which is fired when the header is expanded.
         */
        removeHeaderExpandedCallback(cb: (changedItem: AccordionItem) => void): void;
        /**
         * Add callback, which is fired when the content is opened.
         * @param cb Function which is fired when the content is opened.
         */
        addContentOpenedCallback(cb: (changedItem: AccordionItem) => void): void;
        /**
         * Remove callback, which is fired when the content is opened.
         * @param cb Function which is fired when the content is opened.
         */
        removeContentOpenedCallback(cb: (changedItem: AccordionItem) => void): void;
        /**
         * Add callback, which is fired when the content is closed.
         * @param cb Function which is fired when the content is closed.
         */
        addContentClosedCallback(cb: (changedItem: AccordionItem) => void): void;
        /**
         * Remove callback, which is fired when the content is closed.
         * @param cb Function which is fired when the content is closed.
         */
        removeContentClosedCallback(cb: (changedItem: AccordionItem) => void): void;
        protected __onPointerUp(): void;
        protected __onPointerDown(): void;
        protected __onPointerLeave(): void;
        protected __onPointerEnter(): void;
        protected __onExpanderPointerDown(): void;
        protected __onExpanderPointerLeave(): void;
        protected __onExpanderPointerEnter(): void;
    }
}
//# sourceMappingURL=TcHmiAccordion.d.ts.map