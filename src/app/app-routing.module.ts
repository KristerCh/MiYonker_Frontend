import { NgModule } from '@angular/core';
import { ListPartsComponent } from './components/list-parts/list-parts.component';
import { AboutComponent } from './components/about/about.component';
import { ProductComponent } from './components/product/product.component';
import { Routes, RouterModule } from '@angular/router';
import { PartsVehicleFormComponent} from './components/parts-vehicle-form/parts-vehicle-form.component';

const routes: Routes = [
  {path: '', component: AboutComponent},
  {path: 'list-parts', component: ListPartsComponent },
  {path: 'product', component: ProductComponent},
  {path: 'partsVehicle-form', component: PartsVehicleFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
