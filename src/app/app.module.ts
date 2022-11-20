import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent} from "./components/header/header.component";
import { HomepageComponent } from './components/homepage/homepage.component';
import { GamePageComponent } from './components/gamepage/game-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule} from "./modules/AppRoutingModule";
import { HttpClientModule} from "@angular/common/http";
import { AddGameComponent } from './components/add-game/add-game.component';
import {FormsModule} from "@angular/forms";
import { EditGamePageComponent } from './components/edit-game-page/edit-game-page.component';
import {MatSelectModule} from "@angular/material/select";
import { EditGenresComponent } from './components/edit-genres/edit-genres.component';
import { SearchFilterPipe } from './pipes/search-filter.pipe';
import { AddImageComponent } from './components/add-image/add-image.component';
import { GenresSearchFilterPipe } from './pipes/genres-search-filter.pipe';
import { EditGameComponent } from './components/edit-game/edit-game.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { JwtModule } from '@auth0/angular-jwt';
import { MatSnackBarModule} from "@angular/material/snack-bar";
import { AddUserAvatarComponent } from './components/add-user-avatar/add-user-avatar.component';
import { EditUserPageComponent } from './components/edit-user-page/edit-user-page.component';
import { AddCommentComponent } from './components/add-comment/add-comment.component';
import { GameCommentsComponent } from './components/game-comments/game-comments.component';
import { EditCommentComponent } from './components/edit-comment/edit-comment.component';
import { CommentComponent } from './components/comment/comment.component';
import { CartPageComponent } from './components/cart-page/cart-page.component';
import { OrderPageComponent } from './components/order-page/order-page.component';
import {MatDialogModule} from "@angular/material/dialog";
import { GameCardComponent } from './components/game-card/game-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomepageComponent,
    GamePageComponent,
    AddGameComponent,
    EditGamePageComponent,
    EditGenresComponent,
    SearchFilterPipe,
    AddImageComponent,
    GenresSearchFilterPipe,
    EditGameComponent,
    LoginComponent,
    RegistrationComponent,
    AddUserAvatarComponent,
    EditUserPageComponent,
    AddCommentComponent,
    GameCommentsComponent,
    EditCommentComponent,
    CommentComponent,
    CartPageComponent,
    OrderPageComponent,
    GameCardComponent
  ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        MatSelectModule,
        MatSnackBarModule,
        JwtModule.forRoot({
            config: {
                tokenGetter: () => {
                    return localStorage.getItem('auth_token');
                },
                allowedDomains: ['localhost:5001']
            }
        }),
        MatDialogModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
