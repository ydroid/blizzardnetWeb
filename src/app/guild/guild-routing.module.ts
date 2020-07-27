import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GuildComponent } from './guild.component';
import { Shell } from '../shell/shell.service';

const routes: Routes = [
  Shell.childRoutes([
    { path: 'guild', component: GuildComponent, data: { title: 'Guild' } },
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GuildRoutingModule { }
