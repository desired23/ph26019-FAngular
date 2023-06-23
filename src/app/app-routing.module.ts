import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { LayoutClientComponent } from './components/layouts/layout-client/layout-client.component';
import { LayoutAdminComponent } from './components/layouts/layout-admin/layout-admin.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { ProductsComponent } from './pages/admin/products/products.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';

const routes: Routes = [

  {
    path: '',
    component: LayoutClientComponent,
    children: [
      { path: "", redirectTo: "home", pathMatch: "full" },
      { path: 'home', component: HomeComponent },
      { path: 'products/:id', component: ProductDetailComponent },

      { path: 'about', component: AboutComponent },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
    ]
  },


  {
    path: 'admin',
    component: LayoutAdminComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'products', component: ProductsComponent },
    ],
  },
  { path: '**', component: NotFoundPageComponent },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
