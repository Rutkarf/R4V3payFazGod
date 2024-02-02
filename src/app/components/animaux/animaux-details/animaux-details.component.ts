import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { Chat } from '../../../interfaces/interfaces';
import { AppService } from 'src/app/services/app.service';
import { ActivatedRoute } from '@angular/router';
import { faMars, faVenus } from '@fortawesome/free-solid-svg-icons';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-animaux-details',
  templateUrl: './animaux-details.component.html',
  styleUrls: ['./animaux-details.component.scss'],
})
export class AnimauxDetailsComponent {
  chat: Chat | undefined;
  faMars = faMars;
  faVenus = faVenus;
  dataModel: any;
  description: string = '<p>Le chat est ....</p>';
  isEditMode: boolean = false;
  constructor(
    private route: ActivatedRoute,
    private appService: AppService,
    private sanitizer: DomSanitizer
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
      error: (error) => console.error('Erreur de mise à jour du chat', error),
      complete: () => console.log('Chat mis à jour avec succès'),
    });
  }
}
