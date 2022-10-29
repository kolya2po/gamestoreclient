import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomepageComponent} from "../components/homepage/homepage.component";
import {GamePageComponent} from "../components/gamepage/game-page.component";
import {AddGameComponent} from "../components/add-game/add-game.component";
import {EditGamePageComponent} from "../components/edit-game-page/edit-game-page.component";
import {RegistrationComponent} from "../components/registration/registration.component";
import {LoginComponent} from "../components/login/login.component";

const routes: Routes = [
  { path: '', component: HomepageComponent},
  { path: 'add-game', component: AddGameComponent},
  { path: 'game/:id', component: GamePageComponent},
  { path: 'edit/:id', component: EditGamePageComponent},
  { path: 'registration', component: RegistrationComponent},
  { path: 'login', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
