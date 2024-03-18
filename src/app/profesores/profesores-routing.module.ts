// src/app/cursos/cursos-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfesoresListaComponent } from './components/profesores-lista/profesores-lista.component';

const routes: Routes = [
  { path: '', component: ProfesoresListaComponent },
  // Agrega más rutas según sea necesario para el módulo de cursos
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfesoresRoutingModule { }