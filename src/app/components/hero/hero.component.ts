import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';         // ✅ Required for *ngIf, *ngFor
import { RouterModule } from '@angular/router';         // ✅ Required for routerLink

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [
    CommonModule,       // 🔄 Angular directives
    RouterModule        // 🔗 Enables routerLink
  ],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {}

