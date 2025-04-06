import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent {
  activeIndex: number | null = 0;

  faqs = [
    {
      question: 'How many quotes can I create with MotoInsurance?',
      answer: 'Our platform allows unlimited quote generation for both customers and brokers.'
    },
    {
      question: 'Who owns the information I submit?',
      answer: 'All submitted data is securely stored and remains the property of the user or broker.'
    },
    {
      question: 'Is MotoInsurance mobile friendly?',
      answer: 'Yes, our platform is fully responsive and optimized for mobile, tablet, and desktop.'
    },
    {
      question: 'Do I need an app to submit a quote?',
      answer: 'No app required — our web platform handles everything directly in your browser.'
    }
  ];

  toggle(index: number) {
    this.activeIndex = this.activeIndex === index ? null : index;
  }
}

