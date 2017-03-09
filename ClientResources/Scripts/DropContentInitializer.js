define([
    "dojo/_base/declare",
    "epi",
    "epi/_Module",
    "epi/routes",
    "epi/dependency",
    "epi/shell/conversion/ObjectConverterRegistry",
    "alloy/ContactPageConverter"
],

function (
    declare,
    epi,
    _Module,
    routes,
    dependency,
    ObjectConverterRegistry,
    ContactPageConverter

) {
    return declare([_Module], {

        initialize: function () {
            this.inherited(arguments);

            var converterRegistry = ObjectConverterRegistry;
            var converter = new ContactPageConverter();
            converter.registerConverter(converterRegistry);

            var registry = dependency.resolve("epi.storeregistry");
            registry.create("contactpagestore", this._getRestPath("contactpagestore"));
        },

        _getRestPath: function (name) {
            return routes.getRestPath({ moduleArea: "app", storeName: name });
        }
    });
});