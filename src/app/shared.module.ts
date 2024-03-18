// shared/shared.module.ts
import { NgModule } from '@angular/core';
import { LayoutComponent } from './shared/components/layout/layout.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './shared/modules/material.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [LayoutComponent],
  exports: [LayoutComponent,MaterialModule],
  imports: [CommonModule,RouterModule,MaterialModule] // Asegúrate de incluir RouterModule en los imports
})
export class SharedModule { }