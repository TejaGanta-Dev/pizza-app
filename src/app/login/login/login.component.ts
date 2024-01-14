import { JsonPipe } from '@angular/common';
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
  constructor(private route: Router, private api: ApiServiceService,private helper:HelperServiceService,private spinner:NgxSpinnerService) {
    const customerData=this.helper.getLoginUserData();
    if(customerData?.customerId){
    this.route.navigate(['/pizza'])
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
  loginAsCustomer(body:any) {
    this.spinner.show()
    this.api.loginAsCustomer(body).subscribe(
      (res) => { 
        this.spinnerTimeOut()          
        if (res) {
          this.route.navigate(['/pizza'])
          this.helper.saveLoginUser(res);
          return    
        }
      },
      (err) => {     
        this.spinnerTimeOut()    
        alert(err.error.message);
      }
    );
  }

  spinnerTimeOut(){
    setTimeout(() => {
      this.spinner.hide()
    }, 1000);  
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
