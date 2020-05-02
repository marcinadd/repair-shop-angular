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


const routes: Routes = [
  {path: '', component: IndexComponent},
  {path: 'clients', component: ClientsComponent},
  {path: 'clients/add', component: AddClientComponent},
  {path: 'clients/:id', component: EditClientComponent},
  {path: 'repairables/add', component: AddRepairableComponent},
  {path: 'forms/add', component: AddFormComponent},
  {path: 'forms', component: FormsComponent},
  {path: 'forms/:id', component: ManageFormComponent},
  {path: 'services/add', component: AddServiceComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
