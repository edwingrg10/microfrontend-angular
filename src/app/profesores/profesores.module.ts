// src/app/cursos/cursos.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared.module';
import { ProfesoresRoutingModule } from './profesores-routing.module';
import { ProfesoresListaComponent } from './components/profesores-lista/profesores-lista.component';

@NgModule({
  declarations: [ProfesoresListaComponent],
  imports: [
    CommonModule,
    SharedModule,
    ProfesoresRoutingModule
  ]
})
export class ProfesoresModule { }