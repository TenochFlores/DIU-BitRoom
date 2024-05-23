import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProyectoModule } from './module/proyecto/proyecto.module';

import { CommonsModule } from './module/commons/commons.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProyectoModule,
    CommonsModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }