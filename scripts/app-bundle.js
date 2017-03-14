define('app',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var App = (function () {
        function App() {
            this.header = 'This is Header';
            this.content = 'This is content';
        }
        App.prototype.updateContent = function (ev) {
            var txt = ev.srcElement.innerHTML.split(' ');
            this.header = txt[0];
            this.content = txt[1];
        };
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

define('main',["require", "exports", "./environment"], function (require, exports, environment_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
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
    Object.defineProperty(exports, "__esModule", { value: true });
    function configure(config) {
    }
    exports.configure = configure;
});

define('text!app.html', ['module'], function(module) { module.exports = "<template>\n    <require from=\"./app.css\"></require>\n    <h1>${header}</h1>\n    <p>${content}</p>\n    <button  id=\"btn\" click.delegate='updateContent($event)' >Oliver Linnarsson</button>\n    <button  id=\"btn\" click.delegate='updateContent($event)' >Johan Parö</button>\n    <button  id=\"btn\" click.delegate='updateContent($event)' >Kim Ytteberg</button>\n</template>\n"; });
define('text!app.css', ['module'], function(module) { module.exports = "h1 {\n  color: orangered; }\n\n.lol {\n  color: mediumseagreen; }\n"; });
//# sourceMappingURL=app-bundle.js.map