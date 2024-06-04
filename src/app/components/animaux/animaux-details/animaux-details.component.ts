import { DOCUMENT, DatePipe } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { Chat, Sexe } from '../../../interfaces/interfaces';
import { AppService } from '../../../services/app.service';
import { ActivatedRoute } from '@angular/router';
import { faMars, faTrash, faUpload, faVenus, faHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as fasHeart } from '@fortawesome/free-regular-svg-icons';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '@auth0/auth0-angular';
import { UserService } from '../../../services/user.service';
import { Subscription, firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-animaux-details',
  templateUrl: './animaux-details.component.html',
  styleUrls: ['./animaux-details.component.scss'],
})
export class AnimauxDetailsComponent {
  chat: Chat | undefined;
  sexe = Sexe;
  faMars = faMars;
  faVenus = faVenus;
  faTrash = faTrash;
  faUpload = faUpload;
  faHeart = faHeart;
  fasHeart = fasHeart;
  dataModel: any;
  description: string = '<p>Le chat est ....</p>';
  isEditMode: boolean = false;
  isAuthenticated: boolean = false;
  private subscriptions = new Subscription();

  constructor(
    private route: ActivatedRoute,
    private appService: AppService,
    private sanitizer: DomSanitizer,
    private toastr: ToastrService,
    public auth: AuthService,
    @Inject(DOCUMENT) private doc: Document,
    public userService: UserService,
  ) {}

  async ngOnInit() {
    this.isAuthenticated = await firstValueFrom(this.auth.isAuthenticated$);
    this.getCat();
    if (this.isAuthenticated) {
      this.getFavs();
    }
  }

  sanitizeHtml(html: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }

  toggleEditMode() {
    this.isEditMode = !this.isEditMode;
  }

  getCat() {
    this.route.params.subscribe((params) => {
      if (params['id']) {
        this.appService.getByIdCat(params['id']).subscribe((chat) => {
          this.chat = chat;
        });
      }
    });
  }

  updateChat() {
    this.appService.updateChat(this.chat!).subscribe({
      error: (error) => {
        console.error('error:', error);
        if (error?.error?.message) {
          this.toastr.error(
            error.error.message,
            'Erreur de mise à jour du chat'
          );
        } else {
          this.toastr.error('Erreur de mise à jour du chat');
        }
      },
      complete: () => {
        this.toastr.success('Chat mis à jour avec succès');
        this.isEditMode = false;
      },
    });
  }
  getFavs() {
    const favSubscription = this.appService.getFavorisByUser().subscribe({
      next: (favoriIds: number[]) => {
        if (this.chat) {
          this.chat.isFavori = favoriIds.includes(this.chat.id);
        }
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

  toggleFavori(chat: Chat) {
    if (!this.isAuthenticated) {
      this.toastr.warning('Vous devez être connecté pour ajouter un chat aux favoris', 'Connexion requise');
      return;
    }

    if (chat.isFavori) {
      this.appService.removeFavoriByCat(chat.id).subscribe(() => {
        chat.isFavori = false;
        this.toastr.info('Chat retiré des favoris', 'Favori');
      });
    } else {
      this.appService.createFavori({ chatId: chat.id }).subscribe(() => {
        chat.isFavori = true;
        this.toastr.info('Chat ajouté aux favoris', 'Favori');
      });
    }
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
  
}
