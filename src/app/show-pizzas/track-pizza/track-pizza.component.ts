import { Component } from '@angular/core';
import { ApiServiceService } from 'src/app/Service/Api-Service/api-service.service';

@Component({
  selector: 'app-track-pizza',
  templateUrl: './track-pizza.component.html',
  styleUrls: ['./track-pizza.component.css'],
})
export class TrackPizzaComponent {
  constructor(private api: ApiServiceService) {}
  OrderId: any = '';
  trackOrder() {
    this.api.trackOrder(this.OrderId).subscribe((res)=>{

    },(err)=>{
      
    })
  }
}
