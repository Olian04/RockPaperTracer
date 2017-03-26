import {RouterConfiguration, Router} from 'aurelia-router';

export class App {
  router: Router;  //This enshures that Typescript doesnt freak out about "this.router" not existing for "App"
  configureRouter(config: RouterConfiguration, router: Router) {
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
  }
  logoClick() {
    this.router.navigate('');
  }
}
