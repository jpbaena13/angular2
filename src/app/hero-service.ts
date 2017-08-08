import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './hero-mock';

@Injectable()
export class HeroService {
	getHeroesSlowly(): Promise<Hero[]> {
		return new Promise(resolve => {
			setTimeout(() => resolve(this.getHeroes()), 2000)
		});
	}

	getHeroes(): Promise<Hero[]> {
		return Promise.resolve(HEROES);
	}
}