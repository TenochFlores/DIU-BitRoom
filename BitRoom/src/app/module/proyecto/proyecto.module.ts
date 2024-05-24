import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms'; 
import { SesionDeEstudioComponent } from './component/tiempo-efectivo/sesion-de-estudio/sesion-de-estudio.component';
import { RecursosDeEstudioComponent } from './component/recursos/recursos-de-estudio/recursos-de-estudio.component';
import { ProgresoComponent } from './component/progreso/progreso.component';
import { ComunidadComponent } from './component/comunidad/comunidad.component';
import { MisSesionesComponent } from './component/tiempo-efectivo/mis-sesiones/mis-sesiones.component';
import { VideosComponent } from './component/recursos/videos/videos.component';
import { AudiosComponent } from './component/recursos/audios/audios.component';
import { LibrosComponent } from './component/recursos/libros/libros.component';
import { JuegosComponent } from './component/recursos/juegos/juegos.component';

@NgModule({
  declarations: [
    SesionDeEstudioComponent,
    RecursosDeEstudioComponent,
    ProgresoComponent,
    ComunidadComponent,
    MisSesionesComponent,
    VideosComponent,
    AudiosComponent,
    LibrosComponent,
    JuegosComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule 
  ]
})

export class ProyectoModule { }