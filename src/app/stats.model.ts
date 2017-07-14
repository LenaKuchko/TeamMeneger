import { Hero } from './hero.model';
export class Stats {
  public abilities: string[];
  public friends: string[];

  constructor( public health: number, public attack: number, public stars: number
  ){}
}
