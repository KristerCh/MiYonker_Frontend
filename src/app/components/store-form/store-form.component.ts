import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { StoresService } from 'src/app/services/stores.service';
import { Subscription } from 'rxjs';
import { Stores } from 'src/app/Modelos/stores';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-store-form',
  templateUrl: './store-form.component.html',
  styleUrls: ['./store-form.component.css']
})
export class StoreFormComponent implements OnInit {

  stores: Stores;
  tiendas: Stores[];

  constructor(
    private storeService: StoresService,
    private toastrService: ToastrService,
    private router: Router
  ){}

  ngOnInit(){
    this.getTiendas();
  }

  getTiendas(){
    this.storeService.obtenerTiendas().subscribe(data =>{
      this.tiendas = data;
    })
  }

  agregar(){
    this.storeService.guardarTienda(this.stores).subscribe(data => {
      this.toastrService.success('Registro Agregado', 'La Tienda fue agregada');
      this.storeService.obtenerTiendas();
    })
  }



}