import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomersStatusComponent } from './customers-status.component';

describe('CustomersStatusComponent', () => {
  let component: CustomersStatusComponent;
  let fixture: ComponentFixture<CustomersStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomersStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomersStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
