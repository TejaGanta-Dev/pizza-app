import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManagePizzasComponent } from './manage-pizzas/manage-pizzas.component';

const routes: Routes = [
  {
    path:'',
    redirectTo: 'managepizzas',
    pathMatch:'full'

  },
  {
    path: 'managepizzas',
    component: ManagePizzasComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
