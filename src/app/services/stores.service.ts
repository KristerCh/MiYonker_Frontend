import { Injectable } from '@angular/core';
import { Stores } from 'src/app/modelos/Stores';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class StoresService {
  myAppUrl = 'https://localhost:44370/';
  myApiUrl = 'api/stores/';
  //list: Stores[];


  constructor(private http: HttpClient,
    private router: Router) { } 

  guardarTienda(tienda: Stores): Observable<Stores>{
    return this.http.post<Stores>(this.myAppUrl + this.myApiUrl, tienda);
  }

  eliminarTienda(id: number): Observable<Stores>{
    return this.http.delete<Stores>(this.myAppUrl + this.myApiUrl + id);
  }

  obtenerTiendas(){
    return this.http.get<Stores[]>(this.myAppUrl + this.myApiUrl);
  }

  actualizarTienda(id: number, tienda: Stores): Observable<Stores>{
    return this.http.put<Stores>(this.myAppUrl + this.myApiUrl + id, tienda);
  }


  obtenerTienda(id: Number): Observable<Stores>{
    return this.http.get<Stores>(this.myAppUrl + this.myApiUrl + id);
  }
}
