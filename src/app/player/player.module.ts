import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule} from '@angular/flex-layout';
import { SharedModule } from '../shared/shared.module';
import { PlayerRoutingModule } from './player-routing.module';
import { PlayerComponent } from './player.component';
import { MaterialModule } from '../material.module';

@NgModule({
  declarations: [PlayerComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    SharedModule,
    MaterialModule,
    PlayerRoutingModule
  ]
})
export class PlayerModule { }
