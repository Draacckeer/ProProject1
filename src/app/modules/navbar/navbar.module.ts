import {NgModule} from "@angular/core";
import {NavbarComponent} from "./navbar.component";
import {MatToolbarModule} from "@angular/material/toolbar";
import {RouterModule} from "@angular/router";
import {MatButtonModule} from "@angular/material/button";



@NgModule({
  declarations: [
    NavbarComponent
  ],
  exports: [
    NavbarComponent
  ],
  imports: [
    MatToolbarModule,
    RouterModule,
    MatButtonModule

  ],
})

export class NavbarModule
{
}
