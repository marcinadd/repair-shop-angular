import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {BuyableService} from '../../../services/buyable.service';
import {FormBuilder} from '@angular/forms';
import {ItemService} from '../../../services/item.service';
import {Item} from '../../../model/Item';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
  buyables;
  formItem;
  @Input() formId: number;
  @Output() addItem: EventEmitter<Item> = new EventEmitter<Item>();

  constructor(
    private itemService: ItemService,
    private buyableService: BuyableService,
    private formBuilder: FormBuilder) {
    this.formItem = this.formBuilder.group({
      id: '',
      buyable: '',
      buyableId: '',
      quantity: 1
    });
  }

  ngOnInit(): void {
    this.buyableService.getBuyables().subscribe(buyables => {
      this.buyables = buyables;
    });
  }

  onSubmit(item) {
    item.buyableId = item.buyable.id;
    item.formId = this.formId;
    this.itemService.addItem(item).subscribe(createdItem => {
      this.addItem.emit(createdItem);
    });
  }
}
