define('app',["require", "exports"], function (require, exports) {
    "use strict";
    var App = (function () {
        function App() {
            this.message = 'Hello World!';
        }
        return App;
    }());
    exports.App = App;
});

define('environment',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = {
        debug: true,
        testing: true
    };
});

define('main',["require", "exports", './environment'], function (require, exports, environment_1) {
    "use strict";
    Promise.config({
        warnings: {
            wForgottenReturn: false
        }
    });
    function configure(aurelia) {
        aurelia.use
            .standardConfiguration()
            .feature('resources');
        if (environment_1.default.debug) {
            aurelia.use.developmentLogging();
        }
        if (environment_1.default.testing) {
            aurelia.use.plugin('aurelia-testing');
        }
        aurelia.start().then(function () { return aurelia.setRoot(); });
    }
    exports.configure = configure;
});

define('resources/index',["require", "exports"], function (require, exports) {
    "use strict";
    function configure(config) {
    }
    exports.configure = configure;
});

define('resources/elements/editorfactory',["require", "exports"], function (require, exports) {
    "use strict";
    var EditorFactory = (function () {
        function EditorFactory() {
        }
        EditorFactory.prototype.createEditor = function (domElement, options, services) {
            requirejs.config({ paths: { 'vs': '../node_modules/monaco-editor/dev/vs' } });
            return new Promise(function (resolve, reject) {
                requirejs(['vs/editor/editor.main'], function (_) {
                    resolve(monaco.editor.create(domElement, options, services));
                });
            });
        };
        return EditorFactory;
    }());
    exports.EditorFactory = EditorFactory;
});

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('resources/elements/monaco-editor',["require", "exports", 'aurelia-framework', './editorfactory'], function (require, exports, aurelia_framework_1, editorfactory_1) {
    "use strict";
    var MonacoEditor = (function () {
        function MonacoEditor(element, editorFactory) {
            this.editorFactory = editorFactory;
            this.element = element;
        }
        MonacoEditor.prototype.attached = function () {
            return this.editorFactory.createEditor(this.element.children[0], this.options);
        };
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', Object)
        ], MonacoEditor.prototype, "options", void 0);
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', Object)
        ], MonacoEditor.prototype, "value", void 0);
        MonacoEditor = __decorate([
            aurelia_framework_1.customElement('monaco-editor'), 
            __metadata('design:paramtypes', [Element, editorfactory_1.EditorFactory])
        ], MonacoEditor);
        return MonacoEditor;
    }());
    exports.MonacoEditor = MonacoEditor;
});

define('text!app.html', ['module'], function(module) { module.exports = "<template>\n  <require from=\"resources/elements/monaco-editor\"></require>\n  <monaco-editor options.bind=\"{language:'javascript', value:'console.log(42)'}\"/>  \n</template>"; });
define('text!resources/elements/monaco-editor.html', ['module'], function(module) { module.exports = "<template>\r\n    <div id=\"container\" style=\"width:800px;height:600px;border:1px solid grey\"></div>\r\n</template>"; });
//# sourceMappingURL=app-bundle.js.map