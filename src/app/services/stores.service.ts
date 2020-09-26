import { Injectable } from '@angular/core';
import { Stores } from 'src/app/modelos/Stores';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class StoresService {
  myAppUrl = 'https://localhost:44370/';
  myApiUrl = 'api/stores';
  //list: Stores[];

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': '*/*'
    })
  }

  private update = new BehaviorSubject<Stores>([] as any);

  constructor(private http: HttpClient) { } 

  guardarTienda(tienda: Stores): Observable<Stores>{
    return this.http.post<Stores>(this.myAppUrl + this.myApiUrl, tienda);
  }

  eliminarTienda(id: number): Observable<Stores>{
    return this.http.delete<Stores>(this.myAppUrl + this.myApiUrl + id);
  }

  obtenerTiendas(){
    return this.http.get<Stores[]>(this.myAppUrl + this.myApiUrl, this.httpOptions);
  }

  actualizarTienda(id: number, tienda: Stores): Observable<Stores>{
    return this.http.put<Stores>(this.myAppUrl + this.myApiUrl + id, tienda);
  }

  actualizar(tienda){
    this.update.next(tienda);
  }

  obtenerTienda(id: Number): Observable<Stores>{
    return this.http.get<Stores>(this.myAppUrl + this.myApiUrl + id);
  }
}
