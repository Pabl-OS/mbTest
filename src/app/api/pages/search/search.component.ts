import { Component, OnInit } from '@angular/core';
import { Hero } from '../../interfaces/hero.interface';
import { HeroService } from '../../services/hero.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles:[
  `
  input {
    padding: 10px;
  }
  button {
      background-color: var(--primary);
      font-size: 18px;
  }`
  ]
})
export class SearchComponent implements OnInit {
  nameHero: string = "";
  hero!:Hero;
  loading:boolean = false;
  constructor(private _heroService:HeroService) { }

  ngOnInit(): void {
  }

  search(){
    if ( this.nameHero.length <= 0 ) {
      return;
    }
    this.loading = true;
    this._heroService.getHeroeByName(this.nameHero)
        .subscribe(hero =>{ 
          this.hero = hero;
          this.loading = false;
        })
  }


}
