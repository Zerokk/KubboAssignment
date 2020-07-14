import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/product_list',
    pathMatch: 'full'
  },
  {
    path: 'product_list',
    loadChildren: () => import(`./ProductList/product-list-module.module`).then(m => m.ProductListModuleModule) 
  },
  {
    path: 'product/:id',
    loadChildren: () => import(`./ViewProduct/view-product-module.module`).then(m => m.ViewProductModule) 
  }

];
 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
