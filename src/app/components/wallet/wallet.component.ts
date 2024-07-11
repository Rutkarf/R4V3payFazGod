import { Component } from '@angular/core';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.scss']
})
export class WalletComponent {
  portfolioValue = '1000 USD';
  raveValue = '500 USD';
  raveCryptoValue = '500 R4V3';
  bitcoinValue = '0.05 BTC';
  raveWalletAddress = 'R4V3-WALLET-ADDRESS';
  bitcoinWalletAddress = 'BITCOIN-WALLET-ADDRESS';
  customTokenWalletAddress = 'CUSTOM-TOKEN-WALLET-ADDRESS';
}
