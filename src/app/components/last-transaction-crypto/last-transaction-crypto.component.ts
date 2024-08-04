import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-last-transaction-crypto',
  standalone: true,
  imports: [CommonModule, FormsModule], // Ajoutez les modules nécessaires ici
  templateUrl: './last-transaction-crypto.component.html',
  styleUrls: ['./last-transaction-crypto.component.css']
})
export class LastTransactionCryptoComponent {
  fiatAmount: number = 1000;
  r4v3TokenAmount: number = 500;
  totalAmount: number = this.fiatAmount + this.r4v3TokenAmount;

  // Propriétés pour les transactions crypto
  cryptoTransactions: any[] = [];
  selectedCryptoTransactionCount: number = 4;

  constructor() { }

  ngOnInit(): void {
    this.loadCryptoTransactions();
  }

  // Méthode pour charger les transactions crypto
  loadCryptoTransactions() {
    this.cryptoTransactions = this.getCryptoTransactions(this.selectedCryptoTransactionCount);
  }

  // Méthodes de simulation pour récupérer des données de transactions crypto
  getCryptoTransactions(count: number): any[] {
    const transactions: any[] = [
      { date: new Date(), amount: 0.05 },
      { date: new Date(), amount: 0.1 },
      { date: new Date(), amount: 0.025 },
      { date: new Date(), amount: 0.15 },
      { date: new Date(), amount: 0.03 },
      { date: new Date(), amount: 0.08 },
      { date: new Date(), amount: 0.07 },
      { date: new Date(), amount: 0.12 },
      { date: new Date(), amount: 0.18 },
      { date: new Date(), amount: 0.09 }
    ];
    return transactions.slice(0, count);
  }
}
