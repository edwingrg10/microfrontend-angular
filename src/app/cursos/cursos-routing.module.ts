// src/app/cursos/cursos-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursoListaComponent } from './components/curso-lista/curso-lista.component';

const routes: Routes = [
  { path: '', component: CursoListaComponent },
  // Agrega más rutas según sea necesario para el módulo de cursos
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursosRoutingModule { }