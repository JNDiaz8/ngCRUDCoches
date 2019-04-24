import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Coche } from 'src/modelos/coche';

@Injectable({
  providedIn: 'root'
})
export class CochesService {

  url = 'http://localhost:3000/Coches';

  constructor(private http: HttpClient) { }

  getCoches(): Observable<Coche[]> {
    return this.http.get<Coche[]>(this.url);
  }

  getCoche(id: number | string): Observable<Coche> {
    return this.http.get<Coche>(this.url + '/' + id);
  }

  altaCoche(coche: Coche) {
    let objeto = {
      id: coche.id,
      marca: coche.marca,
      modelo: coche.modelo,
      color: coche.color,
      anio: coche.anio
    };
    return this.http.post<Coche>(this.url, objeto);

  }

}
