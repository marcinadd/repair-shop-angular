import {Component, Input, IterableDiffers, OnInit} from '@angular/core';
import {Item} from '../../../model/Item';
import {ItemService} from '../../../services/item.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  @Input() items: Item[];
  @Input() formId: number;
  totalPrice: number;

  iterableDiffer: any;

  constructor(
    private itemService: ItemService,
    private iterableDiffers: IterableDiffers
  ) {
    this.iterableDiffer = iterableDiffers.find([]).create(null);
  }

  ngOnInit(): void {

  }

  ngDoCheck() {
    const changes = this.iterableDiffer.diff(this.items);
    if (changes) {
      this.countTotalPrice();
    }
  }

  addItem(item: Item) {
    this.items.push(item);
  }

  deleteItem(itemId) {
    this.itemService.deleteItem(itemId).subscribe(response => {
      if (response) {
        this.items = this.items.filter(item => item.id !== itemId);
      }
    });
  }

  countTotalPrice() {
    let sum = 0;
    this.items.forEach(item => {
      sum += item.itemPrice * item.quantity;
    });
    this.totalPrice = sum;
  }

}
