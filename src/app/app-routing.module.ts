import { NgModule } from '@angular/core';
import { ListPartsComponent } from './components/list-parts/list-parts.component';
import { AboutComponent } from './components/about/about.component';
import { ProductComponent } from './components/product/product.component';
import { Routes, RouterModule } from '@angular/router';
import { StoreFormComponent } from './components/store-form/store-form.component';
import { VehiclesFormComponent } from './components/vehicles-form/vehicles-form.component';
import { PartsVehicleFormComponent} from './components/parts-vehicle-form/parts-vehicle-form.component';

const routes: Routes = [
  {path: "", component: AboutComponent},
  {path: "listparts", component: ListPartsComponent },
  {path: "product", component: ProductComponent},
  {path: "create-store", component: StoreFormComponent},
  {path: "vehicles", component: VehiclesFormComponent},
  {path: "partsvehicle", component: PartsVehicleFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
