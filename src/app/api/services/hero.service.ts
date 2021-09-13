import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Hero } from '../interfaces/hero.interface';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  apiUrl:string=environment.apiUrl;

  constructor(private _httpClient: HttpClient) { }

 private _getHeaders(){
    return  new HttpHeaders({
      'Content-Type': 'application/json',
      'x-rapidapi-host': 'superhero-search.p.rapidapi.com',
      'x-rapidapi-key': 'b14b7d375bmsh2b8b8915aa3e67ep161117jsnec715d2b02d1'

    }); 
  }
 
  getHeroeByName(nameHero :string):Observable<Hero>{
    return this._httpClient.get<Hero>(`${this.apiUrl}/?hero=${nameHero}`,{headers:this._getHeaders()});
  }
  getRandomHeroes():Observable<Hero[]>{
    return this._httpClient.get<Hero[]>(`${this.apiUrl}/heroes`,{headers:this._getHeaders()});

  }
  getRandomVillains():Observable<Hero[]>{
    return this._httpClient.get<Hero[]>(`${this.apiUrl}/villains`,{headers:this._getHeaders()});

  }

}
