import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';


@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styleUrls: ['./pais-input.component.css']
})
export class PaisInputComponent implements OnInit {
 termino:string ='';
  
 /* Creando un emisor de eventos que emitirá una cadena. */
 @Output() onEnter:EventEmitter<string>= new EventEmitter();
 

  ngOnInit(): void {
  }

  buscar (){
    //mediante onenter se va a emitr el termino
    this.onEnter.emit(this.termino);
  
  }

}
