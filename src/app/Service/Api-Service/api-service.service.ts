import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http: HttpClient) { }
  BASE_URL='http://localhost:8080/api/v1'


  registerCustomer(body:any): Observable<any> {
    return this.http.post<any>(`${this.BASE_URL}/customer/add`,body);
  }

  loginAsCustomer(body:any): Observable<any> {
    return this.http.post<any>(`${this.BASE_URL}/customer/login`,body);
  }

  viewCustomerProfile(customerId:any): Observable<any> {
    return this.http.get<any>(`${this.BASE_URL}customer/view/${customerId}`);
  }

  getAllPizza(): Observable<any>{
    return this.http.get<any>(`${this.BASE_URL}/pizza/view`);
  }
  postPizza(body:any): Observable<any> {
    return this.http.post<any>(`${this.BASE_URL}/admin/pizza/add`,body);
  }

  deletePizza(pizzaId:any): Observable<any> {
    return this.http.delete<any>(`${this.BASE_URL}/admin/pizza/delete/${pizzaId}`);
  }
  


  updatePizza(pizzaid:number,body:any): Observable<any> {
    return this.http.put<any>(`${this.BASE_URL}/admin/pizza/update/${pizzaid}`,body);
  }
  

  
  // updateCustomerProfile(body:any): Observable<any> {
  //   return this.http.put<any>(`${this.BASE_URL}customer/update/${customerId}`,body);
  // }

  // DeleteCustomerAccount(body:any): Observable<any> {
  //   return this.http.put<any>(`${this.BASE_URL}customer/delete/${customerId}`,body);
  // }

  // getPizzaDetails(body:any): Observable<any> {
  //   return this.http.get<any>(`${this.BASE_URL}pizza/view/${pizzaId}`,body);
  // }

  // getAllToppings(): Observable<any>{
  //   return this.http.get<any>(`${this.BASE_URL}/pizzaToppings/view`);
  // }

  addPizzaToCart(customerId:number,pizzaId:number  ,body:any): Observable<any> {
    return this.http.post<any>(`${this.BASE_URL}/customer/cart/addPizza/${customerId}/${pizzaId}`,body);
  }

  viewAllCart(customerId:any): Observable<any> {
    return this.http.get<any>(`${this.BASE_URL}/customer/cart/viewAllPizzas/${customerId}`);
  }

  modifyCartItem(itemId:number,body:any): Observable<any> {
    return this.http.put<any>(`${this.BASE_URL}/customer/cart/updatePizza/${itemId}`,body);
  }

  removeCartItem(itemId:any): Observable<any> {
    return this.http.delete<any>(`${this.BASE_URL}/customer/cart/deletePizza/${itemId}`);
  }

  placeOrder(customerId:any): Observable<any> {
    return this.http.post<any>(`${this.BASE_URL}/order/placeOrder/${customerId}`,{});
  }

  getAllOrders(customerId:any): Observable<any> {
    return this.http.get<any>(`${this.BASE_URL}/order/views/${customerId}`);
  }

  // SpecificOrder(body:any): Observable<any> {
  //   return this.http.get<any>(`${this.BASE_URL} order/view/${orderId}`,body);
  // }

  
  // addFeedback(body:any): Observable<any> {
  //   return this.http.put<any>(`${this.BASE_URL} order/feedback/add/${orderId}/good aroma and texture`,body);
  // }

  // viewFeedback(body:any): Observable<any> {
  //   return this.http.put<any>(`${this.BASE_URL} order/feedbacks/view/${customerId}`,body);
  // }

 
  getOrders(orderId:any): Observable<any> {
  return this.http.get<any>(`${this.BASE_URL}/${orderId}`);
}



//admin

loginAsAdmin(body:any): Observable<any> {
  return this.http.post<any>(`${this.BASE_URL}/admin/login`,body);
}

trackOrder(orderId:any): Observable<any> {
  return this.http.get<any>(`${this.BASE_URL}/order/view/${orderId}`);
}


private sharedCartData_: Subject<any> = new Subject<any>();
sharedDataForCart: Observable<any> = this.sharedCartData_.asObservable();
setDataFromParentCart(data:any) {
  this.sharedCartData_.next(data);
}

}