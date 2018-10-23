import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-customer-contact',
  templateUrl: './customer-contact.component.html',
  styleUrls: ['./customer-contact.component.scss']
})
export class CustomerContactComponent implements OnInit {
  form: FormGroup = this.fb.group({
    subject: ['', Validators.required],
    message: ['', Validators.required]
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  sendMessage(form) {
    if (form.valid) {
      console.log('SENDING MESSAGE:', form.value);
    } else {
      console.error('FORM NOT VALID', form);
    }
  }

  cancel(form) {
    form.reset();
  }

}
