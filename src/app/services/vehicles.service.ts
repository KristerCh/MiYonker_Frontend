import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Vehicles } from '../Modelos/Vehicles';

@Injectable({
  providedIn: 'root'
})
export class VehiclesService {
  myAppUrl = 'https://localhost:44370/';
  myApiUrl = 'api/vehicles';

  constructor(private http: HttpClient,
    private router: Router) { }

    obtenerVehiculos(){
      return this.http.get<Vehicles[]>(this.myAppUrl + this.myApiUrl);
    }

    obtenerVehiculo(id: Number){
      return this.http.get<Vehicles>(this.myAppUrl + this.myApiUrl + id);
    }

    eliminarVehiculo(id: Number){
      return this.http.delete<Vehicles>(this.myAppUrl + this.myApiUrl + id);
    }

    editarVehiculo(vehiculo: Vehicles){
      return this.http.put<Vehicles>(this.myAppUrl + this.myApiUrl + vehiculo.id, vehiculo);
    }

    crearVehiculo(vehiculo: Vehicles){
      return this.http.post<Vehicles>(this.myAppUrl + this.myApiUrl, vehiculo);
    }
}
