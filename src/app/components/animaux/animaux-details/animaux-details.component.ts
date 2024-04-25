import { DOCUMENT, DatePipe } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { Chat, Sexe } from '../../../interfaces/interfaces';
import { AppService } from '../../../services/app.service';
import { ActivatedRoute } from '@angular/router';
import { faMars, faTrash, faUpload, faVenus } from '@fortawesome/free-solid-svg-icons';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '@auth0/auth0-angular';
import { UserService } from '../../../services/user.service';

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
  dataModel: any;
  description: string = '<p>Le chat est ....</p>';
  isEditMode: boolean = false;
  constructor(
    private route: ActivatedRoute,
    private appService: AppService,
    private sanitizer: DomSanitizer,
    private toastr: ToastrService,
    public auth: AuthService,
    @Inject(DOCUMENT) private doc: Document,
    public userService: UserService,
  ) {}

  ngOnInit() {
    this.getCat();
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
}
