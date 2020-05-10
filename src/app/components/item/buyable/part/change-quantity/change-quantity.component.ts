import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

export interface QuantityDialogData {
  id: number;
  quantity: number;
}

@Component({
  selector: 'app-change-quantity',
  templateUrl: './change-quantity.component.html',
  styleUrls: ['./change-quantity.component.css']
})
export class ChangeQuantityComponent {

  constructor(
    public dialogRef: MatDialogRef<ChangeQuantityComponent>,
    @Inject(MAT_DIALOG_DATA) public data: QuantityDialogData) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
