import {Component, OnInit} from '@angular/core';
import {PartService} from '../../../../../services/part.service';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-add-part',
  templateUrl: './add-part.component.html',
  styleUrls: ['./add-part.component.css']
})
export class AddPartComponent implements OnInit {
  partCreateForm;

  constructor(
    private partService: PartService,
    private formBuilder: FormBuilder
  ) {
    this.partCreateForm = this.formBuilder.group({
      name: '',
      price: '',
      inStockQuantity: '',
      unlimited: false
    });
  }

  ngOnInit(): void {
    this.partCreateForm.get('unlimited').valueChanges.subscribe(value => {
      const quantity = this.partCreateForm.get('inStockQuantity');
      if (value) {
        quantity.disable();
        quantity.setValue(null);
      } else {
        quantity.enable();
      }
    });
  }

  onSubmit(part) {
    this.partService.addPart(part).subscribe(part => {
      console.log(part);
    });
  }

}
