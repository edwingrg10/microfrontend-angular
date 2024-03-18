// src/app/cursos/cursos.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../shared/modules/material.module';
import { AlumnoListaComponent } from './components/alumno-lista/alumno-lista.component';
import { AlumnosRoutingModule } from './alumnos-routing.module';
import { SharedModule } from '../shared.module';

@NgModule({
  declarations: [AlumnoListaComponent],
  imports: [
    CommonModule,
    SharedModule,
    AlumnosRoutingModule,
    MaterialModule
  ],
})
export class AlumnosModule { }