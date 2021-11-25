import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CredenciaisFormComponent } from './credenciais-form/credenciais-form.component';
import { HerosDetailsComponent } from './hero/heros-details/heros-details.component';
import { HerosListComponent } from './hero/heros-list/heros-list.component';
import { HeroGuard } from './services/hero.guard';


const routes: Routes = [
  { path: '', redirectTo: '/heroes-list', pathMatch: 'full' },
  { path: 'credenciais', component: CredenciaisFormComponent },
  {
    path: 'heroes-list', component: HerosListComponent, canActivate: [HeroGuard]
  },
  { path: 'hero-details/:id', component: HerosDetailsComponent, canActivate: [HeroGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }