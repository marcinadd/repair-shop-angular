import {Component, OnInit} from '@angular/core';
import {FormService} from '../../../services/form.service';
import {ActivatedRoute} from '@angular/router';
import {environment} from '../../../../environments/environment';

@Component({
  selector: 'app-manage-form',
  templateUrl: './manage-form.component.html',
  styleUrls: ['./manage-form.component.css']
})
export class ManageFormComponent implements OnInit {
  form;
  downloadURL;

  constructor(
    private formService: FormService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.formService.getFormById(this.route.snapshot.paramMap.get('id')).subscribe(form => {
      this.form = form;
      this.downloadURL = environment.apiUrl + '/pdf/forms/' + form.id;
    });
  }
}
