import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero.model';
import { Router } from '@angular/router';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-new-hero',
  templateUrl: './new-hero.component.html',
  styleUrls: ['./new-hero.component.css'],
  providers: [HeroService]
})
export class NewHeroComponent implements OnInit {

  constructor(private heroService: HeroService, private router: Router) { }

  ngOnInit() {
  }
  submitForm(name: string, category: string, description: string, health: number, attack: number, stars: number, urlImage: string, worldSaveTimes: number) {
    var newHero: Hero = new Hero(name, category, description, health, attack, stars, urlImage, worldSaveTimes);
    this.heroService.addHeroToDB(newHero);

    this.router.navigate(['']);
  }

}
