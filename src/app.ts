import {RouterConfiguration, AppRouter} from 'aurelia-router';

export class App {
  router; //This enshures that Typescript doesnt freak out about "this.router" not existing for "App"
  configureRouter(config: RouterConfiguration, router: AppRouter) {
    this.router = router;
    config.title = 'Rock Paper Tracer';
    config.map([
      { route: ['', 'home'],       name: 'home',       moduleId: 'modules/home/home' }
    ]);
  }
}
