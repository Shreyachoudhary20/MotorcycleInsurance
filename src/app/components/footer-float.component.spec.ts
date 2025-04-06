import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterFloatComponent } from './footer-float.component';

describe('FooterFloatComponent', () => {
  let component: FooterFloatComponent;
  let fixture: ComponentFixture<FooterFloatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterFloatComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterFloatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
