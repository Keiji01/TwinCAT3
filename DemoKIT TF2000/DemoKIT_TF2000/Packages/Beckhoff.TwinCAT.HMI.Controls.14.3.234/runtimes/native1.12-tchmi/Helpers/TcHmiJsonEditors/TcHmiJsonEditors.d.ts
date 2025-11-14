declare namespace TcHmi.Controls.Helpers {
    /**
     * Factory to create JSON editors
     */
    class EditorFactory<S extends Editor.Settings = Editor.Settings & HistorizedSymbolEditor.Settings, L extends Editor.Localizables = Editor.Localizables & HistorizedSymbolEditor.LocalizableTexts> {
        #private;
        protected __customEditors: {
            predicate: (schema: JsonSchema, info: Editor.EditorInfo) => boolean;
            editor: {
                singleLine: Editor.Constructor<unknown>;
                pane?: Editor.Constructor<unknown>;
            };
        }[];
        protected __options: EditorFactory.Options<S, L> & {
            factorySettings: EditorFactory.Settings;
        };
        /**
         * Creates a new EditorFactory instance.
         * @param options Options for this EditorFactory instance.
         */
        constructor(options?: EditorFactory.Options<S, L>);
        /**
         * Create a new editor from a given symbol. Throws an exception if the given symbol cannot be resolved to a
         * schema.
         * @param symbol A TcHmi symbol that contains the data that will be edited with this editor.
         * @param element The element to contain the editor.
         */
        fromSymbol(symbol: string | TcHmi.Symbol | TcHmi.SymbolExpression, element: HTMLElement): Promise<Editor<any, Editor.EditorInfo>>;
        /**
         * Create a new editor from a given TcHmi type. Throws an exception if the given type cannot be resolved to a
         * schema.
         * @param type The type of the data that will be edited with this editor.
         * @param element The element to contain the editor.
         */
        fromType(type: string, element: HTMLElement): Editor<any, Editor.EditorInfo>;
        /**
         * Create a new editor from a given JSON schema.
         * @param schema A JSON schema that describes the data that will be edited with this editor.
         * @param element The element to contain the editor.
         */
        fromSchema(schema: JsonSchema, element: HTMLElement): Editor<any, Editor.EditorInfo>;
        /**
         * Create a new editor from a given EditorInfo object.
         * @param info An object containing information about the editor and the type of value to edit. Can be obtained
         * from SchemaParser.parse().
         * @param element The element to contain the editor.
         * @param parent Will be set if this method is used to create a sub-editor for an editor pane.
         */
        fromEditorInfo(info: Editor.EditorInfo, element: HTMLElement, parent?: Editor<unknown> | null): Editor<any, Editor.EditorInfo>;
        /**
         * Register a custom editor to handle a specific data type.
         * @param predicate A predicate function to determine the data type this editor should handle. This function
         * will receive the schema and EditorInfo that is used to create an editor and should return true to indicate
         * that the given schema or EditorInfo can be handled by this editor.
         * @param editor The editor class to register.
         */
        registerEditor<E extends Editor<unknown>>(predicate: (schema: JsonSchema, info: Editor.EditorInfo) => boolean, editor: Editor.GenericConstructor<E, unknown> | {
            singleLine: Editor.GenericConstructor<E, unknown>;
            pane: Editor.Constructor<unknown>;
        }): EditorFactory<S & EditorFactory.TryUnwrapPartial<Parameters<E['setSettings']>[0]>, L & EditorFactory.TryUnwrapPartial<Parameters<E['setLocalizations']>[0]>>;
        /**
         * Register a custom editor to handle a specific data type.
         * @param metaType A string that will be compared to the frameworkMetaType property of a JSON schema. If exactly
         * equal, this editor will be determined to be able to handle a given schema.
         * @param editor The editor class to register.
         */
        registerEditor<E extends Editor<unknown>>(metaType: string, editor: Editor.GenericConstructor<E, unknown> | {
            singleLine: Editor.GenericConstructor<E, unknown>;
            pane: Editor.Constructor<unknown>;
        }): EditorFactory<S & EditorFactory.TryUnwrapPartial<Parameters<E['setSettings']>[0]>, L & EditorFactory.TryUnwrapPartial<Parameters<E['setLocalizations']>[0]>>;
        /**
         * Register a custom editor to handle a specific data type.
         * @param metaTypes An array of strings that will be compared to the frameworkMetaType property of a JSON
         * schema. If the schemas frameworkMetaType property is exactly equal to one of the strings in this array, this
         * editor will be determined to be able to handle that schema.
         * @param editor The editor class to register.
         */
        registerEditor<E extends Editor<unknown>>(metaTypes: string[], editor: Editor.GenericConstructor<E, unknown> | {
            singleLine: Editor.GenericConstructor<E, unknown>;
            pane: Editor.Constructor<unknown>;
        }): EditorFactory<S & EditorFactory.TryUnwrapPartial<Parameters<E['setSettings']>[0]>, L & EditorFactory.TryUnwrapPartial<Parameters<E['setLocalizations']>[0]>>;
        /**
         * Get the control that is used as the parent control for editors created by this factory.
         */
        get parentControl(): Controls.System.TcHmiControl | null;
        /**
         * Set the control that is used as the parent control for editors created by this factory.
         * @param control The control owning editors created by this factory.
         */
        set parentControl(control: Controls.System.TcHmiControl | null);
        /**
         * Get the current text overwrites that are used when an editor is created.
         */
        get texts(): Partial<L & Editor.LocalizableTexts> | null;
        /**
         * Set the current text overwrites that are used when an editor is created.
         * @param texts A collection of static or localized texts to overwrite the default localized texts in the
         * editor.
         */
        set texts(texts: Partial<L & Editor.LocalizableTexts> | null);
        /**
         * Get the current editor settings.
         */
        get editorSettings(): Partial<S & Editor.EditorSettings> | null;
        /**
         * Set the settings that are applied to newly created editors.
         * @param settings The settings to apply to newly created editors.
         */
        set editorSettings(settings: Partial<S & Editor.EditorSettings> | null);
        /**
         * Get the current editor settings.
         */
        get factorySettings(): Partial<EditorFactory.Settings> | null;
        /**
         * Set the settings that are applied to newly created editors.
         * @param settings The settings to apply to newly created editors.
         */
        set factorySettings(settings: Partial<EditorFactory.Settings> | null);
        /**
         * Get the name generator that is currently used when a JSON schema is parsed.
         */
        get nameGenerator(): SchemaParser.NameGenerator | string | null;
        /**
         * Set the name generator that is currently used when a JSON schema is parsed.
         * @param nameGenerator A function that generates a name from the resulting editor type, the title and id of the
         * schema and the schemas that the resulting editor info is based on. This can be more than one schema if anyOf
         * or oneOf is used. If the function returns null, the SchemaParser uses its own algorithm to generate a name.
         */
        set nameGenerator(nameGenerator: SchemaParser.NameGenerator | string | null);
    }
    namespace EditorFactory {
        /**
         * Options for EditorFactory instances.
         */
        interface Options<S extends Editor.Settings, L extends Editor.Localizables> {
            /**
             * The control owning editors created by this factory.
             */
            parentControl?: Controls.System.TcHmiControl | null;
            /**
             * A collection of static or localized texts to overwrite the default localized texts in the editor.
             */
            texts?: Partial<L & Editor.LocalizableTexts>;
            /**
             * Settings to apply to newly created editors.
             */
            editorSettings?: Partial<S & Editor.EditorSettings>;
            /**
             * Settings that are used by the factory to create editors.
             */
            factorySettings?: Partial<Settings>;
            /**
             * A function that generates a name from the resulting editor type, the title and id of the schema and the
             * schemas that the resulting editor info is based on. This can be more than one schema if anyOf or oneOf is
             * used. If the function returns null, the SchemaParser uses its own algorithm to generate a name.
             * Alternatively a string can be passed in directly which will be used as the name for the top-level editor.
             */
            nameGenerator?: SchemaParser.NameGenerator | string;
        }
        /**
         * Settings for EditorFactory instances.
         */
        interface Settings {
            /**
             * Controls whether the factory should create editor panes instead of single-line editors if available. For
             * this to work with custom editors, they must be registered together with their respective pane.
             * No: Default behavior. The factory always returns a single-line editor.
             * Always: The factors always returns editor panes, if available. This may result in multiple nested panes.
             * FirstLevel: The factory tries to return editor panes only for the first level of nesting.
             */
            preferPanes: 'No' | 'Always' | 'FirstLevel';
        }
        type TryUnwrapPartial<P> = P extends Partial<infer T> ? T : P;
    }
}
declare namespace TcHmi.Controls.Helpers {
    /**
     * Class to parse JSON schemas into more easily useable editor infos.
     */
    namespace SchemaParser {
        /**
         * Parses a JSON schema into editor info objects.
         * @param schema The schema to parse.
         */
        function parse(schema: JsonSchema): Editor.EditorInfo;
        /**
         * Parses a JSON schema into editor info objects.
         * @param schema The schema to parse.
         * @param customName A custom name to use for the resulting editor info.
         */
        function parse(schema: JsonSchema, customName: string): Editor.EditorInfo;
        /**
         * Parses a JSON schema into editor info objects.
         * @param schema The schema to parse.
         * @param nameGenerator A function that generates a name from the resulting editor type, the title and id of the
         * schema and the schemas that the resulting editor info is based on. This can be more than one schema if anyOf
         * or oneOf is used. If the function returns null, the SchemaParser uses its own algorithm to generate a name.
         */
        function parse(schema: JsonSchema, nameGenerator: (editorType: Editor.EditorType, schemaTitle: string | undefined, schemaId: string | undefined, schemas: JsonSchema[]) => string | null): Editor.EditorInfo;
        /**
         * Resolves allOf members by combining all entries of the allOf into one schema.
         * @param schema The schema to be resolved.
         */
        function resolveAllOf(schema: JsonSchema): JsonSchema;
        /**
         * Recursively resolves references in a schema. Can handle recursive schemas.
         * The given object is not modified.
         * @param schema The schema to resolve.
         */
        function resolveReferences(schema: JsonSchema): JsonSchema;
        /**
         * Generate a data type name for a given JSON schema.
         * @param schema The schema to generate the name for.
         */
        function generateName(schema: JsonSchema | {
            title?: string;
            id?: string;
            type?: string;
        }): string;
        /**
         * Merges two or more editor infos together by creating an editor info that only accepts values that satisfy all passed in editor infos.
         * This functions trys to return an editor info of the same type as the first parameter.
         * @param toMerge The editor infos to be merged.
         */
        function mergeEditorInfos(...toMerge: Editor.EditorInfo[]): Editor.EditorInfo;
        /**
         * Compares two editor infos and determines if they are equivalent.
         * @param a The first editor info to compare.
         * @param b The second editor info to compare.
         */
        function editorInfoEquivalent(a: Editor.EditorInfo, b: Editor.EditorInfo): boolean;
    }
    namespace SchemaParser {
        /**
         * Generates a name for the editor info from the available information.
         * @param editorType The type the resulting editor will have.
         * @param schemaTitle The title of the schema, or undefined if the schema has no title.
         * @param schemaId The id of the schema, or undefined if the schema has no id.
         * @param schemas The schemas the editor info was generated from. Can be more than one if an anyOf or oneOf schema was used.
         */
        type NameGenerator = (editorType: Editor.EditorType, schemaTitle: string | undefined, schemaId: string | undefined, schemas: JsonSchema[]) => string | null;
        interface TopLevelType {
            editorType: Editor.EditorType;
            rawType: JsonDataTypeNames;
            convert?: JsonSchema['convert'];
            schema: JsonSchema;
        }
        interface CondensedType {
            editorType: Editor.EditorType;
            convertibles: TopLevelType[];
            condensedFrom: TopLevelType[];
            id?: string;
            title?: string;
        }
    }
}
declare namespace TcHmi.Controls.Helpers {
    /**
     * Base editor class.
     */
    abstract class Editor<T, I extends Editor.EditorInfo = Editor.EditorInfo> {
        #private;
        protected __element: HTMLElement;
        protected __editorInfo: I;
        protected __factory: EditorFactory;
        protected __parentControl: Controls.System.TcHmiControl | null;
        protected __name: string;
        protected readonly __className = "TcHmi_Controls_Helpers_Editor";
        protected __childControls: Set<TcHmi.Controls.System.TcHmiControl>;
        protected __eventDestroyers: DestroyFunction[];
        protected __isEnabled: boolean;
        protected __visibility: 'Visible' | 'Hidden' | 'Collapsed';
        protected __isReadOnly: boolean;
        protected __settings: Partial<Editor.Settings>;
        protected __localizations: Partial<Editor.LocalizableTexts & Editor.Localizables> | undefined;
        protected __localizationSymbols: Map<string, {
            symbol: Symbol<string>;
            destroyWatch: DestroyFunction;
        }>;
        protected readonly __onChangeManager: CallbackManager<(editor: Editor<T, I>, state: Editor.State<T>) => void>;
        readonly onChange: Readonly<{
            add: (callback: (editor: Editor<T, I>, state: Editor.State<T>) => void) => DestroyFunction;
            remove: (callback: (editor: Editor<T, I>, state: Editor.State<T>) => void) => void;
        }>;
        protected readonly __onConfirmManager: CallbackManager<(editor: Editor<T, I>, state: Editor.ValidState<T>) => void>;
        readonly onConfirm: Readonly<{
            add: (callback: (editor: Editor<T, I>, state: Editor.ValidState<T>) => void) => DestroyFunction;
            remove: (callback: (editor: Editor<T, I>, state: Editor.ValidState<T>) => void) => void;
        }>;
        /**
         * Create a new editor.
         * @param __element The element to contain the editor.
         * @param __editorInfo An object containing information about the editor and the type of value to edit.
         * @param __factory An editor factory that will be used to create sub-editors.
         */
        constructor(__element: HTMLElement, __editorInfo: I, __factory: EditorFactory);
        /**
         * Create a new editor for the given editor info.
         * @param element The element to contain the editor.
         * @param editorInfo An object containing information about the editor and the type of value to edit.
         * @param parentControl The control owning the editor.
         * @param localizations A collection of localization symbols to display texts in the editor.
         */
        static create(element: HTMLElement, editorInfo: Editor.EditorInfo, parentControl?: Controls.System.TcHmiControl | null, localizations?: Partial<Editor.LocalizableTexts>): Editor<any, Editor.EditorInfo>;
        /**
         * Calls all event destroyers.
         */
        destroy(): void;
        /**
         * Sets the editorInfo.
         * @param editorInfo The editorInfo to set.
         */
        setEditorInfo(editorInfo: I): void;
        /**
         * Gets the editor info.
         */
        getEditorInfo(): I;
        /**
         * Processes the current editor info.
         */
        protected abstract __processEditorInfo(): void;
        /**
         * Set a new Value.
         * @param value The value to set.
         */
        abstract setValue(value: T | null): void;
        /**
         * Gets the current value.
         */
        getState(): Editor.State<T>;
        /**
         * Gets the current raw value of the editor. This value might be invalid. To get the final actual value, always use getState.
         */
        abstract getRawValue(): any;
        /**
         * Prepares the editor so that the user can immediately start editing,
         * for example by focusing a textbox or opening a combobox.
         */
        startEditing?(): void;
        /**
         * Validates the given value against the specified editor info.
         * @param editorInfo The editor info to validate against.
         * @param value The value to validate.
         */
        static validate(editorInfo: Editor.EditorInfo, value: any): boolean;
        /**
         * Checks the given value for errors against the given editor info.
         * @param editorInfo The editor info to check against.
         * @param value The value to check.
         * @param returnEarly Set to true to return early, instead of finding all errors.
         */
        static checkForErrors(editorInfo: Editor.EditorInfo, value: any, returnEarly?: boolean): Editor.ErrorDetail[];
        /**
         * Enable or disable the editor. Disabled editors are greyed out and cannot be interacted with.
         * @param isEnabled Whether the editor should be enabled or disabled.
         */
        setIsEnabled(isEnabled: boolean): void;
        /**
         * Get whether the editor is enabled or disabled.
         */
        getIsEnabled(): boolean;
        /**
         * Define the editor visibility.
         * @param visibility Visibility
         */
        setVisibility(visibility: 'Visible' | 'Hidden' | 'Collapsed'): void;
        /**
         * Get editor visibility
         */
        getVisibility(): "Visible" | "Hidden" | "Collapsed";
        /**
         * Set the editors read-only status. A read-only editor will display values, but not allow the user to change
         * them.
         * @param isReadOnly Whether the editor should be in read-only mode or not.
         */
        setIsReadOnly(isReadOnly: boolean): void;
        /**
         * Get whether the editor is in read-only mode.
         */
        getIsReadOnly(): boolean;
        /**
         * Set settings for this editor and potential sub-editors. Settings are organized by editor type. Passing in an
         * object that does not contain settings for a specific editor type will not clear potentially existing settings
         * for that editor type.
         * @param settings The settings to apply.
         */
        setSettings<S extends Editor.Settings>(settings: Partial<Editor.EditorSettings & S>): void;
        /**
         * Get the current editor settings.
         */
        getSettings<S extends Editor.Settings = Editor.Settings>(): Partial<Editor.EditorSettings & S>;
        /**
         * Process the editors read-only mode.
         */
        protected abstract __processIsReadOnly(): void;
        /**
         * Builds an error message from the validation errors in an editor state.
         * @param state The state to build the message from.
         * @param maxDepth The maximum depth of errors that should be included in the message.
         */
        protected __buildValidationMessage(state: Editor.State<T>, maxDepth?: number): string;
        /**
         * Sets localizable texts to the given localization symbols.
         * @param texts A collection of localization symbol expressions.
         */
        setLocalizations<L extends Editor.Localizables = Editor.Localizables>(texts: Partial<Editor.LocalizableTexts & L>): void;
        /**
         * Watch the given symbol and call the onChange callback every time it changes with the resolved and formatted symbol value.
         * @param name The name for this symbol. Must be unique across all inheritance layers and further calls for the same localization must use the same name.
         * @param localization The localization to watch.
         * @param onChange The callback that is called with the localized and formatted text as a parameter.
         */
        protected __watchLocalization(name: string, localization: FormattedLocalizable, onChange: (localizedText: string) => void): void;
        /**
         * Destroys the localization watch with the given name, if it exists.
         * @param name The name that was used with __watchLoclalization to start watching the symbol.
         */
        protected __unwatchLocalization(name: string): void;
    }
    namespace Editor {
        type Constructor<T, I extends Editor.EditorInfo = Editor.EditorInfo> = new (element: HTMLElement, editorInfo: I, factory: EditorFactory) => Editor<T, I>;
        type GenericConstructor<E extends Editor<T, I>, T, I extends Editor.EditorInfo = Editor.EditorInfo> = new (element: HTMLElement, editorInfo: I, factory: EditorFactory) => E;
        interface Info<T> {
            type: EditorType;
            schema: JsonSchema;
            name: string;
            defaultValue?: T;
        }
        type EditorType = 'boolean' | 'number' | 'string' | 'time' | 'enum' | 'object' | 'array' | 'tuple' | 'optional' | 'choice' | 'null' | 'invalid';
        type EditorInfo = BooleanEditor.Info | NumberEditor.Info | StringEditor.Info | TimeEditor.Info | EnumEditor.Info | ObjectEditor.Info | ArrayEditor.Info | TupleEditor.Info | OptionalEditor.Info<unknown> | ChoiceEditor.Info | NullEditor.Info | InvalidEditor.Info;
        type State<T> = InvalidState | ValidState<T>;
        interface InvalidState {
            isValid: false;
            errors?: ErrorDetail[];
        }
        interface ValidState<T> {
            isValid: true;
            value: T;
        }
        enum Error {
            ERROR = 1,
            RESTRICTION_ERROR = 10,
            FAILS_ALL_RESTRICTIONS = 11,
            FAILS_THIS_RESTRICTION = 12,
            TYPE_ERROR = 20,
            NOT_A_BOOLEAN = 21,
            NOT_A_NUMBER = 22,
            NOT_A_STRING = 23,
            NOT_AN_OBJECT = 24,
            NOT_AN_ARRAY = 25,
            NOT_NULL = 26,
            BOOLEAN_ERROR = 40,
            NUMBER_ERROR = 60,
            NUMBER_TOO_SMALL = 61,
            NUMBER_TOO_BIG = 62,
            NUMBER_NOT_MULTIPLE_OF = 63,
            NUMBER_NOT_INTEGER = 64,
            NUMBER_NOT_FINITE = 65,
            STRING_ERROR = 80,
            STRING_TOO_SHORT = 81,
            STRING_TOO_LONG = 82,
            STRING_DOES_NOT_MATCH = 83,
            STRING_NOT_DATE_TIME = 84,
            STRING_NOT_TIMESPAN = 85,
            STRING_NOT_EMAIL = 86,
            STRING_NOT_HOSTNAME = 87,
            STRING_NOT_IPV4 = 88,
            STRING_NOT_IPV6 = 89,
            STRING_NOT_URI = 90,
            OBJECT_ERROR = 100,
            OBJECT_HAS_TOO_FEW_PROPERTIES = 101,
            OBJECT_HAS_TOO_MANY_PROPERTIES = 102,
            OBJECT_IS_MISSING_PROPERTY = 103,
            OBJECT_CONTAINS_INVALID_PROPERTY_NAME = 104,
            OBJECT_CONTAINS_INVALID_VALUE = 105,
            OBJECT_HAS_INVALID_PROTOTYPE = 106,
            OBJECT_HAS_INVALID_DEPENDENCY = 107,
            ARRAY_ERROR = 120,
            ARRAY_HAS_TOO_FEW_ITEMS = 121,
            ARRAY_HAS_TOO_MANY_ITEMS = 122,
            ARRAY_CONTAINS_INVALID_VALUE = 123,
            ARRAY_CONTAINS_DUPLICATE_ITEMS = 124,
            ARRAY_HAS_INVALID_PROTOTYPE = 125,
            TUPLE_ERROR = 140,
            ENUM_ERROR = 160,
            ENUM_VALUE_NOT_A_MEMBER = 161,
            OPTIONAL_ERROR = 180,
            OPTIONAL_TEMPORARILY_REQUIRED = 181,
            CHOICE_ERROR = 200,
            DOES_NOT_FIT_ANY_CHOICE = 201,
            DOES_NOT_FIT_THIS_CHOICE = 202
        }
        interface ErrorDetail {
            error: Editor.Error;
            parameters?: any[];
            underlying?: ErrorDetail[];
        }
        interface Settings {
            [editor: string]: Record<string, any>;
        }
        /**
         * Intersection type of all editor-specific settings for base editors.
         */
        type EditorSettings = TextboxBasedEditor.Settings;
        interface Localizables {
            [editor: string]: Record<string, Localizable>;
        }
        /**
         * Intersection type of all editor-specific localizables.
         */
        type LocalizableTexts = {
            /**
             * Localizable texts for error messages when validation of a value fails.
             */
            errors: Partial<{
                [E in Error]: string;
            }>;
            /**
             * Localizable texts to be used in editor popups.
             */
            editorPrompt: Partial<Omit<EditorPrompt.LocalizableTexts, 'editorLocalizations'>>;
            /**
             * Legacy overwrite for localizable texts to be used in array editor popups.
             */
            arrayEditorPrompt: Partial<Omit<EditorPrompt.LocalizableTexts, 'editorLocalizations'>>;
            /**
             * Legacy overwrite for localizable texts to be used in object editor popups.
             */
            objectEditorPrompt: Partial<Omit<EditorPrompt.LocalizableTexts, 'editorLocalizations'>>;
            /**
             * Legacy overwrite for localizable texts to be used in tuple editor popups.
             */
            tupleEditorPrompt: Partial<Omit<EditorPrompt.LocalizableTexts, 'editorLocalizations'>>;
        } & OptionalEditor.LocalizableTexts & ButtonBasedEditor.LocalizableTexts & BooleanEditor.LocalizableTexts & TimeEditor.LocalizableTexts & ChoiceEditor.LocalizableTexts & InvalidEditor.LocalizableTexts & ArrayBasedEditorPane.LocalizableTexts & ObjectEditorPane.LocalizableTexts;
    }
}
declare namespace TcHmi.Controls.Helpers {
    /**
     * Editor that is based on a textbox, like for strings and numbers.
     */
    abstract class TextboxBasedEditor<T, I extends Editor.EditorInfo = Editor.EditorInfo> extends Editor<T, I> {
        protected __textbox: Beckhoff.TcHmiInput;
        protected __settings: Partial<Editor.Settings & TextboxBasedEditor.Settings>;
        /**
         * Create a new textbox based editor.
         * @param element The element to contain the editor.
         * @param editorInfo An object containing information about the editor and the type of value to edit.
         * @param factory An editor factory that will be used to create sub-editors.
         */
        constructor(element: HTMLElement, editorInfo: I, factory: EditorFactory);
        /**
         * Starts editing by setting the focus on the html textbox element.
         */
        startEditing(): void;
        /**
         * DEPRECATED
         * Please use setSettings
         * @param valueNew The new value for autoSelectText.
         * @deprecated Please use setSettings
         */
        setAutoSelectText(valueNew: boolean): void;
        /**
         * DEPRECATED
         * Please use getSettings
         * @deprecated Please use getSettings
         */
        getAutoSelectText(): boolean | undefined;
        /**
         * Event handler for the onTextChanged event of the textbox.
         */
        protected __onTextChanged(): void;
        /**
         * Event handler for the keydown event of the textboxes element.
         * @param event The event that should be handled.
         */
        protected __onKeydown(event: KeyboardEvent): void;
        /**
         * Event handler for the onLocaleChanged event.
         */
        protected __onLocaleChanged(): void;
        /**
         * Update the invalid class and the custom validity of the textbox.
         * @param state The current state of the editor pane, if it's already known. Should be used to avoid a duplicate
         * getState() call, not to pass in a manipulated state.
         */
        protected __updateValidationStatus(state?: Editor.State<T>): state is Editor.ValidState<T>;
        /**
         * Process the editors read-only mode.
         */
        protected __processIsReadOnly(): void;
        /**
         * Set settings for this editor and potential sub-editors. Settings are organized by editor type. Passing in an
         * object that does not contain settings for a specific editor type will not clear potentially existing settings
         * for that editor type.
         * @param settings The settings to apply.
         */
        setSettings<S extends Editor.Settings>(settings: Partial<S & TextboxBasedEditor.Settings>): void;
    }
    namespace TextboxBasedEditor {
        type Settings = {
            textboxBasedEditor: Partial<{
                autoSelectText: boolean;
                autoFocusOut: boolean;
            }>;
        };
    }
}
declare namespace TcHmi.Controls.Helpers {
    /**
     * Editor for numbers.
     */
    class NumberEditor extends TextboxBasedEditor<number | string, NumberEditor.Info> {
        /**
         * Create a new number editor.
         * @param element The element to contain the editor.
         * @param editorInfo An object containing information about the editor and the type of value to edit.
         * @param factory An editor factory that will be used to create sub-editors.
         */
        constructor(element: HTMLElement, editorInfo: NumberEditor.Info, factory: EditorFactory);
        /**
         * Validates the given value against the specified editor info.
         * @param editorInfo The editor info to validate against.
         * @param value The value to validate.
         */
        static validate(editorInfo: NumberEditor.Info, value: any): value is number | string;
        /**
         * Checks the given value for errors against the given editor info.
         * @param editorInfo The editor info to check against.
         * @param value The value to check.
         * @param returnEarly Set to true to return early, instead of finding all errors.
         */
        static checkForErrors(editorInfo: NumberEditor.Info, value: any, returnEarly?: boolean): Editor.ErrorDetail[];
        /**
         * Gets the current value.
         */
        getState(): Editor.State<number | string>;
        /**
         * Processes the current editor info.
         */
        protected __processEditorInfo(): void;
        /**
         * Tests whether the supplied number fits into the given minimum.
         * @param value The number to test.
         * @param minimum The minimum to test against.
         * @param minimum.value The value of the minimum.
         * @param minimum.exclusive Whether a value that is equal to the minimum value should be valid or not.
         */
        protected static __testMinimum(value: number, minimum: {
            value: number;
            exclusive: boolean;
        }): boolean;
        /**
         * Tests whether the supplied number fits into the given maximum.
         * @param value The number to test.
         * @param maximum The maximum to test against.
         * @param maximum.value The value of the maximum.
         * @param maximum.exclusive Whether a value that is equal to the maximum value should be valid or not.
         */
        protected static __testMaximum(value: number, maximum: {
            value: number;
            exclusive: boolean;
        }): boolean;
        /**
         * Set a new Value.
         * @param value The value to set.
         */
        setValue(value: number | string | null): void;
        /**
         * Gets the current raw value of the editor. This value might be invalid and, if it is valid, might differ from the value returned by getState.
         * To get the final actual value, always use getState.
         */
        getRawValue(): string | number;
    }
    namespace NumberEditor {
        interface Info extends Editor.Info<number> {
            type: 'number';
            restrictions: Restriction[];
            specialValues: Set<string>;
        }
        interface Restriction {
            isInteger: boolean;
            multipleOf?: number;
            maximum?: {
                value: number;
                exclusive: boolean;
            };
            minimum?: {
                value: number;
                exclusive: boolean;
            };
        }
    }
}
declare namespace TcHmi.Controls.Helpers {
    /**
     * Editor for strings.
     */
    class StringEditor extends TextboxBasedEditor<string, StringEditor.Info> {
        /**
         * Create a new string editor.
         * @param element The element to contain the editor.
         * @param editorInfo An object containing information about the editor and the type of value to edit.
         * @param factory An editor factory that will be used to create sub-editors.
         */
        constructor(element: HTMLElement, editorInfo: StringEditor.Info, factory: EditorFactory);
        /**
         * Validates the given value against the specified editor info.
         * @param editorInfo The editor info to validate against.
         * @param value The value to validate.
         */
        static validate(editorInfo: StringEditor.Info, value: any): value is string;
        /**
         * Checks the given value for errors against the given editor info.
         * @param editorInfo The editor info to check against.
         * @param value The value to check.
         * @param returnEarly Set to true to return early, instead of finding all errors.
         */
        static checkForErrors(editorInfo: StringEditor.Info, value: any, returnEarly?: boolean): Editor.ErrorDetail[];
        /**
         * Processes the current editor info.
         */
        protected __processEditorInfo(): void;
        /**
         * Set a new Value.
         * @param value The value to set.
         */
        setValue(value: string | null): void;
        /**
         * Gets the current raw value of the editor. This value might be invalid and, if it is valid, might differ from the value returned by getState.
         * To get the final actual value, always use getState.
         */
        getRawValue(): string;
    }
    namespace StringEditor {
        interface Info extends Editor.Info<string> {
            type: 'string';
            restrictions: Restriction[];
        }
        interface Restriction {
            minLength?: number;
            maxLength?: number;
            patterns?: RegExp[];
            format?: JsonSchema['format'];
        }
    }
}
declare namespace TcHmi.Controls.Helpers {
    /**
     * Editor for strings in the date time or timespan format.
     */
    class TimeEditor extends TextboxBasedEditor<string, TimeEditor.Info> {
        protected __container: HTMLDivElement;
        protected __dateTimePicker: Beckhoff.TcHmiDateTimePicker | undefined;
        protected __dateTimeButton: Beckhoff.TcHmiButton | undefined;
        protected __timespanPicker: Beckhoff.TcHmiTimespanPicker | undefined;
        protected __timespanButton: Beckhoff.TcHmiButton | undefined;
        /**
         * Create a new string editor.
         * @param element The element to contain the editor.
         * @param editorInfo An object containing information about the editor and the type of value to edit.
         * @param factory An editor factory that will be used to create sub-editors.
         */
        constructor(element: HTMLElement, editorInfo: TimeEditor.Info, factory: EditorFactory);
        /**
         * Destroys the popup and all its controls.
         */
        destroy(): void;
        /**
         * Validates the given value against the specified editor info.
         * @param editorInfo The editor info to validate against.
         * @param value The value to validate.
         */
        static validate(editorInfo: TimeEditor.Info, value: any): value is string;
        /**
         * Checks the given value for errors against the given editor info.
         * @param editorInfo The editor info to check against.
         * @param value The value to check.
         * @param returnEarly Set to true to return early, instead of finding all errors.
         */
        static checkForErrors(editorInfo: TimeEditor.Info, value: any, returnEarly?: boolean): Editor.ErrorDetail[];
        /**
         * Gets the current value.
         */
        getState(): Editor.State<string>;
        /**
         * Processes the current editor info.
         */
        protected __processEditorInfo(): void;
        /**
         * Update the invalid class and the custom validity of the editor container.
         * @param state The current state of the editor pane, if it's already known. Should be used to avoid a duplicate
         * getState() call, not to pass in a manipulated state.
         */
        protected __updateValidationStatus(state?: Editor.State<string>): state is Editor.ValidState<string>;
        /**
         * Process the editors read-only mode.
         */
        protected __processIsReadOnly(): void;
        /**
         * Set a new Value.
         * @param value The value to set.
         */
        setValue(value: string | null): void;
        /**
         * Gets the current raw value of the editor. This value might be invalid and, if it is valid, might differ from the value returned by getState.
         * To get the final actual value, always use getState.
         */
        getRawValue(): string;
        /**
         * Creates a DateTimePicker and a Button to open it.
         */
        protected __createDateTimeControls(): void;
        /**
         * Creates a TimespanPicker and a Button to open it.
         */
        protected __createTimespanControls(): void;
        /**
         * Event handler for the value changed event of the datetime picker.
         */
        protected __onDateTimeChanged(): void;
        /**
         * Event handler for the pressed event of the datetime button.
         */
        protected __onDateTimeButtonPressed(): void;
        /**
         * Event handler for the value changed event of the timespan picker.
         */
        protected __onTimespanChanged(): void;
        /**
         * Event handler for the pressed event of the timespan button.
         */
        protected __onTimespanButtonPressed(): void;
        /**
         * Sets localizable texts to the given localization symbols.
         * @param texts A collection of localization symbol expressions.
         */
        setLocalizations<L extends Editor.Localizables = Editor.Localizables>(texts: Partial<L & Editor.LocalizableTexts>): void;
        /**
         * Localizes the dateTimeButton
         */
        protected __localizeDateTimeButton(): void;
        /**
         * Localizes the timespanButton
         */
        protected __localizeTimespanButton(): void;
    }
    namespace TimeEditor {
        interface Info extends Editor.Info<string> {
            type: 'time';
            formats: Set<'date-time' | 'timespan'>;
        }
        type LocalizableTexts = {
            timeEditor: Partial<{
                dateTimeButtonTooltip: Localizable;
                timespanButtonTooltip: Localizable;
            }>;
        };
    }
}
declare namespace TcHmi.Controls.Helpers {
    /**
     * Editor that is based on a combobox like for enums and booleans.
     */
    abstract class ComboboxBasedEditor<T, I extends Editor.EditorInfo = Editor.EditorInfo> extends Editor<T, I> {
        protected __combobox: Beckhoff.TcHmiCombobox<T, Beckhoff.TcHmiCombobox.ListItemGeneric<T>[]>;
        /**
         * Create a new combobox based editor.
         * @param element The element to contain the editor.
         * @param editorInfo An object containing information about the editor and the type of value to edit.
         * @param factory An editor factory that will be used to create sub-editors.
         */
        constructor(element: HTMLElement, editorInfo: I, factory: EditorFactory);
        /**
         * Starts editing by opening the drop down.
         */
        startEditing(): void;
        /**
         * Event handler for the onSelectionChanged event of the combobox.
         */
        protected __onSelectionChanged(): void;
        /**
         * Process the editors read-only mode.
         */
        protected __processIsReadOnly(): void;
    }
}
declare namespace TcHmi.Controls.Helpers {
    /**
     * Editor for enums.
     */
    class EnumEditor<T> extends ComboboxBasedEditor<T, EnumEditor.Info<T>> {
        /**
         * Create a new enum editor.
         * @param element The element to contain the editor.
         * @param editorInfo An object containing information about the editor and the type of value to edit.
         * @param factory An editor factory that will be used to create sub-editors.
         */
        constructor(element: HTMLElement, editorInfo: EnumEditor.Info<T>, factory: EditorFactory);
        /**
         * Returns whether the editor contains a valid value for the schema.
         * @param editorInfo The editor info to validate against.
         * @param value The value to validate.
         */
        static validate<T = any>(editorInfo: EnumEditor.Info, value: any): value is T;
        /**
         * Checks the given value for errors against the given editor info.
         * @param editorInfo The editor info to check against.
         * @param value The value to check.
         * @param _returnEarly Set to true to return early, instead of finding all errors.
         */
        static checkForErrors(editorInfo: EnumEditor.Info, value: any, _returnEarly?: boolean): Editor.ErrorDetail[];
        /**
         * Processes the current editor info.
         */
        protected __processEditorInfo(): void;
        /**
         * Set a new Value.
         * @param value The value to set.
         */
        setValue(value: T | null): void;
        /**
         * Gets the current raw value of the editor. This value might be invalid and, if it is valid, might differ from the value returned by getState.
         * To get the final actual value, always use getState.
         */
        getRawValue(): T | null;
    }
    namespace EnumEditor {
        interface Info<T = any> extends Editor.Info<T> {
            type: 'enum';
            members: Map<T, string | undefined>;
        }
    }
}
declare namespace TcHmi.Controls.Helpers {
    /**
     * Editor for booleans.
     */
    class BooleanEditor extends ComboboxBasedEditor<boolean, BooleanEditor.Info> {
        protected __comboboxTexts: {
            false: string;
            true: string;
        };
        /**
         * Create a new boolean editor.
         * @param element The element to contain the editor.
         * @param editorInfo An object containing information about the editor and the type of value to edit.
         * @param factory An editor factory that will be used to create sub-editors.
         */
        constructor(element: HTMLElement, editorInfo: BooleanEditor.Info, factory: EditorFactory);
        /**
         * Validates the given value against the specified editor info.
         * @param _editorInfo The editor info to validate against.
         * @param value The value to validate.
         */
        static validate(_editorInfo: BooleanEditor.Info, value: any): value is boolean;
        /**
         * Checks the given value for errors against the given editor info.
         * @param _editorInfo The editor info to check against.
         * @param value The value to check.
         * @param _returnEarly Set to true to return early, instead of finding all errors.
         */
        static checkForErrors(_editorInfo: BooleanEditor.Info, value: any, _returnEarly?: boolean): Editor.ErrorDetail[];
        /**
         * Processes the current editor info.
         */
        protected __processEditorInfo(): void;
        /**
         * Set a new Value.
         * @param value The value to set.
         */
        setValue(value: boolean | null): void;
        /**
         * Gets the current raw value of the editor. This value might be invalid and, if it is valid, might differ from the value returned by getState.
         * To get the final actual value, always use getState.
         */
        getRawValue(): boolean | null;
        /**
         * Updates the combobox srcData with current texts.
         */
        protected __updateSrcData(): void;
        /**
         * Sets localizable texts to the given localization symbols.
         * @param texts A collection of localization symbol expressions.
         */
        setLocalizations<L extends Editor.Localizables = Editor.Localizables>(texts: Partial<L & Editor.LocalizableTexts>): void;
    }
    namespace BooleanEditor {
        interface Info extends Editor.Info<boolean> {
            type: 'boolean';
        }
        type LocalizableTexts = {
            booleanEditor: Partial<{
                falseText: Localizable;
                trueText: Localizable;
            }>;
        };
    }
}
declare namespace TcHmi.Controls.Helpers {
    /**
     * Editor that is based on a button to open a popup for complex datatypes.
     */
    abstract class ButtonBasedEditor<T, I extends Editor.EditorInfo = Editor.EditorInfo> extends Editor<T, I> {
        protected __container: HTMLDivElement;
        protected __textSpan: HTMLSpanElement;
        protected __button: Beckhoff.TcHmiButton;
        protected __popup?: EditorPrompt<T, I>;
        /**
         * Create a new button based editor.
         * @param element The element to contain the editor.
         * @param editorInfo An object containing information about the editor and the type of value to edit.
         * @param factory An editor factory that will be used to create sub-editors.
         */
        constructor(element: HTMLElement, editorInfo: I, factory: EditorFactory);
        /**
         * Destroys the popup and all its controls.
         */
        destroy(): void;
        /**
         * Event handler for the onPressed event of the button.
         */
        protected __onPressed(): void;
        /**
         * Starts editing by opening the popup.
         */
        startEditing(): void;
        /**
         * Opens the popup for the editor.
         */
        protected abstract openPopup(): Promise<void>;
        /**
         * Process the editors read-only mode.
         */
        protected __processIsReadOnly(): void;
        /**
         * Set settings for this editor and potential sub-editors. Settings are organized by editor type. Passing in an
         * object that does not contain settings for a specific editor type will not clear potentially existing settings
         * for that editor type.
         * @param settings The settings to apply.
         */
        setSettings<S extends Editor.Settings>(settings: Partial<Editor.EditorSettings & S>): void;
        /**
         * Sets localizable texts to the given localization symbols.
         * @param texts A collection of localization symbol expressions.
         */
        setLocalizations<L extends Editor.Localizables = Editor.Localizables>(texts: Partial<L & Editor.LocalizableTexts>): void;
    }
    namespace ButtonBasedEditor {
        type LocalizableTexts = {
            buttonBasedEditor: Partial<{
                buttonTooltip: Localizable;
            }>;
        };
    }
}
declare namespace TcHmi.Controls.Helpers {
    /**
     * Editor for objects.
     */
    class ObjectEditor extends ButtonBasedEditor<Record<string | number | symbol, any>, ObjectEditor.Info> {
        protected __value: Record<string | number | symbol, any>;
        /**
         * Create a new object editor.
         * @param element The element to contain the editor.
         * @param editorInfo An object containing information about the editor and the type of value to edit.
         * @param factory An editor factory that will be used to create sub-editors.
         */
        constructor(element: HTMLElement, editorInfo: ObjectEditor.Info, factory: EditorFactory);
        /**
         * Calls all event destroyers.
         */
        destroy(): void;
        /**
         * Validates the given value against the specified editor info.
         * @param editorInfo The editor info to validate against.
         * @param value The value to validate.
         */
        static validate(editorInfo: ObjectEditor.Info, value: any): value is object;
        /**
         * Checks the given value for errors against the given editor info.
         * @param editorInfo The editor info to check against.
         * @param value The value to check.
         * @param returnEarly Set to true to return early, instead of finding all errors.
         */
        static checkForErrors(editorInfo: ObjectEditor.Info, value: any, returnEarly?: boolean): Editor.ErrorDetail[];
        /**
         * Processes the current editor info.
         */
        protected __processEditorInfo(): void;
        /**
         * Resolves dependencies of an object editor info by merging the dependecies with names contained in knownProperties into the editorInfo. Returns the original editorInfo if no dependecies are matched.
         * @param editorInfo The editor info to resolve.
         * @param knownProperties The properties that are known to exist on the object value.
         */
        static resolveDependencies(editorInfo: ObjectEditor.Info, knownProperties: Set<string>): ObjectEditor.Info | InvalidEditor.Info;
        /**
         * Determines which editor info to use for the given property.
         * @param editorInfo The object editor info containing infos about the given property.
         * @param property The name of the property.
         */
        static getEditorInfoForProperty(editorInfo: ObjectEditor.Info, property: string): Editor.EditorInfo;
        /**
         * Set a new Value.
         * @param value The value to set.
         */
        setValue(value: object | null): void;
        /**
         * Gets the current raw value of the editor. This value might be invalid and, if it is valid, might differ from the value returned by getState.
         * To get the final actual value, always use getState.
         */
        getRawValue(): Record<string | number | symbol, any>;
        /**
         * Opens the popup for the editor.
         */
        protected openPopup(): Promise<void>;
        /**
         * Sets localizable texts to the given localization symbols.
         * @param texts A collection of localization symbol expressions.
         */
        setLocalizations<L extends Editor.Localizables = Editor.Localizables>(texts: Partial<L & Editor.LocalizableTexts>): void;
    }
    namespace ObjectEditor {
        interface Info extends Editor.Info<Record<string | number | symbol, any>> {
            type: 'object';
            properties: Map<string, Editor.EditorInfo>;
            patternProperties?: Map<RegExp, Editor.EditorInfo>;
            additionalProperties: {
                allowed: boolean;
                editorInfo?: Editor.EditorInfo;
            };
            maxProperties?: number;
            minProperties?: number;
            dependencies?: Map<string, ObjectEditor.Info>;
        }
    }
}
declare namespace TcHmi.Controls.Helpers {
    /**
     * Editor pane for objects.
     */
    class ObjectEditorPane extends Editor<object, ObjectEditor.Info> {
        protected __editorTable: HTMLTableElement;
        protected __newPropertyContainer: HTMLDivElement;
        protected __newPropertyTextbox: Beckhoff.TcHmiInput;
        protected __acceptNewPropertyButton: Beckhoff.TcHmiButton;
        protected __cancelNewPropertyButton: Beckhoff.TcHmiButton;
        protected __addPropertyButton: Beckhoff.TcHmiButton;
        protected __removeButtonTooltip: string;
        protected __errorContainer: HTMLDivElement;
        protected __editors: Map<string, ObjectEditorPane.EditorEntry>;
        protected __dependencyOverride: ObjectEditor.Info;
        protected __pauseChangeHandlers: boolean;
        /**
         * Create a new object editor pane.
         * @param element The element to contain the editor pane.
         * @param editorInfo An object containing information about the editor and the type of value to edit.
         * @param factory An editor factory that will be used to create sub-editors.
         */
        constructor(element: HTMLElement, editorInfo: ObjectEditor.Info, factory: EditorFactory);
        /**
         * Calls all event destroyers.
         */
        destroy(): void;
        /**
         * Processes the current editor info.
         */
        protected __processEditorInfo(): void;
        /**
         * Set a new Value.
         * @param value The value to set.
         */
        setValue(value: Dictionary<any> | null): void;
        /**
         * Gets the current raw value of the editor. This value might be invalid and, if it is valid, might differ from the value returned by getState.
         * To get the final actual value, always use getState.
         */
        getRawValue(): Dictionary<any>;
        /**
         * Determines which dependencies should be applied and changes the editors accordingly.
         */
        protected __applyDependencies(): void;
        /**
         * Creates a table row for the given editor info.
         * @param name The name of the property the row should edit.
         * @param editorInfo Info about the editor in the row.
         * @param isAdditional Whether the row describes an additional property that can be removed.
         */
        protected __createEditorRow(name: string, editorInfo: Editor.EditorInfo, isAdditional: boolean): ObjectEditorPane.EditorEntry;
        /**
         * Handler for the change events of the editors.
         * @param editor The editor that changed.
         */
        protected __onEditorChanged(editor: Editor<any>): void;
        /**
         * Creates a handler callback for the pressed event of a remove button.
         * @param name The name of the row to remove.
         */
        protected __getRemoveButtonPressedHandler(name: string): () => void;
        /**
         * Remove a row.
         * @param name The name of the row to remove.
         */
        protected __removeEditorRow(name: string): void;
        /**
         * Handler for the pressed event of the add property button.
         */
        protected __onAddPropertyPressed(): void;
        /**
         * Handler for the text changed event of the new property textbox.
         */
        protected __onNewPropertyTextChanged(): void;
        /**
         * Handler for the pressed event of the accept new property button.
         */
        protected __onAcceptNewPropertyPressed(): void;
        /**
         * Handler for the pressed event of the cancel new property button.
         */
        protected __onCancelNewPropertyPressed(): void;
        /**
         * Clear the new property textbox, hide the new property container and show the add property button.
         */
        protected __cancelNewProperty(): void;
        /**
         * Event handler for the onLocaleChanged event.
         */
        protected __onLocaleChanged(): void;
        /**
         * Update the validation message.
         * @param state The current state of the editor pane, if it's already known. Should be used to avoid a duplicate
         * getState() call, not to pass in a manipulated state.
         */
        protected __updateValidationStatus(state?: Editor.State<object>): state is Editor.ValidState<object>;
        /**
         * Enable or disable the editor. Disabled editors are greyed out and cannot be interacted with.
         * @param isEnabled Whether the editor should be enabled or disabled.
         */
        setIsEnabled(isEnabled: boolean): void;
        /**
         * Process the editors read-only mode.
         */
        protected __processIsReadOnly(): void;
        /**
         * Set settings for this editor and potential sub-editors. Settings are organized by editor type. Passing in an
         * object that does not contain settings for a specific editor type will not clear potentially existing settings
         * for that editor type.
         * @param settings The settings to apply.
         */
        setSettings<S extends Editor.Settings>(settings: Partial<Editor.EditorSettings & S>): void;
        /**
         * Sets localizable texts to the given localization symbols.
         * @param texts A collection of localization symbol expressions.
         */
        setLocalizations<L extends Editor.Localizables = Editor.Localizables>(texts: Partial<L & Editor.LocalizableTexts>): void;
    }
    namespace ObjectEditorPane {
        interface EditorEntry {
            editor: Editor<any>;
            row: HTMLTableRowElement;
            cell: HTMLTableCellElement;
            removeButton?: Beckhoff.TcHmiButton;
            additionalDestroyer?: DestroyFunction;
        }
        type LocalizableTexts = {
            objectEditorPane: Partial<{
                addButtonTooltip: Localizable;
                acceptButtonText: Localizable;
                acceptButtonTooltip: Localizable;
                cancelButtonTooltip: Localizable;
                removeButtonTooltip: Localizable;
            }>;
        };
    }
}
declare namespace TcHmi.Controls.Helpers {
    /**
     * Editor for optional properties of objects of optional items of tuples.
     */
    class OptionalEditor<T> extends Editor<T | undefined, OptionalEditor.Info<T>> {
        protected __container: HTMLDivElement;
        protected __editor: Editor<T>;
        protected __checkbox: Beckhoff.TcHmiCheckbox;
        protected __enteredValue: T | null;
        /**
         * Create a new optional editor.
         * @param element The element to contain the editor.
         * @param editorInfo An object containing information about the editor and the type of value to edit.
         * @param factory An editor factory that will be used to create sub-editors.
         */
        constructor(element: HTMLElement, editorInfo: OptionalEditor.Info<T>, factory: EditorFactory);
        /**
         * Destroys the popup and all its controls.
         */
        destroy(): void;
        /**
         * Sets the editorInfo.
         * @param editorInfo The editorInfo to set.
         */
        setEditorInfo(editorInfo: OptionalEditor.Info<T>): void;
        /**
         * Processes the current editor info.
         */
        protected __processEditorInfo(): void;
        /**
         * Process the editors read-only mode.
         */
        protected __processIsReadOnly(): void;
        /**
         * Set settings for this editor and potential sub-editors. Settings are organized by editor type. Passing in an
         * object that does not contain settings for a specific editor type will not clear potentially existing settings
         * for that editor type.
         * @param settings The settings to apply.
         */
        setSettings<S extends Editor.Settings>(settings: Partial<Editor.EditorSettings & S>): void;
        /**
         * Handler for the toggleStateChanged event of the checkbox
         */
        protected __onToggleStateChanged(): void;
        /**
         * Handler for the change event of the editor.
         * @param _editor The editor that changed.
         * @param state The state of the editor that changed.
         */
        protected __onEditorChanged(_editor: Editor<T>, state: Editor.State<T>): void;
        /**
         * Handler for the confirm event of the editor.
         * @param _editor The editor that was confirmed.
         * @param state The state of the editor that was confirmed.
         */
        protected __onEditorConfirmed(_editor: Editor<T>, state: Editor.ValidState<T>): void;
        /**
         * Validates the given value against the specified editor info.
         * @param editorInfo The editor info to validate against.
         * @param value The value to validate.
         */
        static validate<T = any>(editorInfo: OptionalEditor.Info<T>, value: any): value is T;
        /**
         * Checks the given value for errors against the given editor info.
         * @param editorInfo The editor info to check against.
         * @param value The value to check.
         * @param returnEarly Set to true to return early, instead of finding all errors.
         */
        static checkForErrors<T = any>(editorInfo: OptionalEditor.Info<T>, value: any, returnEarly?: boolean): Editor.ErrorDetail[];
        /**
         * Set a new Value.
         * @param value The value to set.
         */
        setValue(value: T | null | undefined): void;
        /**
         * Gets the current raw value of the editor. This value might be invalid and, if it is valid, might differ from the value returned by getState.
         * To get the final actual value, always use getState.
         */
        getRawValue(): any;
        /**
         * Sets localizable texts to the given localization symbols.
         * @param texts A collection of localization symbol expressions.
         */
        setLocalizations<L extends Editor.Localizables = Editor.Localizables>(texts: Partial<L & Editor.LocalizableTexts>): void;
    }
    namespace OptionalEditor {
        interface Info<T> extends Editor.Info<T> {
            type: 'optional';
            editorInfo: Exclude<Editor.EditorInfo, OptionalEditor.Info<T>>;
            temporarilyRequired: boolean;
            valueIfDisabled?: T;
        }
        type LocalizableTexts = {
            optionalEditor: Partial<{
                optionalCheckboxTooltip: Localizable;
            }>;
        };
    }
}
declare namespace TcHmi.Controls.Helpers {
    /**
     * Editor for arrays.
     */
    class ArrayEditor extends ButtonBasedEditor<any[], ArrayEditor.Info> {
        protected __value: any[];
        /**
         * Create a new array editor.
         * @param element The element to contain the editor.
         * @param editorInfo An object containing information about the editor and the type of value to edit.
         * @param factory An editor factory that will be used to create sub-editors.
         */
        constructor(element: HTMLElement, editorInfo: ArrayEditor.Info, factory: EditorFactory);
        /**
         * Calls all event destroyers.
         */
        destroy(): void;
        /**
         * Validates the given value against the specified editor info.
         * @param editorInfo The editor info to validate against.
         * @param value The value to validate.
         */
        static validate(editorInfo: ArrayEditor.Info, value: any): value is any[];
        /**
         * Checks the given value for errors against the given editor info.
         * @param editorInfo The editor info to check against.
         * @param value The value to check.
         * @param returnEarly Set to true to return early, instead of finding all errors.
         */
        static checkForErrors(editorInfo: ArrayEditor.Info, value: any, returnEarly?: boolean): Editor.ErrorDetail[];
        /**
         * Processes the current editor info.
         */
        protected __processEditorInfo(): void;
        /**
         * Set a new Value.
         * @param value The value to set.
         */
        setValue(value: any[] | null): void;
        /**
         * Gets the current raw value of the editor. This value might be invalid and, if it is valid, might differ from the value returned by getState.
         * To get the final actual value, always use getState.
         */
        getRawValue(): any[];
        /**
         * Opens the popup for the editor.
         */
        protected openPopup(): Promise<void>;
        /**
         * Sets localizable texts to the given localization symbols.
         * @param texts A collection of localization symbol expressions.
         */
        setLocalizations<L extends Editor.Localizables = Editor.Localizables>(texts: Partial<L & Editor.LocalizableTexts>): void;
    }
    namespace ArrayEditor {
        interface Info extends Editor.Info<any[]> {
            type: 'array';
            items: Editor.EditorInfo;
            minItems?: number;
            maxItems?: number;
            uniqueItems: boolean;
        }
    }
}
declare namespace TcHmi.Controls.Helpers {
    /**
     * Editor Pane for arrays or tuples.
     */
    abstract class ArrayBasedEditorPane<I extends ArrayEditor.Info | TupleEditor.Info> extends Editor<any[], I> {
        protected __editorTable: HTMLTableElement;
        protected __addItemButton: Beckhoff.TcHmiButton;
        protected __upButton: Beckhoff.TcHmiButton;
        protected __downButton: Beckhoff.TcHmiButton;
        protected __removeButtonTooltip: string;
        protected __errorContainer: HTMLDivElement;
        protected __editors: ArrayBasedEditorPane.EditorEntry[];
        protected __selectedEditorEntry: ArrayBasedEditorPane.EditorEntry | null;
        protected __pauseChangeHandlers: boolean;
        /**
         * Create a new array based editor pane.
         * @param element The element to contain the editor pane.
         * @param editorInfo An object containing information about the editor and the type of value to edit.
         * @param factory An editor factory that will be used to create sub-editors.
         */
        constructor(element: HTMLElement, editorInfo: I, factory: EditorFactory);
        /**
         * Calls all event destroyers.
         */
        destroy(): void;
        /**
         * Gets the current raw value of the editor. This value might be invalid and, if it is valid, might differ from the value returned by getState.
         * To get the final actual value, always use getState.
         */
        getRawValue(): any[];
        /**
         * Creates a table row for the given editor info.
         * @param editorInfo Info about the editor in the row.
         * @param removable Set to false if you don't want the editor row to be removable.
         */
        protected __createEditorRow(editorInfo: Editor.EditorInfo, removable?: boolean): ArrayBasedEditorPane.EditorEntry;
        /**
         * Handler for the change events of the editors.
         * @param editor The editor that changed.
         */
        protected __onEditorChanged(editor: Editor<any, Editor.EditorInfo>): void;
        /**
         * Handles the change events of the editors.
         * @param _editor The editor that changed.
         */
        protected __handleOnEditorChanged(_editor: Editor<any, Editor.EditorInfo>): void;
        /**
         * Creates a handler callback for the pressed event of a remove button.
         * @param entry The entry describing the row to remove.
         */
        protected __getRemoveButtonPressedHandler(entry: ArrayBasedEditorPane.EditorEntry): () => void;
        /**
         * Remove a row.
         * @param editorEntry The entry describing the row to remove.
         */
        protected __removeEditorRow(editorEntry: ArrayBasedEditorPane.EditorEntry): void;
        /**
         * Mark the row element of the given editor entry as selected and set this.__selectedEditorEntry.
         * @param editorEntry The editor entry to select. Pass null to reset the selection.
         */
        protected __selectItem(editorEntry: ArrayBasedEditorPane.EditorEntry | null): void;
        /**
         * Disables or enables the up and down buttons depending on the index of the selected item.
         * @param selectedIndex The index of the selected item.
         */
        protected __updateMoveButtons(selectedIndex: number): void;
        /**
         * Handler for the click event of the editor element.
         * @param event The event object.
         */
        protected __onClick(event: MouseEvent): void;
        /**
         * Handler for the pressed event of the add item button.
         */
        protected __onAddItemPressed(): void;
        /**
         * Adds a new table row with an editor for a new item
         */
        protected abstract __addItem(): void;
        /**
         * Handler for the pressed event of the up button.
         */
        protected __onUpPressed(): void;
        /**
         * Handler for the pressed event of the down button.
         */
        protected __onDownPressed(): void;
        /**
         * Event handler for the onLocaleChanged event.
         */
        protected __onLocaleChanged(): void;
        /**
         * Update the validation message.
         * @param state The current state of the editor pane, if it's already known. Should be used to avoid a duplicate
         * getState() call, not to pass in a manipulated state.
         */
        protected __updateValidationStatus(state?: Editor.State<any[]>): state is Editor.ValidState<any[]>;
        /**
         * Enable or disable the editor. Disabled editors are greyed out and cannot be interacted with.
         * @param isEnabled Whether the editor should be enabled or disabled.
         */
        setIsEnabled(isEnabled: boolean): void;
        /**
         * Process the editors read-only mode.
         */
        protected __processIsReadOnly(): void;
        /**
         * Set settings for this editor and potential sub-editors. Settings are organized by editor type. Passing in an
         * object that does not contain settings for a specific editor type will not clear potentially existing settings
         * for that editor type.
         * @param settings The settings to apply.
         */
        setSettings<S extends Editor.Settings>(settings: Partial<Editor.EditorSettings & S>): void;
        /**
         * Sets localizable texts to the given localization symbols.
         * @param texts A collection of localization symbol expressions.
         */
        setLocalizations<L extends Editor.Localizables = Editor.Localizables>(texts: Partial<L & Editor.LocalizableTexts>): void;
    }
    namespace ArrayBasedEditorPane {
        interface EditorEntry {
            editor: Editor<any>;
            row: HTMLTableRowElement;
            cell: HTMLTableCellElement;
            removeButton?: Beckhoff.TcHmiButton;
            removeDestroyer?: DestroyFunction;
        }
        type LocalizableTexts = {
            arrayBasedEditorPane: Partial<{
                addButtonTooltip: Localizable;
                upButtonTooltip: Localizable;
                downButtonTooltip: Localizable;
                removeButtonTooltip: Localizable;
            }>;
        };
    }
}
declare namespace TcHmi.Controls.Helpers {
    /**
     * Editor Pane for arrays.
     */
    class ArrayEditorPane extends ArrayBasedEditorPane<ArrayEditor.Info> {
        /**
         * Create a new array editor pane.
         * @param element The element to contain the editor pane.
         * @param editorInfo An object containing information about the editor and the type of value to edit.
         * @param factory An editor factory that will be used to create sub-editors.
         */
        constructor(element: HTMLElement, editorInfo: ArrayEditor.Info, factory: EditorFactory);
        /**
         * Processes the current editor info.
         */
        protected __processEditorInfo(): void;
        /**
         * Set a new Value.
         * @param value The value to set.
         */
        setValue(value: any[] | null): void;
        /**
         * Adds a new table row with an editor for a new item
         */
        protected __addItem(): void;
    }
}
declare namespace TcHmi.Controls.Helpers {
    /**
     * Editor for tuples.
     */
    class TupleEditor extends ButtonBasedEditor<any[], TupleEditor.Info> {
        protected __value: any[];
        /**
         * Create a new array editor.
         * @param element The element to contain the editor.
         * @param editorInfo An object containing information about the editor and the type of value to edit.
         * @param factory An editor factory that will be used to create sub-editors.
         */
        constructor(element: HTMLElement, editorInfo: TupleEditor.Info, factory: EditorFactory);
        /**
         * Calls all event destroyers.
         */
        destroy(): void;
        /**
         * Validates the given value against the specified editor info.
         * @param editorInfo The editor info to validate against.
         * @param value The value to validate.
         */
        static validate(editorInfo: TupleEditor.Info, value: any): value is any[];
        /**
         * Checks the given value for errors against the given editor info.
         * @param editorInfo The editor info to check against.
         * @param value The value to check.
         * @param returnEarly Set to true to return early, instead of finding all errors.
         */
        static checkForErrors(editorInfo: TupleEditor.Info, value: any, returnEarly?: boolean): Editor.ErrorDetail[];
        /**
         * Processes the current editor info.
         */
        protected __processEditorInfo(): void;
        /**
         * Set a new Value.
         * @param value The value to set.
         */
        setValue(value: any[] | null): void;
        /**
         * Gets the current raw value of the editor. This value might be invalid and, if it is valid, might differ from the value returned by getState.
         * To get the final actual value, always use getState.
         */
        getRawValue(): any[];
        /**
         * Opens the popup for the editor.
         */
        protected openPopup(): Promise<void>;
        /**
         * Sets localizable texts to the given localization symbols.
         * @param texts A collection of localization symbol expressions.
         */
        setLocalizations<L extends Editor.Localizables = Editor.Localizables>(texts: Partial<L & Editor.LocalizableTexts>): void;
    }
    namespace TupleEditor {
        interface Info extends Editor.Info<any[]> {
            type: 'tuple';
            items: Editor.EditorInfo[];
            additionalItems: {
                allowed: boolean;
                editorInfo?: Editor.EditorInfo;
            };
            minItems?: number;
            maxItems?: number;
            uniqueItems: boolean;
        }
    }
}
declare namespace TcHmi.Controls.Helpers {
    /**
     * Editor pane for tuples.
     */
    class TupleEditorPane extends ArrayBasedEditorPane<TupleEditor.Info> {
        /**
         * Create a new tuple editor pane.
         * @param element The element to contain the editor pane.
         * @param editorInfo An object containing information about the editor and the type of value to edit.
         * @param factory An editor factory that will be used to create sub-editors.
         */
        constructor(element: HTMLElement, editorInfo: TupleEditor.Info, factory: EditorFactory);
        /**
         * Processes the current editor info.
         */
        protected __processEditorInfo(): void;
        /**
         * Set a new Value.
         * @param value The value to set.
         */
        setValue(value: any[] | null): void;
        /**
         * Marks optional editors as temporarily required.
         */
        protected __markRequired(): void;
        /**
         * Handles the change events of the editors.
         * @param editor The editor that was changed.
         */
        protected __handleOnEditorChanged(editor: Editor<any>): void;
        /**
         * Adds a new table row with an editor for a new item
         */
        protected __addItem(): void;
        /**
         * Remove a row.
         * @param editorEntry The entry describing the row to remove.
         */
        protected __removeEditorRow(editorEntry: ArrayBasedEditorPane.EditorEntry): void;
        /**
         * Disables or enables the up and down buttons depending on the index of the selected item.
         * @param selectedIndex The index of the selected item.
         */
        protected __updateMoveButtons(selectedIndex: number): void;
    }
}
declare namespace TcHmi.Controls.Helpers {
    /**
     * Editor that is used if the schema demands a value to be null. Mostly useful in ChoiceEditors.
     */
    class NullEditor extends Editor<null, NullEditor.Info> {
        protected __onChangeTriggered: boolean;
        /**
         * Create a new null editor.
         * @param element The element to contain the editor.
         * @param editorInfo An object containing information about the editor and the type of value to edit.
         * @param factory An editor factory that will be used to create sub-editors.
         */
        constructor(element: HTMLElement, editorInfo: NullEditor.Info, factory: EditorFactory);
        /**
         * Validates the given value against the specified editor info.
         * @param _editorInfo The editor info to validate against.
         * @param value The value to validate.
         */
        static validate(_editorInfo: NullEditor.Info, value: any): value is null;
        /**
         * Checks the given value for errors against the given editor info.
         * @param _editorInfo The editor info to check against.
         * @param value The value to check.
         * @param _returnEarly Set to true to return early, instead of finding all errors.
         */
        static checkForErrors(_editorInfo: NullEditor.Info, value: any, _returnEarly?: boolean): Editor.ErrorDetail[];
        /**
         * Processes the current editor info.
         */
        protected __processEditorInfo(): void;
        /**
         * Process the editors read-only mode.
         */
        protected __processIsReadOnly(): void;
        /**
         * Set a new Value.
         * @param _value The value to set.
         */
        setValue(_value: null): void;
        /**
         * Gets the current raw value of the editor. This value might be invalid and, if it is valid, might differ from the value returned by getState.
         * To get the final actual value, always use getState.
         */
        getRawValue(): null;
    }
    namespace NullEditor {
        interface Info extends Editor.Info<null> {
            type: 'null';
        }
    }
}
declare namespace TcHmi.Controls.Helpers {
    /**
     * Editor that is used if a JSON schema does not allow any possible value.
     */
    class InvalidEditor extends Editor<any, InvalidEditor.Info> {
        #private;
        protected __value: any;
        protected __textContainer: HTMLElement;
        /**
         * Create a new invalid editor.
         * @param element The element to contain the editor.
         * @param editorInfo An object containing information about the editor and the type of value to edit.
         * @param factory An editor factory that will be used to create sub-editors.
         */
        constructor(element: HTMLElement, editorInfo: InvalidEditor.Info, factory: EditorFactory);
        /**
         * Validates the given value against the specified editor info.
         * @param _editorInfo The editor info to validate against.
         * @param _value The value to validate.
         */
        static validate(_editorInfo: InvalidEditor.Info, _value: any): _value is any;
        /**
         * Checks the given value for errors against the given editor info.
         * @param _editorInfo The editor info to check against.
         * @param _value The value to check.
         * @param _returnEarly Set to true to return early, instead of finding all errors.
         */
        static checkForErrors(_editorInfo: InvalidEditor.Info, _value: any, _returnEarly?: boolean): Editor.ErrorDetail[];
        /**
         * Processes the current editor info.
         */
        protected __processEditorInfo(): void;
        /**
         * Process the editors read-only mode.
         */
        protected __processIsReadOnly(): void;
        /**
         * Set a new Value.
         * @param value The value to set.
         */
        setValue(value: any | null): void;
        /**
         * Gets the current raw value of the editor. This value might be invalid and, if it is valid, might differ from the value returned by getState.
         * To get the final actual value, always use getState.
         */
        getRawValue(): any;
        /**
         * Sets localizable texts to the given localization symbols.
         * @param texts A collection of localization symbol expressions.
         */
        setLocalizations<L extends Editor.Localizables = Editor.Localizables>(texts: Partial<L & Editor.LocalizableTexts>): void;
    }
    namespace InvalidEditor {
        interface Info extends Editor.Info<never> {
            type: 'invalid';
        }
        type LocalizableTexts = {
            invalidEditor: Partial<{
                invalidSchemaText: Localizable;
            }>;
        };
    }
}
declare namespace TcHmi.Controls.Helpers {
    /**
     * Editor for types that offer a choice. Usually used for anyOf or oneOf schemas.
     */
    class ChoiceEditor extends Editor<any, ChoiceEditor.Info> {
        protected __value: any;
        protected __container: HTMLDivElement;
        protected __combobox: Beckhoff.TcHmiCombobox<unknown>;
        protected __editors: Map<Editor.EditorType, {
            editor: Editor<any>;
            container: HTMLDivElement;
        }>;
        protected __activeEditor: {
            editor: Editor<any>;
            container: HTMLDivElement;
        } | null;
        /**
         * Create a new choice editor.
         * @param element The element to contain the editor.
         * @param editorInfo An object containing information about the editor and the type of value to edit.
         * @param factory An editor factory that will be used to create sub-editors.
         */
        constructor(element: HTMLElement, editorInfo: ChoiceEditor.Info, factory: EditorFactory);
        /**
         * Create a choice editor info that allows any type.
         * @param ref Can be passed in to be filled out.
         */
        static createAnyEditorInfo(ref?: Editor.Info<any>): ChoiceEditor.Info;
        /**
         * Create a choice editor info that allows any type.
         */
        static getAnyChoices(): Exclude<ChoiceEditor.Info['choices'], undefined>;
        /**
         * Validates the given value against the specified editor info.
         * @param editorInfo The editor info to validate against.
         * @param value The value to validate.
         */
        static validate(editorInfo: ChoiceEditor.Info, value: any): value is any;
        /**
         * Checks the given value for errors against the given editor info.
         * @param editorInfo The editor info to check against.
         * @param value The value to check.
         * @param returnEarly Set to true to return early, instead of finding all errors.
         */
        static checkForErrors(editorInfo: ChoiceEditor.Info, value: any, returnEarly?: boolean): Editor.ErrorDetail[];
        /**
         * Starts editing by opening the drop down of the type selection combobox.
         */
        startEditing(): void;
        /**
         * Processes the current editor info.
         */
        protected __processEditorInfo(): void;
        /**
         * Handler for the selectionChanged event of the combobox
         */
        protected __onSelectionChanged(): void;
        /**
         * Handler for the change event of the editor.
         * @param editor The editor that changed.
         * @param state The state of the editor that changed.
         */
        protected __onEditorChanged(editor: Editor<any>, state: Editor.State<any>): void;
        /**
         * Handler for the confirm event of the editor.
         * @param _editor The editor that was confirmed.
         * @param state The state of the editor that was confirmed.
         */
        protected __onEditorConfirmed(_editor: Editor<any>, state: Editor.ValidState<any>): void;
        /**
         * Set a new Value.
         * @param value The value to set.
         */
        setValue(value: any | null): void;
        /**
         * Gets the current value.
         */
        getState(): Editor.State<any>;
        /**
         * Gets the current raw value of the editor. This value might be invalid and, if it is valid, might differ from the value returned by getState.
         * To get the final actual value, always use getState.
         */
        getRawValue(): any;
        /**
         * Process the editors read-only mode.
         */
        protected __processIsReadOnly(): void;
        /**
         * Set settings for this editor and potential sub-editors. Settings are organized by editor type. Passing in an
         * object that does not contain settings for a specific editor type will not clear potentially existing settings
         * for that editor type.
         * @param settings The settings to apply.
         */
        setSettings<S extends Editor.Settings>(settings: Partial<Editor.EditorSettings & S>): void;
        /**
         * Sets localizable texts to the given localization symbols.
         * @param texts A collection of localization symbol expressions.
         */
        setLocalizations<L extends Editor.Localizables = Editor.Localizables>(texts: Partial<L & Editor.LocalizableTexts>): void;
    }
    namespace ChoiceEditor {
        interface Info extends Editor.Info<any> {
            type: 'choice';
            choices?: Exclude<Editor.EditorInfo, ChoiceEditor.Info>[];
        }
        type LocalizableTexts = {
            choiceEditor: Partial<{
                comboboxText: Localizable;
            }>;
        };
    }
}
declare namespace TcHmi.Controls.Helpers {
    /**
     * Editor for historized symbols.
     */
    class HistorizedSymbolEditor extends ButtonBasedEditor<string, StringEditor.Info> {
        #private;
        protected __value: string;
        protected __stringEditor: StringEditor;
        protected __popupHeader: string;
        protected __settings: Partial<Editor.Settings & HistorizedSymbolEditor.Settings>;
        protected __localizations: Partial<Editor.LocalizableTexts & HistorizedSymbolEditor.LocalizableTexts> | undefined;
        /**
         * Create a new historized symbol editor.
         * @param element The element to contain the editor.
         * @param editorInfo An object containing information about the editor and the type of value to edit.
         * @param factory An editor factory that will be used to create sub-editors.
         */
        constructor(element: HTMLElement, editorInfo: StringEditor.Info, factory: EditorFactory);
        /**
         * Calls all event destroyers.
         */
        destroy(): void;
        /**
         * Opens the popup for the editor.
         */
        protected openPopup(): Promise<void>;
        /**
         * Set a new Value.
         * @param value The value to set.
         */
        setValue(value: string | null): void;
        /**
         * Gets the current raw value of the editor. This value might be invalid and, if it is valid, might differ from the value returned by getState.
         * To get the final actual value, always use getState.
         */
        getRawValue(): string;
        /**
         * Processes the current editor info.
         */
        protected __processEditorInfo(): void;
        /**
         * Set settings for this editor and potential sub-editors. Settings are organized by editor type. Passing in an
         * object that does not contain settings for a specific editor type will not clear potentially existing settings
         * for that editor type.
         * @param settings The settings to apply.
         */
        setSettings<S extends Editor.Settings>(settings: Partial<S & Editor.EditorSettings & HistorizedSymbolEditor.Settings>): void;
        /**
         * Sets localizable texts to the given localization symbols.
         * @param texts A collection of localization symbol expressions.
         */
        setLocalizations<L extends Editor.Localizables = Editor.Localizables>(texts: Partial<L & Editor.LocalizableTexts & HistorizedSymbolEditor.LocalizableTexts>): void;
    }
    namespace HistorizedSymbolEditor {
        type LocalizableTexts = {
            historizedSymbolEditor: Partial<{
                promptHeader: Localizable;
                nameColumnHeader: Localizable;
                dataTypeColumnHeader: Localizable;
                recordingColumnHeader: Localizable;
                intervalColumnHeader: Localizable;
                maxEntriesColumnHeader: Localizable;
                yesText: Localizable;
                noText: Localizable;
            }>;
        };
        type Settings = {
            historizedSymbolEditor: Partial<{
                domain: string;
            }>;
        };
    }
}
declare namespace TcHmi.Controls.Helpers {
    /**
     * Editor pane for historized symbols.
     */
    class HistorizedSymbolEditorPane extends Editor<string, StringEditor.Info> {
        #private;
        protected __value: string;
        protected __tableHeaders: {
            name: HTMLTableCellElement;
            dataType: HTMLTableCellElement;
            recording: HTMLTableCellElement;
            interval: HTMLTableCellElement;
            maxEntries: HTMLTableCellElement;
        };
        protected __tableBody: HTMLTableSectionElement;
        protected __historizedSymbols: Symbol<HistorizedSymbolEditorPane.HistorizedSymbolList> | null;
        protected __destroyWatch: DestroyFunction | null;
        protected __localizations: Partial<Editor.LocalizableTexts & HistorizedSymbolEditor.LocalizableTexts> | undefined;
        protected __settings: Partial<Editor.Settings & HistorizedSymbolEditor.Settings>;
        protected __localizedCells: {
            yes: {
                text: string;
                elements: Set<HTMLTableCellElement>;
            };
            no: {
                text: string;
                elements: Set<HTMLTableCellElement>;
            };
        };
        /**
         * Create a new historized symbol editor pane.
         * @param element The element to contain the editor pane.
         * @param editorInfo An object containing information about the editor and the type of value to edit.
         * @param factory An editor factory that will be used to create sub-editors.
         */
        constructor(element: HTMLElement, editorInfo: StringEditor.Info, factory: EditorFactory);
        /**
         * Calls all event destroyers.
         */
        destroy(): void;
        /**
         * Sets a new Value.
         * @param value The value to set.
         */
        setValue(value: string | null): void;
        /**
         * Gets the current raw value of the editor. This value might be invalid and, if it is valid, might differ from the value returned by getState.
         * To get the final actual value, always use getState.
         */
        getRawValue(): string;
        /**
         * Processes the current editor info.
         */
        protected __processEditorInfo(): void;
        /**
         * Process the editors read-only mode.
         */
        protected __processIsReadOnly(): void;
        /**
         * Callback method that handles the symbol watch of the list of historized symbols.
         * @param data The data returned be the watch.
         */
        protected __onHistorizedSymbolsWatch(data: Symbol.IServerWatchResultObject<HistorizedSymbolEditorPane.HistorizedSymbolList>): void;
        /**
         * Event handler for the click event of table rows.
         * @param event The event to handle.
         */
        protected __onRowClick(event: MouseEvent): void;
        /**
         * Event handler for the double click event of table rows.
         * @param event The event to handle.
         */
        protected __onRowDoubleClick(event: MouseEvent): void;
        /**
         * Selects the given row.
         * @param row The row to select.
         */
        protected __select(row: HTMLTableRowElement | null): void;
        /**
         * Set settings for this editor and potential sub-editors. Settings are organized by editor type. Passing in an
         * object that does not contain settings for a specific editor type will not clear potentially existing settings
         * for that editor type.
         * @param settings The settings to apply.
         */
        setSettings<S extends Editor.Settings>(settings: Partial<S & Editor.EditorSettings & HistorizedSymbolEditor.Settings>): void;
        /**
         * Sets localizable texts to the given localization symbols.
         * @param texts A collection of localization symbol expressions.
         */
        setLocalizations<L extends Editor.Localizables = Editor.Localizables>(texts: Partial<L & Editor.LocalizableTexts & HistorizedSymbolEditor.LocalizableTexts>): void;
    }
    namespace HistorizedSymbolEditorPane {
        type HistorizedSymbolList = Dictionary<{
            interval: string;
            maxEntries: number;
            recordingEnabled: boolean;
            rowLimit: number;
        }>;
    }
}
declare namespace TcHmi.Controls.Helpers {
    /**
     * Base editor prompt.
     */
    class EditorPrompt<T, I extends Editor.EditorInfo = Editor.EditorInfo> extends Helpers.OkCancelPrompt<T> {
        protected __editorPane: Editor<T, I>;
        /**
         * Creates a new EditorPrompt instance.
         * @param editorInfo Information about the array editor.
         * @param editorConstructor The constructor of the editor pane this prompt should host.
         * @param factory An editor factory that will be used to create sub-editors.
         */
        constructor(editorInfo: I, editorConstructor: Editor.Constructor<T, I>, factory: EditorFactory);
        /**
         * Destroys the popup and all its controls.
         * @param force If true, child controls will be removed from the parent control before destruction, to ensure destruction in case of keepAlive === true.
         */
        destroy(force?: boolean): void;
        /**
         * Sets the header text of the popup.
         * @param text The text to use in the popups header.
         */
        setHeaderText(text: string): void;
        /**
         * Sets the editorInfo.
         * @param editorInfo The editorInfo to set.
         */
        setEditorInfo(editorInfo: I): void;
        /**
         * Set the editors read-only status. A read-only editor will display values, but not allow the user to change
         * them.
         * @param isReadOnly Whether the editor should be in read-only mode or not.
         */
        setIsReadOnly(isReadOnly: boolean): void;
        /**
         * Set settings for this editor and potential sub-editors.
         * @param settings The settings to apply.
         */
        setSettings<S extends Editor.Settings>(settings: Partial<Editor.EditorSettings & S>): void;
        /**
         * Set a new Value. Returns whether the given value is valid.
         * @param value The value to set.
         */
        setValue(value: T | null): void;
        /**
         * Handler for the change event of the editor pane.
         * @param _editor The editor that changed.
         * @param state The changed editors state.
         */
        protected __onEditorChanged(_editor: Editor<T, I>, state: Editor.State<T>): void;
        /**
         * Handler for the confirm event of the editor pane.
         * @param _editor The editor that was confirmed.
         * @param _state The confirmed editors state.
         */
        protected __onEditorConfirmed(_editor: Editor<T, I>, _state: Editor.ValidState<T>): void;
        /**
         * Performs the action for the OK button, i.e. calling prompt.answer().
         */
        protected __ok(): void;
        /**
         * Sets localizable texts to the given localization symbols.
         * @param texts A collection of localization symbol expressions.
         */
        setLocalizations<L extends Editor.Localizables = Editor.Localizables>(texts: Partial<EditorPrompt.LocalizableTexts<L>>): void;
    }
    namespace EditorPrompt {
        interface LocalizableTexts<L extends Editor.Localizables = Editor.Localizables> extends Helpers.OkCancelPrompt.LocalizableTexts {
            editorLocalizations: Partial<L & Editor.LocalizableTexts>;
        }
    }
}
declare namespace TcHmi.Controls.Helpers {
    /**
     * Editor prompt for objects.
     */
    class ObjectEditorPrompt extends EditorPrompt<object, ObjectEditor.Info> {
        /**
         * Creates a new ObjectEditorPrompt instance.
         * @param editorInfo Information about the object editor.
         * @param factory An editor factory that will be used to create sub-editors.
         */
        constructor(editorInfo: ObjectEditor.Info, factory: EditorFactory);
    }
}
declare namespace TcHmi.Controls.Helpers {
    /**
     * Editor prompt for arrays.
     */
    class ArrayEditorPrompt extends EditorPrompt<any[], ArrayEditor.Info> {
        /**
         * Creates a new ArrayEditorPrompt instance.
         * @param editorInfo Information about the array editor.
         * @param factory An editor factory that will be used to create sub-editors.
         */
        constructor(editorInfo: ArrayEditor.Info, factory: EditorFactory);
    }
}
declare namespace TcHmi.Controls.Helpers {
    /**
     * Editor prompt for tuples.
     */
    class TupleEditorPrompt extends EditorPrompt<any[], TupleEditor.Info> {
        /**
         * Creates a new TupleEditorPrompt instance.
         * @param editorInfo Information about the array editor.
         * @param factory An editor factory that will be used to create sub-editors.
         */
        constructor(editorInfo: TupleEditor.Info, factory: EditorFactory);
    }
}
//# sourceMappingURL=TcHmiJsonEditors.d.ts.map