import { Component, OnInit } from '@angular/core';
import { HeroService } from '../services/hero.service';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Component({
  selector: 'app-heros-list',
  templateUrl: './heros-list.component.html',
  styleUrls: ['./heros-list.component.css']
})
export class HerosListComponent implements OnInit {

  page: number = 1;
  public heroList: any = [];
  parametroPesquisa: string;

  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(private heroService: HeroService,
    private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.consultaPadrao();
  }

  consultaPadrao() {
    this.heroService.obterTodos()
      .subscribe(heroLista => this.heroList = heroLista);
  }

  pesquisarPersonagem(parametro: string) {
    if (!parametro) {
      this.limparPesquisa();
      return;
    }

    this.heroService.obterPorNome(parametro)
      .subscribe(heroLista => {
        this.heroList = heroLista;
        if (this.heroList.data.count == 0) {
          this.exibirMensagem();
        }
      });
  }

  limparPesquisa() {
    this.parametroPesquisa = ''
    this.consultaPadrao();
  }

  exibirMensagem() {
    this._snackBar.open
      ("Jarvis, você está online?! Desculpe, nenhum heroi foi encontrado!", "x",
        {
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
          duration: 5 * 1000,
        });
  }
}