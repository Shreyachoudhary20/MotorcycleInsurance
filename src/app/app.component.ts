import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { CallAgentComponent } from './components/call-agent/call-agent.component';
import { InsuranceFinderComponent } from './components/insurance-finder/insurance-finder.component';
import { QuoteFormComponent } from './components/quote-form/quote-form.component';
import { DriverInfoComponent } from './components/quote-form/driver-info/driver-info.component';
import { MotorcycleInfoComponent } from './components/quote-form/motorcycle-info/motorcycle-info.component';
import { CoverageInfoComponent } from './components/quote-form/coverage-info/coverage-info.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, HeroComponent,CallAgentComponent, InsuranceFinderComponent,QuoteFormComponent,
   
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'motoInsurance';
}
