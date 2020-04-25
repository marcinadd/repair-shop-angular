import {Component, Input, OnInit} from '@angular/core';
import {Item} from '../../../model/Item';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  @Input() items: Item[];
  @Input() formId: number;

  constructor() {
  }

  ngOnInit(): void {

  }

  addItem(item: Item) {
    this.items.push(item);
  }
}
