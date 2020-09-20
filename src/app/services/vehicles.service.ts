import { Injectable } from '@angular/core';
import { Vehicles } from '../Modelos/vehicles';
import { HttpClient } from '@angular/common/http';
import { VehicleDetail } from '../Modelos/VehicleDetail';

@Injectable({
  providedIn: 'root'
})
export class VehiclesService {
  apiURL = 'https://localhost:44370/api/Vehicles';

  constructor(private http: HttpClient) { }

  obtenerVehicles(){
    return this.http.get<VehicleDetail[]>(this.apiURL+'/'+'GetvehiclesDetails');
  }

  eliminarVehiculos(id: number){
    return this.http.delete(this.apiURL + "/" + id);
  }

 crearVehiculos(vehicleDetail: VehicleDetail)
  {
    return this.http.post<VehicleDetail[]>(this.apiURL+'/'+'createVehicle', VehicleDetail);
  }
  }

