import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelperServiceService {
  logoutUser() {
    localStorage.removeItem('loginedUserDetails');
  }

  saveLoginUser(data: any) {
    localStorage.setItem('loginedUserDetails', JSON.stringify(data));
  }

  getLoginUserData() {
    let customerDetails: any = localStorage.getItem('loginedUserDetails')
    return JSON.parse(customerDetails);
  }


}
