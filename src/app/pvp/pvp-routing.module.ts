import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PvpComponent } from './pvp.component';


const routes: Routes = [
  {
    path: '',
    component: PvpComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PvpRoutingModule { }
