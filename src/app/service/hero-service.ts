import { Injectable } from '@angular/core';

import { Hero } from '../domain/hero';
import { HEROES } from '../mock/mock-heroes';

@Injectable()
export class HeroService {
    getHeroes(): Promise<Hero[]> {
        return Promise.resolve(HEROES);
    }

    getHeroesSlowly(): Promise<Hero[]> {
        return new Promise(resolve => {
            setTimeout(() =>
                resolve(this.getHeroes()),
                20000
            );
        });
    }

    getHero(id: number): Promise<Hero> {
        return this.getHeroes()
            .then(
                heroes => heroes.find(
                    hero => hero.id === id
                )
            );
    }
}
