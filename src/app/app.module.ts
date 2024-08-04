import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
// Importez les composants standalone ici
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { TotemphraseComponent } from './components/totemphrase/totemphrase.component';
import { AProposComponent } from './components/a-propos/a-propos.component';
import { ProfilComponent } from './components/profil/profil.component';
import { CreditCardComponent } from './components/credit-card/credit-card.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { VendettaComponent } from './components/vendetta/vendetta.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ValueGlobalAccountComponent } from './components/value-global-account/value-global-account.component';
import { LastTransactionCardComponent } from './components/last-transaction-card/last-transaction-card.component';
import { LastTransactionCryptoComponent } from './components/last-transaction-crypto/last-transaction-crypto.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'totemphrase', component: TotemphraseComponent },
  { path: 'apropos', component: AProposComponent },
  { path: 'profil', component: ProfilComponent },
  { path: 'credit-card', component: CreditCardComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'vendetta', component: VendettaComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'value-global-account', component: ValueGlobalAccountComponent },
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    // Vous n'avez pas besoin d'ajouter les composants standalone ici
  ],
  providers: [],
  // Retirez le `bootstrap` de NgModule
})
export class AppModule { }


