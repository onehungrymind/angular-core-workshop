import { async, TestBed } from '@angular/core/testing';
import { MaterialModule } from './material.module';

describe('MaterialModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(MaterialModule).toBeDefined();
  });
});
