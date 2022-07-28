import { UsuarioService } from './usuario/usuario.service';
import { Injectable } from '@angular/core';

import { HttpClientModule, HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, } from 'rxjs';
import { tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private userServices: UsuarioService) { }

  auth(usuario: string, password: string): Observable<HttpResponse<any>> {

    return this.http.post('http://localhost:3000/user/login',
      {

        userName: usuario,
        password: password

      },
      {
        observe: 'response'
      }
    ).pipe(
      tap((res) => {
        const authToken = res.headers.get('x-access-token') ?? '';
        this.userServices.salvaToken(authToken)
      })
    );


  }
}
