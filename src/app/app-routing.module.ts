import {Route} from '@angular/router';

export const appRoutes: Route[] = [

  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)},
  { path: 'game', loadChildren: () => import('./modules/game/game.module').then(m => m.GameModule)},

];

