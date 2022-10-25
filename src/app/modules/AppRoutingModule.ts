import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomepageComponent} from "../components/homepage/homepage.component";
import {GamePageComponent} from "../components/gamepage/game-page.component";
import {AddGameFormComponent} from "../components/add-game-form/add-game-form.component";
import {EditGamePageComponent} from "../components/edit-game-page/edit-game-page.component";

const routes: Routes = [
  { path: '', component: HomepageComponent},
  { path: 'add-game', component: AddGameFormComponent},
  { path: 'game/:id', component: GamePageComponent},
  { path: 'edit/:id', component: EditGamePageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
