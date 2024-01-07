import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShowPizzasRoutingModule } from './show-pizzas-routing.module';
import { TodaysSpecialComponent } from './todays-special/todays-special.component';
import { TrackPizzaComponent } from './track-pizza/track-pizza.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';



@NgModule({
  declarations: [
    TodaysSpecialComponent,
    TrackPizzaComponent,
    MyOrdersComponent
  ],  imports: [
    CommonModule,
    ShowPizzasRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ShowPizzasModule { }
