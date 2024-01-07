import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DailogPopupComponent } from '../Service/dailog-popup/dailog-popup.component';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-show-pizzas',
  templateUrl: './show-pizzas.component.html',
  styleUrls: ['./show-pizzas.component.css'],
})
export class ShowPizzasComponent {
  constructor(
    public dialog: MatDialog,
    private spinner:NgxSpinnerService
  ) {
  }
  pizzas=[1,2,3,4,5,6,7,8,9]

  addToCart(){
    let data={
      prodductId:'245678765432'
    }
    this.openDialog(data)
  }
  private dialogRef: any;
  public openDialog(
    data: any,
  ): void {
    this.dialogRef = false;
    if (!this.dialogRef) {
      this.dialogRef = this.dialog.open(DailogPopupComponent, {
        width:'370px',
        height:'270px',
        data: data,
      });
    }
    this.dialogRef.afterClosed().subscribe((result: any) => {
      if (result) {
        if (result?.values?.title === "CANCEL_ORDER") {
        }
        if (result?.values === "rating-added") {
          window.location.reload();
        }
      }
    });
  }

  getPizzaImageSource(val:number): string {
    return `/assets/img/Pizza${val}.png`;
  }
}
