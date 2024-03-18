// src/app/cursos/cursos.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursoListaComponent } from './components/curso-lista/curso-lista.component';
import { CursosRoutingModule } from './cursos-routing.module';
import { SharedModule } from '../shared.module';
import { MaterialModule } from '../shared/modules/material.module';

@NgModule({
  declarations: [CursoListaComponent],
  imports: [
    CommonModule,
    SharedModule,
    CursosRoutingModule,
    MaterialModule
  ],
})
export class CursosModule { }