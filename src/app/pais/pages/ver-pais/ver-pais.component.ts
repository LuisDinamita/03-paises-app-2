import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';
import { switchMap, tap } from 'rxjs';


@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styleUrls: ['./ver-pais.component.css']
})
export class VerPaisComponent implements OnInit {
  pais! : Country [];

  constructor(private activateRoute: ActivatedRoute, private paisService:PaisService) { }

  ngOnInit(): void {
// this.activateRoute.params.pipe(
//   switchMap(({id}) => this.paisService.getPaisPorCodigo(id)),
//   tap(console.log)).
//   subscribe(pais => this.pais = pais
    
//   });




  this.activateRoute.params.subscribe(({id}) => {
  this.paisService.getPaisPorCodigo(id).subscribe(pais => {
    this.pais = pais;
  console.log(this.pais);
  });
  
  });
  }

  
}
