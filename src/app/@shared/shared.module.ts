import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from '@app/material.module';
import { LoaderComponent } from './loader/loader.component';
import { BarComponent } from './bar/bar.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [FlexLayoutModule, MaterialModule, CommonModule, RouterModule],
  declarations: [LoaderComponent, BarComponent],
  exports: [LoaderComponent, BarComponent],
})
export class SharedModule {}
