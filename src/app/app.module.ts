import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {  HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login/login.component';
import { RegisterComponent } from './register/register/register.component';
import { ShowPizzasComponent } from './show-pizzas/show-pizzas.component';
import { FooterComponent } from './footer/footer.component';
import { AuthHeaderComponent } from './show-pizzas/auth-header/auth-header.component';
import {MatDialogModule} from '@angular/material/dialog';
import { DailogPopupComponent } from './Service/dailog-popup/dailog-popup.component';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  declarations: [AppComponent, LoginComponent, RegisterComponent, ShowPizzasComponent, FooterComponent,AuthHeaderComponent, DailogPopupComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    NgxSpinnerModule.forRoot({ type: 'ball-atom' })
  
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
