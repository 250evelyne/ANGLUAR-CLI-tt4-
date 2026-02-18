import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  name = '';
  email = '';
  password = '';
  program = '';
  
  successMessage = '';
  errorMessage = '';
  isLoading = false;
  
  constructor(private readonly authService: AuthService) {}
  
  onSignup() {
    // Clear previous messages
    this.successMessage = '';
    this.errorMessage = '';
    
    // Validate inputs
    if (!this.name.trim()) {
      alert('❌ Name is required!');
      return;
    }
    
    if (!this.email.trim()) {
      alert('❌ Email is required!');
      return;
    }
    
    if (!this.password.trim()) {
      alert('❌ Password is required!');
      return;
    }
    
    if (!this.program || this.program === '') {
      alert('❌ Please select a program!');
      return;
    }
    
    this.isLoading = true;
    
    const userData = {
      name: this.name.trim(),
      email: this.email.trim(),
      password: this.password,
      program: this.program
    };
    
    this.authService.signup(userData).subscribe({
      next: (response) => {
        console.log('Signup successful:', response);
        this.isLoading = false;
        
        // Show success alert
        alert('✅ SUCCESS! Account created successfully! You can now login.');
        
        // Clear form
        this.name = '';
        this.email = '';
        this.password = '';
        this.program = '';
      },
      error: (err) => {
        console.error('Signup error:', err);
        this.isLoading = false;
        
        // Show error alert
        if (err.error?.message) {
          alert('❌ ERROR: ' + err.error.message);
        } else if (err.status === 400) {
          alert('❌ Invalid data. Please check all fields.');
        } else if (err.status === 409) {
          alert('❌ This email is already registered!');
        } else {
          alert('❌ Signup failed. Please try again.');
        }
      }
    });
  }
}
