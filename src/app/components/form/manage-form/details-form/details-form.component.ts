import {Component, Input, OnInit} from '@angular/core';
import {Form} from '../../../../model/Form';

@Component({
  selector: 'app-details-form',
  templateUrl: './details-form.component.html',
  styleUrls: ['./details-form.component.css']
})
export class DetailsFormComponent implements OnInit {
  @Input() form: Form;

  constructor() {
  }

  ngOnInit(): void {
  }

}
