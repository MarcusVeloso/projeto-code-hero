import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from "rxjs/operators";
import { BaseService } from 'src/app/services/base.service';

@Injectable( )
export class HeroService extends BaseService {

  constructor(private http: HttpClient) { super() }

  obterTodos(): Observable<any[]>{
    return this.http
               .get<any[]>(this.UrlSreviceV1)
              //  .get<any[]>(this.UrlSreviceV1 + "characters" + super.obterAutenticacao(), super.obterHeaderJson())
               .pipe(catchError(super.serviceError));
  }

  obterPorId(id:any): Observable<any>{
    return this.http
               .get<any>(this.UrlSreviceV1 + "characters/" + id + super.obterAutenticacao(), super.obterHeaderJson())
               .pipe(catchError(super.serviceError));
  }
}