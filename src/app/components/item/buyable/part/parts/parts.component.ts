import {Component, OnInit} from '@angular/core';
import {PartService} from '../../../../../services/part.service';

@Component({
  selector: 'app-parts',
  templateUrl: './parts.component.html',
  styleUrls: ['./parts.component.css']
})
export class PartsComponent implements OnInit {
  parts;
  searchText;

  constructor(private partService: PartService) {
  }

  ngOnInit(): void {
    this.partService.getParts().subscribe(parts => this.parts = parts);
  }

}
