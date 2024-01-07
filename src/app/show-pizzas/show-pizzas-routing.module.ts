import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowPizzasComponent } from './show-pizzas.component';
import { TrackPizzaComponent } from './track-pizza/track-pizza.component';
import { TodaysSpecialComponent } from './todays-special/todays-special.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'view',
    pathMatch: 'full',
  },
  {
    path:'view',
    component:ShowPizzasComponent
  },
  {
    path:'track',
    component:TrackPizzaComponent
  },
  {
    path:'today-special',
    component:TodaysSpecialComponent
  }
  ,
  {
    path:'orders',
    component:MyOrdersComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShowPizzasRoutingModule { }
