import {Component, OnInit} from '@angular/core';
import {ClientService} from '../../../services/client.service';
import {FormBuilder} from '@angular/forms';
import {RepairableService} from '../../../services/repairable.service';

@Component({
  selector: 'app-add-repairable',
  templateUrl: './add-repairable.component.html',
  styleUrls: ['./add-repairable.component.css']
})
export class AddRepairableComponent implements OnInit {
  clients;
  repairableCreateForm;

  constructor(private repairableService: RepairableService, private clientService: ClientService, private formBuilder: FormBuilder) {
    this.repairableCreateForm = this.formBuilder.group({
      name: '',
      serial: '',
      ownerId: [''],
    });
  }

  ngOnInit(): void {
    this.clientService.getClients().subscribe(data => {
      this.clients = data;
    });
  }


  onSubmit(repairableData) {
    this.repairableService.addRepairable(repairableData).subscribe(repairable => {
      console.log(repairable);
    });
  }
}
