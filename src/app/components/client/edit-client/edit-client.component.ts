import {Component, OnInit} from '@angular/core';
import {ClientService} from '../../../services/client.service';
import {ActivatedRoute} from '@angular/router';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.css']
})
export class EditClientComponent implements OnInit {
  client;
  clientEditForm;

  constructor(
    private route: ActivatedRoute,
    private clientService: ClientService,
    private formBuilder: FormBuilder
  ) {
  }

  ngOnInit(): void {
    this.clientService.findClientById(this.route.snapshot.paramMap.get('id')).subscribe(client => {
      console.log(client);
      this.clientEditForm = this.formBuilder.group({
        id: client.id,
        firstName: client.firstName,
        lastName: client.lastName,
        phone: client.phone,
        email: client.email
      });
    });
  }

  onSubmit(client) {
    this.clientService.updateClient(client).subscribe(updated => {
      console.log(updated);
    });
  }
}
