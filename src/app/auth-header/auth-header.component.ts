import { RtlScrollAxisType } from '@angular/cdk/platform';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HelperServiceService } from 'src/app/Service/helperService/helper-service.service';

@Component({
  selector: 'app-auth-header',
  templateUrl: './auth-header.component.html',
  styleUrls: ['./auth-header.component.css']
})
export class AuthHeaderComponent implements OnInit {
  constructor(private helper: HelperServiceService, private route: Router) {
    this.adminLogged=false;
    if (this.customerData?.customerId === undefined) {
      this.route.navigate(['/login'])
      return
    }
  }
  adminLogged:boolean=false;
  ngOnInit(): void {
   //  this.adminLogged=true;
    this.helper.sharedDataForDashboard$.subscribe((res) => {
      console.log(res);
      setTimeout(() => {
        this.getLoginOrLogout()
      }, 1000);
    })
  }
  customerData = this.helper.getLoginUserData();
  logout() {
    this.helper.logoutUser();
  }
  getLoginOrLogout() {
    this.customerData = this.helper.getLoginUserData();
    const adminData = this.helper.getLoginAdminData();
    if (this.customerData?.customerId === undefined) {
      if(adminData?.username==='admin'){
        this.adminLogged=true;
        return 'Logout'
      }
      else{
        this.adminLogged=false;
      }
      return 'Login'
    }
    return 'Logout'
  }
}
