import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HelperServiceService } from './Service/helperService/helper-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
constructor(private helper:HelperServiceService,private router:Router){
  const customerData=this.helper.getLoginUserData();
if(customerData?.customerId){
this.router.navigate(['/pizza'])
}else{
this.router.navigate(['/login'])
}
}  title = 'pizza-app';


}
