import {Component, Input, OnInit} from '@angular/core';
import {BuyableService} from '../../../services/buyable.service';
import {FormBuilder} from '@angular/forms';
import {ItemService} from '../../../services/item.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
  buyables;
  formItem;
  @Input() formId: number;

  constructor(
    private itemService: ItemService,
    private buyableService: BuyableService,
    private formBuilder: FormBuilder) {
    this.formItem = this.formBuilder.group({
      id: '',
      buyable: '',
      buyableId: '',
      quantity: ''
    });
  }

  ngOnInit(): void {
    this.buyableService.getBuyables().subscribe(buyables => {
      this.buyables = buyables;
    });
  }

  onSubmit(item) {
    item.buyableId = item.buyable.id;
    item.buyable = null;
  }

}
