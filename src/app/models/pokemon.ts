import { type } from "os"

export class Pokemon {
    abilities: object[];
      base_experience: number;
      forms: object[];
      game_indices: object[];
      height: number;
      held_items: object[];
      id: number;
      is_default: boolean;
      location_area_encounters: string;
      moves: object[];
      name: string;
      order: number;
      past_types:object[];
      species: object;
      sprites: object;
      stats: object[];
      types: object[];
      weight: number;
    constructor(
      abilities: object[],
      base_experience: number,
      forms: object[],
      game_indices: object[],
      height: number,
      held_items: object[],
      id: number,
      is_default: boolean,
      location_area_encounters: string,
      moves: object[],
      name: string,
      order: number,
      past_types:object[],
      species: object,
      sprites: object,
      stats: object[],
      types: object[],
      weight: number,
    ){
        this.abilities= abilities;
        this.base_experience = base_experience;
        this.forms = forms;
        this. game_indices = game_indices;
        this.height = height;
        this.held_items = held_items;
        this.id = id;
        this.is_default = is_default;
        this.location_area_encounters = location_area_encounters;
        this.moves= moves;
        this.name = name;
        this.order = order;
        this.past_types = past_types;
        this.species = species;
        this.sprites = sprites;
        this.stats = stats;
        this.types = types;
        this.weight = weight;
  
    }
  }