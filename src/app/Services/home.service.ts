import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private url = 'https://www.techzara.org/event/api/';
  constructor(private http: Http) { }
  getParticipants(): Observable<any> {
    return this.http.get(this.url + 'participants').pipe(map(res => res.json()));
  }
}
