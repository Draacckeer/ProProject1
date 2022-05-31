import {Route, RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {GameComponent} from "./game.component";
import {NavbarModule} from "../navbar/navbar.module";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";


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
    MatFormFieldModule,
    MatInputModule,

  ]
})

export class GameModule
{
}
