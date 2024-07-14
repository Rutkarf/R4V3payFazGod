import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Assurez-vous que ReactiveFormsModule est importé
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router'; // Assurez-vous que RouterModule est importé
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'; // Assurez-vous que AppComponent est bien importé ici
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { AProposComponent } from './components/a-propos/a-propos.component';
import { ProfilComponent } from './components/profil/profil.component';
import { WalletComponent } from './components/wallet/wallet.component';
import { CreditCardComponent } from './components/credit-card/credit-card.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { VendettaComponent } from "./components/vendetta/vendetta.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AProposComponent,
    ProfilComponent,
    WalletComponent,
    CreditCardComponent,
    LoginComponent,
    RegistrationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule, // Ajoutez cette ligne
    HttpClientModule,
    RouterModule,
    VendettaComponent
],
  providers: [],
  bootstrap: [AppComponent] // Assurez-vous qu'AppComponent est bien mentionné ici
})
export class AppModule { }
