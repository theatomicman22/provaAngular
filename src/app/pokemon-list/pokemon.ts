import { Observable } from "rxjs";
export interface Pokemon{
    name: string;
    url: string;
    detail?:Observable<Detail>;
}
export interface Result{
    count: number;
    next: string;
    previous: string;
    results : Pokemon[];
}

export interface AbilityDetail{
    ability:Ability;
    is_hidden:boolean;
    slot:number;
}

export interface Ability{
    name:string;
    url:string;    
}

export interface Sprites{
    other:Other;
}

export interface Other{
    "official-artwork": OfficialArtwork;
}

export interface OfficialArtwork{
    front_default: string;
}

export interface Detail{
    abilities:AbilityDetail[];
    sprites:Sprites;
    types: PokemonType[];
    name?:string;
}

export interface PokemonType{

    slot: number;
    type:{
        name:string;
        url: string;
    }

}

export interface PokemonWithDetails{
    pokemon:Pokemon,
    details:Detail
}