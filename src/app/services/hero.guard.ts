import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HeroGuard implements CanActivate {
  
  constructor(private router: Router) { }

  canActivate() {
    if (!environment.hash && !environment.apikey) {
      this.router.navigate(['/credenciais']);
    }

    return true;
  }
}