import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

export interface DeleteBuyableDialogData {
  id: number;
  name: string;
}

@Component({
  selector: 'app-delete-buyable',
  templateUrl: './delete-buyable.component.html',
  styleUrls: ['./delete-buyable.component.css']
})
export class DeleteBuyableComponent {
  constructor(
    public dialogRef: MatDialogRef<DeleteBuyableComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DeleteBuyableDialogData) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
