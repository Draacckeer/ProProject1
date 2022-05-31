import {Route, RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {GameComponent} from "./game.component";
import {NavbarModule} from "../navbar/navbar.module";


const gameRoutes: Route[] = [
  {
    path: '',
    component: GameComponent
  }
]

@NgModule({
  declarations: [
    GameComponent
  ],
  exports: [
    GameComponent
  ],
  imports: [
    RouterModule.forChild(gameRoutes),
    NavbarModule,

  ]
})

export class GameModule
{
}
