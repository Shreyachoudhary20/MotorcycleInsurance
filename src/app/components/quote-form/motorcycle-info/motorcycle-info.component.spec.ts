import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotorcycleInfoComponent } from './motorcycle-info.component';

describe('MotorcycleInfoComponent', () => {
  let component: MotorcycleInfoComponent;
  let fixture: ComponentFixture<MotorcycleInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MotorcycleInfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MotorcycleInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
