import { Routes } from '@angular/router';
import { HeroComponent } from './components/hero/hero.component';
import { QuoteFormComponent } from './components/quote-form/quote-form.component';

export const routes: Routes = [
  { path: '', component: HeroComponent }, // Homepage
  { path: 'get-quote', component: QuoteFormComponent },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./components/broker-dashboard/broker-dashboard.component').then(m => m.BrokerDashboardComponent)
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./components/about.component').then(m => m.AboutComponent)
  }
];
