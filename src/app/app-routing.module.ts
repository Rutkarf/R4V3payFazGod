import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProfilComponent } from './components/profil/profil.component';
import { ConnexionComponent } from './components/connexion/connexion.component';
import { InscriptionComponent } from './components/inscription/inscription.component';

const routes: Routes = [
  {
    path: 'profil',
    component: ProfilComponent
  },
  {
    path: 'connexion',
    component: ConnexionComponent
  },
  {
    path: 'inscription',
    component: InscriptionComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
