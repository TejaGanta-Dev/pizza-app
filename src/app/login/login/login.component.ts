import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService } from 'src/app/Service/Api-Service/api-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private route: Router, private api: ApiServiceService) {}
  loginSchema: any = {
    id: '',
    password: '',
  };
  customerLogin = true;
  customerLoginF() {
    this.customerLogin = !this.customerLogin;
  }
  loginAsUser() {
    if (this.loginSchema.password.length > 5 && this.loginSchema.id.length) {
      console.log(this.loginSchema);
      return;
    }
  }
  loginAsCustomer(body:any) {
    this.api.loginAsCustomer(body).subscribe(
      (res) => {
        if (res) {
        }
      },
      (err) => {
        alert(err.error.message);
      }
    );
  }
  loginAsAdmin(body:any) {
    this.api.loginAsAdmin(body).subscribe(
      (res) => {
        if (res) {
        }
      },
      (err) => {
        alert(err.error.message);
      }
    );
  }
  navigateToLogin() {
    this.route.navigate(['/register']);
  }
}
