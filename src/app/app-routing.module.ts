// src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './shared/components/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: '', pathMatch: 'full' },
      { path: 'cursos', loadChildren: () => import('./cursos/cursos.module').then(m => m.CursosModule) },
      { path: 'profesores', loadChildren: () => import('./profesores/profesores.module').then(m => m.ProfesoresModule) },
      { path: 'alumnos', loadChildren: () => import('./alumnos/alumnos.module').then(m => m.AlumnosModule) },
      // Agrega más rutas según sea necesario
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }