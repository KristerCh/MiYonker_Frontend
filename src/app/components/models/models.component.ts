import { Component, OnInit } from '@angular/core';
import { ModelsService } from '../../services/models.service';
import { Models } from '../../Modelos/models';

@Component({
  selector: 'app-models',
  templateUrl: './models.component.html',
  styleUrls: ['./models.component.css']
})
export class ModelsComponent implements OnInit {
  modelos: Models[];

  constructor(private _modelsService: ModelsService) { }

  ngOnInit() {
    this.obtenerModelos();
  }

  obtenerModelos(){
    this._modelsService.obtenerModelos().subscribe(data => {
      this.modelos = data;
    });
  }

}
