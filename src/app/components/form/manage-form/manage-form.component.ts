import {Component, OnInit} from '@angular/core';
import {FormService} from '../../../services/form.service';
import {ActivatedRoute, Router} from '@angular/router';
import {environment} from '../../../../environments/environment';
import {FileService} from '../../../services/file.service';
import {saveAs} from 'file-saver';

@Component({
  selector: 'app-manage-form',
  templateUrl: './manage-form.component.html',
  styleUrls: ['./manage-form.component.css']
})
export class ManageFormComponent implements OnInit {
  form;

  constructor(
    private formService: FormService,
    private route: ActivatedRoute,
    private fileService: FileService,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
    this.formService.getFormById(this.route.snapshot.paramMap.get('id')).subscribe(form => {
      this.form = form;
    });
  }

  onDownloadPdfButtonClick() {
    this.fileService.getFileAsBlob(environment.apiUrl + '/pdf/forms/' + this.form.id).subscribe(data => {
      saveAs(data, this.form.id + '.pdf');
    });
  }

  onReGeneratePasswordPressed() {
    this.fileService.getFileAsBlob(`${environment.apiUrl}/forms/${this.form.id}/regenerateClientPasswordToPdf`).subscribe(data => {
      saveAs(data, this.form.id + '-password.pdf');
    });
  }

  onDeleteForm() {
    this.formService.deleteForm(this.form.id).subscribe(result => {
      if (result) {
        this.router.navigate(['/forms']);
      }
    });
  }
}
