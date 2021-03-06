import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {IndexComponent} from './components/index/index.component';
import {AddClientComponent} from './components/client/add-client/add-client.component';
import {AddRepairableComponent} from './components/repairable/add-repairable/add-repairable.component';
import {AddFormComponent} from './components/form/add-form/add-form.component';
import {FormsComponent} from './components/form/forms/forms.component';
import {ClientsComponent} from './components/client/clients/clients.component';
import {EditClientComponent} from './components/client/edit-client/edit-client.component';
import {ManageFormComponent} from './components/form/manage-form/manage-form.component';
import {AddServiceComponent} from './components/item/buyable/service/add-service/add-service.component';
import {LoginComponent} from './components/user/login/login.component';
import {AuthGuard} from './guards/auth.guard';
import {ServicesComponent} from './components/item/buyable/service/services/services.component';
import {AddPartComponent} from './components/item/buyable/part/add-part/add-part.component';
import {PartsComponent} from './components/item/buyable/part/parts/parts.component';
import {FormInfoClientComponent} from './components/form/form-info-client/form-info-client.component';
import {DetailsClientComponent} from './components/client/details-client/details-client.component';


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'formInfo', component: FormInfoClientComponent},
  {
    path: '', canActivate: [AuthGuard], children: [
      {path: '', component: IndexComponent},
      {path: 'clients', component: ClientsComponent, canActivate: [AuthGuard]},
      {path: 'clients/add', component: AddClientComponent},
      {path: 'clients/:id/details', component: DetailsClientComponent},
      {path: 'clients/:id', component: EditClientComponent},
      {path: 'repairables/add', component: AddRepairableComponent},
      {path: 'forms/add', component: AddFormComponent},
      {path: 'forms', component: FormsComponent},
      {path: 'forms/:id', component: ManageFormComponent},
      {path: 'services/add', component: AddServiceComponent},
      {path: 'services', component: ServicesComponent},
      {path: 'parts/add', component: AddPartComponent},
      {path: 'parts', component: PartsComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
