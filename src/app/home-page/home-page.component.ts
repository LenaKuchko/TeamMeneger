import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { Hero } from '../hero.model';
import { FirebaseListObservable } from 'angularfire2/database';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  providers:[HeroService]
})
export class HomePageComponent implements OnInit {
  heroes: FirebaseListObservable<any[]>;
  heroesToDisplay;
  filterCategory: string = "allHeroes";
  currentRoute: string = this.router.url;
  constructor(private router: Router, private route: ActivatedRoute, private location: Location, private heroService: HeroService) { }

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

  // onChange(optionFromMenu){
  //   // this.filterCategory = optionFromMenu;
  //   // this.heroService.serchByCategory(input).subscribe(dataLastEmittedFromObserver => {
  //   //   this.heroesToDisplay = dataLastEmittedFromObserver;
  //   //   console.log(this.heroesToDisplay);
  //   // })
  // }
}
