import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Brands } from '../Modelos/brands';

@Injectable({
  providedIn: 'root'
})
export class BrandsService {
  myAppUrl = 'https://localhost:44370/';
  myApiUrl = 'api/brands/';

  constructor(private http: HttpClient,
    private router: Router) { }

    obtenerMarcas(){
      return this.http.get<Brands[]>(this.myAppUrl + this.myApiUrl);
    }
}
