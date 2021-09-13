import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Hero } from '../../interfaces/hero.interface';
import { HeroService } from '../../services/hero.service';

@Component({
  selector: 'app-radom',
  templateUrl: './radom.component.html'
})
export class RadomComponent implements OnInit {
  randomHeroes!:Hero[];
  title:string="";
  loading:boolean = false;

  constructor(private _heroService:HeroService,
              private _router:Router,
              private _activatedRoute:ActivatedRoute) {
               
    this._activatedRoute.params.subscribe(param => {
          this.title=param.type
          this.getParams();
    })
   }

  getParams(){
    if ( this._router.url.includes('heroes') ) {
      this.loading = true;
      this._heroService.getRandomHeroes()
      .subscribe(hero =>{
         this.randomHeroes=hero;
         this.loading = false
      });
  }
  else if ( this._router.url.includes('villains') ){
      this.loading = true;
       this._heroService.getRandomVillains()
      .subscribe(hero=> { 
        this.randomHeroes=hero;
        this.loading = false;
      });
  }
  else {
      this._router.navigate(['/search'])
  }

  } 
   
  ngOnInit(): void {
  }

}
