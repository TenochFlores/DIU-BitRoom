import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms'; 
import { SesionDeEstudioComponent } from './component/sesion-de-estudio/sesion-de-estudio.component';
import { RecursosDeEstudioComponent } from './component/recursos-de-estudio/recursos-de-estudio.component';
import { ProgresoComponent } from './component/progreso/progreso.component';

@NgModule({
  declarations: [
    SesionDeEstudioComponent,
    RecursosDeEstudioComponent,
    ProgresoComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule 
  ]
})

export class ProyectoModule { }