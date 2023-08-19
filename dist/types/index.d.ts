export namespace CustomInputs {
    export { AutocompleteInput as autocomplete };
    export namespace toggle {
        export { type };
        export let schema: any[];
        export { comp as component };
        export { props };
        export let features: any[];
    }
    export namespace tags { }
    export namespace hasMany { }
    export namespace grid { }
    export namespace subform { }
    export namespace daterange { }
    export namespace currency { }
    export { ImageInput as image };
    export { DynamicInput as dynamic };
    export { MultipleInput as multiple };
}
export namespace Pluggable {
    function install(Vue: any): void;
}
declare const AutocompleteInput: import("@formkit/core").FormKitTypeDefinition;
declare const ImageInput: import("@formkit/core").FormKitTypeDefinition;
declare const DynamicInput: import("@formkit/core").FormKitTypeDefinition;
declare const MultipleInput: import("@formkit/core").FormKitTypeDefinition;
export {};
