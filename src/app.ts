import {RouterConfiguration, Router} from 'aurelia-router';

export class App {
  router;  //This enshures that Typescript doesnt freak out about "this.router" not existing for "App"
  configureRouter(config: RouterConfiguration, router: Router) {
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
  }
}
