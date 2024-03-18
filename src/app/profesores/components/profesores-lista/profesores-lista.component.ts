import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ProfesorCrearEditarComponent } from '../profesor-crear-editar/profesor-crear-editar.component';
@Component({
  selector: 'app-profesores-lista',
  templateUrl: './profesores-lista.component.html',
  styleUrls: ['./profesores-lista.component.css']
})
export class ProfesoresListaComponent implements OnInit {

  dataSource = new MatTableDataSource<any>();
  displayedColumns: string[] = ['nombre', 'cursos', 'acciones'];
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  profesores = [
    { id: 1, nombre: 'Harold Y', cursos: [{ id: 1, nombre: 'Matemáticas' }, { id: 2, nombre: 'Español' }] },
    { id: 2, nombre: 'Kevin A', cursos: [{ id: 1, nombre: 'Matemáticas' }, { id: 2, nombre: 'Español' }] },
  ];
  constructor(
    public dialog: MatDialog) { }

  ngOnInit(): void {
    this.dataSource.data = this.profesores;
    this.dataSource.paginator = this.paginator;
  }

  createEditTeacher(curso?: any) {
    const dialogRef = this.dialog.open(ProfesorCrearEditarComponent, {
      width: '400px',
      data: curso ? { titulo: 'Editar Profesor', curso } : null,
    });

    dialogRef.afterClosed().subscribe((result) => {
    });
  }

  formatearCursos(teacher: any): string {
    if (teacher && teacher.cursos) {
      return teacher.cursos.map((curso: any) => curso.nombre).join(', ');
    } else {
      return ''; // o cualquier valor predeterminado que desees
    }
  }
}

