import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {NgSelectModule} from '@ng-select/ng-select';
import {OAuthModule} from 'angular-oauth2-oidc';
import {Ng2SearchPipeModule} from 'ng2-search-filter';

import {AppComponent} from './app.component';
import {HeaderComponent} from './layout/header/header.component';
import {IndexComponent} from './components/index/index.component';
import {AddClientComponent} from './components/client/add-client/add-client.component';
import {AddRepairableComponent} from './components/repairable/add-repairable/add-repairable.component';
import {AddFormComponent} from './components/form/add-form/add-form.component';
import {FormsComponent} from './components/form/forms/forms.component';
import {ClientsComponent} from './components/client/clients/clients.component';
import {EditClientComponent} from './components/client/edit-client/edit-client.component';
import {ManageFormComponent} from './components/form/manage-form/manage-form.component';
import {AddServiceComponent} from './components/item/buyable/service/add-service/add-service.component';
import {AddItemComponent} from './components/item/add-item/add-item.component';
import {ItemsComponent} from './components/item/items/items.component';
import {DetailsFormComponent} from './components/form/manage-form/details-form/details-form.component';
import {StatusFormComponent} from './components/form/manage-form/status-form/status-form.component';
import {LoginComponent} from './components/user/login/login.component';
import {environment} from '../environments/environment';
import {MyCurrencyPipe} from './pipes/my-currency.pipe';
import {CurrencyPipe} from '@angular/common';
import {ServicesComponent} from './components/item/buyable/service/services/services.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ChangePriceComponent} from './components/item/buyable/change-price/change-price.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {AddPartComponent} from './components/item/buyable/part/add-part/add-part.component';
import {PartsComponent} from './components/item/buyable/part/parts/parts.component';
import {MatTabsModule} from '@angular/material/tabs';
import {ChangeQuantityComponent} from './components/item/buyable/part/change-quantity/change-quantity.component';
import {DeleteBuyableComponent} from './components/item/buyable/delete-buyable/delete-buyable.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IndexComponent,
    AddClientComponent,
    AddRepairableComponent,
    AddFormComponent,
    FormsComponent,
    ClientsComponent,
    EditClientComponent,
    ManageFormComponent,
    AddServiceComponent,
    AddItemComponent,
    ItemsComponent,
    DetailsFormComponent,
    StatusFormComponent,
    LoginComponent,
    MyCurrencyPipe,
    ServicesComponent,
    ChangePriceComponent,
    AddPartComponent,
    PartsComponent,
    ChangeQuantityComponent,
    DeleteBuyableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgSelectModule,
    FormsModule,
    MatDialogModule,
    Ng2SearchPipeModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatButtonModule,
    OAuthModule.forRoot({
      resourceServer: {
        sendAccessToken: true,
        allowedUrls: [environment.apiUrl]
      }
    }),
    MatTabsModule
  ],
  providers: [CurrencyPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
