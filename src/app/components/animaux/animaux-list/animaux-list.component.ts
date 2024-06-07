import { Component, Inject, Input } from '@angular/core';
import { faMars, faVenus, faHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as fasHeart } from '@fortawesome/free-regular-svg-icons';

import { AppService } from '../../../services/app.service';
import { Chat, Sexe, Favori, PageEvent, Association } from '../../../interfaces/interfaces';
import { DOCUMENT, DatePipe } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '@auth0/auth0-angular';
import { Subscription, firstValueFrom } from 'rxjs';
import { PaginatorState } from 'primeng/paginator';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-animaux-list',
  templateUrl: './animaux-list.component.html',
  styleUrls: ['./animaux-list.component.scss'],
  providers: [DatePipe],
})
export class AnimauxListComponent {
  @Input() profileContext: boolean = false;
  isLoaded: boolean = false;
  faMars = faMars;
  faVenus = faVenus;
  faHeart = faHeart;

  sexe = Sexe;
  fasHeart = fasHeart;
  isAuthenticated: boolean = false;
  chats: Chat[] = [];
  favoris: Favori[] = [];
  associations: Association[] = [];
  private subscriptions = new Subscription();


  // Pagination
  totalRecords = 3;
  rows = 10;
  first = 0;
  currentPage = 1;
  selectedCity: string | null = null;
  selectedCatBreed: string | null = null;
  selectedAssociation: string | null = null;
  form: FormGroup;


  constructor(
    private appService: AppService,
    private datePipe: DatePipe,
    private sanitizer: DomSanitizer,
    private toastr: ToastrService,
    private fb: FormBuilder,
    public auth: AuthService,
    @Inject(DOCUMENT) private doc: Document
  ) {
    this.form = this.fb.group({
      ville: [''],
      race: [''],
      association: ['']
    });
  }

  

  async ngOnInit() {
    this.isAuthenticated = await firstValueFrom(this.auth.isAuthenticated$);
    if (this.profileContext && this.isAuthenticated) {
      this.getCatByFavoris();
    } else {
      this.getCats();
      if (this.isAuthenticated) {
        this.getFavs();
      }
    }
    this.getAllAssociation();
  }
  
  toggleFavori(chat: Chat) {
    if (!this.isAuthenticated) {
      this.toastr.warning('Vous devez être connecté pour ajouter un chat aux favoris', 'Connexion requise');
      return;
    }

    if (chat.isFavori) {
      // Si le chat est déjà un favori, retirez-le des favoris
      this.appService.removeFavoriByCat(chat.id).subscribe(() => {
        chat.isFavori = false;
        console.log('Favori retiré');
        this.toastr.info('Chat retiré des favoris', 'Favori');
      });
    } else {
      // Sinon, ajoutez-le aux favoris
      this.appService.createFavori({ chatId: chat.id }).subscribe(() => {
        chat.isFavori = true;
        console.log('Favori ajouté');
        this.toastr.info('Chat ajouté aux favoris', 'Favori');
      });
    }
  }

  getCats() {
    const filters = {
      ville: this.form.value.ville,
      race: this.form.value.race,
      association: this.form.value.association
    };

    console.log('🚀 ~ AnimauxListComponent ~ catSubscription ~ filters:', filters);
    const catSubscription = this.appService.getAllCats(filters).subscribe({
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

  getAllAssociation() {
    const associationSubscription = this.appService.getAllAssociations().subscribe({
      next: (associations) => {
        this.associations = associations;
        console.log('🚀 ~ AnimauxListComponent ~ associationSubscription ~ this.associations:', this.associations);
      },
      error: (error) => {
        const errorText = 'Erreur lors de la récupération des associations';
        console.error(errorText, error);
        this.toastr.error(errorText, 'Erreur');
      },
      complete: () => console.log('Completion handler')
    });
    this.subscriptions.add(associationSubscription);
  }

  getCatByFavoris() {
    const favCatSubscription = this.appService.getCatByFavoris().subscribe({
      next: (chats) => {
        this.chats = chats;
        this.isLoaded = true;
        this.chats.forEach(chat => chat.isFavori = true);
      },
      error: (error) => {
        const errorText = 'Erreur lors de la récupération des chats favoris';
        console.error(errorText, error);
        this.toastr.error(errorText, 'Erreur');
      },
      complete: () => console.log('Chats favoris chargés')
    });
  
    this.subscriptions.add(favCatSubscription);
  }

  getFavs() {
    const favSubscription = this.appService.getFavorisByUser().subscribe({
      next: (favoriIds: number[]) => {
        this.chats.forEach(chat => {
          chat.isFavori = favoriIds.includes(chat.id);
        });
      },
      error: (error) => {
        const errorText = 'Erreur lors de la récupération des favoris';
        console.error(errorText, error);
        this.toastr.error(errorText, 'Erreur');
      },
      complete: () => console.log('Completion handler')
    });
    this.subscriptions.add(favSubscription);
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

  onPageChange(event: PaginatorState) {
    this.first = event.first ?? 0;
    this.rows = event.rows ?? 10;
    this.currentPage = Math.floor(this.first / this.rows) + 1;
  }

  onSearch() {
    console.log('Search clicked');
    console.log(this.form.value);
    this.getCats();

  }

  onClear() {
    console.log('Clear clicked');
    this.form.reset({
      ville: '',
      race: '',
      association: ''
    });
    this.getCats();
  }

}
