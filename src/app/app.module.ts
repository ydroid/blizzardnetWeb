import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ShellModule } from './shell/shell.module';
import { HomeModule } from './home/home.module';
import { GuildModule } from './guild/guild.module';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    MaterialModule,
    ShellModule,
    HomeModule,
    GuildModule,
    HttpClientModule,
    HttpClientJsonpModule,
    RouterModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
