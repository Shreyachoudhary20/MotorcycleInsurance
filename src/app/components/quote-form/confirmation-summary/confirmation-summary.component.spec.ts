import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmationSummaryComponent } from './confirmation-summary.component';

describe('ConfirmationSummaryComponent', () => {
  let component: ConfirmationSummaryComponent;
  let fixture: ComponentFixture<ConfirmationSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfirmationSummaryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmationSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
