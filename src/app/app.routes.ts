import { Routes } from '@angular/router';
import { HeroComponent } from './components/hero/hero.component';
import { QuoteFormComponent } from './components/quote-form/quote-form.component';
import { LoginRegisterComponent } from './components/login-register/login-register.component';

export const routes: Routes = [
  { path: '', component: HeroComponent }, // Homepage
  { path: 'get-quote', component: QuoteFormComponent },
  {
    path: 'broker-dashboard', // ✅ Changed from 'dashboard'
    loadComponent: () =>
      import('./components/broker-dashboard/broker-dashboard.component').then(
        m => m.BrokerDashboardComponent
      )
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./components/about.component').then(m => m.AboutComponent)
  },
  { path: 'auth', component: LoginRegisterComponent },

  // ✅ Optional: wildcard route to redirect unknown paths
  { path: '**', redirectTo: '' }
];
