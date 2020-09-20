import { NgModule } from '@angular/core';
import { ListPartsComponent } from './components/list-parts/list-parts.component';
import { AboutComponent } from './components/about/about.component';
import { ProductComponent } from './components/product/product.component';
import { Routes, RouterModule } from '@angular/router';
import { VehiclesFormComponent } from './components/vehicles-form/vehicles-form.component';
import { BrandsComponent } from './components/brands/brands.component';
import { ModelsComponent } from './components/models/models.component';

const routes: Routes = [
  {path: '', component: AboutComponent},
  {path: 'list-parts', component: ListPartsComponent },
  {path: 'product', component: ProductComponent},
  {path: 'VehiclesForm', component: VehiclesFormComponent},
  {path: 'Brands', component: BrandsComponent},
  {path: 'Models', component: ModelsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
