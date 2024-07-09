import { Component } from '@angular/core';

@Component({
  selector: 'app-edit-profil',
  templateUrl: './editprofil.component.html',
  styleUrls: ['./editprofil.component.scss']
})
export class EditProfilComponent {
  user = {
    nom: '',
    prenom: '',
    adresse: '',
    mail: ''
  };

  onEdit() {
    // Logique pour éditer le profil
    console.log('Profil en édition');
  }

  onSave() {
    // Logique pour sauvegarder les modifications du profil
    console.log('Profil sauvegardé', this.user);
  }
}

