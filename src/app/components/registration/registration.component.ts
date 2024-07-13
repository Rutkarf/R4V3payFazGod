import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {
  user = { username: '', password: '' };

  constructor(private auth: AuthService, private router: Router) {}

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.auth.register(this.user).subscribe({
        next: (response: any) => {
          console.log('Registration successful', response);
          this.router.navigate(['/login']); // Redirigez l'utilisateur après l'inscription
        },
        error: (error: any) => {
          console.error('Registration failed', error);
        }
      });
    }
  }
}

