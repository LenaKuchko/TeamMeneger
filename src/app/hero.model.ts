import { Stats } from './stats.model';
export class Hero {
  constructor(
      public name: string,
      public category: string,
      public description: string,
      public stats : Stats,
      public urlImage: string,
      public worldSaveTimes: number
  ){}
}
