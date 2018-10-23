import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer, CustomersService } from '@workshop/core-data';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss'],
})
export class CustomersComponent implements OnInit {
  customers$: Observable<Customer[]>;
  customersByStatus;

  constructor(
    private customersService: CustomersService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getCustomers();
  }

  getCustomers() {
    this.customers$ = this.customersService.all();
  }

  selectCustomer(customer: Customer) {
    this.router.navigate(['customers', customer.id]);
  }

  updateCustomer(customer: Customer) {
    if (!customer) return;

    this.customersService
      .update(customer)
      .subscribe(result => this.getCustomers()); // Refresh customers
  }
}
