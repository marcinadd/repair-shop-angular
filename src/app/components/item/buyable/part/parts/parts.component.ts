import {Component, OnInit} from '@angular/core';
import {PartService} from '../../../../../services/part.service';
import {ChangePriceComponent} from '../../change-price/change-price.component';
import {MatDialog} from '@angular/material/dialog';
import {Part} from '../../../../../model/Part';
import {ChangeQuantityComponent} from '../change-quantity/change-quantity.component';

@Component({
  selector: 'app-parts',
  templateUrl: './parts.component.html',
  styleUrls: ['./parts.component.css']
})
export class PartsComponent implements OnInit {
  parts;
  searchText;

  constructor(private partService: PartService, public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.partService.getParts().subscribe(parts => this.parts = parts);
  }

  openChangePriceDialog(part: Part): void {
    const dialogRef = this.dialog.open(ChangePriceComponent, {
      width: '250px',
      data: {id: part.id, price: part.price}
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if (result && result !== part.price) {
        this.updatePrice(part.id, result);
      }
    });
  }

  openChangeQuantityDialog(part: Part): void {
    const dialogRef = this.dialog.open(ChangeQuantityComponent, {
      width: '250px',
      data: {id: part.id, quantity: part.inStockQuantity}
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if (result && result !== part.price) {
        this.updateInStockQuantity(part.id, result);
      }
    });
  }

  updatePrice(partId: number, toUpdatePrice: number) {
    const part = new Part();
    part.price = toUpdatePrice;
    this.updatePart(partId, part);
  }

  updateInStockQuantity(partId: number, toUpdateQuantity: number) {
    const part = new Part();
    part.inStockQuantity = toUpdateQuantity;
    this.updatePart(partId, part);
  }

  updatePart(partId: number, toUpdateValues: Part) {
    this.partService.updatePart(partId, toUpdateValues).subscribe(updatedPart => {
      this.parts.forEach(part => {
        if (part.id === updatedPart.id) {
          part.price = updatedPart.price;
          part.inStockQuantity = updatedPart.inStockQuantity;
        }
      });
    });
  }
}
