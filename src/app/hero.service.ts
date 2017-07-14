import { Injectable } from '@angular/core';
import { Hero } from './hero.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class HeroService {
  heroes: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
  this.heroes = database.list('heroes');
}

getHeroes(){
  return this.heroes;
}

findHero(heroKey: string){
  return this.database.object('heroes/'+ heroKey);
}

addHeroToDB(newHero: Hero){
  this.heroes.push(newHero);
}

updateHero(heroToUpdate){
  var hero = this.findHero(heroToUpdate.$key);
     hero.update({name: heroToUpdate.name,
                  category: heroToUpdate.category,
                  description: heroToUpdate.description,
                  health: heroToUpdate.health,
                  attack: heroToUpdate.attack,
                  stars: heroToUpdate.stars,
                  worldSaveTimes: heroToUpdate.worldSaveTimes
                });
              }
deleteHeroFromDB(heroToDelete){
  var hero = this.findHero(heroToDelete.$key);
     hero.remove();
}
}
