import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss'],
  standalone: true
})
export class ProfilComponent implements OnInit {
  user: any = {}; // Utilisez un type approprié pour votre utilisateur
  isEditMode: boolean = false;

  ngOnInit() {
    // Simulation de données utilisateur, à remplacer par la logique de récupération des données réelles
    this.user = {
      nom: 'Doe',
      prenom: 'John',
      email: 'john.doe@example.com',
      telephone: '1234567890'
    };
  }

  toggleEditMode() {
    this.isEditMode = !this.isEditMode;
  }
}


