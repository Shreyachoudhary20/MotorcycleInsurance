import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsuranceFinderComponent } from './insurance-finder.component';

describe('InsuranceFinderComponent', () => {
  let component: InsuranceFinderComponent;
  let fixture: ComponentFixture<InsuranceFinderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InsuranceFinderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsuranceFinderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
