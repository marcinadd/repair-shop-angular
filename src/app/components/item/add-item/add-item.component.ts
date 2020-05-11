import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {BuyableService} from '../../../services/buyable.service';
import {FormBuilder, FormControl} from '@angular/forms';
import {ItemService} from '../../../services/item.service';
import {Item} from '../../../model/Item';
import {ServiceService} from '../../../services/service.service';
import {PartService} from '../../../services/part.service';
import {MatDialog} from '@angular/material/dialog';
import {ErrorDialogComponent} from '../../error-dialog/error-dialog.component';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
  services;
  parts;
  price;
  formItem;
  selected = new FormControl(0);
  @Input() formId: number;
  @Output() addItem: EventEmitter<Item> = new EventEmitter<Item>();

  constructor(
    private itemService: ItemService,
    private buyableService: BuyableService,
    private serviceService: ServiceService,
    private partService: PartService,
    private formBuilder: FormBuilder,
    private dialog: MatDialog) {
    this.formItem = this.formBuilder.group({
      id: '',
      part: '',
      service: '',
      buyableId: '',
      quantity: 1
    });
  }

  ngOnInit(): void {
    this.serviceService.getServices().subscribe(services => {
      this.services = services;
    });
    this.partService.getParts().subscribe(parts => {
      this.parts = parts;
    });
  }

  onSubmit(item) {
    const buyable = this.selected.value === 0 ? item.part : item.service;
    item.buyableId = buyable.id;
    item.formId = this.formId;
    this.itemService.addItem(item).subscribe(
      createdItem => {
      this.addItem.emit(createdItem);
      }, errorResponse => {
        this.openErrorDialog(errorResponse.error);
      });
  }

  openErrorDialog(messageStr: string): void {
    this.dialog.open(ErrorDialogComponent, {
      width: '250px',
      data: {message: messageStr}
    });
  }
}
