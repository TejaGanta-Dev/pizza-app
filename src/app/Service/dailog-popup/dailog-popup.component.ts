import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dailog-popup',
  templateUrl: './dailog-popup.component.html',
  styleUrls: ['./dailog-popup.component.css'],
})
export class DailogPopupComponent {
  constructor(
    public dialogRef: MatDialogRef<DailogPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.modelData = this.data;
    console.log(this.modelData);
  }
  modelData: any;
    closePopup(res?: any) {
      this.dialogRef.close({ values: res });
  }
}
