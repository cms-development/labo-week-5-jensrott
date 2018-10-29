import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/User';

@Injectable()
export class AuthService {
  url = 'http://localhost/oauth';
  // moet eigenlijk dit zijn: url = 'https://jensrott.cmsdevelopment.be/wp-json/wp/v2/';
  endpoint = 'token';
  clientId = '65d60f84-9840-4d4a-a028-41513e845c2a';
  clientSecret = 'secret';

  constructor(private _httpClient: HttpClient) {}

  LoginUser(username, password) {
    // Put body with data in a post request
    const formData = new FormData();
    console.log(username);
    console.log(password);

    formData.append('username', username);
    formData.append('password', password);
    formData.append('grant_type', 'password');
    formData.append('client_id', this.clientId);
    formData.append('client_secret', this.clientSecret);
    console.log(formData);

    return this._httpClient.post<any>(`${this.url}/${this.endpoint}`, formData);
  }
}
