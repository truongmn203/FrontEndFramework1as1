import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminProductComponent } from './pages/admin/admin-product/admin-product.component';
import { AdminProductAddComponent } from './pages/admin/admin-product-add/admin-product-add.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AdminProductEditComponent } from './pages/admin/admin-product-edit/admin-product-edit.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';

const routes: Routes = [
 {path:"admin", component:AdminLayoutComponent, children:[
  {path:"", redirectTo:"dashboard", pathMatch:"full"},
  {path:"dashboard", component:DashboardComponent},
  {path:"products", component:AdminProductComponent},
  {path:"products/add", component:AdminProductAddComponent},
  {path:"products/edit/:id", component:AdminProductEditComponent}
]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
