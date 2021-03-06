import {Route, RouterModule} from "@angular/router";
import {HomeComponent} from "./home.component";
import {NgModule} from "@angular/core";
import {NavbarModule} from "../navbar/navbar.module";


const homeRoutes: Route[] = [
  {
    path: '',
    component: HomeComponent
  }
]

@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    RouterModule.forChild(homeRoutes),
    NavbarModule,

  ]
})

export class HomeModule
{
}
