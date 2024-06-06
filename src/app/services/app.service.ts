import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, share, take } from 'rxjs';
import { Chat, Favori, Association } from '../interfaces/interfaces';
import { environment } from 'src/environments/environment';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  // api dev  = 'http://localhost:3000/v1';
  // api prod = 'https://api.potits-chats.com/v1';
  api = environment.urlAPI;

  constructor(
    private http: HttpClient,
    @Inject(DOCUMENT) private doc: Document
  ) {}

  getUsers(id: number): Observable<any> {
    return this.http.get(this.api + '/users/' + id).pipe(
      map((res: any) => res),
      share(),
      take(1)
    );
  }

  getAllCats(): Observable<Chat[]> {
    return this.http.get(this.api + '/chats').pipe(
      map((res: any) => res),
      share(),
      take(1)
    );
  }

  getAllAssociations(): Observable<Association[]> {
    return this.http.get(this.api + '/associations').pipe(
      map((res: any) => res),
      share(),
      take(1)
    );
  }

  getCatByFavoris(): Observable<Chat[]> {
    return this.http.get(this.api + '/chats/favoris').pipe(
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

  getAllAsso(): Observable<Association[]> {
    return this.http.get(this.api + '/associations').pipe(
      map((res: any) => res),
      share(),
      take(1)
    );
  }

  getByIdAsso(id: number): Observable<Association> {
    return this.http.get(this.api + '/associations/' + id).pipe(
      map((res: any) => res),
      share(),
      take(1)
    );
  }

  updateAsso(asso: Association): Observable<Association> {
    return this.http.put(this.api + '/associations/' + asso.id, asso).pipe(
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

  getFavorisByUser(): Observable<number[]> {
    return this.http.get(this.api + '/favoris').pipe(
      map((res: any) => res),
      share(),
      take(1)
    );
  }

  removeFavoriByCat(id: number): Observable<Favori> {
    return this.http.delete(this.api + '/favoris/' + id).pipe(
      map((res: any) => res),
      share(),
      take(1)
    );
  }

  getAllConversationByUser(id: number): Observable<any> {
    return this.http.get(this.api + '/conversations').pipe(
      map((res: any) => res),
      share(),
      take(1)
    );
  }

  getConversationById(id: number): Observable<any> {
    return this.http.get(this.api + '/conversations/' + id).pipe(
      map((res: any) => res),
      share(),
      take(1)
    );
  }

  sendEmail(data: any): Observable<any> {
    return this.http.post(this.api + '/contact', data).pipe(
      map((res: any) => res),
      share(),
      take(1)
    );
  }
}
