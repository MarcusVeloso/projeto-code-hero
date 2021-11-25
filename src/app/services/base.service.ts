import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpHeaders } from "@angular/common/http";
import { throwError } from 'rxjs';
import { LocalStorageUtils } from '../utils/localstorage';

@Injectable()
export abstract class BaseService {

  protected UrlSreviceV1: string = environment.urlV1;
  public LocalStorage = new LocalStorageUtils();

  protected obterHeaderJson() {
    return {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    };
}

  protected extractData(response: any){
    return response.data || {};
  }

  protected serviceError(response: Response | any){

    return throwError(response);
  }

  protected obterAutenticacao(){
    return `ts=1&apikey=${this.LocalStorage.obterApiKey()}&hash=${this.LocalStorage.obterHash()}`;
  }
}