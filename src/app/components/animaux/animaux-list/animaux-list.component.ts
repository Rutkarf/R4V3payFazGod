import { Component, Inject } from '@angular/core';
import { faMars, faVenus, faHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as fasHeart } from '@fortawesome/free-regular-svg-icons';

import { AppService } from '../../../services/app.service';
import { Chat, Sexe, Favori } from '../../../interfaces/interfaces';
import { DOCUMENT, DatePipe } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '@auth0/auth0-angular';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-animaux-list',
  templateUrl: './animaux-list.component.html',
  styleUrls: ['./animaux-list.component.scss'],
  providers: [DatePipe],
})
export class AnimauxListComponent {
  isLoaded: boolean = false;
  faMars = faMars;
  faVenus = faVenus;
  faHeart = faHeart;

  sexe = Sexe;
  fasHeart = fasHeart;

  constructor(
    private appService: AppService,
    private datePipe: DatePipe,
    private sanitizer: DomSanitizer,
    private toastr: ToastrService,
    public auth: AuthService,
    @Inject(DOCUMENT) private doc: Document
  ) {}

  chats: Chat[] = [];
  isFav = false;
  private subscriptions = new Subscription();


  ngOnInit() {
    this.getCats();
  }

  toggleFavori(chat: Chat) {
    const isChatInFavoris = chat.favoris.length > 0;

    if (isChatInFavoris) {
      // Si le chat est déjà dans la liste des favoris, retire-le
      const favoriToRemove = chat.favoris[0];
      chat.favoris = [];

      this.appService.removeFavori(favoriToRemove.id!).subscribe((favori) => {
        console.log('Favori retiré:', favori);
        this.toastr.info('Chat retiré des favoris', 'Favori');
      });
    } else {
      // Sinon, ajoute-le aux favoris
      const newFavori: Favori = {
        chatId: chat.id,
      };
      this.appService.createFavori(newFavori).subscribe((favori) => {
        chat.favoris.push(favori);
        this.toastr.info('Chat ajouté aux favoris', 'Favori');
      });
    }
  }

  getCats() {
    const catSubscription = this.appService.getAllCats().subscribe({
      next: (chats) => {
        this.chats = chats;
        this.isLoaded = true;
      },
      error: (error) => {
        const errorText = 'Erreur lors de la récupération des chats';
        console.error(errorText, error);
        this.toastr.error(errorText, 'Erreur');
      },
      complete: () => console.log('Completion handler')
    });

    this.subscriptions.add(catSubscription);
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  sanitizeHtml(html: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }

  formatDate(date: string): string {
    // Assuming chat.createdAt is a string representing a date
    const formattedDate = this.datePipe.transform(date, 'dd MMM yyyy');
    return formattedDate || ''; // return an empty string if the date is not valid
  }
}
