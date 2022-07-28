import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario = ''
  senha = ''

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  login() {

    console.log(this.usuario)
    console.log(this.senha)
    this.authService.auth(this.usuario, this.senha).subscribe(res => {
        this.router.navigate(['/animais']);
    }, (error) => {
      console.log("USUARIO NN AUTHENTICADO")
    })
  }

}
