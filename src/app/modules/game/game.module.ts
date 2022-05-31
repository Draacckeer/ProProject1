import {Route, RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {GameComponent} from "./game.component";
import {NavbarModule} from "../navbar/navbar.module";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {CommonModule} from "@angular/common";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {FormsModule} from "@angular/forms";


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
    MatSelectModule,
    CommonModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,

  ]
})

export class GameModule
{
}
