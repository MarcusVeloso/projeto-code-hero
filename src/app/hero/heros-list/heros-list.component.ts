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

  pagina_atual: number;
  pagina_anterior: number;
  pagina_seguinte: number;
  pagina_tamanho: number;
  pagina_total: number;
  pagina_offset: number;
  pagina_limit: number;
  pagina_count: number;
  statusAnterior: string;
  statusSeguinte: string;

  public heroList: any = [];
  parametroPesquisa: string;

  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(private heroService: HeroService,
    private _snackBar: MatSnackBar) {

    this.pagina_atual = 1;
    this.pagina_anterior = 0;
    this.pagina_seguinte = 2;
    this.pagina_tamanho = 10;
    this.pagina_total = 0;
    this.pagina_offset = 10;
    this.pagina_limit = 10;
    this.pagina_count = 0;
    this.statusAnterior = 'disabled';
    this.statusSeguinte = 'disabled';

  }

  ngOnInit(): void {
    this.consultaPadrao();
  }

  consultaPadrao(parametro: any = '') {
    this.heroService.obterTodos(parametro)
      .subscribe(heroLista => {

        this.heroList = heroLista;

        this.pagina_count = this.heroList.data.count;
        this.pagina_offset = this.heroList.data.offset;
        this.pagina_total = this.heroList.data.total;
        this.statusAnterior = this.pagina_anterior == 0 ? 'disabled' : '';
        this.statusSeguinte = this.pagina_count == 0 ? 'disabled' : '';

      });
  }

  paginacaoAnterior(pagina: boolean = false) {

    if (this.pagina_atual >= 1) {
      this.pagina_atual--;
    }

    this.pagina_anterior = this.pagina_atual < 1 ? 0 : this.pagina_atual - 1;
    this.pagina_seguinte = this.pagina_atual + 1;

    if (pagina) {
      this.pagina_offset = 10 * this.pagina_atual;
    }

    this.pagina_offset = this.pagina_offset < 10 ? 0 : this.pagina_offset - 10;

    let parametro = { offset: this.pagina_offset };

    this.consultaPadrao(parametro);
  }

  paginacaoSeguinte(pagina: boolean = false) {

    if (this.pagina_atual > 0) {
      this.pagina_atual++;
      this.pagina_anterior = this.pagina_atual - 1;
    }

    this.pagina_seguinte = this.pagina_atual + 1;

    if (pagina) {
      this.pagina_offset = 10 * this.pagina_atual;
    }

    this.pagina_offset = this.pagina_offset < 0 ? 0 : this.pagina_offset + 10;
    let parametro = { offset: this.pagina_offset };

    this.consultaPadrao(parametro);
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