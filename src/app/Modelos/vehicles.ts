import {Models} from './Models';
import{ Brands} from './Brands';

export class Vehicles{
    id: Number;
    brandId: Number;
    year: Number;
    modelId: Number;
    brands:Brands;
    models: Models;
}