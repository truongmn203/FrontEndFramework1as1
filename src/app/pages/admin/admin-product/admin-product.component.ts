import { ProductService } from './../../../service/product.service';
import { Component } from '@angular/core';
import { IProduct } from 'src/app/interfaces/Product';

@Component({
  selector: 'app-admin-product',
  templateUrl: './admin-product.component.html',
  styleUrls: ['./admin-product.component.scss']
})
export class AdminProductComponent {
products:IProduct[]=[];
constructor(private productService:ProductService) {
  this.productService.getProducts().subscribe(data =>{
    this.products = data;
  },error =>{
    console.log(error.message);
  })
}
 removeItem(id: any) {
  this.productService.deleteProduct(id).subscribe(() =>{
    console.log("Delete ");
    
  })
 }
}
