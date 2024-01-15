import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HelperServiceService {
  logoutUser() {
    localStorage.removeItem('loginedUserDetails');
    localStorage.removeItem('loginedAdminDetails');
    this.setDataFromDashboard(undefined)
  }

  saveLoginUser(data: any) {
    localStorage.setItem('loginedUserDetails', JSON.stringify(data));
  }

  getLoginUserData() {
    let customerDetails: any = localStorage.getItem('loginedUserDetails')
    return JSON.parse(customerDetails);
  }

  saveLoginAdmin(data: any) {
    localStorage.setItem('loginedAdminDetails', JSON.stringify(data));
  }

  getLoginAdminData() {
    let customerDetails: any = localStorage.getItem('loginedAdminDetails')
    return JSON.parse(customerDetails);
  }

  private sharedDashBoardData: Subject<any> = new Subject<any>();
  sharedDataForDashboard$: Observable<any> = this.sharedDashBoardData.asObservable();
  setDataFromDashboard(data:any) {
    this.sharedDashBoardData.next(data);
  }


}
