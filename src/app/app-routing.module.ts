import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {IndexComponent} from './components/index/index.component';
import {AddClientComponent} from './components/client/client/add-client/add-client.component';


const routes: Routes = [
  {path: '', component: IndexComponent},
  {path: 'client/add', component: AddClientComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
