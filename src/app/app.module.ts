import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HerosListComponent } from './hero/heros-list/heros-list.component';
import { HerosDetailsComponent } from './hero/heros-details/heros-details.component'
import { HeroService } from './hero/services/hero.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HerosListComponent,
    HerosDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    HeroService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
