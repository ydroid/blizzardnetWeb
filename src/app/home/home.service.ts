import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  _guildInfo: any;
  private subjet = new BehaviorSubject(this._guildInfo);
  constructor(private http: HttpClient) {
    this.getGuildData();
  }

  getGuildDataAsObservable(): Observable<any> {
    return this.subjet.asObservable();
  }

  async getGuildData() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin':'http://localhost:4200'
      })
    }
    this._guildInfo = await this.http.get('https://armory.warmane.com/api/guild/BlizzarNetCuba/Icecrown/summary', httpOptions).toPromise();
  }

  getTotal(): number {
    return this._guildInfo.roster.length;
  }
}
