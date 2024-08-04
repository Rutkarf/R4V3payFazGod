import { Component } from '@angular/core';

@Component({
  selector: 'app-value-global-account',
  standalone: true,
  imports: [],
  templateUrl: './value-global-account.component.html',
  styleUrl: './value-global-account.component.css'
})
export class ValueGlobalAccountComponent {



  fiatAmount: number = 1000;
  r4v3TokenAmount: number = 500;
  totalAmount: number = this.fiatAmount + this.r4v3TokenAmount;
}
