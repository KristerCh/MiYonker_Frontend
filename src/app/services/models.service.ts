import { Injectable } from '@angular/core';
import { Models } from '../Modelos/models';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ModelsService {
  
  apiURL = 'https://localhost:44370/api/models';

  constructor(private http: HttpClient) { }

  obtenerModelos(){
    return this.http.get<Models[]>(this.apiURL);
  }
}
