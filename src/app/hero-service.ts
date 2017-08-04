import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './hero-mock';

@Injectable()
export class HeroService {
	getHeroes(): Hero[] {
		return HEROES;
	}
}