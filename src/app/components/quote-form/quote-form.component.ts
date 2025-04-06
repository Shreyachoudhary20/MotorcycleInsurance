import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerInfoComponent } from './customer-info/customer-info.component';
import { DriverInfoComponent } from './driver-info/driver-info.component';
import { MotorcycleInfoComponent } from './motorcycle-info/motorcycle-info.component';
import { CoverageInfoComponent } from './coverage-info/coverage-info.component';
import { ConfirmationSummaryComponent } from './confirmation-summary/confirmation-summary.component';

@Component({
  selector: 'app-quote-form',
  standalone: true,
  imports: [
    CommonModule,
    CustomerInfoComponent,
    DriverInfoComponent,
    MotorcycleInfoComponent,
    CoverageInfoComponent,
    ConfirmationSummaryComponent
  ],
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent {
  stepIndex = 0;

  nextStep() {
    if (this.stepIndex < 4) this.stepIndex++;
  }

  prevStep() {
    if (this.stepIndex > 0) this.stepIndex--;
  }

  goToStep(step: number) {
    this.stepIndex = step;
  }

}
