import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map, share, take } from 'rxjs';
import { Chat, Favori } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  getbyId(id: number) {
    throw new Error('Method not implemented.');
  }
  // api = 'http://localhost:3000/v1';
  api = 'https://api.potits-chats.com/v1';
  //api = '/v1';

  constructor(private http: HttpClient) {}

  getUsers(id: number): Observable<any> {
    return this.http.get(this.api + '/users/' + id).pipe(
      map((res: any) => res),
      share(),
      take(1)
    );
  }

  getAllCats(): Observable<Chat[]> {
    console.log('🚀 ~ AppService ~ getAllCats ~ this.api ICI :', this.api);
    return this.http.get(this.api + '/chats').pipe(
      map((res: any) => res),
      share(),
      take(1)
    );
  }

  getByIdCat(id: number): Observable<Chat> {
    return this.http.get(this.api + '/chats/' + id).pipe(
      map((res: any) => res),
      share(),
      take(1)
    );
  }

  updateChat(chat: Chat): Observable<Chat> {
    return this.http.put(this.api + '/chats/' + chat.id, chat).pipe(
      map((res: any) => res),
      share(),
      take(1)
    );
  }

  createFavori(favori: Favori): Observable<Favori> {
    return this.http.post(this.api + '/favoris', favori).pipe(
      map((res: any) => res),
      share(),
      take(1)
    );
  }

  removeFavori(id: number): Observable<Favori> {
    return this.http.delete(this.api + '/favoris/' + id).pipe(
      map((res: any) => res),
      share(),
      take(1)
    );
  }
}
