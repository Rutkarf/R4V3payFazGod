import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://your-api-url.com'; // Remplacez par votre URL d'API

  constructor(private http: HttpClient) {}

  register(user: { username: string; password: string }): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post(`${this.apiUrl}/register`, user, { headers });
  }

  authenticate(username: string, password: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post(`${this.apiUrl}/login`, { username, password }, { headers });
  }

  isLoggedIn(): boolean {
    // Implémentez votre logique de vérification de connexion ici
    return !!localStorage.getItem('token');
  }

  logout() {
    // Implémentez votre logique de déconnexion ici
    localStorage.removeItem('token');
  }

  getUserName(): string {
    // Implémentez votre logique pour obtenir le nom d'utilisateur
    return localStorage.getItem('username') || 'Utilisateur';
  }
}

