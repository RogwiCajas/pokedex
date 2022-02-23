import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';
import {IPokemon} from '../interface/pokemon.interface';


@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  //@Input() nombre = '';
  @Input() pokemon:IPokemon= {
    abilities: [],
    base_experience: 0,
    forms: [],
    game_indices: [],
    height: 0,
    held_items: [],
    id: 0,
    is_default: false,
    location_area_encounters: '',
    moves: [],
    name: '',
    order: 0,
    past_types: [],
    species: {},
    sprites: {},
    stats: [],
    types: [],
    weight: 0

  };
   
  constructor(
    private pokemonService: PokemonService 
  ) { 
    
  }

  /*obtenerPokemon(name:string){
    this.pokemonService.getPokemon(name).subscribe(data => {
      console.log(data);
      this.pokemon = data;
      this.imagen = data.sprites.other.home.front_default;

    }, error => {
      console.log(error);
    }
    
    )
  }*/

  ngOnInit(): void {
    //this.obtenerPokemon(this.nombre);
    console.log(this.pokemon );
  }

}

    