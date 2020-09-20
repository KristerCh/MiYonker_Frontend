import { Injectable } from '@angular/core';
import { Brands } from '../Modelos/brands';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BrandsService {

  apiURL = 'https://localhost:44370/api/Brands';

  constructor(private http: HttpClient) { }

  obtenerMarcas(){
    return this.http.get<Brands[]>(this.apiURL);
  }
}
