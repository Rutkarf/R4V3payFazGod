import { Component, OnInit } from '@angular/core';
import { TotemphraseComponent } from '../totemphrase/totemphrase.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LastTransactionCardComponent } from "../last-transaction-card/last-transaction-card.component";
import { LastTransactionCryptoComponent } from "../last-transaction-crypto/last-transaction-crypto.component";
import { VendettaComponent } from "../vendetta/vendetta.component";
import { ValueGlobalAccountComponent } from "../value-global-account/value-global-account.component";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, LastTransactionCardComponent, LastTransactionCryptoComponent, VendettaComponent, ValueGlobalAccountComponent, TotemphraseComponent] // Add necessary modules here
 // Add necessary modules here
 // Add necessary modules here
 // Add necessary modules here
 // Add necessary modules here
 // Add necessary modules here
  
})
export class HomeComponent implements OnInit {

  // Propriétés existantes
  totemPhrase: string = "Votre phrase totem ici";
  editedTotemPhrase: string = "";
  editing: boolean = false;
  fiatAmount: number = 1000;
  r4v3TokenAmount: number = 500;
  totalAmount: number = this.fiatAmount + this.r4v3TokenAmount;

  // Propriétés pour les transactions par carte
  cardTransactions: any[] = [];
  selectedCardTransactionCount: number = 4;

  // Propriétés pour les transactions crypto
  cryptoTransactions: any[] = [];
  selectedCryptoTransactionCount: number = 4;

  constructor() { }

  ngOnInit(): void {
    this.loadCardTransactions();
    this.loadCryptoTransactions();
  }

  // Méthodes existantes
  startEditing() {
    this.editedTotemPhrase = this.totemPhrase;
    this.editing = true;
  }

  saveTotemPhrase() {
    this.totemPhrase = this.editedTotemPhrase;
    this.editing = false;
  }

  cancelEditing() {
    this.editedTotemPhrase = this.totemPhrase;
    this.editing = false;
 } 

  // Méthode pour charger les transactions par carte
  loadCardTransactions() {
    this.cardTransactions = this.getCardTransactions(this.selectedCardTransactionCount);
  }

  // Méthode pour charger les transactions crypto
  loadCryptoTransactions() {
    this.cryptoTransactions = this.getCryptoTransactions(this.selectedCryptoTransactionCount);
  }

  // Méthodes de simulation pour récupérer des données de transactions par carte
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

