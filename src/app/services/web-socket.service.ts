import { Injectable } from '@angular/core';
import { io, Socket } from 'socket.io-client';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class WebSocketService {
  api = environment.api.serverUrl;
  private socket: Socket = io(this.api);

//   public sendMessage(message: string): void {
//     this.socket.emit('message', message);
//   }

//   public onMessage(): Promise<string> {
//     return new Promise(resolve => {
//       this.socket.on('message', (data: string) => {
//         resolve(data);
//       });
//     });
//   }

  joinRoom(room: string): void {
    this.socket.emit('joinRoom', { room });
  }

  sendMessage(room: string, message: string): void {
    this.socket.emit('message', { room, message });
  }

  onMessage(callback: (message: string) => void): void {
    this.socket.on('message', callback);
  }

  // Méthode pour écouter les notifications de la room
  onRoomNotification(callback: (message: string) => void): void {
    this.socket.on('notification', callback);
  }


  // Ajoutez d'autres méthodes au besoin...
}
