import {Component, OnInit} from '@angular/core';
import {ServiceService} from '../../../../../services/service.service';
import {MatDialog} from '@angular/material/dialog';
import {ChangePriceComponent} from './change-price/change-price.component';

export interface PriceDialogData {
  id: number;
  price: number;
}

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})

export class ServicesComponent implements OnInit {
  services;
  searchText;

  constructor(private serviceService: ServiceService, public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.serviceService.getServices().subscribe(services => this.services = services);
  }

  openDialog(service): void {
    const dialogRef = this.dialog.open(ChangePriceComponent, {
      width: '250px',
      data: {id: service.id, price: service.price}
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('Closed');
    });
  }

}
