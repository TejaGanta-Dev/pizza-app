import { Component } from '@angular/core';
import { HelperServiceService } from 'src/app/Service/helperService/helper-service.service';

@Component({
  selector: 'app-auth-header',
  templateUrl: './auth-header.component.html',
  styleUrls: ['./auth-header.component.css']
})
export class AuthHeaderComponent {
  constructor(private helper:HelperServiceService){}
  logout(){
    this.helper.logoutUser();

  }
}
