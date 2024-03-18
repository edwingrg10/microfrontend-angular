import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { CursoCrearEditarComponent } from '../curso-crear-editar/curso-crear-editar.component';

@Component({
  selector: 'app-curso-lista',
  templateUrl: './curso-lista.component.html',
  styleUrls: ['./curso-lista.component.css']
})
export class CursoListaComponent implements OnInit {

  dataSource = new MatTableDataSource<any>();
  displayedColumns: string[] = ['nombre', 'profesor', 'acciones'];
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  cursos = [
    { id: 1, nombre: 'Español', profesor: 'Edwin Garzón' },
    { id: 2, nombre: 'Matemáticas', profesor: 'Andrea Manrique' },
    { id: 3, nombre: 'Lenguaje', profesor: 'Juan C. Vasquez' },
    { id: 4, nombre: 'Fisica', profesor: 'Carlos Anderson' },
    { id: 5, nombre: 'Quimica', profesor: 'Rosa Perez' },
  ];
  constructor(
    public dialog: MatDialog) { }

  ngOnInit(): void {
    this.dataSource.data = this.cursos;
    this.dataSource.paginator = this.paginator;
  }

  createEditCourse(curso?: any) {
    const dialogRef = this.dialog.open(CursoCrearEditarComponent, {
      width: '400px',
      data: curso ? { titulo: 'Editar Curso', curso } : null,
    });

    dialogRef.afterClosed().subscribe((result) => {
    });
  }
}