import { Component, OnInit } from '@angular/core';
import { Coche } from 'src/modelos/coche';
import { CochesService } from '../coches.service';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  garaje: Array<Coche>;
  coche: Coche = {id: null, marca: '', modelo: '', color: '', anio: null};

  constructor(private cochesService: CochesService) {}

  ngOnInit() {

  }

  altaCoche() {
    let nuevoCoche: Coche = {
      id: this.coche.id,
      marca: this.coche.marca,
      modelo: this.coche.modelo,
      color: this.coche.color,
      anio: this.coche.anio
    };
    this.cochesService.altaCoche(nuevoCoche)
    .subscribe(
      () => {
        console.log('Se han insertado los datos.');
      },
      (error) => {
        console.log('No se ha podido insertar los datos');

      }
    );
    /*this.coche.id = null;
    this.coche.marca = '';
    this.coche.modelo = '';
    this.coche.color = '';
    this.coche.anio = null;
    */
  }

}
