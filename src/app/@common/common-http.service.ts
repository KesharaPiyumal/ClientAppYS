import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CommonHttpService {
  baseUrl = 'https://yoursketchwebappservice.azurewebsites.net';

  constructor(private http: HttpClient, private router: Router) {
  }

  getHttpHeaders() {
    return new HttpHeaders()
      .set('Content-Type', 'application/json');
  }


  getAll(subUrl: string) {
    return this.http.get<any>(this.baseUrl + subUrl, {headers: this.getHttpHeaders()}).pipe(
      map(response => {
        return response;
      }));
  }

  postData(subUrl: string, data: any) {
    return this.http.post<any>(this.baseUrl + subUrl, data, {headers: this.getHttpHeaders()}).pipe(
      map(response => {
        return response;
      }));
  }
}
