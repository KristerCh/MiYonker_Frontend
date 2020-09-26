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

  tiendas: Stores[];
  suscription: Subscription;
  formula: FormGroup;
  tienda: Stores;
  idTienda;

  

  constructor(private formBuilder: FormBuilder, 
    private storesService: StoresService,
    private toastr: ToastrService
    ) {
      this.formula = this.formBuilder.group({
        id: 0,
        rtn: ['', [Validators.required]],
        name: ['', [Validators.required, Validators.maxLength(60)]],
        address: ['', [Validators.maxLength(150)]],
        latitude: [''],
        longitude: [''],
        owner: ['', [Validators.required]],
        owner_id: [''],
        contact_person: [''],
        phone: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
        facebook: [''],
        website: ['']  
      })
    }

   ngOnInit(){
    this.getTiendas();
    // this.suscription = this.storesService.obtenerTienda(this.idTienda).subscribe(data => {
    //   console.log(data);
    //   this.tienda = data;
    //   this.formula.patchValue({
    //     rtn: this.tienda.rtn,
    //     name: this.tienda.name,
    //     address: this.tienda.address,
    //     latitude: this.tienda.latitude,
    //     longitude: this.tienda.longitude,
    //     owner: this.tienda.owner,
    //     owner_id: this.tienda.owner_id,
    //     contact_person: this.tienda.contact_person,
    //     phone: this.tienda.phone,
    //     email: this.tienda.email,
    //     facebook: this.tienda.facebook,
    //     website: this.tienda.website
    //   });
    //   this.idTienda = this.tienda.id;
    // });
  }

  //  ngOnDestroy(){
  //   this.suscription.unsubscribe();
  // }

  // guardarTienda(){
  //   if(this.idTienda == 0){
  //     this.agregar();
  //   }else{
  //     this.editar();
  //   }

  // }

  agregar(){
    const tienda: Stores = {
      rtn: this.formula.get('rtn').value,
      name: this.formula.get('name').value,
      address: this.formula.get('address').value,
      latitude: this.formula.get('latitude').value,
      longitude: this.formula.get('longitude').value,
      owner: this.formula.get('owner').value,
      owner_id: this.formula.get('owner_id').value,
      contact_person: this.formula.get('contact_person').value,
      phone: this.formula.get('phone').value,
      email: this.formula.get('email').value,
      facebook: this.formula.get('facebook').value,
      website: this.formula.get('website').value
    }
    
    this.storesService.guardarTienda(tienda).subscribe(data => {
      this.toastr.success('Registro Agregado', 'La Tienda fue agregada');
      this.storesService.obtenerTiendas();
      this.formula.reset();
    });
    console.log(tienda);
  }

  // editar(){
  //   const tienda: Stores = {
  //     id: this.tienda.id,
  //     rtn: this.formula.get('rtn').value,
  //     name: this.formula.get('name').value,
  //     address: this.formula.get('address').value,
  //     latitude: this.formula.get('latitude').value,
  //     longitude: this.formula.get('longitude').value,
  //     owner: this.formula.get('owner').value,
  //     owner_id: this.formula.get('owner_id').value,
  //     contact_person: this.formula.get('contact_person').value,
  //     phone: this.formula.get('phone').value,
  //     email: this.formula.get('email').value,
  //     facebook: this.formula.get('facebook').value,
  //     website: this.formula.get('website').value
  //   };

  //   this.storesService.actualizarTienda(this.idTienda, tienda).subscribe(data => {
  //     this.toastr.warning('Registro Actualizado', 'La Tienda fue Actualizada');
  //     this.storesService.obtenerTiendas();
  //     this.formula.reset();
  //     this.idTienda = 0;
  //   });
  // }

  // editarTienda(tienda){
  //   this.storesService.actualizar(tienda);
  // }

  // eliminarTarjeta(id: number){
  //   if(confirm("¿Esta seguro de Eliminar el Registro?")){
  //     this.storesService.eliminarTienda(id).subscribe(data => {
  //       this.toastr.error('Registro Eliminado','La Tienda fue Eliminada');
  //       this.storesService.obtenerTiendas();
  //     })
  //   }
  // }

  getTiendas(){
    this.storesService.obtenerTiendas().subscribe(data =>{
      this.tiendas = data;
    })
  }

}
