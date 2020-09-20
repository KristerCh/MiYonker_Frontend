import { Component, OnInit } from '@angular/core';
import { VehiclesService } from '../../services/vehicles.service';
import { Vehicles } from '../../Modelos/vehicles';
import {Router} from '@angular/router';
import { VehicleDetail } from '../../Modelos/VehicleDetail';

@Component({
  selector: 'app-vehicles-form',
  templateUrl: './vehicles-form.component.html',
  styleUrls: ['./vehicles-form.component.css']
})
export class VehiclesFormComponent implements OnInit{
  vehiculos: VehicleDetail[];

  constructor(private _VehiclesService: VehiclesService, private router: Router) { }

  ngOnInit(){
    this.obtenerVehicles();
  }

  crearVehicles(){
    this.router.navigate(['VehiclesForm/crear']);
  }
  obtenerVehicles(){
    this._VehiclesService.obtenerVehicles().subscribe(data => {
      this.vehiculos = data;
      console.log(data);
    });
  }

}
