import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfilComponent } from './components/profil/profil.component';
import { ConnexionComponent } from './components/connexion/connexion.component';
import { InscriptionComponent } from './components/inscription/inscription.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { DonsComponent } from './components/dons/dons.component';
import { AProposComponent } from './components/a-propos/a-propos.component';
import { CguComponent } from './components/cgu/cgu.component';
import { AuthGuard } from '@auth0/auth0-angular';
import { TchatComponent } from './components/tchat/tchat.component';n
const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: { state: 'home' },
  },
  {
    path: 'profil',
    component: ProfilComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'connexion',
    component: ConnexionComponent,
  },
  {
    path: 'inscription',
    component: InscriptionComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  
  {
    path: 'dons',
    component: DonsComponent,
    data: { state: 'dons' },
  },
 

  {
    path: 'a-propos',
    component: AProposComponent,
  },
  {
    path: 'mentions-legales',
    component: CguComponent,
  },
  {
    path: 'tchat',
    component: TchatComponent,
  },
  {
    path : 'callback',
    component : HomeComponent
  },
  {
    path: '**',
    redirectTo: 'erreur',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
