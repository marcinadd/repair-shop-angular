import {Component, Input, OnInit} from '@angular/core';
import {Form} from '../../../../model/Form';
import {FormService} from '../../../../services/form.service';

@Component({
  selector: 'app-status-form',
  templateUrl: './status-form.component.html',
  styleUrls: ['./status-form.component.css']
})
export class StatusFormComponent implements OnInit {
  @Input() form: Form;
  items = [
    {status: 'TO_DO', name: 'To Do'},
    {status: 'IN_PROGRESS', name: 'In progress'},
    {status: 'UNPAID', name: 'Unpaid'},
    {status: 'PAID', name: 'Paid'},
    {status: 'SENT', name: 'Sent'},
    {status: 'COMPLETED', name: 'Completed'},
  ];
  selectedStatus;

  constructor(private formService: FormService) {
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.selectedStatus !== null) {
      const toUpdateForm = new Form();
      toUpdateForm.id = this.form.id;
      toUpdateForm.status = this.selectedStatus;

      this.formService.patchForm(toUpdateForm).subscribe(updatedForm => {
        this.form.status = updatedForm.status;
      });
    }
  }
}
