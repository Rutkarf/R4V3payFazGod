import { Component } from '@angular/core';
import { faMars, faVenus, faHeart } from '@fortawesome/free-solid-svg-icons';
import { AppService } from '../../../services/app.service';
import { Chat, Sexe } from '../../../interfaces/interfaces';
import { DatePipe } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-animaux-list',
  templateUrl: './animaux-list.component.html',
  styleUrls: ['./animaux-list.component.scss'],
  providers: [DatePipe],
})
export class AnimauxListComponent {
  faMars = faMars;
  faVenus = faVenus;
  faHeart = faHeart;
  sexe = Sexe;
  constructor(
    private appService: AppService,
    private datePipe: DatePipe,
    private sanitizer: DomSanitizer
  ) {}

  chats: Chat[] = [];

  ngOnInit() {
    this.getCats();
  }

  getCats() {
    this.appService.getAllCats().subscribe((chats) => {
      this.chats = chats;
    });
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
