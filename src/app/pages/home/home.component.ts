import { Component } from '@angular/core';
import { products } from 'src/app/datas/products/products';
// import { products } from './../../datas/products/products';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  fproducts= products
  products= products
  
  data:any
searchValue:string =""
onSubmit(){
  this.data = this.fproducts.filter(item=>
  item.name.toLowerCase().includes(this.searchValue.toLowerCase())
    
  ) 
  console.log(this.data)
  this.products= this.data
}
}
