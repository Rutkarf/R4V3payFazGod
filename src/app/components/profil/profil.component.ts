import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { faHeart, faXmark } from '@fortawesome/free-solid-svg-icons';
import { Utilisateur } from '../../interfaces/interfaces';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss'],
})
export class ProfilComponent {
  id: number = 14;
  user?: Utilisateur;
  faHeart = faHeart;
  faXmark = faXmark;

  constructor(public auth: AuthService) {}
}
