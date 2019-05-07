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
    this.router.navigate(['/update/:id']);
  }

  borrar() {
    //this.cochesService.borrarCoche();
  }

}
