import {Component, Input, OnInit} from '@angular/core';
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

  constructor(private itemService: ItemService) {
  }

  ngOnInit(): void {

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
}
