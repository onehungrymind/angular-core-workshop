import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';

import { Customer } from './customer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {
  model = 'customers'

  constructor(private http: HttpClient) { }

  getUrl() {
    return `${environment.apiEndpoint}${this.model}`;
  }

  getUrlForId(id) {
    return `${this.getUrl()}/${id}`;
  }

  all() {
    return this.http.get<Customer[]>(this.getUrl());
  }

  load(id) {
    return this.http.get<Customer>(this.getUrlForId(id));
  }

  create(customer: Customer) {
    return this.http.post(this.getUrl(), customer);
  }

  update(customer: Customer) {
    return this.http.patch(this.getUrl(), customer);
  }

  delete(customer: Customer) {
    return this.http.delete(this.getUrlForId(customer.id));
  }
}
