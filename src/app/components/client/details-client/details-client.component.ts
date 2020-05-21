import {Component, OnInit} from '@angular/core';
import {ClientService} from '../../../services/client.service';
import {ClientDetails} from '../../../model/ClientDetails';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-details-client',
  templateUrl: './details-client.component.html',
  styleUrls: ['./details-client.component.css']
})
export class DetailsClientComponent implements OnInit {
  clientDetails: ClientDetails;

  constructor(
    private clientService: ClientService,
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.clientService.getClientDetails(Number(this.route.snapshot.paramMap.get('id'))).subscribe(clientDetails => {
      this.clientDetails = clientDetails;
    }, () => {
      this.router.navigate(['/clients']);
    });
  }
}
