import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppLayoutComponent } from './app-layout/app-layout.component';
import { NavbarComponent } from './app-layout/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { AppLayoutRoutes } from './app-layout/app-layout.routing';
import { ProyectoModule } from '../proyecto/proyecto.module';

@NgModule({
  declarations: [
    AppLayoutComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(AppLayoutRoutes),
    ProyectoModule,
  ]
})

export class LayoutModule { }