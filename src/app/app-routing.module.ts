// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AProposComponent } from './components/a-propos/a-propos.component';
import { ProfilComponent } from './components/profil/profil.component';
import { WalletComponent } from './components/wallet/wallet.component';
import { CreditCardComponent } from './components/credit-card/credit-card.component';
import { TradingComponent } from './components/trading/trading.component';
import { PartenairesComponent } from './components/partenaires/partenaires.component';
import { RaveprojectComponent } from './components/raveproject/raveproject.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'a-propos', component: AProposComponent },
  { path: 'profil', component: ProfilComponent },
  { path: 'wallet', component: WalletComponent },
  { path: 'credit-card', component: CreditCardComponent},
  { path: 'trading', component: TradingComponent},
  { path: 'partenaires', component: PartenairesComponent},
  { path: 'raveproject', component : RaveprojectComponent},
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
