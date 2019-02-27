import { Component, OnInit } from '@angular/core';
import { Coche } from 'src/modelos/coche';
import { CochesService } from '../coches.service';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {

  coches: Coche[];

  constructor(private cochesService: CochesService) { }

  ngOnInit() {
    this.cochesService.getCoches().subscribe(
      (coches) => {
        this.coches = coches;
      });
  }

}
