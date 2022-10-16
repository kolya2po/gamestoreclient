import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomepageComponent} from "../components/homepage/homepage.component";
import {GamePageComponent} from "../components/gamepage/game-page.component";

const routes: Routes = [
  { path: '', component: HomepageComponent},
  { path: 'game/:id', component: GamePageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
