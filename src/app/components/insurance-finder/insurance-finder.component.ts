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
  bikeTypes = [
    { name: 'Standard', desc: 'Everyday bikes for daily riders.' },
    { name: 'Cruiser', desc: 'Perfect for long comfortable rides.' },
    { name: 'Sport', desc: 'Fast, agile, and built for thrill.' },
    { name: 'Touring', desc: 'For long distance riders with storage.' },
    { name: 'Adventure', desc: 'Off-road ready and versatile.' },
    { name: 'Electric', desc: 'Eco-friendly and futuristic.' }
  ];
}

