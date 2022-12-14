import { DialogComponent } from './dialog/dialog.component';
import { SliderComponent } from './slider/slider.component';
import { CartComponent } from './cart/cart.component';
import { ProductsComponent } from './products/products.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', redirectTo:'products', pathMatch:'full'},
  {path:'products', component:ProductsComponent},
  {path:'cart', component:CartComponent},
  {path:'slider',component:SliderComponent},
  {path:'dialog', component:DialogComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
