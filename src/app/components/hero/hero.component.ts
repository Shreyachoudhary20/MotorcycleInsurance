import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { CallAgentComponent } from '../call-agent/call-agent.component';
import { InsuranceFinderComponent } from '../insurance-finder/insurance-finder.component';
import { FooterFloatComponent } from '../footer-float.component';
import { FaqComponent } from '../faq/faq.component';
import { TestimonialsComponent } from '../testimonials/testimonials.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    CallAgentComponent,
    InsuranceFinderComponent,
    FooterFloatComponent,
    FaqComponent,
    TestimonialsComponent
  ],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  zipCode: string = '';
  locationLabel: string = '';
  loadingZip: boolean = true;
  dynamicPolicyCount: number = 0;
  detectedRegion: string = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.autoDetectZip();
    this.generateRandomPolicyCount();
  }

  // 📍 Auto-detect ZIP and city/state
  autoDetectZip(): void {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const lat = position.coords.latitude;
          const lng = position.coords.longitude;

          try {
            const res = await fetch(
              `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}&localityLanguage=en`
            );
            const data = await res.json();

            this.zipCode = data.postcode || '';
            this.locationLabel = `${data.city || data.locality || ''}, ${data.principalSubdivision || ''}`;
            this.detectedRegion = data.principalSubdivision || 'your area';
          } catch (err) {
            console.warn('Geolocation fetch error:', err);
          } finally {
            this.loadingZip = false;
          }
        },
        (err) => {
          console.warn('Geolocation blocked or failed.', err);
          this.loadingZip = false;
        }
      );
    } else {
      this.loadingZip = false;
      console.warn('Geolocation not supported.');
    }
  }

  // 🔢 Generate simulated policy count
  generateRandomPolicyCount(): void {
    const base = 12000;
    const offset = Math.floor(Math.random() * 200); // Dynamic boost
    this.dynamicPolicyCount = base + offset;
  }

  // 🧭 Scroll to testimonials section
  scrollToTestimonials(): void {
    const el = document.getElementById('testimonials');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }

  // ➡️ Navigate to quote form
  goToQuote(): void {
    this.router.navigate(['/get-quote']);
  }
}




