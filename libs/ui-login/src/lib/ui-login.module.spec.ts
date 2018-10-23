import { async, TestBed } from '@angular/core/testing';
import { UiLoginModule } from './ui-login.module';

describe('UiLoginModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [UiLoginModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(UiLoginModule).toBeDefined();
  });
});
