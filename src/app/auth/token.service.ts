import { Injectable } from '@angular/core';

const KEY = 'token'

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  returnToken() {
    return localStorage.getItem(KEY) ?? '';
  }

  salvaToken(token: string) {
    localStorage.setItem(KEY, token);
  }

  excludeToken() {
    localStorage.removeItem(KEY)
  }

  havToken() {
    return !!this.returnToken
  }


}
