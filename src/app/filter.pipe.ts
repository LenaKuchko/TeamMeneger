import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from './hero.model';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {
  transform(input: Hero[], desireCategory: string): Hero[] {
    console.log(input);
    console.log(desireCategory);
    if(desireCategory === 'Cosmic') {
      return input.filter(hero => hero.category === 'Cosmic');
    } else if(desireCategory === 'Mutant') {
      return input.filter(hero => hero.category === 'Mutant');
    } else if(desireCategory === 'Mystic') {
      return input.filter(hero => hero.category === 'Mystic');
    } else if(desireCategory === 'Science') {
      return input.filter(hero => hero.category === 'Science');
    } else if(desireCategory === 'Skill') {
      return input.filter(hero => hero.category === 'Skill');
    } else if(desireCategory === 'Tech') {
      return input.filter(hero => hero.category === 'Tech');
    } else {
      console.log("must be All", input);
      return input;
    }
  }

}
