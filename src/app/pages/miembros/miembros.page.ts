import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';

interface Miembro {
  id: string;
  nombre: string;
  cargo: string;
  telefono: string;
  correo: string;
  foto: string;
}

@Component({
  selector: 'app-miembros',
  standalone: true,
  imports: [CommonModule, HttpClientModule, IonicModule],
  templateUrl: './miembros.page.html',
  styleUrls: ['./miembros.page.scss']
})
export class MiembrosPage implements OnInit {
  miembros: Miembro[] = [];
  cargando: boolean = true;
  error: string | null = null;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.cargarMiembros();
  }

  cargarMiembros() {
    this.cargando = true;
    this.error = null;
    
    this.http.get<{exito: boolean, datos: Miembro[]}>(
      'https://adamix.net/defensa_civil/def/miembros.php'
    ).subscribe({
      next: (response) => {
        this.cargando = false;
        if (response.exito && response.datos) {
          this.miembros = response.datos;
        } else {
          this.error = 'No se encontraron miembros';
        }
      },
      error: (err) => {
        this.cargando = false;
        this.error = 'Error al cargar los miembros';
        console.error('Error al cargar miembros:', err);
      }
    });
  }

  refrescar(event: any) {
    this.cargarMiembros();
    event.target.complete();
  }
}