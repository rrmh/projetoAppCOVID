import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiCasosService {

  constructor(private http: HttpClient) { }

  public getDataApi(){
    const url = 'https://covid19-brazil-api.now.sh/api/report/v1'
    return this.http.get(url).toPromise();
  }
}
