define([
    "dojo",
    "dojo/_base/lang",
    "epi/dependency"
],
function (
    dojo,
    lang,
    dependency
) {
    return dojo.declare("alloy.ContactPageConverter", null, {
        store: null,

        constructor: function (params) {
            dojo.mixin(this, params);
        },

        registerConverter: function (registry) {
            registry.registerConverter("site.models.pages.contactpage",
                "site.models.pages.contactpage.link", this);
        },

        convert: function (sourceDataType, targetDataType, data) {
            this.store = this.store || dependency.resolve('epi.storeregistry').get('contactpagestore');
            if (targetDataType === "site.models.pages.contactpage.link") {
                return dojo.when(this.store.query({ id: data.contentLink }), function (data) {
                    return { url: "#contact", text: data.data };
                });
            }
        }
    });
});