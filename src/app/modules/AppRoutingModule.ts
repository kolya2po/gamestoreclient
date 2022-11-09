import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomepageComponent} from "../components/homepage/homepage.component";
import {GamePageComponent} from "../components/gamepage/game-page.component";
import {AddGameComponent} from "../components/add-game/add-game.component";
import {EditGamePageComponent} from "../components/edit-game-page/edit-game-page.component";
import {RegistrationComponent} from "../components/registration/registration.component";
import {LoginComponent} from "../components/login/login.component";
import {EditUserPageComponent} from "../components/edit-user-page/edit-user-page.component";
import {CartPageComponent} from "../components/cart-page/cart-page.component";
import {OrderPageComponent} from "../components/order-page/order-page.component";

const routes: Routes = [
  { path: '', component: HomepageComponent},
  { path: 'add-game', component: AddGameComponent},
  { path: 'game/:id', component: GamePageComponent},
  { path: 'edit/:id', component: EditGamePageComponent},
  { path: 'registration', component: RegistrationComponent},
  { path: 'login', component: LoginComponent},
  { path: 'edit-user', component: EditUserPageComponent},
  { path: 'cart', component: CartPageComponent},
  { path: 'order', component: OrderPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
