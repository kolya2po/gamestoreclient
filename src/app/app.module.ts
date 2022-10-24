import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent} from "./components/header/header.component";
import { HomepageComponent } from './components/homepage/homepage.component';
import { GamePageComponent } from './components/gamepage/game-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule} from "./modules/AppRoutingModule";
import { HttpClientModule} from "@angular/common/http";
import { AddGameFormComponent } from './components/add-game-form/add-game-form.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomepageComponent,
    GamePageComponent,
    AddGameFormComponent
  ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
