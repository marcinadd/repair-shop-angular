import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './layout/header/header.component';
import {IndexComponent} from './components/index/index.component';
import {AddClientComponent} from './components/client/add-client/add-client.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {AddRepairableComponent} from './components/repairable/add-repairable/add-repairable.component';
import {AddFormComponent} from './components/form/add-form/add-form.component';
import {FormsComponent} from './components/form/forms/forms.component';
import {ClientsComponent} from './components/client/clients/clients.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IndexComponent,
    AddClientComponent,
    AddRepairableComponent,
    AddFormComponent,
    FormsComponent,
    ClientsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
