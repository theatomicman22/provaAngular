import { Component, Input } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { PokemonType } from '../pokemon';


@Component({
    selector:'app-card',
    styles:['.card{margin-bottom:15px; display:block;} .card-header>div,h1{display:inline; max-width:250px; } '],
    template:`
            <div class="card">
                    <div class="card-header bg-dark text-white" (click)="toggleOpen()"   placement="bottom" [ngbTooltip]="open==='opened' ? 'Click to collapse ' : 'Click to expand' ">
                      <h1>{{title | capitalize}}</h1>
                      <h4><i *ngFor="let sh of subHeading">{{"&nbsp;&nbsp;"+ (sh.type.name | capitalize) + "&nbsp;&nbsp;"  }} </i></h4>
                       <div  class="mr-10"><fa-icon class="color-white" [icon]="open==='opened'? ['fas','angles-up'] : ['fas','angles-down']"></fa-icon></div>
                    </div>
                    <div class="card-body" style="overflow: hidden"
                    [@collapsable]="open"><ng-content></ng-content></div>
            </div>`
    ,
    animations:[
        trigger('collapsable', [
          state('opened', style({
            height: '*'
          })),
          state('closed', style({
            height: 0,
            padding: 0
          })),
          transition('opened <=> closed', [
            animate('0.5s cubic-bezier(0.77, 0, 0.175, 1)')

          ])
        ])
      ],
})

export class CardComponent{

    @Input() title :string;
    @Input() tooltipPlacement : string;
    @Input() collapsable : boolean;
    @Input() subHeading : PokemonType[];
    open = 'opened';
    
    toggleOpen():void{
        this.open === 'opened' ? this.open='closed' : this.open='opened';
      }
    
    
}