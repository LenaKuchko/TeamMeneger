import { Stats } from './stats.model';
export class Hero {
  // stats: Stats = new Stats(public abilities: string[], public friends: string[], public health: number, public attack: number, public stars: number);
  public abilities: string[];
  public friends: string[];
  constructor(
      public name: string,
      public category: string,
      public description: string,
      // public stats : Stats,
      public health: number,
      public attack: number,
      public stars: number,
      public urlImage: string,
      public worldSaveTimes: number
  ){}
}
