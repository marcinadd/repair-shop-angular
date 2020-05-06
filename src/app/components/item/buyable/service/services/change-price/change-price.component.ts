import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {PriceDialogData} from '../services.component';

@Component({
  selector: 'app-change-price',
  templateUrl: './change-price.component.html',
  styleUrls: ['./change-price.component.css']
})
export class ChangePriceComponent {

  constructor(
    public dialogRef: MatDialogRef<ChangePriceComponent>,
    @Inject(MAT_DIALOG_DATA) public data: PriceDialogData) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
