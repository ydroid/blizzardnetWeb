import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PvpRoutingModule } from './pvp-routing.module';
import { PvpComponent } from './pvp.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material.module';


@NgModule({
  declarations: [PvpComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    SharedModule,
    MaterialModule,
    PvpRoutingModule
  ]
})
export class PvpModule { }
