import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from './hero.model';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(input: Hero[], desireFilter: string): any {
    if(desireFilter === 'Cosmic') {
      return input.filter(hero => hero.category === 'Cosmic')
    }
  }

}
