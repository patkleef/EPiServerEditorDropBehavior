(function (tinymce) {
    tinymce.create("tinymce.plugins.dropcontentplugin",
    {
        initialized: false,
        init: function (ed) {
            var convertToDomElement = function (inputString) {
                var tempParentElement = document.createElement("div");
                tempParentElement.innerHTML = inputString;
                return tempParentElement.firstChild;
            }

            ed.onBeforeExecCommand.add(function (editor, command, ui, value, cancellationToken) {
                if (command !== "mceInsertContent") {
                    return null;
                }

                var node = convertToDomElement(value);
                if (node && node.nodeName === "A") {
                    var hrefValue = node.getAttribute("href");
                    if (hrefValue === "#contact") {
                        //Cancel current execution
                        cancellationToken.terminate = true;

                        //Schedule new execution
                        setTimeout(function (newValue) {
                            editor.execCommand("mceInsertContent", false, newValue);
                        }.bind(this, node.innerText));

                        //Return false in order to stop processing
                        return false;
                    }
                }
            });
        }
    });
    tinymce.PluginManager.add("dropcontentplugin", tinymce.plugins.dropcontentplugin);
})(tinymce, false);