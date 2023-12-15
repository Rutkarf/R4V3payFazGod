import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProfilComponent } from './components/profil/profil.component';
import { ConnexionComponent } from './components/connexion/connexion.component';
import { InscriptionComponent } from './components/inscription/inscription.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { AnimauxListComponent } from './components/animaux/animaux-list/animaux-list.component';
import { AnimauxDetailsComponent } from './components/animaux/animaux-details/animaux-details.component';

const routes: Routes = [
  {
    path: 'profil',
    component: ProfilComponent,
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
  },

  {
    path: '',
    component: HomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
