import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { Utilisateur } from '../../../interfaces/interfaces';
import { WebSocketService } from '../../../services/web-socket.service';
import { AppService } from '../../../services/app.service';

@Component({
  selector: 'app-tchat-message',
  templateUrl: './tchat-message.component.html',
  styleUrls: ['./tchat-message.component.scss']
})
export class TchatMessageComponent {
  user?: Utilisateur;

  messages : any  = [
    // { content: "Salut je suis intérrésé par le chat Tigrou", type: 'incoming'},
    // { content: "Bonjour, très bien il est disponible en visite aujoudui", type: 'outgoing'},
    // { content: "Ok j'arrive", type: 'incoming'},
  ];

  newMessage: string = '';

  currentRoom: string = '';
  

  constructor(
    private webSocketService: WebSocketService,
    public auth: AuthService,
    private appService: AppService,
    ) {
    this.auth.user$.subscribe((user) => {
      if (user) {
        this.currentRoom = '1_3'; // user to asso
        this.joinRoom(this.currentRoom);
      }
    });
  }

  
  ngOnInit() {
    this.getMessages();
  }


  joinRoom(room: string): void {
    this.webSocketService.joinRoom(room);
    this.listenForMessages();
  }

  sendMessage(): void {
    if (this.newMessage.trim() !== '') {
      this.webSocketService.sendMessage(this.currentRoom, this.newMessage); // Envoyer un message à la salle actuelle
      this.messages.push({ content: this.newMessage, type: 'outgoing'});
      this.newMessage = '';
    }
  }

  getMessages(): void {
    this.appService.getAllConversationByUser(1).subscribe((convs) => {
      console.log(' convs:', convs);
    });
  }

  private listenForMessages(): void {
    this.webSocketService.onMessage((message: string) => {
      this.messages.push({ content: message, type: 'incoming'});
      // Note: Avec Socket.io, onMessage est un observable qui continue de recevoir des messages,
      // donc pas besoin de rappeler listenForMessages() ici
    });
  }




}
