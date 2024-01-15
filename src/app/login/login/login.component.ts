import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ApiServiceService } from 'src/app/Service/Api-Service/api-service.service';
import { HelperServiceService } from 'src/app/Service/helperService/helper-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private route: Router, private api: ApiServiceService, private helper: HelperServiceService, private spinner: NgxSpinnerService) {
    const customerData = this.helper.getLoginUserData();
    if (customerData?.customerId) {
      this.route.navigate(['/pizza'])
    }
    const adminData = this.helper.getLoginAdminData();
    if(adminData?.username==='admin'){
      this.route.navigate(['/admin'])
    }
  }
  loginSchema: any = {
    username: '',
    password: '',
  };
  customerLogin = true;
  customerLoginF() {
    this.customerLogin = !this.customerLogin;
  }
  loginAsUser() {
    if (this.loginSchema.password.length > 5 && this.loginSchema.username.length) {
      this.loginAsCustomer(this.loginSchema);
      return;
    }
  }

  disableButton() {
    if (this.loginSchema.password.length >= 5 && this.loginSchema.username.length) {
      return false;
    }
    else {
      return !false
    }
  }

  adminOrCustomer() {
    return this.isAdminToggle ? 'Admin' : 'Customer';
  }
  customerorAdmin() {
    return this.isAdminToggle ? 'Customer' : 'Admin';

  }
  loginAsCustomer(body: any) {
    this.spinner.show()
    this.api.loginAsCustomer(body).subscribe(
      (res) => {
        this.spinnerTimeOut()
        if (res) {
          this.route.navigate(['/pizza'])
          this.helper.saveLoginUser(res);
          this.helper.setDataFromDashboard(true)
          return
        }
      },
      (err) => {
        this.spinnerTimeOut()
        alert(err.error.message);
      }
    );
  }

  spinnerTimeOut() {
    setTimeout(() => {
      this.spinner.hide()
    }, 1000);
  }
  isAdminToggle: any = false;
  toggleBoolean() {
    this.loginSchema = {
      username: '',
      password: '',
    }
    this.isAdminToggle = !this.isAdminToggle;
  }

  loginAsAdmin() {
    this.spinner.show()
    this.api.loginAsAdmin(this.loginSchema).subscribe(
      (res) => {
        this.spinnerTimeOut()
      },
      (err) => {
        this.spinnerTimeOut()
        if (err.status) {
          this.helper.saveLoginAdmin(this.loginSchema);
          this.route.navigate(['/admin'])
          return
        }
        alert(err.error.message);
      }
    );
    return;
  }

  navigateToLogin() {
    this.route.navigate(['/register']);
  }
}
