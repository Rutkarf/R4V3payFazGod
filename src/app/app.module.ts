import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { ProfilComponent } from './components/profil/profil.component';
import { ConnexionComponent } from './components/connexion/connexion.component';
import { InscriptionComponent } from './components/inscription/inscription.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { AnimauxListComponent } from './components/animaux/animaux-list/animaux-list.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AnimauxDetailsComponent } from './components/animaux/animaux-details/animaux-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatTabsModule } from '@angular/material/tabs';
import { NoHeaderFooterDirective } from './no-header-footer.directive';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthModule } from '@auth0/auth0-angular';
import { environment } from 'src/environments/environment';
import { EditorModule, TINYMCE_SCRIPT_SRC } from '@tinymce/tinymce-angular';
import { DonsComponent } from './components/dons/dons.component';
import { ErreurComponent } from './components/erreur/erreur.component';
import { AssociationsListComponent } from './components/associations/associations-list/associations-list.component';
import { AProposComponent } from './components/a-propos/a-propos.component';
import { CguComponent } from './components/cgu/cgu.component';
import { ToastrModule } from 'ngx-toastr';
import { LoaderComponent } from './components/loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProfilComponent,
    ConnexionComponent,
    InscriptionComponent,
    HomeComponent,
    ContactComponent,
    AnimauxListComponent,
    AnimauxDetailsComponent,
    NoHeaderFooterDirective,
    DonsComponent,
    ErreurComponent,
    AssociationsListComponent,
    AProposComponent,
    CguComponent,
    LoaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    IonicModule.forRoot(),
    BrowserAnimationsModule,
    MatTabsModule,
    FontAwesomeModule,
    // Auth0 configuration
    AuthModule.forRoot({
      ...environment.auth,
    }),
    EditorModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
    }),
  ],
  providers: [
    { provide: TINYMCE_SCRIPT_SRC, useValue: 'tinymce/tinymce.min.js' },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
