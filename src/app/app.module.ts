import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ListPartsComponent } from './components/list-parts/list-parts.component';
import { AboutComponent } from './components/about/about.component';
import { ProductComponent } from './components/product/product.component';
import { StoreFormComponent } from './components/store-form/store-form.component';
import { VehiclesFormComponent } from './components/vehicles-form/vehicles-form.component';
import { PartsVehicleFormComponent } from './components/parts-vehicle-form/parts-vehicle-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ListPartsComponent,
    AboutComponent,
    ProductComponent,
    StoreFormComponent,
    VehiclesFormComponent,
    PartsVehicleFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
