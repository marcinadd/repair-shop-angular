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
      clientId: null,
      repairableId: null,
    });
  }

  ngOnInit(): void {
    this.clientService.getClients().subscribe(clients => {
      this.clients = clients;
      if (clients.length > 0) {
        this.formCreate.patchValue({clientId: clients[0].id});
        this.onSelect(clients[0]);
      }
    });
  }

  onSubmit(formData) {
    this.formSerivce.addForm(formData).subscribe(form => {
      console.log(form);
    });
  }

  onSelect(selectedOwner) {
    this.repairableSerivce.getRepairablesByOwnerId(selectedOwner.id).subscribe(repairables => {
      this.repairables = repairables;
      if (repairables.length > 0) {
        this.formCreate.patchValue({repairableId: repairables[0].id});
      } else {
        this.formCreate.patchValue({repairableId: null});
      }
    });
  }
}
