import { Routes } from '@angular/router';
import { QuoteFormComponent } from './components/quote-form/quote-form.component';

export const routes: Routes = [
    { path: '', redirectTo: 'get-quote', pathMatch: 'full' }, // ✅ Default route goes to quote form
  { path: 'get-quote', component: QuoteFormComponent },   
];
