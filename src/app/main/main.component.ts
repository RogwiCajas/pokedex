import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';
import { HttpClient } from '@angular/common/http';
import data from '../main/sample.json';

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  name = data.name;
  pokemon = data;

  constructor(
    private pokemonService: PokemonService
  ) { 
    
  }
  getPokemon(val:string):void{
    this.name = val ;
    this.obtenerPokemon(this.name);
    console.log(this.pokemon);
  }

  obtenerPokemon(name:string){
    this.pokemonService.getPokemon(name).subscribe(data => {
      this.pokemon = data;
      //this.imagen = data.sprites.other.home.front_default;

    }, error => {
      console.log(error);
    }
    
    )
  }
  ngOnInit(): void {
    
  }

  

}
