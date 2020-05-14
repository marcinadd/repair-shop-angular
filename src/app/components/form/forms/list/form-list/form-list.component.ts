import {Component, Input, OnInit} from '@angular/core';
import {FormService} from '../../../../../services/form.service';
import {FormStatus} from '../../../../../model/FormStatus';
import {PageEvent} from '@angular/material/paginator';
import {Status} from 'tslint/lib/runner';

@Component({
  selector: 'app-form-list',
  templateUrl: './form-list.component.html',
  styleUrls: ['./form-list.component.css']
})
export class FormListComponent implements OnInit {
  @Input() status: Status;
  pageSize = 5;
  pageLength = 0;
  forms;

  constructor(private formService: FormService) {
  }

  ngOnInit(): void {
    this.getPageOfFormsByStatus(FormStatus[this.status], 0, this.pageSize);
  }

  onPageEvent(event: PageEvent) {
    this.getPageOfFormsByStatus(FormStatus[FormStatus.TO_DO], event.pageIndex, event.pageSize);
  }

  getPageOfFormsByStatus(status: string, pageIndex: number, pageSize: number) {
    this.formService.getPageOfFormsByStatus(status, pageIndex, pageSize).subscribe(data => {
      this.forms = data.content;
      this.pageLength = data.totalElements;
    });
  }
}
