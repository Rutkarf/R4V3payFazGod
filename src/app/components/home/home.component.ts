import { Component } from '@angular/core';
import { faPaw } from '@fortawesome/free-solid-svg-icons';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  faPaw = faPaw;

  constructor(private toastr: ToastrService) {}

  showSuccess() {
    // Clique sur la patte du chat pour l'activé
    this.toastr.success('Voici un exemple de succès', 'Exemple de succès');
  }
}
