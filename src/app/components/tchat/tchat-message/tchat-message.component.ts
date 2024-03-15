import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { Utilisateur } from '../../../interfaces/interfaces';

@Component({
  selector: 'app-tchat-message',
  templateUrl: './tchat-message.component.html',
  styleUrls: ['./tchat-message.component.scss']
})
export class TchatMessageComponent {
  user?: Utilisateur;

  constructor(public auth: AuthService) {}
}
