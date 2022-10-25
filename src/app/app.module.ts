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
import { EditGamePageComponent } from './components/edit-game-page/edit-game-page.component';
import {MatSelectModule} from "@angular/material/select";
import { EditGenresComponent } from './components/edit-genres/edit-genres.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomepageComponent,
    GamePageComponent,
    AddGameFormComponent,
    EditGamePageComponent,
    EditGenresComponent
  ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        MatSelectModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
