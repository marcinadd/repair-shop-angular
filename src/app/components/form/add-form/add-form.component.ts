import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {ClientService} from '../../../services/client.service';
import {Client} from '../../../model/Client';
import {RepairableService} from '../../../services/repairable.service';
import {FormService} from '../../../services/form.service';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent implements OnInit {
  formCreate;
  clients;
  repairables;

  @Input() client: Client;

  constructor(private formSerivce: FormService,
              private clientService: ClientService,
              private repairableSerivce: RepairableService,
              private formBuilder: FormBuilder
  ) {
    this.formCreate = this.formBuilder.group({
      description: '',
      clientId: [''],
      repairableId: [''],
    });
  }

  ngOnInit(): void {
    this.clientService.getClients().subscribe(data => {
      this.clients = data;
    });
  }

  onSubmit(formData) {
    this.formSerivce.addForm(formData).subscribe(form => {
      console.log(form);
    });
  }

  onSelect(ownerId) {
    this.repairableSerivce.getRepairablesByOwnerId(ownerId).subscribe(repairables => {
      this.repairables = repairables;
    });
  }
}
