import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {ClientService} from '../../../services/client.service';
import {Client} from '../../../model/Client';
import {RepairableService} from '../../../services/repairable.service';
import {FormService} from '../../../services/form.service';
import {Router} from '@angular/router';

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
              private formBuilder: FormBuilder,
              private router: Router
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
      this.clients.forEach(client => {
        client.fullName = client.firstName + ' ' + client.lastName;
      });
      if (clients.length > 0) {
        this.formCreate.patchValue({clientId: clients[0].id});
        this.onUserSelectedLoadRepairables(clients[0]);
      }
    });
  }

  onSubmit(formData) {
    this.formSerivce.addForm(formData).subscribe(form => {
      this.router.navigate(['/forms']);
    });
  }

  onUserSelectedLoadRepairables(selectedOwner) {
    this.repairableSerivce.getRepairablesByOwnerId(selectedOwner.id).subscribe(repairables => {
      this.repairables = repairables;
      this.repairables.forEach(repairable => {
        repairable.displayName = repairable.name + ' ' + repairable.serial;
      });
      if (repairables.length > 0) {
        this.formCreate.patchValue({repairableId: repairables[0].id});
      } else {
        this.formCreate.patchValue({repairableId: null});
      }
    });
  }
}
