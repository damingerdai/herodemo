import { Component, OnInit } from '@angular/core';

import { Hero } from '../domain/hero';
import { HeroService } from '../service/hero-service';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'my-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: [ './dashboard.component.css' ]
})

export class DashboardComponent implements OnInit {

    heros: Hero[] = [];

    constructor(private herorService: HeroService) { }

    ngOnInit(): void {
       //
    }

}
