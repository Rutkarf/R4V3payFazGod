import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AProposComponent } from './components/a-propos/a-propos.component';
import { ProfilComponent } from './components/profil/profil.component';
import { CreditCardComponent } from './components/credit-card/credit-card.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { VendettaComponent } from './components/vendetta/vendetta.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'a-propos', component: AProposComponent },
  { path: 'profil', component: ProfilComponent },
  { path: 'credit-card', component: CreditCardComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'vendetta', component: VendettaComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
