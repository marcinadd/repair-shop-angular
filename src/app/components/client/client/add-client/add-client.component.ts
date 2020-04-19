import {Component, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {ClientService} from '../../../../services/client.service';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {
  clientCreateForm;


  constructor(private clientService: ClientService, private formBuilder: FormBuilder) {
    this.clientCreateForm = this.formBuilder.group({
      firstName: '',
      lastName: '',
      phone: '',
      email: ''
    });
  }

  ngOnInit(): void {
  }

  onSubmit(clientData) {
    this.clientService.addClient(clientData).subscribe(client => {
      console.log(client);
    });
  }
}
