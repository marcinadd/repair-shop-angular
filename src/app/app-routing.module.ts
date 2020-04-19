import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {IndexComponent} from './components/index/index.component';
import {AddClientComponent} from './components/client/add-client/add-client.component';
import {AddRepairableComponent} from './components/repairable/add-repairable/add-repairable.component';


const routes: Routes = [
  {path: '', component: IndexComponent},
  {path: 'client/add', component: AddClientComponent},
  {path: 'repairable/add', component: AddRepairableComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
