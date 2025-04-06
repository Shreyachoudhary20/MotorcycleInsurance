import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CallAgentComponent } from '../call-agent/call-agent.component';
import { InsuranceFinderComponent } from '../insurance-finder/insurance-finder.component';
import { FooterFloatComponent } from '../footer-float.component';
import { FaqComponent } from '../faq/faq.component';


@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    CallAgentComponent,
    InsuranceFinderComponent,
    FooterFloatComponent,
    FaqComponent // ✅ Add FAQ here
  ],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {}


