import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login/login.component';
import { RegisterComponent } from './register/register/register.component';
import { ShowPizzasComponent } from './show-pizzas/show-pizzas.component';

const routes: Routes = [
  {
    path: 'orders',
    loadChildren: () =>
      import('../app/orders/orders.module').then((m) => m.OrdersModule),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('../app/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'cart',
    loadChildren: () =>
      import('../app/cart/cart.module').then((m) => m.CartModule),
  },
  {
    path: 'login',
    component:LoginComponent
  },
  {
    path: 'register',
    component:RegisterComponent
  },
  {
    path:'pizza',
    loadChildren: () =>
    import('../app/show-pizzas/show-pizzas.module').then((m) => m.ShowPizzasModule),  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
