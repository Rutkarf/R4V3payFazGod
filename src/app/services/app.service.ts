import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, share, take } from 'rxjs';
import { Chat, Favori } from '../interfaces/interfaces';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  // api dev  = 'http://localhost:3000/v1';
  // api prod = 'https://api.potits-chats.com/v1';
  api = environment.urlAPI;

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
