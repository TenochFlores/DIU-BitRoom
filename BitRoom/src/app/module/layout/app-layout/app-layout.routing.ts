import { Routes } from '@angular/router';
import { HomeComponent } from '../../proyecto/component/home/home.component';
import { RecursosDeEstudioComponent } from '../../proyecto/component/recursos/recursos-de-estudio/recursos-de-estudio.component';
import { SesionDeEstudioComponent } from '../../proyecto/component/tiempo-efectivo/sesion-de-estudio/sesion-de-estudio.component';
import { ProgresoComponent } from '../../proyecto/component/progreso/progreso.component';
import { ComunidadComponent } from '../../proyecto/component/comunidad/comunidad.component';
import { MisSesionesComponent } from '../../proyecto/component/tiempo-efectivo/mis-sesiones/mis-sesiones.component';
import { VideosComponent } from '../../proyecto/component/recursos/videos/videos.component';
import { AudiosComponent } from '../../proyecto/component/recursos/audios/audios.component';
import { LibrosComponent } from '../../proyecto/component/recursos/libros/libros.component';
import { JuegosComponent } from '../../proyecto/component/recursos/juegos/juegos.component';

export const AppLayoutRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'progreso', component: ProgresoComponent },
    { path: 'recursos-de-estudio', component: RecursosDeEstudioComponent },
    { path: 'videos', component: VideosComponent },
    { path: 'audios', component: AudiosComponent },
    { path: 'libros', component: LibrosComponent },
    { path: 'juegos', component: JuegosComponent },
    { path: 'sesion-de-estudio', component: SesionDeEstudioComponent },
    { path: 'comunidad', component: ComunidadComponent },
    { path: 'mis-sesiones', component: MisSesionesComponent },
];