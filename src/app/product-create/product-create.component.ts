import { Component } from '@angular/core';
import { UntypedFormBuilder, Validators } from '@angular/forms';
import { ProductService } from '../services/product.service';
import { IProduct } from '../interfaces/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent {
  submitForm = this.formBuilder.group({
    name:["",[Validators.required,Validators.minLength(6),Validators.maxLength(255)]],
    price:[0,[Validators.required,Validators.min(0)]],
    desc:["",[Validators.minLength(6),Validators.maxLength(255)]],

  })
  constructor(private productService: ProductService, private formBuilder: UntypedFormBuilder, private navi: Router){
  }
  onHandleSubmit(){
    let newProduct:IProduct = {
      id: '',
      name: this.submitForm.value.name,
      price: this.submitForm.value.price,
      desc: this.submitForm.value.desc,
    }
    this.productService.addProduct(newProduct).subscribe(()=>{
      alert("success")
      this.navi.navigate(['/products'])
    })
  }
}
