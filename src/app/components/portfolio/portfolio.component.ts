import { Component } from '@angular/core';

@Component({
  selector: 'app-porfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
  standalone: true
})
export class PortfolioComponent {
  portfolioValue = '1000 USD';
  raveValue = '500 USD';
  raveCryptoValue = '500 R4V3';
  bitcoinValue = '0.05 BTC';
  raveWalletAddress = 'R4V3-WALLET-ADDRESS';
  bitcoinWalletAddress = 'BITCOIN-WALLET-ADDRESS';
  customTokenWalletAddress = 'CUSTOM-TOKEN-WALLET-ADDRESS';
}
