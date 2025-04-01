import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallAgentComponent } from './call-agent.component';

describe('CallAgentComponent', () => {
  let component: CallAgentComponent;
  let fixture: ComponentFixture<CallAgentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CallAgentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CallAgentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
