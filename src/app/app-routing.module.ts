import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactComponent } from './components/contact/contact.component';
import { DonsComponent } from './components/dons/dons.component';
import { AProposComponent } from './components/a-propos/a-propos.component';
import { CguComponent } from './components/cgu/cgu.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: { state: 'home' },
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
