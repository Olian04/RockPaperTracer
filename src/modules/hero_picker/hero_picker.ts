function capitalizeFirstLetter(s) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

interface Hero {
  name: string,
  counters: string[],
  counteredBy?: string[]
}

export class Home {
    heroData: Hero[] = [ 
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
  ]

  attached() {
    this.generateCounters();
    console.log("Attached!")
  }

  generateCounters() {
    let heroData = this.heroData;
      heroData.forEach(function(hero: Hero) {
          hero.counteredBy = [];
          heroData.forEach(function(counter: Hero) {
              if (counter.counters.indexOf(hero.name) >= 0) {
                  hero.counteredBy.push(counter.name);
              }
          });
      });
      this.heroData = heroData;
  }

  getHeroInfo(heroName: string): Hero {
      for(let i = 0; i < this.heroData.length; i++) {
          if(this.heroData[i].name === heroName) {
              return this.heroData[i];
          }
      }
      return {name: heroName, counters: [], counteredBy: []} as Hero;
  }

  targetHero(event: MouseEvent) {
      let srcElem = event.srcElement;
      while (!srcElem.classList.contains("hero_box")) {
          // If you mouse over the text element of the hero_box, we need to dig pack up the hirarcy untill we find the actuall box_element
          srcElem = event.srcElement.parentElement;
      }
      let heroes = document.getElementsByClassName("hero_box");
      let clickedHero = this.getHeroInfo(srcElem.id);
      if (clickedHero.counters === []) {
        console.log("Failed to retreive counter data for: " + clickedHero.name);
      }
      for (let i = 0; i < heroes.length; i++) {
          heroes[i].className = "hero_box"; // Reset
          if (heroes[i].id === clickedHero.name) {
              heroes[i].className += " targeted";
          } else if (clickedHero.counters.indexOf(heroes[i].id) >= 0) {
              heroes[i].className += " bad_pick";
          } else if (clickedHero.counteredBy && clickedHero.counteredBy.indexOf(heroes[i].id) >= 0) {
              heroes[i].className += " good_pick";
          } else {
              heroes[i].className += " neutral_pick";
          }
      }
  }

  untargetHero() {
      let heroes = document.getElementsByClassName("hero_box");
      for (let i = 0; i < heroes.length; i++) {
          heroes[i].className = "hero_box"; // Reset
      }
  }
}