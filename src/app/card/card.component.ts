import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';


@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() nombre = '';
  pokemon: object = {};
  imagen: string = '';
   
  constructor(
    private pokemonService: PokemonService
  ) { 
    
  }

  obtenerPokemon(name:string){
    this.pokemonService.getPokemon(name).subscribe(data => {
      console.log(data);
      this.pokemon = data;
      this.imagen = data.sprites.other.home.front_default;

    }, error => {
      console.log(error);
    }
    
    )
  }

  ngOnInit(): void {
    this.obtenerPokemon(this.nombre);
  }

}
/*if(this.nombre!= ' '){
        let url: string = 'https://pokeapi.co/api/v2/pokemon/' + this.nombre;
       fetch(url)
      .then(resp => resp.json() )
      .then(obj => { 
        this.pokemon = obj ;
        this.imagen = obj.sprites.other.home.front_default;
        console.log(this.pokemon);
      })
      .catch(err => console.log(err))
    }
    */
    