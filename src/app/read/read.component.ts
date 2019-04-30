import { Component, OnInit } from '@angular/core';
import { Coche } from 'src/modelos/coche';
import { CochesService } from '../coches.service';
import {SelectionModel} from '@angular/cdk/collections';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {

  coches: Coche[];
  displayedColumns: string[] = ['id', 'marca', 'modelo', 'color', 'anio'];

  constructor(private cochesService: CochesService) { }

  ngOnInit() {
    this.cochesService.getCoches().subscribe(
      (coches) => {
        this.coches = coches;
      });
  }


}
