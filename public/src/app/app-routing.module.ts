import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductComponent } from './product/product.component';
import { ShowProductComponent } from './show-product/show-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { CreateProductComponent } from './create-product/create-product.component';


const routes: Routes = [
	{ path: 'products', component: ProductComponent }, 
	{ path: 'products/new', component: CreateProductComponent },
	{ path: 'products/:id', component: ShowProductComponent },
	{ path: 'products/:id/edit', component: EditProductComponent },
	{ path: '', pathMatch: 'full', redirectTo: '/products' }
	];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
