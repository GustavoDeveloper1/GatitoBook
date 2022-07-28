import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NovoUsuarioService } from './novo-usuario.service';

@Component({
  selector: 'app-novo-usuario',
  templateUrl: './novo-usuario.component.html',
  styleUrls: ['./novo-usuario.component.css']
})
export class NovoUsuarioComponent implements OnInit {

  newUserForm !: FormGroup

  constructor(private fb: FormBuilder, private nuService: NovoUsuarioService, private router: Router) { }

  ngOnInit(): void {

    this.newUserForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      fullName: ['', [Validators.required, Validators.minLength(10)]],
      userName: [''],
      password: ['']
    })

  }


  cadastrar() {


    if (this.newUserForm.valid) {

      const novoUsuario = this.newUserForm.getRawValue();
      this.nuService.cadastrarUser(novoUsuario).subscribe(e => {
        this.router.navigate([''])
      }, err => {
        console.log(err)
      })
     
    }
  }

}
