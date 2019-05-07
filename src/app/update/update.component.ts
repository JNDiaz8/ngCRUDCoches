import { Component, OnInit } from '@angular/core';
import { Coche } from 'src/modelos/coche';
import { CochesService } from '../coches.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  garaje: Array<Coche>;
  coche: Coche = {id: null, marca: '', modelo: '', color: '', anio: null};

  constructor(
    private cocheService: CochesService,
    private route: ActivatedRoute,
    private router: Router,
    ) { }

  ngOnInit() {
  }

  updateCoche() {
    let nuevoCoche: Coche = {
      id: this.coche.id,
      marca: this.coche.marca,
      modelo: this.coche.modelo,
      color: this.coche.color,
      anio: this.coche.anio
    };
    this.cocheService.altaCoche(nuevoCoche)
    .subscribe(
      () => {
        console.log('Se han insertado los datos.');
      },
      (error) => {
        console.log('No se ha podido insertar los datos');
      }
    );
  }
  atras() {
    this.router.navigate(['/detalle/:id']);
  }
}
