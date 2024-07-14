import { Component } from '@angular/core';
import { VendettaComponent } from "../vendetta/vendetta.component";

@Component({
  selector: 'app-trading',
  standalone: true,
  imports: [VendettaComponent],
  templateUrl: './trading.component.html',
  styleUrl: './trading.component.css'
})
export class TradingComponent {

}
