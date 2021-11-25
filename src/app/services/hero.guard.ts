import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LocalStorageUtils } from '../utils/localstorage';

@Injectable({
  providedIn: 'root'
})
export class HeroGuard implements CanActivate {

  localStorage = new LocalStorageUtils();

  constructor(private router: Router) { }

  canActivate() {
    if (!this.localStorage.obterApiKey()) {
      this.router.navigate(['/credenciais']);
    }

    return true;
  }
}