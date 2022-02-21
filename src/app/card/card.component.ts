import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';


@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  //@Input() nombre = '';
  @Input() pokemon: object = {};
   
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

    