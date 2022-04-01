import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import {map, switchMap, tap, Observable, zip, mergeMap } from 'rxjs';
import {Pokemon, Result, Sprites, Other, OfficialArtwork, Detail, AbilityDetail, PokemonWithDetails} from './pokemon';



@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent  {

  pokemons: Pokemon[];

  
  

  details$: Observable<Detail>;

  
  constructor(http : HttpClient){   


    http.get<Result>("https://pokeapi.co/api/v2/pokemon?limit=20")
    .pipe(
      map(res=> this.pokemons=res.results),
      map(res=> res.forEach((r,i)=>this.pokemons[i].detail =http.get<Detail>(r.url))),

      ).subscribe()


  }



  getImageUrl( detail : Detail) : string{
    return detail.sprites.other['official-artwork'].front_default;
  }

  deletePokemon(pokemon:Pokemon){
   this.pokemons = this.pokemons.filter(p=> p.name !== pokemon.name);
  }

  title = 'ciaone';

}
