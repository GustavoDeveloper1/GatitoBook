import { TokenService } from './../token.service';
import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';
import { Usuario } from './usuario';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private usuarioSubject = new BehaviorSubject<Usuario>({});

  constructor(private tokenService: TokenService, ) {
    if (this.tokenService.havToken()) {
      this.decodificaJWT()
    }
  }

  private decodificaJWT() {

    const token = this.tokenService.returnToken();
    const usuario = jwtDecode(token) as Usuario;
    this.usuarioSubject.next(usuario);
  }

  returnUser() {

    return this.usuarioSubject.asObservable();

  }

  salvaToken(token: string) {

    this.tokenService.salvaToken(token);
    this.decodificaJWT();

  }

  logout() {
    this.tokenService.excludeToken();
    this.usuarioSubject.next({});
  }


  isLoged() {
    return this.tokenService.havToken()
  }

}
