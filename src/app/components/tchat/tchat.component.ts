import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { Utilisateur } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-tchat',
  templateUrl: './tchat.component.html',
  styleUrls: ['./tchat.component.scss']
})
export class TchatComponent {
  user?: Utilisateur;

  constructor(public auth: AuthService) {}
}
