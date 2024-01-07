import { Component } from '@angular/core';
import { ApiServiceService } from 'src/app/Service/Api-Service/api-service.service';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent {
  constructor(private api:ApiServiceService){

  }
  myOrdersList:any=[];
  CustomerId:any='';
  getOrders(){
    this.api.getOrders(this.CustomerId).subscribe((res)=>{

    },(err)=>{
      
    })
  }

}
