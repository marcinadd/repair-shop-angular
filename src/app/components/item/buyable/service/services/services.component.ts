import {Component, OnInit} from '@angular/core';
import {ServiceService} from '../../../../../services/service.service';
import {MatDialog} from '@angular/material/dialog';
import {ChangePriceComponent} from '../../change-price/change-price.component';
import {DeleteBuyableComponent} from '../../delete-buyable/delete-buyable.component';
import {Service} from '../../../../../model/Service';

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

  openChangePriceDialog(service: Service): void {
    const dialogRef = this.dialog.open(ChangePriceComponent, {
      width: '250px',
      data: {id: service.id, price: service.price}
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result && result !== service.price) {
        this.updatePrice(service.id, result);
      }
    });
  }

  openDeleteServiceDialog(service: Service): void {
    const dialogRef = this.dialog.open(DeleteBuyableComponent, {
      width: '250px',
      data: {id: service.id, name: service.name}
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.deleteService(service.id);
      }
    });
  }

  updatePrice(serviceId: number, price: number) {
    this.serviceService.updatePrice(serviceId, price).subscribe(updatedService => {
      this.services.forEach(service => {
        if (service.id === updatedService.id) {
          service.price = updatedService.price;
        }
      });
    });
  }

  deleteService(serviceId: number) {
    this.serviceService.deleteService(serviceId).subscribe(result => {
      if (result) {
        this.services = this.services.filter(s => s.id !== serviceId);
      }
    });
  }
}
