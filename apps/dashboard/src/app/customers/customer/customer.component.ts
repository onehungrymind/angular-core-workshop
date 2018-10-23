import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Customer, CustomersService } from '@workshop/core-data';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {
  customer$: Observable<Customer>;

  constructor(
    private route: ActivatedRoute,
    private customerService: CustomersService
  ) { }

  ngOnInit() {
    this.customer$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => this.customerService.load(params.get('id')))
    );
  }
}
