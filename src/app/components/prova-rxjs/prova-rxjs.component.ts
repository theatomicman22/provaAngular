import { Component, OnInit, ViewChild,ElementRef, AfterViewInit,  } from '@angular/core';
import { fromEvent } from 'rxjs';
import {map,tap,scan,filter} from 'rxjs/operators'

@Component({
  selector: 'app-prova-rxjs',
  templateUrl: './prova-rxjs.component.html',
  styleUrls: ['./prova-rxjs.component.css']
})
export class ProvaRxjsComponent implements AfterViewInit {
  @ViewChild('btn1')  btn1 : ElementRef<HTMLButtonElement>;

  constructor() {}

  ngAfterViewInit(): void {

    fromEvent(this.btn1.nativeElement ,'click')
    .pipe(
      
      scan((acc)=> ++acc , 0 ),
      filter((acc)=> acc>3),
      map((val)=> `click ${val}`)
    )
    .subscribe(val=> console.log(val));

  }

   

   

  
}
