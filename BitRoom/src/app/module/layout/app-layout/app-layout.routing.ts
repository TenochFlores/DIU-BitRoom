import { Routes } from '@angular/router';
import { HomeComponent } from '../../proyecto/component/home/home.component';
import { RecursosDeEstudioComponent } from '../../proyecto/component/recursos-de-estudio/recursos-de-estudio.component';
import { SesionDeEstudioComponent } from '../../proyecto/component/sesion-de-estudio/sesion-de-estudio.component';
import { ProgresoComponent } from '../../proyecto/component/progreso/progreso.component';

export const AppLayoutRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'progreso', component: ProgresoComponent },
    { path: 'recursos-de-estudio', component: RecursosDeEstudioComponent },
    { path: 'sesion-de-estudio', component: SesionDeEstudioComponent },
];