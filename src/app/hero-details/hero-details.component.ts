import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Hero } from '../hero.model';
import { HeroService } from '../hero.service';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.css'],
  providers: [HeroService]
})
export class HeroDetailsComponent implements OnInit {
  heroKey: string = null;
  heroToDisplay;

  constructor(private route: ActivatedRoute, private router: Router, private location: Location, private heroService: HeroService) {}

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.heroKey = (urlParameters["$key"]);
      console.log(this.heroKey);
    });

    this.heroToDisplay = this.heroService.findHero(this.heroKey);

    this.heroService.findHero(this.heroKey).subscribe(dataLastEmittedFromObserver => {
      this.heroToDisplay = dataLastEmittedFromObserver;
      console.log(this.heroToDisplay);
    })
  }
}
