import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  loading = false;
  logo = 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Universidad_de_Belgrano_Logo.gif'

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private _snackBar: MatSnackBar,) {
    this.form = this.fb.group({
      usuario: ['', Validators.required],
      password: ['', Validators.required]
      })
  }

  ngOnInit(): void {
  }

  ingresar() {

    const password = this.form.value.password;
    const usuario = this.form.value.usuario;

    if(usuario == 'cai.gutnisky' && password == '123456') {
      this.fakeLoading();
    }else {
      this.error();
    }
  }

  error() {
    this._snackBar.open('Usuario o contraseña ingresado invalidos', '', {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',

    })
  }

  fakeLoading() {
    this.loading = true;
    setTimeout(() => {
      this.router.navigate(['listaMaterias'])
    } ,1500);
  }

}
