import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, share, take } from 'rxjs';
import { Chat } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  getbyId(id: number) {
    throw new Error('Method not implemented.');
  }
  api = 'http://localhost:4520/v1';

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
    return this.http.get(this.api + '/chats').pipe(
      map((res: any) => res),
      share(),
      take(1)
    );
  }
}
