import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  @Input('formId') formId: number;

  constructor() {
  }

  ngOnInit(): void {

  }

}
