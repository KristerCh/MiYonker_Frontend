import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Models } from '../Modelos/models';

@Injectable({
  providedIn: 'root'
})
export class ModelsService {
  myAppUrl = 'https://localhost:44370/';
  myApiUrl = 'api/models/';

  constructor(private http: HttpClient,
    private router: Router) { }

    obtenerModelos(){
      return this.http.get<Models[]>(this.myAppUrl + this.myApiUrl);
    }
}
