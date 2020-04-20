import {Component, OnInit} from '@angular/core';
import {FormService} from '../../../services/form.service';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  forms;

  constructor(private formService: FormService) {
  }

  ngOnInit(): void {
    this.formService.getForms().subscribe(forms => {
      console.log(forms);
      this.forms = forms;
    });
  }
}
