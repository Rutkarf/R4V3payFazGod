import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service'; // Assurez-vous d'avoir un service d'authentification

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class HeaderComponent implements OnInit {
  isCollapsed = true;
  public isMenuOpen: boolean = false;

  constructor(
    @Inject(DOCUMENT) private doc: Document,
    private authService: AuthService // Injectez votre service d'authentification
  ) {}

  ngOnInit(): void {
    // Ajoutez toute initialisation nécessaire ici
  }

  isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }

  logout() {
    this.authService.logout();
  }

  getUserName(): string {
    return this.authService.getUserName();
  }
}
