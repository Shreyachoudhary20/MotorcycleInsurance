import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-coverage-info',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './coverage-info.component.html',
  styleUrls: ['./coverage-info.component.css']
})
export class CoverageInfoComponent {
  coverage = {
    coverageType: '',
    startDate: '',
    duration: '',
    insurer: ''
  };

  estimatedPremium: number = 2700;

  addonCovers = [
    { id: 'zeroDep', label: 'Zero Depreciation', selected: false },
    { id: 'rsa', label: 'Roadside Assistance', selected: false },
    { id: 'engineProtect', label: 'Engine Protection', selected: false }
  ];

  calculatePremium(): void {
    let base = 2000;

    switch (this.coverage.coverageType) {
      case 'Comprehensive':
        base += 1000;
        break;
      case 'Third-party':
        base -= 500;
        break;
      case 'Personal Accident':
        base += 300;
        break;
    }

    if (this.coverage.duration === '3 Years') {
      base *= 3;
    }

    this.addonCovers.forEach(addon => {
      if (addon.selected) {
        base += 300;
      }
    });

    this.estimatedPremium = base;
  }
}
