import { Component } from '@angular/core';
import { VendettaComponent } from "../vendetta/vendetta.component";

@Component({
  selector: 'app-a-propos',
  templateUrl: './a-propos.component.html',
  styleUrls: ['./a-propos.component.scss'],
  standalone: true,
  imports: [VendettaComponent]
})
export class AProposComponent {

}
