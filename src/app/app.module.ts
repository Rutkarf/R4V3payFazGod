import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
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
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NoHeaderFooterDirective } from './no-header-footer.directive';
import { ReactiveFormsModule } from '@angular/forms';
import {
  AuthHttpInterceptor,
  AuthModule,
  HttpMethod,
} from '@auth0/auth0-angular';
import { environment } from 'src/environments/environment';
import { EditorModule, TINYMCE_SCRIPT_SRC } from '@tinymce/tinymce-angular';
import { DonsComponent } from './components/dons/dons.component';
import { ErreurComponent } from './components/erreur/erreur.component';
import { AssociationsListComponent } from './components/associations/associations-list/associations-list.component';
import { AProposComponent } from './components/a-propos/a-propos.component';
import { CguComponent } from './components/cgu/cgu.component';
import { ToastrModule } from 'ngx-toastr';
import { LoaderComponent } from './components/loader/loader.component';
import { TchatComponent } from './components/tchat/tchat.component';
import { TchatIconComponent } from './components/tchat/tchat-icon/tchat-icon.component';
import { TchatMessageComponent } from './components/tchat/tchat-message/tchat-message.component';

import { FileUploadModule } from 'primeng/fileupload';
import { AccordionModule } from 'primeng/accordion';

import { ToastModule } from 'primeng/toast';
import { BugComponent } from './components/bug/bug.component';


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
    TchatComponent,
    TchatIconComponent,
    TchatMessageComponent,
    BugComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatToolbarModule,
    MatSidenavModule,
    FontAwesomeModule,
    FileUploadModule,
    ToastModule,
    AccordionModule,
    // Auth0 configuration
    AuthModule.forRoot({
      ...environment.auth,
      httpInterceptor: {
        allowedList: [
          // Exclure l'endpoint d'envoi d'email de l'authentification
          {
            uri: `${environment.urlAPI}/contact`,
            httpMethod: HttpMethod.Post,
            allowAnonymous: true,
          },
          // Tous les post, put, delete et patch sont protégés par le token
          {
            uri: `${environment.urlAPI}/favoris`,
            httpMethod: HttpMethod.Get,
          },
          {
            uri: `${environment.urlAPI}/chats/favoris`,
            httpMethod: HttpMethod.Get,
          },
          {
            uri: `${environment.urlAPI}/*`,
            httpMethod: HttpMethod.Post,
          },
          {
            uri: `${environment.urlAPI}/*`,
            httpMethod: HttpMethod.Put,
          },
          {
            uri: `${environment.urlAPI}/*`,
            httpMethod: HttpMethod.Delete,
          },
          {
            uri: `${environment.urlAPI}/*`,
            httpMethod: HttpMethod.Patch,
          },
        ],
      },
    }),
    EditorModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
    }),
  ],
  providers: [
    { provide: TINYMCE_SCRIPT_SRC, useValue: 'tinymce/tinymce.min.js' },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthHttpInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
