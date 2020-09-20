import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ListPartsComponent } from './components/list-parts/list-parts.component';
import { AboutComponent } from './components/about/about.component';
import { ProductComponent } from './components/product/product.component';
import { VehiclesFormComponent } from './components/vehicles-form/vehicles-form.component';
import { HttpClient } from '@angular/common/http';
import { BrandsComponent } from './components/brands/brands.component';
import { ModelsComponent } from './components/models/models.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ListPartsComponent,
    AboutComponent,
    ProductComponent,
    VehiclesFormComponent,
    BrandsComponent,
    ModelsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
