import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GuildRoutingModule } from './guild-routing.module';
import { GuildComponent } from './guild.component';
import { MaterialModule } from '../material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [GuildComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    SharedModule,
    MaterialModule,
    GuildRoutingModule
  ]
})
export class GuildModule { }
