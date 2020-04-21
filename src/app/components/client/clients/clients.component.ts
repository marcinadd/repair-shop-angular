import {Component, OnInit} from '@angular/core';
import {ClientService} from '../../../services/client.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  clients;

  constructor(private clientService: ClientService) {

  }

  ngOnInit(): void {
    this.onFilterChanged('');
  }

  onFilterChanged(lastNameStartsWith) {
    this.clientService.getClientsByLastNameStartsWith(lastNameStartsWith).subscribe(clients => {
      this.clients = clients;
    });
  }
}
