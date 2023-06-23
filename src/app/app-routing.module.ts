import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductCreateComponent } from './product-create/product-create.component';
import { ProductUpdateComponent } from './product-update/product-update.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {path:"", pathMatch:'full', redirectTo:"products"},
  {path:"products", component:ProductListComponent},
  {path:"products/detail/:id", component:ProductDetailComponent},
  {path:"products/create", component:ProductCreateComponent},
  {path:"products/update/:id", component:ProductUpdateComponent},
  {path:"**", component:NotFoundComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
