import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor( public http: HttpClient) { }

  loadUsers(){
    return this.http
    .get('https://randomuser.me/api/?results=4').toPromise();
  }
}
