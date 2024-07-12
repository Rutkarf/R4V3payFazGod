import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-credit-card',
  templateUrl: './credit-card.component.html',
  styleUrls: ['./credit-card.component.css']
})
export class CreditCardComponent implements OnInit {

  // Propriétés pour la section Credit Card Virtual
  cardNumber: string = '';
  expiryDate: string = '';
  cvv: string = '';

  // Propriétés pour la section Historique Transactions Carte
  cardTransactions: any[] = [];
  selectedCardTransactionCount: number = 4;

  constructor() { }

  ngOnInit(): void {
    this.loadCardTransactions(); // Chargement initial des transactions par carte
  }

  // Méthode pour charger les transactions par carte
  loadCardTransactions() {
    this.cardTransactions = this.getCardTransactions(this.selectedCardTransactionCount);
  }

  // Méthode de simulation pour récupérer des données de transactions par carte
  getCardTransactions(count: number): any[] {
    const transactions: any[] = [
      { date: new Date(), amount: 50.75 },
      { date: new Date(), amount: 30.20 },
      { date: new Date(), amount: 75.10 },
      { date: new Date(), amount: 100.50 },
      { date: new Date(), amount: 25.30 },
      { date: new Date(), amount: 60.80 },
      { date: new Date(), amount: 45.90 },
      { date: new Date(), amount: 80.25 },
      { date: new Date(), amount: 120.60 },
      { date: new Date(), amount: 55.40 }
    ];
    return transactions.slice(0, count);
  }

}
