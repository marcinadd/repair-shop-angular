import {Component, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {FormService} from '../../../services/form.service';
import {Form} from '../../../model/Form';

@Component({
  selector: 'app-form-info-client',
  templateUrl: './form-info-client.component.html',
  styleUrls: ['./form-info-client.component.css']
})
export class FormInfoClientComponent implements OnInit {
  checkStatusForm;
  form: Form = null;

  constructor(
    private formBuilder: FormBuilder,
    private formService: FormService
  ) {
    this.checkStatusForm = this.formBuilder.group({
      id: '',
      password: ''
    });
  }

  ngOnInit(): void {

  }

  onSubmit(values) {
    this.formService.getFormInfo(values.id, values.password).subscribe(form => {
      this.form = form;
      console.log(form);
    });
  }
}
