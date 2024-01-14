import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ApiServiceService } from 'src/app/Service/Api-Service/api-service.service';
import { HelperServiceService } from 'src/app/Service/helperService/helper-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  constructor(
    public dialog: MatDialog,
    private spinner: NgxSpinnerService,
    private api: ApiServiceService,
    private helper: HelperServiceService,
    private route: Router
  ) {
    this.viewAllCart()
  }
  getPizzas: any = [];
  allTopings: any = ["Cheese", "Black Olives", "Onions", "Green Capsicum", "Mushrooms", "Chicken Pepperoni", "Paneer"];
  getCategory(value: any) {
    if (value === 'Vegetarian') {
      return '/assets/img/veg.png'
    }
    else {
      return '/assets/img/NonVeg.png'
    }
  }
  getPizzaImageSource(val: number): string {
    return `/assets/img/Pizza${val}.png`;
  }
  spinnerTimeOut() {
    setTimeout(() => {
      this.spinner.hide()
    }, 1000);
  }
  viewAllCart() {
    this.spinner.show();
    const customerDetails = this.helper.getLoginUserData();
    this.api.viewAllCart(customerDetails.customerId).subscribe(
      (res) => {
        console.log(res);
        this.spinnerTimeOut();
        if (res) {
          this.getPizzas = res
          return
        }
      },
      (err) => {
        this.spinnerTimeOut();
        alert(err.error.message);
      }
    );
  }

  plusQuantity(pizza: any) {
    pizza.toppingQuantity += 1
    this.updatePizza(pizza)
  }
  minusQuantity(pizza: any) {
    if (pizza.toppingQuantity != 0) {
      pizza.toppingQuantity--;
      this.updatePizza(pizza)
    }
  }
  deleteCart(pizza: any) {
    this.spinner.show()
    this.api.removeCartItem(pizza.itemId).subscribe(
      (res) => {
        console.log(res);
        this.spinnerTimeOut();
        if (res) {
          return
        }
      },
      (err) => {
        console.log(err.status);
        if (err.status === 200) {
          this.viewAllCart();
          return
        }
        this.spinnerTimeOut();
        alert(err.error.message);
      }
    );
  }

  updatePizza(pizza: any) {
    const body = {
      "pizzaQuantity": parseInt(pizza.pizzaQuantity),
      "toppings": [pizza.toppingName[0]],
      "toppingQuantity": pizza.toppingQuantity
    }
    this.modifyCartItem(pizza, body);
  }

  modifyCartItem(pizza: any, body: any) {
    this.spinner.show()
    this.api.modifyCartItem(pizza.itemId, body).subscribe(
      (res) => {
        console.log(res);
        this.spinnerTimeOut();
        if (res) {
          return
        }
      },
      (err) => {
        console.log(err.status);
        if (err.status === 200) {
          this.viewAllCart();
          return
        }
        this.spinnerTimeOut();
        alert(err.error.message);
      }
    );
  }
  placeOrder() {
    this.spinner.show()
    const customerDetails = this.helper.getLoginUserData();
    this.api.placeOrder(customerDetails.customerId).subscribe(
      (res) => {
        console.log(res);
        this.spinnerTimeOut();
        if (res) {
          return
        }
      },
      (err) => {
        console.log(err.status);
        if (err.status === 200) {
          alert('Order Successfully Placed')
          this.route.navigate(['/pizza/orders']);
          return
        }
        this.spinnerTimeOut();
        alert(err.error.message);
      }
    );
  }
  getPizzaPrice(pizzaList: any) {
    const price = pizzaList.reduce((acc: number, curr: any) => {
      return acc += curr.totalPrice;
    }, 0)
    return price
  }
}
