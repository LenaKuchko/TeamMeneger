import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { HeroDetailsComponent } from './hero-details/hero-details.component';
import { NewHeroComponent } from './new-hero/new-hero.component';
import { AboutComponent } from './about/about.component';


const appRoutes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'heroes/:$key',
    component: HeroDetailsComponent
  },
  {
    path: 'admin',
    component: NewHeroComponent
  },
  {
    path: 'filter-hero',
    component: HomePageComponent
  },
  {
    path: 'about',
    component: AboutComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
