import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerProjectsComponent } from './customer-projects.component';

describe('CustomerProjectsComponent', () => {
  let component: CustomerProjectsComponent;
  let fixture: ComponentFixture<CustomerProjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerProjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
