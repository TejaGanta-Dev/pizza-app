import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin/admin.component';
import { ManagePizzasComponent } from './manage-pizzas/manage-pizzas.component';


@NgModule({
  declarations: [
    AdminComponent,
    ManagePizzasComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
