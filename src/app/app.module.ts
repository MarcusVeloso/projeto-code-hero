import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatDialogModule} from '@angular/material/dialog';

import { AppComponent } from './app.component';
import { HerosListComponent } from './hero/heros-list/heros-list.component';
import { HerosDetailsComponent } from './hero/heros-details/heros-details.component'
import { HeroService } from './hero/services/hero.service';
import { FormsModule } from '@angular/forms';
import { MenuComponent } from './menu/menu.component';
import { CredenciaisFormComponent } from './credenciais-form/credenciais-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HerosListComponent,
    HerosDetailsComponent,
    MenuComponent,
    CredenciaisFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,

    MatButtonModule,
    MatToolbarModule,
    MatDialogModule,
    MatSnackBarModule,
  ],
  providers: [
    HeroService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }