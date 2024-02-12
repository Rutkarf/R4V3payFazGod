import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map, share, take } from 'rxjs';
import { Chat } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  getbyId(id: number) {
    throw new Error('Method not implemented.');
  }
  // api = 'http://localhost:3000/v1';
  api = 'https://potits-chats-back.vercel.app/v1';
  //api = '/v1';

  constructor(private http: HttpClient) {}

  getHome(): Observable<any> {
    return this.http.get(this.api).pipe(
      map((res: any) => res),
      share(),
      take(1)
    );
  }

  getUsers(id: number): Observable<any> {
    return this.http.get(this.api + '/users/' + id).pipe(
      map((res: any) => res),
      share(),
      take(1)
    );
  }

  getAllCats(): Observable<Chat[]> {
    console.log('🚀 ~ AppService ~ getAllCats ~ this.api ICI :', this.api);
    return this.http
      .get(this.api + '/chats', {
        headers: new HttpHeaders({ 'Access-Control-Allow-Origin': '*' }),
      })
      .pipe(
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
}
