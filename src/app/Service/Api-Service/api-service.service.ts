import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http: HttpClient) { }
  BASE_URL=''

loginAsCustomer(body:any): Observable<any> {
  return this.http.post<any>(`${this.BASE_URL}/`,body);
}
loginAsAdmin(body:any): Observable<any> {
  return this.http.post<any>(`${this.BASE_URL}/`,body);
}

registerCustomer(body:any): Observable<any> {
  return this.http.post<any>(`${this.BASE_URL}/`,body);
}
trackOrder(orderId:any): Observable<any> {
  return this.http.get<any>(`${this.BASE_URL}/${orderId}`);
}

getOrders(orderId:any): Observable<any> {
  return this.http.get<any>(`${this.BASE_URL}/${orderId}`);
}

private sharedCartData_: Subject<any> = new Subject<any>();
sharedDataForCart: Observable<any> = this.sharedCartData_.asObservable();
setDataFromParentCart(data:any) {
  this.sharedCartData_.next(data);
}

}