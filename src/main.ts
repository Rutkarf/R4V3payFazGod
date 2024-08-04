import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from '../src/app/app.component';
import { provideHttpClient } from '@angular/common/http';  // Importer provideHttpClient

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient()  // Configurer HttpClient
  ]
}).catch(err => console.error(err));


