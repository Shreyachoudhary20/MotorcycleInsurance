import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.css']
})
export class LoginRegisterComponent {
  isRegisterMode: boolean = false;
  showPassword: boolean = false;

  loginData = {
    email: '',
    password: ''
  };

  registerData = {
    name: '',
    email: '',
    password: '',
    role: ''
  };

  constructor(private router: Router) {}

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  toggleMode(): void {
    this.isRegisterMode = !this.isRegisterMode;
  }

  login(): void {
    const stored = localStorage.getItem('registeredUser');
    const user = stored ? JSON.parse(stored) : null;

    if (!user) {
      alert('No user found. Please register first.');
      return;
    }

    const isMatch =
      this.loginData.email.trim().toLowerCase() === user.email.trim().toLowerCase() &&
      this.loginData.password === user.password;

    if (isMatch && user.role === 'broker') {
      this.router.navigate(['/broker-dashboard']);
    } else {
      alert('Invalid credentials or unauthorized role.');
    }
  }

  register(): void {
    if (this.registerData.name && this.registerData.email && this.registerData.password && this.registerData.role) {
      if (this.registerData.role === 'broker') {
        localStorage.setItem('registeredUser', JSON.stringify(this.registerData));
        alert('Registration successful! Please login now.');
        this.isRegisterMode = false;
        this.loginData.email = this.registerData.email;
        this.loginData.password = this.registerData.password;
      } else {
        alert('Only brokers can register at this time.');
      }
    } else {
      alert('Please fill in all fields.');
    }
  }
}

