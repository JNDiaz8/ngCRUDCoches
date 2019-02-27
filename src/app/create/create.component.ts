import { Component, OnInit } from '@angular/core';
import { Coche } from 'src/modelos/coche';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  altaForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.altaForm = this.formBuilder.group({
      marca: ['', Validators],
      modelo: ['', Validators],
      color: ['', Validators],
      anio: ['', Validators],
    });
  }

  guardar(){
    let coche: Coche;
    coche = {
      id: this.altaForm.value.id,
      marca: this.altaForm.value.marca,
      modelo: this.altaForm.value.modelo,
      color: this.altaForm.value.color,
      anio: this.altaForm.value.anio
    }
  }

}
