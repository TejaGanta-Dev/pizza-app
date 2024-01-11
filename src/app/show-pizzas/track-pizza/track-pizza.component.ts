import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NgxSpinner, NgxSpinnerService } from 'ngx-spinner';
import { ApiServiceService } from 'src/app/Service/Api-Service/api-service.service';
import { DailogPopupComponent } from 'src/app/Service/dailog-popup/dailog-popup.component';

@Component({
  selector: 'app-track-pizza',
  templateUrl: './track-pizza.component.html',
  styleUrls: ['./track-pizza.component.css'],
})
export class TrackPizzaComponent {
  constructor(private api: ApiServiceService,private spinner:NgxSpinnerService,private dialog:MatDialog) {}
  OrderId: any = '';
  trackOrder() {
    this.spinner.show()
    this.api.trackOrder(this.OrderId).subscribe(
      (res) => {
        this.spinnerTimeOut()
        console.log(res);
        this.openDialog({title:"TRACK_ORDER",
          product:res})

      },
      (err) => {
        this.spinnerTimeOut()    
        alert(err.error.message);
      }
    );
  }
  spinnerTimeOut(){
    setTimeout(() => {
      this.spinner.hide()
    }, 1000);  
  }

private dialogRef: any;
public openDialog(
  data: any,
): void {
  this.dialogRef = false;
  if (!this.dialogRef) {
    this.dialogRef = this.dialog.open(DailogPopupComponent, {
      width:'470px',
      height:'370px',
      data: data,
    });
  }
  this.dialogRef.afterClosed().subscribe((result: any) => {
    if (result) {
      if (result?.values?.title === "TRACK_ORDER") {

      }
    }
  });
}
}
