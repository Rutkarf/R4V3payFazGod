import { Component } from '@angular/core';
import { faMars, faVenus } from '@fortawesome/free-solid-svg-icons';
import { AppService } from '../../../services/app.service';
import { Chat } from '../../../interfaces/interfaces';

@Component({
  selector: 'app-animaux-list',
  templateUrl: './animaux-list.component.html',
  styleUrls: ['./animaux-list.component.scss'],
})
export class AnimauxListComponent {
  faMars = faMars;
  faVenus = faVenus;
  constructor(private appService: AppService) {}

  chats: Chat[] = [];

  ngOnInit() {
    this.getCats();
  }

  getCats() {
    this.appService.getAllCats().subscribe((chats) => {
      this.chats = chats;
      console.log(
        '🚀 ~ AnimauxListComponent ~ this.appService.getAllCats ~ this.chats:',
        this.chats
      );
    });
  }
}
