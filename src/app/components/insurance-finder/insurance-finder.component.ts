import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-insurance-finder',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './insurance-finder.component.html',
  styleUrls: ['./insurance-finder.component.css']
})
export class InsuranceFinderComponent {
  selectedBike: any = null;

  bikeTypes = [
    {
      name: 'Standard',
      desc: 'Everyday bikes for daily riders.',
      overview: 'Standard bikes are ideal for short city rides, offering great mileage and ease of use.',
      premiumRange: '$100 - $200',
      coverage: 'Basic liability, theft protection, and rider safety'
    },
    {
      name: 'Cruiser',
      desc: 'Perfect for long comfortable rides.',
      overview: 'Cruisers are built for comfort on highways and long-distance travel.',
      premiumRange: '$200 - $350',
      coverage: 'Collision, liability, passenger protection'
    },
    {
      name: 'Sport',
      desc: 'Fast, agile, and built for thrill.',
      overview: 'Sport bikes are performance-oriented and often used by enthusiasts.',
      premiumRange: '$250 - $400',
      coverage: 'Comprehensive damage, theft, and injury cover'
    },
    {
      name: 'Touring',
      desc: 'For long distance riders with storage.',
      overview: 'Touring bikes are meant for cross-country riding with premium comfort and accessories.',
      premiumRange: '$300 - $450',
      coverage: 'Roadside assistance, damage, long-ride protections'
    },
    {
      name: 'Adventure',
      desc: 'Off-road ready and versatile.',
      overview: 'Adventure bikes are suitable for rugged terrains, off-road and urban environments alike.',
      premiumRange: '$250 - $400',
      coverage: 'Off-road accident cover, gear damage, comprehensive'
    },
    {
      name: 'Electric',
      desc: 'Eco-friendly and futuristic.',
      overview: 'Electric bikes are green and cost-efficient, ideal for future-focused riders.',
      premiumRange: '$150 - $300',
      coverage: 'Battery failure, theft, third-party coverage'
    }
  ];

  openModal(bike: any): void {
    this.selectedBike = bike;
  }

  closeModal(): void {
    this.selectedBike = null;
  }
}

