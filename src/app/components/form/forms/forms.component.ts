import {Component, OnInit} from '@angular/core';
import {FormStatus} from '../../../model/FormStatus';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  statuses = FormStatus;

  constructor() {
  }

  ngOnInit(): void {
  }
}
