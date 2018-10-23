import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerGroupStatusComponent } from './customer-group-status.component';

describe('CustomerGroupStatusComponent', () => {
  let component: CustomerGroupStatusComponent;
  let fixture: ComponentFixture<CustomerGroupStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerGroupStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerGroupStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
