define('app',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var App = (function () {
        function App() {
        }
        App.prototype.configureRouter = function (config, router) {
            this.router = router;
            config.title = 'RockPaperTracer';
            config.map([
                {
                    route: '',
                    name: 'hero_picker',
                    moduleId: 'modules/hero_picker/hero_picker',
                    href: 'hero_picker'
                },
                {
                    route: 'hero/:name?',
                    name: 'hero_info',
                    moduleId: 'modules/hero_info/hero_info',
                    href: 'hero_info'
                },
                {
                    route: 'vote',
                    name: 'vote',
                    moduleId: 'modules/vote/vote',
                    href: 'vote'
                }
            ]);
        };
        App.prototype.logoClick = function () {
            this.router.navigate('');
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

define('modules/demo/demo',["require", "exports"], function (require, exports) {
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

define('modules/hero_info/hero_info',["require", "exports"], function (require, exports) {
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

define('modules/hero_picker/hero_picker',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function capitalizeFirstLetter(s) {
        return s.charAt(0).toUpperCase() + s.slice(1);
    }
    var Home = (function () {
        function Home() {
            this.heroData = [
                {
                    name: "ana",
                    counters: [
                        "lucio",
                        "mercy",
                        "zenyatta"
                    ]
                },
                {
                    name: "bastion",
                    counters: [
                        "mercy",
                        "reinhardt",
                        "winston"
                    ]
                },
                {
                    name: "d.Va",
                    counters: [
                        "pharah",
                        "reinhardt",
                        "widowmaker"
                    ]
                },
                {
                    name: "genji",
                    counters: [
                        "bastion",
                        "mercy",
                        "torbjorn"
                    ]
                },
                {
                    name: "hanzo",
                    counters: [
                        "bastion",
                        "torbjorn",
                        "widowmaker"
                    ]
                },
                {
                    name: "junkrat",
                    counters: [
                        "bastion",
                        "mei",
                        "torbjorn"
                    ]
                },
                {
                    name: "lucio",
                    counters: [
                        "d.Va",
                        "reaper",
                        "torbjorn"
                    ]
                },
                {
                    name: "mcCree",
                    counters: [
                        "reaper",
                        "tracer",
                        "winston"
                    ]
                },
                {
                    name: "mei",
                    counters: [
                        "genji",
                        "winston",
                        "tracer"
                    ]
                },
                {
                    name: "mercy",
                    counters: [
                        "reaper",
                        "zarya",
                        "junkrat"
                    ]
                },
                {
                    name: "pharah",
                    counters: [
                        "bastion",
                        "junkrat",
                        "mei"
                    ]
                },
                {
                    name: "reaper",
                    counters: [
                        "bastion",
                        "mei",
                        "winston"
                    ]
                },
                {
                    name: "reinhardt",
                    counters: [
                        "soldier-76",
                        "torbjorn",
                        "widowmaker"
                    ]
                },
                {
                    name: "roadhog",
                    counters: [
                        "pharah",
                        "reinhardt",
                        "tracer"
                    ]
                },
                {
                    name: "soldier-76",
                    counters: [
                        "mercy",
                        "pharah",
                        "torbjorn"
                    ]
                },
                {
                    name: "sombra",
                    counters: [
                        "lucio",
                        "reinhardt",
                        "genji"
                    ]
                },
                {
                    name: "symmetra",
                    counters: [
                        "bastion",
                        "d.Va",
                        "reinhardt"
                    ]
                },
                {
                    name: "torbjorn",
                    counters: [
                        "genji",
                        "lucio",
                        "tracer"
                    ]
                },
                {
                    name: "tracer",
                    counters: [
                        "bastion",
                        "mercy",
                        "widowmaker"
                    ]
                },
                {
                    name: "widowmaker",
                    counters: [
                        "bastion",
                        "torbjorn",
                        "pharah"
                    ]
                },
                {
                    name: "winston",
                    counters: [
                        "genji",
                        "zenyatta",
                        "widowmaker"
                    ]
                },
                {
                    name: "zarya",
                    counters: [
                        "d.Va",
                        "genji",
                        "winston"
                    ]
                },
                {
                    name: "zenyatta",
                    counters: [
                        "d.Va",
                        "roadhog",
                        "winston"
                    ]
                }
            ];
        }
        Home.prototype.attached = function () {
            this.generateCounters();
            console.log("Attached!");
        };
        Home.prototype.generateCounters = function () {
            var heroData = this.heroData;
            heroData.forEach(function (hero) {
                hero.counteredBy = [];
                heroData.forEach(function (counter) {
                    if (counter.counters.indexOf(hero.name) >= 0) {
                        hero.counteredBy.push(counter.name);
                    }
                });
            });
            this.heroData = heroData;
        };
        Home.prototype.getHeroInfo = function (heroName) {
            for (var i = 0; i < this.heroData.length; i++) {
                if (this.heroData[i].name === heroName) {
                    return this.heroData[i];
                }
            }
            return { name: heroName, counters: [], counteredBy: [] };
        };
        Home.prototype.targetHero = function (event) {
            var heroes = document.getElementsByClassName("hero_box");
            var clickedHero = this.getHeroInfo(event.srcElement.id);
            if (clickedHero.counters === []) {
                console.log("Failed to retreive counter data for: " + clickedHero.name);
            }
            for (var i = 0; i < heroes.length; i++) {
                heroes[i].className = "hero_box";
                if (heroes[i].id === clickedHero.name) {
                    heroes[i].className += " targeted";
                }
                else if (clickedHero.counters.indexOf(heroes[i].id) >= 0) {
                    heroes[i].className += " bad_pick";
                }
                else if (clickedHero.counteredBy && clickedHero.counteredBy.indexOf(heroes[i].id) >= 0) {
                    heroes[i].className += " good_pick";
                }
                else {
                    heroes[i].className += " neutral_pick";
                }
            }
        };
        Home.prototype.untargetHero = function () {
            var heroes = document.getElementsByClassName("hero_box");
            for (var i = 0; i < heroes.length; i++) {
                heroes[i].className = "hero_box";
            }
        };
        return Home;
    }());
    exports.Home = Home;
});

define('modules/vote/vote',["require", "exports"], function (require, exports) {
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

define('text!app.html', ['module'], function(module) { module.exports = "<template>\n    <require from=\"./app.css\"></require>\n    <div id=\"heading\" click.delegate=\"logoClick()\">\n        <h1>Rock Paper</h1>\n        <img src=\"../../../img/LogoTracer.png\" />\n    </div>\n    <router-view></router-view>\n</template>\n"; });
define('text!app.css', ['module'], function(module) { module.exports = "@font-face {\n  font-family: 'BigNoodle';\n  src: url(\"../../../font/big_noodle_titling_oblique.ttf\"); }\n\n* {\n  font-family: 'BigNoodle'; }\n\n#heading {\n  position: relative;\n  width: 50%;\n  left: 20%;\n  display: flex;\n  margin-bottom: 10px;\n  text-align: center;\n  cursor: pointer; }\n  #heading h1 {\n    position: relative;\n    left: 30%;\n    top: 50%;\n    font-size: 6rem; }\n  #heading img {\n    position: relative;\n    display: inline-block;\n    width: 200px;\n    height: 140px;\n    left: 30%;\n    padding-top: 5%; }\n"; });
define('text!modules/demo/demo.html', ['module'], function(module) { module.exports = "<template>\n    <require from=\"./demo.css\"></require>\n    <h1>${header}</h1>\n    <p>${content}</p>\n    <button  id=\"btn\" click.delegate='updateContent($event)' >Oliver Linnarsson</button>\n    <button  id=\"btn\" click.delegate='updateContent($event)' >Johan Parö</button>\n    <button  id=\"btn\" click.delegate='updateContent($event)' >Kim Ytteberg</button>\n</template>"; });
define('text!modules/demo/demo.css', ['module'], function(module) { module.exports = "h1 {\n  color: orangered; }\n\n.lol {\n  color: mediumseagreen; }\n"; });
define('text!modules/hero_info/hero_info.html', ['module'], function(module) { module.exports = "<template>\n    <require from=\"./hero_info.css\"></require>\n    <h1>${header}</h1>\n    <p>${content}</p>\n    <button  id=\"btn\" click.delegate='updateContent($event)' >Oliver Linnarsson</button>\n    <button  id=\"btn\" click.delegate='updateContent($event)' >Johan Parö</button>\n    <button  id=\"btn\" click.delegate='updateContent($event)' >Kim Ytteberg</button>\n</template>"; });
define('text!modules/hero_info/hero_info.css', ['module'], function(module) { module.exports = ".lol {\n  color: mediumseagreen; }\n"; });
define('text!modules/hero_picker/hero_picker.html', ['module'], function(module) { module.exports = "<template id=\"wrapper\">\n    <require from=\"./hero_picker.css\"></require>\n    <h1 id=\"prompt\" >Pick a hero to counter:</h1>\n    <div id=\"hero_selector\" mouseleave.trigger=\"untargetHero()\">\n        <div repeat.for=\"hero of heroData\" \n                id=\"${hero.name}\" \n                class=\"hero_box\" \n                mouseover.delegate=\"targetHero($event)\" \n                style=\"background-image: url('../../../img/CuteSprayAvatars-${hero.name}.png')\">\n            <p>${hero.name}</p>\n        </div>\n    </div>\n    <div id=\"counter_status\">\n        <div class=\"good_pick\"><p>Counter Pick</p></div>\n        <div class=\"neutral_pick\"><p>Neutral Pick</p></div>\n        <div class=\"bad_pick\"><p>Bad Pick<p></div>\n    </div>\n</template>"; });
define('text!modules/vote/vote.html', ['module'], function(module) { module.exports = "<template>\n    <require from=\"./vote.css\"></require>\n    <h1>${header}</h1>\n    <p>${content}</p>\n    <button  id=\"btn\" click.delegate='updateContent($event)' >Oliver Linnarsson</button>\n    <button  id=\"btn\" click.delegate='updateContent($event)' >Johan Parö</button>\n    <button  id=\"btn\" click.delegate='updateContent($event)' >Kim Ytteberg</button>\n</template>"; });
define('text!modules/hero_picker/hero_picker.css', ['module'], function(module) { module.exports = "#wrapper {\n  position: relative;\n  align-items: center;\n  justify-content: center;\n  width: 100%; }\n\n#prompt {\n  position: relative;\n  background-color: rgba(169, 169, 169, 0.3);\n  width: 50%;\n  left: 25%;\n  margin-bottom: 10px;\n  border-color: azure;\n  border-width: 1.5px;\n  border-radius: 10px;\n  border-style: outset;\n  text-align: center; }\n\n#hero_selector {\n  position: relative;\n  width: 70%;\n  height: 100%;\n  left: 15%;\n  display: flex;\n  flex-flow: row wrap;\n  align-items: center;\n  justify-content: center; }\n\n.hero_box {\n  position: relative;\n  height: 150px;\n  width: 100px;\n  transform: skew(-10deg, 0);\n  background-color: dodgerblue;\n  border-color: azure;\n  border-width: 1.5px;\n  border-radius: 10px;\n  border-style: outset;\n  margin-left: 10px;\n  margin-bottom: 10px;\n  background-repeat: no-repeat;\n  background-size: 100%;\n  cursor: pointer; }\n  .hero_box p {\n    position: relative;\n    font-size: 2rem;\n    bottom: -50%;\n    text-align: center; }\n  .hero_box :hover {\n    opacity: 0.8; }\n\n#counter_status {\n  position: relative;\n  width: 50%;\n  height: 100%;\n  left: 25%;\n  color: black;\n  display: flex;\n  flex-flow: row wrap;\n  align-items: center;\n  justify-content: center; }\n  #counter_status div {\n    position: relative;\n    border-color: azure;\n    border-width: 1.5px;\n    border-radius: 10px;\n    border-style: outset;\n    height: 40px;\n    width: 30%;\n    text-align: center; }\n    #counter_status div p {\n      position: relative;\n      font-size: 2rem;\n      top: -70%; }\n\n.targeted {\n  background-color: honeydew; }\n\n.good_pick {\n  background-color: palegreen; }\n\n.neutral_pick {\n  background-color: darkgrey;\n  opacity: 0.3; }\n\n.bad_pick {\n  background-color: orangered; }\n\n#widowmaker > p {\n  font-size: 1.3rem;\n  bottom: -62%; }\n\n#soldier-76 > p {\n  font-size: 1.6rem;\n  bottom: -57%; }\n"; });
define('text!modules/vote/vote.css', ['module'], function(module) { module.exports = ".lol {\n  color: mediumseagreen; }\n"; });
//# sourceMappingURL=app-bundle.js.map