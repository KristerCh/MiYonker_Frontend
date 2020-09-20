import { Component, OnInit } from '@angular/core';
import { Brands } from '../../Modelos/brands';
import { BrandsService } from '../../services/brands.service';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css']
})
export class BrandsComponent implements OnInit {
  marcas: Brands[];

  constructor(private _brandsService: BrandsService) { }

  ngOnInit() {
    this.obtenerMarcas();
  }

  
  obtenerMarcas(){
    this._brandsService.obtenerMarcas().subscribe(data => {
      this.marcas = data;
    });
  }
}
