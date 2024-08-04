import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule] // Add necessary modules here
})
export class LoginComponent {
  username = '';
  password = '';

  constructor(private auth: AuthService, private router: Router) {}

  onSubmit() {
    this.auth.authenticate(this.username, this.password).subscribe({
      next: (response: any) => {
        // Stockez le token et l'utilisateur après l'authentification réussie
        localStorage.setItem('token', response.token);
        localStorage.setItem('username', this.username);
        this.router.navigate(['/']); // Redirigez l'utilisateur après la connexion
      },
      error: (error: any) => {
        console.error('Login failed', error);
      }
    });
  }
}

