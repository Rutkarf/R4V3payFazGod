import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';

import { NoHeaderFooterDirective } from './no-header-footer.directive';
import { AuthModule, AuthHttpInterceptor, HttpMethod } from '@auth0/auth0-angular';
import { environment } from 'src/environments/environment';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ContactComponent,
    NoHeaderFooterDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTabsModule,

    FontAwesomeModule,
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
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
    }),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthHttpInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}