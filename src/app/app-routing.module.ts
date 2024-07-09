import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

import { ContactComponent } from './components/contact/contact.component';
import { DonsComponent } from './components/dons/dons.component';
import { AProposComponent } from './components/a-propos/a-propos.component';
import { ProfilComponent } from './components/profil/profil.component'; // Assurez-vous d'importer correctement votre composant de profil

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: { state: 'home' },
  },
  {
    path: 'profil',
    component: ProfilComponent, // Utilisez le bon nom de composant ici
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
    path : 'callback',
    component : HomeComponent,
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
