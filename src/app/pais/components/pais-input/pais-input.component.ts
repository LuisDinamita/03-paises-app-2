import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';


@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styleUrls: ['./pais-input.component.css']
})
export class PaisInputComponent implements OnInit {
 termino:string ='';
  
 @Input() placeholder: string = 'Buscar...';
 /* Creando un emisor de eventos que emitirá una cadena. */
 @Output() onEnter:EventEmitter<string>= new EventEmitter();
 @Output () onDebounce:EventEmitter<string>= new EventEmitter();



 debonce: Subject<string> = new Subject<string>();

 
//el oninit entra justo cuando ya tenemos nuestro componente
  ngOnInit(): void {
    this.debonce.pipe(debounceTime(300)).subscribe(termino => {
      this.onDebounce.emit(termino);
    })
            
  }



  buscar (){
    //mediante onenter se va a emitr el termino
    this.onEnter.emit(this.termino);
  
  }
  teclaPresionada (){
    this.debonce.next(this.termino);
  
  }

}

