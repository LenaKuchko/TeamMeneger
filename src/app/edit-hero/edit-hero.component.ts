import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../hero.model';
import { HeroService } from '../hero.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-hero',
  templateUrl: './edit-hero.component.html',
  styleUrls: ['./edit-hero.component.css'],
  providers: [HeroService]
})
export class EditHeroComponent implements OnInit {
  @Input() selectedHero;
  currentRoute: string = this.router.url;

  constructor(private heroService: HeroService, private router: Router) { }

  ngOnInit() {
  }

  beginUpdatingHero(heroToUpdate){
    this.heroService.updateHero(heroToUpdate);
    this.router.navigate(['']);
  }
}
