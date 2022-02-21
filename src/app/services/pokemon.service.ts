import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  url = 'https://pokeapi.co/api/v2/pokemon/'
  constructor(private http: HttpClient) { }

  getPokemon(nombre:string):Observable<any>{
    let peticion = this.url+nombre;
    return this.http.get(peticion);
  }
}
