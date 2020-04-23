import {Component, OnInit} from '@angular/core';
import {ServiceService} from '../../../../../services/service.service';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-add-service',
  templateUrl: './add-service.component.html',
  styleUrls: ['./add-service.component.css']
})
export class AddServiceComponent implements OnInit {
  serviceCreateForm;

  constructor(
    private serviceService: ServiceService,
    private formBuilder: FormBuilder
  ) {
    this.serviceCreateForm = this.formBuilder.group({
      name: '',
      price: ''
    });
  }

  ngOnInit(): void {

  }

  onSubmit(service) {
    this.serviceService.addService(service).subscribe(service => {
      console.log(service);
    });
  }

}
