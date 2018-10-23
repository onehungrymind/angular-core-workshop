import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersComponent } from './customers.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { CustomerComponent } from './customer/customer.component';
import { SharedModule } from '../shared/shared.module';
import { CustomerContactComponent } from './customer/customer-contact/customer-contact.component';
import { CustomerProjectsComponent } from './customer/customer-projects/customer-projects.component';

@NgModule({
  imports: [
    CommonModule,
    CustomersRoutingModule,
    SharedModule
  ],
  // Take this out if details are not a dialog
  entryComponents: [CustomerDetailsComponent],
  declarations: [
    CustomersComponent,
    CustomerComponent,
    CustomerDetailsComponent,
    CustomersListComponent,
    CustomerContactComponent,
    CustomerProjectsComponent
  ]
})
export class CustomersModule {}
