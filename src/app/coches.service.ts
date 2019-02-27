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

}
