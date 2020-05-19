import {Component, OnInit} from '@angular/core';
import {ClientService} from '../../../services/client.service';
import {ClientDetails} from '../../../model/ClientDetails';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-details-client',
  templateUrl: './details-client.component.html',
  styleUrls: ['./details-client.component.css']
})
export class DetailsClientComponent implements OnInit {
  clientDetails: ClientDetails;

  constructor(private clientService: ClientService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.clientService.getClientDetails(Number(this.route.snapshot.paramMap.get('id'))).subscribe(clientDetails => {
      console.log(clientDetails);
      this.clientDetails = clientDetails;
    });
  }

}
