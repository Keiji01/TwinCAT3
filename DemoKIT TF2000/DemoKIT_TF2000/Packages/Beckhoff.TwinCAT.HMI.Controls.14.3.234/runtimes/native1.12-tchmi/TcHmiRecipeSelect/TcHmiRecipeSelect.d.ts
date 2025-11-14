declare namespace TcHmi.Controls.Beckhoff {
    class TcHmiRecipeSelect extends TcHmi.Controls.System.TcHmiControl {
        #private;
        /**
         * Constructor Creates a new control instance.
         * @param element The element that hosts the control.
         * @param pcElement Precompiled element.
         * @param attrs The control attributes.
         */
        constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
        protected __elementTemplateRoot: HTMLElement;
        protected __elementSelectedRecipe: HTMLElement;
        protected __elementPathBox: HTMLDivElement;
        protected __buttonActivate: TcHmiButton;
        protected __buttonTeach: TcHmiButton;
        protected __selectRecipePrompt: TcHmiRecipeSelectComponents.SelectRecipePrompt;
        protected __serverDomain: string | undefined;
        protected __serverInterval: number | undefined;
        protected __allowedRecipeTypes: string[] | null | undefined;
        protected __unwatchRecipeList: DestroyFunction | null;
        protected __unwatchRecipeManagementDomain: DestroyFunction | null;
        protected __watchRecipeConditions: {
            extensionLoaded: boolean;
            userHasRights: boolean;
        };
        protected __activeRecipesSubscriptionId: number | null;
        protected __watchActiveRecipeConditions: {
            extensionLoaded: boolean;
            userHasRights: boolean;
        };
        protected __symbolAccessSubscriptionId: number | null;
        protected __symbolAccess: {
            '{0}.Config': Server.ACCESS;
            '{0}.ActivateRecipe': Server.ACCESS;
            '{0}.ReadFromTarget': Server.ACCESS;
            '{0}.UpdateRecipe': Server.ACCESS;
            '{0}.GetActiveRecipes': Server.ACCESS;
        };
        protected __selectedRecipe: ObjectPath | null;
        protected __isEnabledLock: {
            locked: boolean;
            unlockValue: boolean | null;
        };
        protected __localizedElements: Map<HTMLElement, {
            key: string;
            parameters?: any[];
        }>;
        protected __localizationReader: Locale.LocalizationReader | undefined;
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
         * Add an element to be localized.
         * @param element The element.
         * @param key The localization key.
         * @param parameters Optional parameters to pass to tchmi_format_string.
         */
        protected __addLocalizedElement(element: HTMLElement, key: string, ...parameters: any[]): void;
        /**
         * Remove a localized element.
         * @param element The element to remove.
         */
        protected __removeLocalizedElement(element: HTMLElement): void;
        /**
         * Event handler for the click event of the selected recipe element and the path box.
         * @param _event The event to handle.
         */
        protected __onRecipeClick(_event: MouseEvent): Promise<void>;
        /**
         * Selects the recipe with the given name.
         * @param fullName The path and name of the recipe to select.
         */
        protected __select(fullName: string): void;
        /**
         * Unselects the currently selected recipe.
         */
        protected __unselect(): void;
        /**
         * Event handler for the onPressed event of the activate button.
         */
        protected __onActivatePressed(): void;
        /**
         * Event handler for the onPressed event of the teach button.
         */
        protected __onTeachPressed(): void;
        /**
         * Sets the current value of attribute ServerDomain.
         * @param valueNew
         */
        setServerDomain(valueNew: string | null): void;
        /**
         * Returns the current value of attribute ServerDomain.
         */
        getServerDomain(): string | undefined;
        /**
         * Processes the current value of attribute ServerDomain.
         */
        protected __processServerDomain(): void;
        /**
         * Sets the current value of attribute ServerInterval.
         * @param valueNew
         */
        setServerInterval(valueNew: number | null): void;
        /**
         * Returns the current value of attribute ServerInterval.
         */
        getServerInterval(): number | undefined;
        /**
         * Processes the current value of attribute ServerInterval.
         */
        protected __processServerInterval(): void;
        /**
         * Returns the current value of attribute SelectedRecipeFullName.
         */
        getSelectedRecipeFullName(): string | null;
        /**
         * Returns the current value of attribute SelectedRecipeName.
         */
        getSelectedRecipeName(): string | null;
        /**
         * Returns the current value of attribute SelectedRecipePath.
         */
        getSelectedRecipePath(): string | null;
        /**
         * Sets the current value of attribute AllowedRecipeTypes.
         * @param valueNew The new value.
         */
        setAllowedRecipeTypes(valueNew: string[] | null): void;
        /**
         * The watch callback for the AllowedRecipeTypes object resolver
         */
        protected __onResolverForAllowedRecipeTypesWatchCallback(data: Symbol.ObjectResolver.IWatchResultObject<string[]>): void;
        /**
         * Returns the current value of attribute AllowedRecipeTypes.
         */
        getAllowedRecipeTypes(): string[] | null | undefined;
        /**
         * Processes the current value of attribute AllowedRecipeTypes.
         */
        protected __processAllowedRecipeTypes(): void;
        /**
         * Updates the RecipeManagementDomainWatch. Also unwatches the recipe list watch.
         * @param unwatchOnly Set to true to only destroy the existing watch. Defaults to false.
         */
        protected __updateRecipeWatches(unwatchOnly?: boolean): void;
        /**
         * Lock the isEnabled state to false.
         */
        protected __lockIsEnabled(): void;
        /**
         * Unlock the isEnabled state and apply the stored unlockValue.
         */
        protected __unlockIsEnabled(): void;
        /**
         * Sets the value of attribute IsEnabled.
         */
        setIsEnabled(valueNew: boolean | null): void;
        /**
         * Updates the recipe list watch, if the recipe extension is loaded and the user has the necessary access rights.
         * @param extensionLoaded Whether the recipe extension is loaded.
         * @param userHasRights Whether the user has the necessary access rights.
         */
        protected __updateRecipeListWatch(extensionLoaded: boolean | null, userHasRights: boolean | null): void;
        /**
         * Callback function for Server.RecipeManagement.watchRecipeList.
         * @param data The recipes.
         */
        protected __onRecipeListWatch(data: Server.RecipeManagement.IWatchResultObject<Server.RecipeManagement.FolderRecipe>): void;
        /**
         * Update the subscription to GetActiveRecipes.
         * @param unsubscribeOnly Only unsubscribe. Should be used on detach.
         */
        protected __updateActiveRecipesSubscription(extensionLoaded: boolean | null, userHasRights: boolean | null, recipeChanged?: boolean): void;
        /**
         * Update the subscription to GetSymbolAccess.
         * @param unsubscribeOnly Only unsubscribe. Should be used on detach.
         */
        protected __updateSymbolAccessSubscription(unsubscribeOnly?: boolean): void;
        /**
         * Forces the buttons operate rights to Deny if the user doesn't have the necessary symbol access.
         */
        protected __updateButtonAccess(): void;
        /**
         * Expands the given localization key to a full symbol expression.
         * @param key The key to expand.
         */
        protected __expandLocalizationSymbol(key: string): string;
    }
}
declare namespace TcHmi.Controls.Beckhoff.TcHmiRecipeSelectComponents {
    class SelectRecipePrompt extends Helpers.OkCancelPrompt<{
        name: string;
        recipe: Server.RecipeManagement.Recipe;
    }> {
        #private;
        protected __parentControl: TcHmi.Controls.System.TcHmiControl;
        protected __recipeBrowser: Helpers.DirectoryBrowser<Server.RecipeManagement.Recipe, Server.RecipeManagement.FolderRecipe>;
        protected __initialPath: string[] | null;
        /**
         * Creates a new SelectRecipePrompt instance.
         * @param pathDisplay The display to show the currently chosen path in.
         * @param parentControl The control which owns the popup.
         */
        constructor(pathDisplay: Helpers.PathDisplay, parentControl: TcHmiRecipeSelect);
        /**
         * Handler for the PathChanged event of the recipe type browser.
         * @param currentItem The current item.
         * @param path The path to the current item.
         */
        protected __onPathChanged(currentItem: Helpers.DirectoryBrowser.Item<Server.RecipeManagement.Recipe, Server.RecipeManagement.FolderRecipe> | null, _path: string[] | null): void;
        /**
         * Handler for the SelectionChanged event of the recipe type browser.
         * @param selectedItem The selected item, or null if nothing is selected.
         * @param path The current path.
         * @param selectedItemName The name of the selected item, or null if nothing is selected.
         */
        protected __onSelectionChanged(selectedItems: Helpers.DirectoryBrowser.DescendantItem<Server.RecipeManagement.Recipe, Server.RecipeManagement.FolderRecipe>[] | null): void;
        /**
         * Destroys the popup and all its controls.
         * @param force If true, child controls will be removed from the parent control before destruction, to ensure destruction in case of keepAlive === true.
         */
        destroy(force?: boolean): void;
        /**
         * Suspends the RecipeBrowser of this popup.
         */
        suspend(): void;
        /**
         * Resumes the RecipeBrowser of this popoup.
         */
        resume(): void;
        /**
         * Sets the path of the RecipeBrowser to the specified value.
         * @param value The path.
         */
        setPath(value: string[]): Promise<{
            name: string;
            recipe: Server.RecipeManagement.Recipe;
        } | null>;
        /**
         * Sets the path of the RecipeBrowser to the root directory.
         */
        reset(): void;
        /**
         * Callback function for Server.RecipeManagement.watchRecipeList.
         * @param data The recipes.
         */
        setRecipeList(rootDirectory: Server.RecipeManagement.FolderRecipe | null): void;
        /**
         * Performs the action for the OK button, i.e. calling prompt.answer(). Must be implemented by inheriting class.
         */
        protected __ok(): Promise<void>;
        /**
         * Performs the action for the Cancel button.
         */
        protected __cancel(): void;
        /**
         * Shows the popup and waits for the user to answer the prompt. A Promise is returned that will be resolved with the value the user provides.
         */
        prompt(): Promise<{
            isOk: true;
            value: {
                name: string;
                recipe: Server.RecipeManagement.Recipe;
            };
        } | {
            isOk: false;
            value?: void | undefined;
        }>;
        /**
         * Sets localizable texts to the given localization symbols.
         * @param texts A collection of localization symbol expressions.
         */
        setTexts(texts: Partial<SelectRecipePrompt.LocalizableTexts>): void;
    }
    namespace SelectRecipePrompt {
        interface LocalizableTexts extends Helpers.OkCancelPrompt.LocalizableTexts {
            headerText: Localizable;
        }
    }
}
//# sourceMappingURL=TcHmiRecipeSelect.d.ts.map