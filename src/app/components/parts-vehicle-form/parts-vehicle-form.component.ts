import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-parts-vehicle-form',
  templateUrl: './parts-vehicle-form.component.html',
  styleUrls: ['./parts-vehicle-form.component.css']
})
export class PartsVehicleFormComponent {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      id: 0,
      partId: ['', [Validators.required]],
      vehicleId: ['', [Validators.required]]
    })
   }


}
