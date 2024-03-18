import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { AlumnoCrearEditarComponent } from '../alumno-crear-editar/alumno-crear-editar.component';

@Component({
  selector: 'app-alumno-lista',
  templateUrl: './alumno-lista.component.html',
  styleUrls: ['./alumno-lista.component.css']
})
export class AlumnoListaComponent implements OnInit {
  dataSource = new MatTableDataSource<any>();
  displayedColumns: string[] = ['nombre', 'curso', 'acciones'];
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  alumns = [
    { id: 1, nombre: 'Martha G', curso: 'Español' },
    { id: 2, nombre: 'Carlos G', curso: 'Matemáticas' },
  ];
  constructor(
    public dialog: MatDialog) { }

  ngOnInit(): void {
    this.dataSource.data = this.alumns;
    this.dataSource.paginator = this.paginator;
  }

  createEditAlumn(alumn?: any) {
    const dialogRef = this.dialog.open(AlumnoCrearEditarComponent, {
      width: '400px',
      data: alumn ? { titulo: 'Editar Alumno', alumn } : null,
    });

    dialogRef.afterClosed().subscribe((result) => {
      // Lógica para manejar el resultado después de cerrar la modal de editar
    });
  }
}
