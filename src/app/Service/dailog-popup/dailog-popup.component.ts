import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {  Router } from '@angular/router';
import {  NgxSpinnerService } from 'ngx-spinner';
import { ApiServiceService } from '../Api-Service/api-service.service';
import { HelperServiceService } from '../helperService/helper-service.service';

@Component({
  selector: 'app-dailog-popup',
  templateUrl: './dailog-popup.component.html',
  styleUrls: ['./dailog-popup.component.css'],
})
export class DailogPopupComponent implements OnInit{
  constructor(
    public dialogRef: MatDialogRef<DailogPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private spinner:NgxSpinnerService,
    private api:ApiServiceService,
    private helper:HelperServiceService,
    private route:Router
  ) {
    this.modelData = this.data;
    console.log(this.modelData);
  }
  ngOnInit(): void {
      if(this.modelData.title='ADD_TO_CART'){
        this.modelData.pepporoniCount=1;
        this.modelData.product.productQuantity=1;
      }
  }
  modelData: any;
  productQuantity:any=1
  closePopup(res?: any) {
    this.dialogRef.close({ values: res });
  }
  getOrderName(orderList: any) {
    let OrderName=''
    for (var i = 0; i < orderList.length; i++) {
      OrderName+= orderList[i]+', '
    }
    return OrderName;
  }
  getPizzaImageSource(val:any){
    return  `/assets/img/Pizza${val}.png`  }
    plusQuantity(value:number){
      this.modelData.pepporoniCount+=1
    }
    minusQuantity(value:number){
      if(value!=0){
        this.modelData.pepporoniCount--
      }
    }
    spinnerTimeOut(){
      setTimeout(() => {
        this.spinner.hide()
      }, 1000);  
    }
    allTopings:any=["Cheese","Black Olives","Onions","Green Capsicum","Mushrooms","Chicken Pepperoni","Paneer"];
    selectedTopings:any='Cheese'
    addToCart() {
      this.spinner.show();
      const customerDetails=this.helper.getLoginUserData();
      let body={
        "pizzaQuantity":this.modelData?.product.productQuantity,
        "toppingName":[this.selectedTopings],
        "toppingQuantity":this.modelData.pepporoniCount
      }
      this.api.addPizzaToCart(customerDetails.customerId,this.modelData.product.pizzaId, body).subscribe(
        (res) => { 
          this.spinnerTimeOut()          
          if (res) {
            this.route.navigate(['/cart'])
            return    
          }
        },
        (err) => {     
          this.spinnerTimeOut();
          console.log(err.status);
          if(err.status===200) {
            this.route.navigate(['/cart']);
            this.closePopup()
            return
          }
          alert(err.error.message);
        }
      );
    }
}
