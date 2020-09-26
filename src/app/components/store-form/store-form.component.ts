import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { StoresService } from 'src/app/services/stores.service';
import { Subscription } from 'rxjs';
import { Stores } from 'src/app/Modelos/stores';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-store-form',
  templateUrl: './store-form.component.html',
  styleUrls: ['./store-form.component.css']
})
export class StoreFormComponent implements OnInit {

  tiendas: Stores;
  stores: Stores[];

  constructor(
    private formBuilder: FormBuilder,
    private storeService: StoresService,
    private toastrService: ToastrService
  ){}

  formula = this.formBuilder.group({
    rtn: ['', [Validators.required]],
    name: ['', [Validators.required, Validators.maxLength(60)]],
    address: ['', [Validators.maxLength(150)]],
    latitue: [''],
    longitude: [''],
    owner: ['', [Validators.required]],
    owner_id: [''],
    contact_person: [''],
    phone: ['', [Validators.required]],
    email: ['', [Validators.required]],
    facebook: [''],
    website: ['']  
  })

  ngOnInit(){
    this.getTiendas();
  }

  getTiendas(){
    this.storeService.obtenerTiendas().subscribe(data =>{
      this.stores = data;
    })
  }

  agregar(){
    console.log(this.formula.value);
    this.storeService.guardarTienda(this.tiendas).subscribe(data => {
      this.toastrService.success('Registro Agregado', 'La Tienda fue agregada');
      this.storeService.obtenerTiendas();
    })
  }



}