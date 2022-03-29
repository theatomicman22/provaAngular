import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import {Pokemon, Result, Sprites, Other, OfficialArtwork, Detail, AbilityDetail} from './pokemon';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent  {

  pokemons: Pokemon[];

  r : Result;

  
  
  constructor(http : HttpClient){   
    http.get<Result>("https://pokeapi.co/api/v2/pokemon?limit=20").subscribe(result => {
      this.r = result; this.pokemons = this.r.results;
      this.pokemons.forEach((p)=>{//itera la lista dei pokemon per prenderne i dettagli

         // p.name= this.capitalize(p.name);
          http.get<Detail>(p.url).subscribe(r=>{//abilita' dei pokemon
          //  r.abilities.forEach(a => a.ability.name = this.capitalize(a.ability.name))
            p.detail = r;
         //   console.log(p.detail.types[0].type.name)
      });  } )
      
    })
   

  }


  getImageUrl( pokemon : Pokemon) : string{
    return pokemon.detail.sprites.other['official-artwork'].front_default;
  }

  title = 'ciaone';

}
