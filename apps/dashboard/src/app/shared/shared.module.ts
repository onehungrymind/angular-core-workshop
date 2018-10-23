import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { MaterialModule } from '@workshop/material';
import { CoreDataModule } from '@workshop/core-data';

import { CustomersStatusComponent } from './customers-status/customers-status.component';
import { CustomerGroupStatusComponent } from './customer-group-status/customer-group-status.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    CoreDataModule
  ],
  exports: [
    CustomersStatusComponent,
    CustomerGroupStatusComponent,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    CoreDataModule
  ],
  declarations: [CustomersStatusComponent, CustomerGroupStatusComponent]
})
export class SharedModule {}
