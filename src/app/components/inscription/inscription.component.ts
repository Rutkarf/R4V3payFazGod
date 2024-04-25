import { Component, Input } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss']
})
export class InscriptionComponent {
  constructor (
    public auth: AuthService,
  ){}
  
  loginWithRedirect() {
    this.auth.loginWithRedirect();
  }

}
