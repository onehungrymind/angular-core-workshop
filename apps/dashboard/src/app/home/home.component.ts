import { Observable } from 'rxjs';
import { Customer, CustomersService } from '@workshop/core-data';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  customers$: Observable<Customer[]>;

  constructor(private customersService: CustomersService) { }

  ngOnInit() {
    this.getCustomers();
  }

  getCustomers() {
    this.customers$ = this.customersService.all();
  }
}
