import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CatApiService {
  public CAT_URL = 'https://api.thecatapi.com/v1/images/search';

  constructor(private http: HttpClient) { }

  getRandomCat(): Observable<any>  {
    return this.http.get(this.CAT_URL);
  }
}
