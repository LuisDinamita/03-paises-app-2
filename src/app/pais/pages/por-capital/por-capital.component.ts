import { Component,OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';
@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrls: [

  ]
})
export class PorCapitalComponent {


    termino: string = '';
    hayError: boolean = false;
    paises: Country[] = [];
    paisesSugeridos: Country[] = [];
    mostrarSugerencias: boolean = false;

  
    constructor( private paisService: PaisService) { }
  
  
    buscar(termino: string) {
      this.hayError = false;
      this.mostrarSugerencias = false;
      this.termino = termino;
  console.log(this.termino); 
      this.paisService.buscarCapital(termino).subscribe(paises => {
        console.log(paises);
        this.paises = paises;
      }, (err) => {
        this.hayError = true;
        this.paises = [];
      });
    }
  
    sugerencias(termino:string){
      this.hayError = false;
     this.mostrarSugerencias = true;
     this.termino = termino;
     this.paisService.buscarCapital(this.termino).subscribe ((paises: any) =>{
       this.paisesSugeridos = paises;
       console.log(paises)
     }, (error) => {
       this.hayError = true;
       this.paisesSugeridos = [];
     })
 
    
     
      
    }
 
    buscarSugerido(termino:string) {
      this.buscar(termino);
 
   }
  

}