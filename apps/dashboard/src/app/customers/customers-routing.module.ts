import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuardService as AuthGuard } from '@workshop/core-data';

import { CustomersComponent } from './customers.component';
import { CustomerComponent } from './customer/customer.component';
import { CustomerProjectsComponent } from './customer/customer-projects/customer-projects.component';
import { CustomerContactComponent } from './customer/customer-contact/customer-contact.component';

const routes: Routes = [
  {
    path: '',
    component: CustomersComponent,
    canActivate: [AuthGuard],
    data: { animation: 'customers' }
  },
  {
    path: ':id',
    component: CustomerComponent,
    canActivate: [AuthGuard],
    data: { animation: 'customer' },
    children: [
      { path: '', redirectTo: 'projects', pathMatch: 'full' },
      { path: 'projects', component: CustomerProjectsComponent },
      { path: 'contact', component: CustomerContactComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
