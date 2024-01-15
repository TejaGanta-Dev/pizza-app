import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ApiServiceService } from 'src/app/Service/Api-Service/api-service.service';
import { DailogPopupComponent } from 'src/app/Service/dailog-popup/dailog-popup.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-manage-pizzas',
  templateUrl: './manage-pizzas.component.html',
  styleUrls: ['./manage-pizzas.component.css']
})
export class ManagePizzasComponent implements OnInit {
  constructor(private spinner: NgxSpinnerService, private dialog: MatDialog, private api: ApiServiceService) {

  }
  ngOnInit(): void {
    this.getAllPizza()
  }
  getPizzas: any = []

  getAllPizza() {
    this.spinner.show()
    this.api.getAllPizza().subscribe(
      (res) => {
        console.log(res);
        this.getPizzas = res
        this.spinnerTimeOut();
        if (res) {
          return
        }
      },
      (err) => {
        this.spinnerTimeOut();
        alert(err.error.message);
      }
    );
  }
  addPizza() {
    let editVar = this.getPizzas.some((item: any) => {
      return item.editPizza === true;
    });
    console.log(editVar);
    if (!editVar) {
      this.getPizzas = [{ editPizza: true, pizzaCategory: 'Vegetarian' }, ...this.getPizzas]
    }
    else {
      alert("Please Save Pizza")
    }
  }
  validationForPizza(pizza:any){
    return true? pizza.pizzaName?.length>4&&pizza.price:false;
  }
  savePizza(pizza: any) {
    const body = {
      "pizzaName": pizza.pizzaName,
      "pizzaCategory": pizza.pizzaCategory,
      "price": pizza.price
    }
    if (this.validationForPizza(pizza)) {
    if (pizza?.pizzaId) {
        this.updatePizza(pizza.pizzaId, body);
        pizza.editPizza = false;
        return
      }
    else {
      this.postPizza(body);
      pizza.editPizza = false;
      return
    }
  }else{
    alert("Please Provide Pizza Details")
  }
  }

  editPizza(pizza: any) {
    let editVar = this.getPizzas.some((item: any) => {
      return item.editPizza === true;
    });
    console.log(editVar);
    if (!editVar) {
      pizza.editPizza = true;
    }
    else {
      alert("Please Save Pizza")
    }
  }

  postPizza(body: any) {
    this.spinner.show()
    this.api.postPizza(body).subscribe(
      (res) => {
        if (res) {
          this.getAllPizza()
        }
        this.spinnerTimeOut()
      },
      (err) => {

        this.spinnerTimeOut();
        alert(err.error.message);
      }
    );
  }

  private dialogRef: any;
  public openDialog(
    data: any,
  ): void {
    this.dialogRef = false;
    if (!this.dialogRef) {
      this.dialogRef = this.dialog.open(DailogPopupComponent, {
        width: '300px',
        height: '150px',
        data: data,
      });
    }
    this.dialogRef.afterClosed().subscribe((result: any) => {
      if (result) {
        console.log(result);

        if (result?.values === "YES") {
          this.deletPizza(data.product)

        }
      }
    });
  }
  updatePizza(pizzaId: number, body: any) {
    this.spinner.show()
    this.api.updatePizza(pizzaId, body).subscribe(
      (res) => {
        if (res) {
          this.getAllPizza()
        }
        this.spinnerTimeOut()

      },
      (err) => {

        this.spinnerTimeOut()
        alert(err.error.message);
      }
    );
  }
  deletePizzaConfirmDailog(pizza: any) {
    this.openDialog({
      title: 'DELETE-PIZZA', product: pizza
    })
  }
  deletPizza(pizza: any) {
    this.spinner.show()
    this.api.deletePizza(pizza.pizzaId).subscribe(
      (res) => {
        this.spinnerTimeOut()

      },
      (err) => {
        if (err.status === 200) {
          this.getAllPizza()
          return
        }
        this.spinnerTimeOut()
        alert(err.error.message);
      }
    );
  }

  spinnerTimeOut() {
    setTimeout(() => {
      this.spinner.hide()
    }, 1000);
  }
}
