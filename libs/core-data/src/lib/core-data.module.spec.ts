import { async, TestBed } from '@angular/core/testing';
import { CoreDataModule } from './core-data.module';

describe('CoreDataModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CoreDataModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(CoreDataModule).toBeDefined();
  });
});
