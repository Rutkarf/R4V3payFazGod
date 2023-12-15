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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    IonicModule.forRoot(),
    BrowserAnimationsModule,
    MatTabsModule
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
