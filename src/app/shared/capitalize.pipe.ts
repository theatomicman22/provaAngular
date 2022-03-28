import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {// Prende la prima lettera di una stringa e la rende maiuscola

  transform(value : string): string {
    if(value){
      if(value.length >1)
        return value.charAt(0).toUpperCase()+ value.slice(1);
      else
        return value.charAt(0).toUpperCase();
    }else{
      return value;
    }
  }

}
