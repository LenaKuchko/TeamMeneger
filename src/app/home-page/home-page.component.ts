import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { Hero } from '../hero.model';
import { FirebaseListObservable } from 'angularfire2/database';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  providers:[HeroService]
})
export class HomePageComponent implements OnInit {
  heroes: FirebaseListObservable<any[]>;
  heroesToDisplay;
  constructor(private router: Router, private heroService: HeroService) { }

  ngOnInit() {
    this.heroes = this.heroService.getHeroes();
    // console.log(this.heroes);
    this.heroService.getHeroes().subscribe(dataLastEmittedFromObserver => {
      this.heroesToDisplay = dataLastEmittedFromObserver;
      console.log(this.heroesToDisplay);
    })
  }

  goToHeroDetailPage(clickedHero){
    this.router.navigate(['heroes', clickedHero.$key]);
  }

}
