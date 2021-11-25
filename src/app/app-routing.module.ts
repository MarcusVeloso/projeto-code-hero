import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HerosDetailsComponent } from './hero/heros-details/heros-details.component';
import { HerosListComponent } from './hero/heros-list/heros-list.component';


const routes: Routes = [
  { path: '', redirectTo:'/heroes-list', pathMatch: 'full'  },
  { path: 'heroes-list', component: HerosListComponent },
  { path: 'hero-details/:id', component: HerosDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }