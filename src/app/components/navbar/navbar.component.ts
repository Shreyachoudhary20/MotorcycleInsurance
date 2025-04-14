import { Component, HostListener } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const navbar = document.querySelector('.navbar');
    navbar?.classList.toggle('scrolled', window.scrollY > 50);
  }
}



