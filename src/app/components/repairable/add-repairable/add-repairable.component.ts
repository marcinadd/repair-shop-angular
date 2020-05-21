import {Component, OnInit} from '@angular/core';
import {ClientService} from '../../../services/client.service';
import {FormBuilder} from '@angular/forms';
import {RepairableService} from '../../../services/repairable.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-repairable',
  templateUrl: './add-repairable.component.html',
  styleUrls: ['./add-repairable.component.css']
})
export class AddRepairableComponent implements OnInit {
  clients;
  repairableCreateForm;

  constructor(
    private repairableService: RepairableService,
    private clientService: ClientService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.repairableCreateForm = this.formBuilder.group({
      name: '',
      serial: '',
      ownerId: [''],
    });
  }

  ngOnInit(): void {
    this.clientService.getClients().subscribe(clients => {
      this.clients = clients;
      if (clients.length > 0) {
        this.repairableCreateForm.patchValue({ownerId: clients[0].id});
      }
    });
  }


  onSubmit(repairableData) {
    this.repairableService.addRepairable(repairableData).subscribe(() => {
      this.router.navigate(['/clients']);
    });
  }
}
