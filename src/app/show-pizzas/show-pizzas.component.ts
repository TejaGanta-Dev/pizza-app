import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DailogPopupComponent } from '../Service/dailog-popup/dailog-popup.component';
import { NgxSpinnerService } from 'ngx-spinner';
import { ApiServiceService } from '../Service/Api-Service/api-service.service';
import { HelperServiceService } from '../Service/helperService/helper-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-pizzas',
  templateUrl: './show-pizzas.component.html',
  styleUrls: ['./show-pizzas.component.css'],
})
export class ShowPizzasComponent implements OnInit{
  constructor(
    public dialog: MatDialog,
    private spinner:NgxSpinnerService,
    private api:ApiServiceService,
    private helper:HelperServiceService,
    private route:Router
  ) {
    const customerData=this.helper.getLoginUserData();
    if(customerData?.customerId===undefined){
    this.route.navigate(['/login'])
    }
  }
  pizzas:any=[1,2,3,4,5,6,7,8,9]

ngOnInit(): void {
  this.spinner.show()
  this.getAllPizza()
}


spinnerTimeOut(){
  setTimeout(() => {
    this.spinner.hide()
  }, 1000);  
}
  getAllPizza() {
    this.spinner.show()
    this.api.getAllPizza().subscribe(
      (res) => {
        console.log(res);
        this.pizzas=res
        this.spinnerTimeOut();
          if(res){
            return
        }
      },
      (err) => {
        this.spinnerTimeOut();
        alert(err.error.message);
      }
    );
  }
  addToCart(pizza:any){
    let data={
      product:pizza,
      title:'ADD_TO_CART',
      productImageSrc:''
    }
    console.log(pizza);
    
    this.openDialog(data)
  }
  private dialogRef: any;
  public openDialog(
    data: any,
  ): void {
    this.dialogRef = false;
    if (!this.dialogRef) {
      this.dialogRef = this.dialog.open(DailogPopupComponent, {
        width:'370px',
        height:'490px',
        data: data,
      });
    }
    this.dialogRef.afterClosed().subscribe((result: any) => {
      if (result) {
        if (result?.values?.title === "ADD_TO_CART") {
        }
      }
    });
  }
  getCategory(value:any){
    if(value==='Vegetarian'){
      return '/assets/img/veg.png'
    }
    else{
      return '/assets/img/NonVeg.png'
    }
  }
  getPizzaImageSource(val:number): string {
    return `/assets/img/Pizza${val}.png`;
  }
}
