import { Component } from '@angular/core';
import { IProduct } from '../interfaces/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
products!:IProduct[]
constructor(private productService: ProductService){
  this.productService.getProducts().subscribe(
  {
    next: (data)=>{
      this.products = data
    },
    error: (error)=>console.log(error)
  }
  )
}
onHandleDelete(id:string){
  if(window.confirm('Xoa?')){
    this.productService.delProduct(id).subscribe(
      ()=>{
        this.products = this.products.filter(item=>item.id !==id)
      }
    )
  }
}
}
