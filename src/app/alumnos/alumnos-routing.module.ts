// src/app/cursos/cursos-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlumnoListaComponent } from './components/alumno-lista/alumno-lista.component';

const routes: Routes = [
  { path: '', component: AlumnoListaComponent },
  // Agrega más rutas según sea necesario para el módulo de alumnos
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlumnosRoutingModule { }