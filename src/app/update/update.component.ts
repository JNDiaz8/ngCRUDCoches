import { Component, OnInit } from '@angular/core';
import { Coche } from 'src/modelos/coche';
import { Observable } from 'rxjs';
import { CochesService } from '../coches.service';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  coche: Coche = {id: null, marca: '', modelo: '', color: '', anio: null};
  coches: Observable<Coche>;

  constructor(
    private cochesService: CochesService,
    private route: ActivatedRoute,
    private router: Router,
    ) { }

  ngOnInit() {
    this.route.paramMap.pipe(
      switchMap(
        (params: ParamMap) =>
          this.cochesService.getCoche(params.get('id')))
      ).subscribe(
        (coche) => {
          this.coche.id = coche.id;
          this.coche.marca = coche.marca;
          this.coche.modelo = coche.modelo;
          this.coche.color = coche.color;
          this.coche.anio = coche.anio;
        }
      );
  }

  updateCoche() {
    let modificadoCoche: Coche = {
      id : this.coche.id,
      marca: this.coche.marca,
      modelo: this.coche.modelo,
      color: this.coche.color,
      anio: this.coche.anio
    };
    this.cochesService.updateCoche(modificadoCoche)
    .subscribe(
      () => {
        console.log('Se han modificado los datos.');
        this.router.navigate(['/read']);
      },
      (error) => {
        console.log('No se ha podido modificar los datos');
        this.router.navigate(['/**']);
      }
    );
  }


}
