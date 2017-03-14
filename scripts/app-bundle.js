define('app',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var App = (function () {
        function App() {
        }
        App.prototype.configureRouter = function (config, router) {
            this.router = router;
            config.title = 'Rock Paper Tracer';
            config.map([
                {
                    route: ['', 'home'],
                    name: 'home',
                    moduleId: 'modules/home/home',
                    href: 'home',
                    nav: 0
                },
                {
                    route: 'char/:id?',
                    name: 'character',
                    moduleId: 'modules/character/character',
                    href: 'character',
                    nav: false
                }
            ]);
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

define('modules/character/character',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Character = (function () {
        function Character() {
            this.name = "not defined";
        }
        Character.prototype.activate = function (params) {
            this.name = params.id;
        };
        return Character;
    }());
    exports.Character = Character;
});

define('modules/home/home',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Home = (function () {
        function Home() {
            this.header = 'This is Header';
            this.content = 'This is content';
        }
        Home.prototype.updateContent = function (ev) {
            var txt = ev.srcElement.innerHTML.split(' ');
            this.header = txt[0];
            this.content = txt[1];
        };
        return Home;
    }());
    exports.Home = Home;
});

define('text!app.html', ['module'], function(module) { module.exports = "<template>\n    <router-view></router-view>\n</template>\n"; });
define('text!modules/character/character.html', ['module'], function(module) { module.exports = "<template>\n    <require from=\"./character.css\"></require>\n    <h1>${name}</h1>\n</template>"; });
define('text!modules/character/character.css', ['module'], function(module) { module.exports = "h1 {\n  color: orangered; }\n"; });
define('text!modules/home/home.html', ['module'], function(module) { module.exports = "<template>\n    <require from=\"./home.css\"></require>\n    <h1>${header}</h1>\n    <p>${content}</p>\n    <button  id=\"btn\" click.delegate='updateContent($event)' >Oliver Linnarsson</button>\n    <button  id=\"btn\" click.delegate='updateContent($event)' >Johan Parö</button>\n    <button  id=\"btn\" click.delegate='updateContent($event)' >Kim Ytteberg</button>\n</template>"; });
define('text!modules/home/home.css', ['module'], function(module) { module.exports = "h1 {\n  color: orangered; }\n\n.lol {\n  color: mediumseagreen; }\n"; });
//# sourceMappingURL=app-bundle.js.map