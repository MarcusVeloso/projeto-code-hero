import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero/services/hero.service';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { LocalStorageUtils } from '../utils/localstorage';
import { Router } from '@angular/router';

export class Credenciais {
  chave_publica: string;
  chave_privada: string;
}

@Component({
  selector: 'app-credenciais-form',
  templateUrl: './credenciais-form.component.html',
  styleUrls: ['./credenciais-form.component.css']
})
export class CredenciaisFormComponent implements OnInit {

  chave_publica: string;
  chave_privada: string;
  credenciais: Credenciais;

  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  localStorage = new LocalStorageUtils();

  constructor(private heroService: HeroService,
    private _snackBar: MatSnackBar,
    private router: Router) { }

  ngOnInit(): void {
  }

  salvarCredenciais() {

    if (this.chave_privada && this.chave_publica) {
      this.credenciais = { chave_privada: this.chave_privada, chave_publica: this.chave_publica }

      this.localStorage.salvarCredenciais(this.credenciais);
      this.exibirMensagem();
      this.router.navigate(['/heroes-list']);
    }
  }

  exibirMensagem() {
    this._snackBar.open
      ("Credencias foram salvas com sucesso!", "x",
        {
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
          duration: 5 * 1000,
        });
  }
}