import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProfilComponent } from './components/profil/profil.component';
import { ConnexionComponent } from './components/connexion/connexion.component';
import { InscriptionComponent } from './components/inscription/inscription.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { AnimauxListComponent } from './components/animaux/animaux-list/animaux-list.component';
import { AnimauxDetailsComponent } from './components/animaux/animaux-details/animaux-details.component';
import { DonsComponent } from './components/dons/dons.component';
import { AssociationsListComponent } from './components/associations/associations-list/associations-list.component';
import { AProposComponent } from './components/a-propos/a-propos.component';
import { CguComponent } from './components/cgu/cgu.component';
import { ErreurComponent } from './components/erreur/erreur.component';
import { AuthGuard } from '@auth0/auth0-angular';
import { TchatComponent } from './components/tchat/tchat.component';

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
    path: 'animaux/:id',
    component: AnimauxDetailsComponent,
  },
  {
    path: 'animaux',
    component: AnimauxListComponent,
    data: { state: 'animaux' },
  },
  {
    path: 'dons',
    component: DonsComponent,
    data: { state: 'dons' },
  },
  {
    path: 'associations',
    component: AssociationsListComponent,
    data: { state: 'associations' },
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
    path: '**',
    redirectTo: 'erreur',
  },
  {
    path: 'erreur',
    component: ErreurComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
