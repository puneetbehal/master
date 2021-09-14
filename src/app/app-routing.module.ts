import { ViewOrdersComponent } from './component/orders/view-orders/view-orders.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './component/about/about.component';
import { AdminComponent } from './component/admin/admin.component';
import { OrdersComponent } from './component/orders/orders.component';
import { ProductsComponent } from './component/products/products.component';
import { UsersComponent } from './component/users/users.component';
import { UserSignUpComponent } from './component/users/user-sign-up/user-sign-up.component';
//testing all

const routes: Routes = [

{path:'about', component:AboutComponent},
{path:'admin', component:AdminComponent},
{path:'orders', component:OrdersComponent},
{path:'products', component:ProductsComponent},
{path:'users', component:UsersComponent},
{path:'orders/:id', component:ViewOrdersComponent},
{path:'users/sign-up', component:UserSignUpComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
