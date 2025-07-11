import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { constants } from '../core/constants';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) {}

  login(credentials: { email: string; password: string }) {
    return this.http.post<{ access_token: string }>(
      `${constants.urlBase}/auth/login`,
      credentials
    );
  }

  register(data: { email: string; password: string }) {
    return this.http.post(`${constants.urlBase}/auth/register`, data);
  }

}
