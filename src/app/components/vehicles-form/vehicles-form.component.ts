import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Brands } from 'src/app/Modelos/brands';
import { Models } from 'src/app/Modelos/models';
import { Vehicles } from 'src/app/Modelos/Vehicles';
import { BrandsService } from 'src/app/services/brands.service';
import { ModelsService } from 'src/app/services/models.service';
import { VehiclesService } from 'src/app/services/vehicles.service';

@Component({
  selector: 'app-vehicles-form',
  templateUrl: './vehicles-form.component.html',
  styleUrls: ['./vehicles-form.component.css']
})
export class VehiclesFormComponent {
  marca: Brands[];
  modelo: Models[];
  vehiculo: Vehicles;
  vehiculos: Vehicles[];

  constructor(
    private vehicleService: VehiclesService,
    private brandService: BrandsService,
    private modelService: ModelsService,
    private router: Router
  ) { 
    this.vehiculo = new Vehicles();
  }

  ngOnInit(): void{
    this.brandService.obtenerMarcas().subscribe(res =>{
      this.marca =  res;
    })

    this.modelService.obtenerModelos().subscribe(con =>{
      this.modelo =  con;
    })

    this.getVehiculos();
  }

  getVehiculos(){
    this.vehicleService.obtenerVehiculos().subscribe(data =>{
      this.vehiculos = data;
    })
  }

  guardarVehiculo(){
    console.log(this.vehiculo);
    debugger
    this.vehicleService.crearVehiculo(this.vehiculo).subscribe(() =>{
      this.router.navigate(['/vehicles']);
    }, 
    err =>{
      console.log(err);
    })
    console.log(this.vehiculo);
  }

}
