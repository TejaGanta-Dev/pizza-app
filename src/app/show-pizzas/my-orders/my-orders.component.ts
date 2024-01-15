import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ApiServiceService } from 'src/app/Service/Api-Service/api-service.service';
import { HelperServiceService } from 'src/app/Service/helperService/helper-service.service';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent {
  constructor(private api: ApiServiceService, private spinner: NgxSpinnerService, private helper: HelperServiceService, private route: Router) {
    this.getAllOrders()
  }
  myOrdersList: any = [];
  CustomerId: any = '';
  spinnerTimeOut() {
    setTimeout(() => {
      this.spinner.hide()
    }, 1000);
  }
  getAllOrders() {
    this.spinner.show();
    const custDetails = this.helper.getLoginUserData();
    if (custDetails?.customerId === undefined) {
      this.spinnerTimeOut();
      this.route.navigate(['/login'])
    }
    this.api.getAllOrders(custDetails.customerId).subscribe(
      (res) => {
        console.log(res);
        this.spinnerTimeOut();
        if (res) {
          this.myOrdersList = res;
          return
        }
      },
      (err) => {
        this.spinnerTimeOut();
        alert(err.error.message);
      }
    );
  }
  getOrderName(orderList: any) {
    let OrderName = ''
    for (var i = 0; i < orderList.length; i++) {
      OrderName += orderList[i] + ', '
    }
    return OrderName;
  }

}
