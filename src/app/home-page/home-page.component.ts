import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { Hero } from '../hero.model';
import { FirebaseListObservable } from 'angularfire2/database';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { FilterPipe } from '../filter.pipe';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  providers:[HeroService]
})
export class HomePageComponent implements OnInit {
  heroes: FirebaseListObservable<any[]>;
  heroesToDisplay;
  heroToDelete;
  heroKey: string = null;
  filterByCategory: string = "allHeroes";
  currentRoute: string = this.router.url;
  constructor(private router: Router, private route: ActivatedRoute, private location: Location, private heroService: HeroService) { }

  ngOnInit() {
    this.heroes = this.heroService.getHeroes();
    this.heroService.getHeroes().subscribe(dataLastEmittedFromObserver => {
      this.heroesToDisplay = dataLastEmittedFromObserver;
      console.log("OnInit", this.heroesToDisplay);
    })
  }

  goToHeroDetailPage(clickedHero){
    this.router.navigate(['heroes', clickedHero.$key]);
  }

  deleteHero(heroToDelete){
    console.log(heroToDelete);
    this.heroService.findHero(heroToDelete.$key).subscribe(dataLastEmittedFromObserver => {
      this.heroToDelete = dataLastEmittedFromObserver;
      console.log(this.heroToDelete);
      this.heroService.deleteHeroFromDB(this.heroToDelete);
    });
    this.router.navigate(['']);
  }

  onChange(optionFromMenu){
    this.filterByCategory = optionFromMenu;
    console.log(optionFromMenu);
    // this.heroService.serchByCategory(input).subscribe(dataLastEmittedFromObserver => {
    //   this.heroesToDisplay = dataLastEmittedFromObserver;
    //   console.log(this.heroesToDisplay);
    // })
  }
}
