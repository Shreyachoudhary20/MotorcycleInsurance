import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent {
  testimonials = [
    {
      name: 'B.Sharmila',
      image: 'assets/testimonials/sharmila.jpg',
      message: 'MotoInsurance made getting insured so easy and fast!',
      flipped: false
    },
    {
      name: 'Prem Sampath',
      image: 'assets/testimonials/prem.jpg',
      message: 'The support team was really helpful when I needed help.',
      flipped: false
    },
    {
      name: 'Aron Loes',
      image: 'assets/testimonials/aron.jpg',
      message: 'Great interface and quick quote results. Loved it!',
      flipped: false
    }
  ];

  toggleFlip(testimonial: any) {
    this.testimonials.forEach(t => {
      if (t !== testimonial) t.flipped = false;
    });
    testimonial.flipped = !testimonial.flipped;
  }
}

