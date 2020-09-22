import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Parts_vehicle } from '../Modelos/parts_vehicle';

@Injectable({
  providedIn: 'root'
})
export class PartsVehicleService {
  myAppUrl = 'https://localhost:44374/';
  myApiUrl = 'api/partsVehicle/';

  constructor(private http: HttpClient) { }

  guardarTarjeta(partVehicle: Parts_vehicle): Observable<Parts_vehicle> {
    return this.http.post<Parts_vehicle>(this.myAppUrl + this.myApiUrl, partVehicle);
  }
}
