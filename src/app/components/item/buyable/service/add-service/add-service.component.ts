import {Component, OnInit} from '@angular/core';
import {ServiceService} from '../../../../../services/service.service';
import {FormBuilder} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-service',
  templateUrl: './add-service.component.html',
  styleUrls: ['./add-service.component.css']
})
export class AddServiceComponent implements OnInit {
  serviceCreateForm;

  constructor(
    private serviceService: ServiceService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.serviceCreateForm = this.formBuilder.group({
      name: '',
      price: ''
    });
  }

  ngOnInit(): void {

  }

  onSubmit(service) {
    this.serviceService.addService(service).subscribe(() => {
      this.router.navigate(['/services']);
    });
  }

}
