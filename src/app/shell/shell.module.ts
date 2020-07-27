import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material.module';
import { ShellComponent } from './shell.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [ShellComponent],
  imports: [
    CommonModule, MaterialModule, SharedModule, FlexLayoutModule, RouterModule
  ]
})
export class ShellModule { }
