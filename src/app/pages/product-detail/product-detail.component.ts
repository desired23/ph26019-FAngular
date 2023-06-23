import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { ActivatedRoute } from '@angular/router';
import { products } from 'src/app/datas/products/products';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent {
  products = products
  product:any
  constructor(private route: ActivatedRoute) { }
  ngOnInit() {
    let id = this.route.snapshot.paramMap.get("id")
    this.product= this.getProductById(String(id))
     console.log(this.product)
  }
  getProductById(id: string) {
    return this.products.find(product => product.id == id);
  }
 
}
