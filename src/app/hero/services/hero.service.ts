import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from "rxjs/operators";
import { Credenciais } from 'src/app/credenciais-form/credenciais-form.component';
import { BaseService } from 'src/app/services/base.service';
import { LocalStorageUtils } from 'src/app/utils/localstorage';

@Injectable()
export class HeroService extends BaseService {

  constructor(private http: HttpClient) { super() }

  obterTodos(objeto: any = ''): Observable<any[]> {

    let paginacao = objeto.offset ? "&limit=10&offset=" + objeto.offset : '&limit=10';

    return this.http
        .get<any[]>(this.UrlSreviceV1 + "characters?" + super.obterAutenticacao() + paginacao, super.obterHeaderJson())
        .pipe(catchError(super.serviceError));
  }

  obterPorId(id: any): Observable<any> {
    return this.http
      .get<any>(this.UrlSreviceV1 + "characters/" + id + "?" + super.obterAutenticacao(), super.obterHeaderJson())
      .pipe(catchError(super.serviceError));
  }

  obterPorNome(nome: string): Observable<any[]> {
    return this.http
      .get<any[]>(this.UrlSreviceV1 + "characters?name=" + nome + "&" + super.obterAutenticacao(), super.obterHeaderJson())
      .pipe(catchError(super.serviceError));
  }

  salvarCredenciais(credenciais:Credenciais): Observable<Credenciais> {
    let LocalStorage = new LocalStorageUtils();
    LocalStorage.salvarApiKey(credenciais);
    return;
  }
}