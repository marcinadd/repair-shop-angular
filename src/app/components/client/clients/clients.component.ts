import {Component, OnInit} from '@angular/core';
import {ClientService} from '../../../services/client.service';
import {DeleteDialogComponent} from '../../dialogs/delete-dialog/delete-dialog.component';
import {MatDialog} from '@angular/material/dialog';
import {Client} from '../../../model/Client';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  clients;

  constructor(
    private clientService: ClientService,
    private dialog: MatDialog
  ) {

  }

  ngOnInit(): void {
    this.onFilterChanged('');
  }

  onFilterChanged(lastNameStartsWith) {
    this.clientService.findClientsByLastNameStartsWith(lastNameStartsWith).subscribe(clients => {
      this.clients = clients;
    });
  }

  openDeleteClientDialog(client: Client): void {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      width: '250px',
      data: {id: client.id, name: client.firstName + ' ' + client.lastName}
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.deleteClient(client.id);
      }
    });
  }

  deleteClient(clientId: number) {
    this.clientService.deleteClient(clientId).subscribe(result => {
      if (result) {
        this.clients = this.clients.filter(part => part.id !== clientId);
      }
    });
  }

}
