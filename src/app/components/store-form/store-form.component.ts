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
export class StoreFormComponent {

  formulario: FormGroup;
  suscription: Subscription;
  tienda: Stores;
  idTienda = 0;

  constructor(private formBuilder: FormBuilder, 
    public storesService: StoresService,
    private toastr: ToastrService) {
      this.formulario = this.formBuilder.group({
        id: 0,
        rtn: ['', [Validators.required]],
        name: ['', [Validators.required, Validators.maxLength(60), Validators.name]],
        address: ['', [Validators.maxLength(150)]],
        latitude: [''],
        longitude: [''],
        owner: ['', [Validators.required, Validators.name]],
        owner_id: [''],
        contact_person: [''],
        phone: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
        facebook: [''],
        website: ['']  
      })
   }

   OnInit(): void{
    this.storesService.obtenerTiendas();
    this.suscription = this.storesService.obtenerTienda().subscribe(data => {
      console.log(data);
      this.tienda = data;
      this.formulario.patchValue({
        rtn: this.tienda.rtn,
        name: this.tienda.name,
        address: this.tienda.address,
        latitude: this.tienda.latitude,
        longitude: this.tienda.longitude,
        owner: this.tienda.owner,
        owner_id: this.tienda.owner_id,
        contact_person: this.tienda.contact_person,
        phone: this.tienda.phone,
        email: this.tienda.email,
        facebook: this.tienda.facebook,
        website: this.tienda.website
      });
      this.idTienda = this.tienda.id;
    });
   }

   ngOnDestroy(){
    this.suscription.unsubscribe();
  }

  guardarTienda(){
    if(this.idTienda == 0){
      this.agregar();
    }else{
      this.editar();
    }

  }

  agregar(){
    const tienda: Stores = {
      rtn: this.formulario.get('rtn').value,
      name: this.formulario.get('name').value,
      address: this.formulario.get('address').value,
      latitude: this.formulario.get('latitude').value,
      longitude: this.formulario.get('longitude').value,
      owner: this.formulario.get('owner').value,
      owner_id: this.formulario.get('owner_id').value,
      contact_person: this.formulario.get('contact_person').value,
      phone: this.formulario.get('phone').value,
      email: this.formulario.get('email').value,
      facebook: this.formulario.get('facebook').value,
      website: this.formulario.get('website').value
    }
    
    this.storesService.guardarTienda(tienda).subscribe(data => {
      this.toastr.success('Registro Agregado', 'La Tienda fue agregada');
      this.storesService.obtenerTiendas();
      this.formulario.reset();
    });
  }

  editar(){
    const tienda: Stores = {
      id: this.tienda.id,
      rtn: this.formulario.get('rtn').value,
      name: this.formulario.get('name').value,
      address: this.formulario.get('address').value,
      latitude: this.formulario.get('latitude').value,
      longitude: this.formulario.get('longitude').value,
      owner: this.formulario.get('owner').value,
      owner_id: this.formulario.get('owner_id').value,
      contact_person: this.formulario.get('contact_person').value,
      phone: this.formulario.get('phone').value,
      email: this.formulario.get('email').value,
      facebook: this.formulario.get('facebook').value,
      website: this.formulario.get('website').value
    };

    this.storesService.actualizarTienda(this.idTienda, tienda).subscribe(data => {
      this.toastr.warning('Registro Actualizado', 'La Tienda fue Actualizada');
      this.storesService.obtenerTiendas();
      this.formulario.reset();
      this.idTienda = 0;
    });
  }

  editarTienda(tienda){
    this.storesService.actualizar(tienda);
  }

  eliminarTarjeta(id: number){
    if(confirm("¿Esta seguro de Eliminar el Registro?")){
      this.storesService.eliminarTienda(id).subscribe(data => {
        this.toastr.error('Registro Eliminado','La Tienda fue Eliminada');
        this.storesService.obtenerTiendas();
      })
    }
  }

}
