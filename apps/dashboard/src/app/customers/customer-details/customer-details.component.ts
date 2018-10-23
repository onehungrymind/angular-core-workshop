import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Customer } from '@workshop/core-data';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.scss']
})
export class CustomerDetailsComponent implements OnInit {
  form: FormGroup;
  customerName;
  currentCustomer: Customer;

  // TODO: Use real enum
  statuses = [
    { id: 1, name: 'Won'},
    { id: 2, name: 'Prospect'},
    { id: 3, name: 'Queued'},
    { id: 4, name: 'Lost'}
  ]

  @Input() set customer(value: Customer) {
    if(value) {
      this.customerName = `${value.firstName} ${value.lastName}`;
      this.currentCustomer = Object.assign({}, value);

      this.form = this.setValidators(this.fb.group(this.currentCustomer));
    }
  };

  constructor(
    private fb: FormBuilder,
  ) {}

  ngOnInit() {
  }

  setValidators(form) {
    const requiredFields = ['firstName', 'lastName', 'status'];
    requiredFields.forEach(field => {
      form.get(field).setValidators(Validators.required);
    });

    form.get('email').setValidators([Validators.required, Validators.email]);

    return form;
  }

  save(form) {
    form.updateValueAndValidity();
    if (form.valid) {
      console.log('FORM VALUE', form.value);
    } else {
      console.error('ERROR UPDATING USER', form);
    }
  }

  cancel() {
    console.log('CANCELLED!');
  }
}
