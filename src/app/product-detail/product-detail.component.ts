import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from '../interfaces/product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {
  product!:IProduct
  constructor(private productService: ProductService, private router:ActivatedRoute){
    this.router.paramMap.subscribe(
      {
        next:(params)=>{
          let id = String(params.get('id'))
          this.productService.getProductById(id).subscribe(
            (data)=>{
              this.product = data
            }
          )
        }
      }
    )
  }
}