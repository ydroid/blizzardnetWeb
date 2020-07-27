import { NgModule } from '@angular/core';
import { Shell } from './shell/shell.service';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  Shell.childRoutes([
    {
      path:'pvp',
      loadChildren: () => import('./pvp/pvp.module').then(m => m.PvpModule)
    },
    {
      path: 'player',
      loadChildren: () => import('./player/player.module').then(m => m.PlayerModule)
    }
  ]),
  { path: 'guild', redirectTo: '/guild'},
  { path: '**', redirectTo: '/home', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
