import { Component, OnInit } from '@angular/core';
import { Coche } from 'src/modelos/coche';
import { Observable } from 'rxjs';
import { CochesService } from '../coches.service';
import { switchMap } from 'rxjs/operators';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  coches: Observable<Coche>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private cochesService: CochesService
  ) { }

  ngOnInit() {
    this.coches = this.route.paramMap.pipe(
      switchMap(
        (params: ParamMap) =>
          this.cochesService.getCoche(params.get('id')))
      );

  }
  atras() {
    this.router.navigate(['/read']);
  }

  actualizar() {
    this.route.paramMap.pipe(
      switchMap(
        (params: ParamMap) =>
          params.get('id')
      )).subscribe(
        (id) => {
          this.router.navigate(['/update/', id]);
        }
      );
  }

  borrar() {
    this.route.paramMap.pipe(
      switchMap(
        (params: ParamMap) =>
          this.cochesService.borrarCoche(params.get('id')))
      ).subscribe(
        () => {
          console.log('Se ha borrado con éxito');
          this.router.navigate(['/read']);
        },
        (error) => {
          console.log('Error al borrar coche');
          this.router.navigate(['/**']);
        }
      );

  }

}
