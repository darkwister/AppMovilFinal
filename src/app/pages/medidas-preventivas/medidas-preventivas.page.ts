import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

interface medidas_preventivas {
  id: string;
  titulo: string;
  descripcion: string;
}

@Component({
  selector: 'app-medida-preventiva',
  standalone: true,
  imports: [CommonModule, HttpClientModule, IonicModule],
  templateUrl: './medidas-preventivas.page.html',
  styleUrls: ['./medidas-preventivas.page.scss']
})
export class MedidaPreventivaPage implements OnInit {
  medidas: medidas_preventivas[] = [];
  cargando: boolean = true;
  error: string | null = null;

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {
    this.cargarMedidas();
  }

  cargarMedidas() {
    this.cargando = true;
    this.error = null;

    this.http.get<{ datos: medidas_preventivas[] }>(
      'https://adamix.net/defensa_civil/def/medidas_preventivas.php'
    ).subscribe({
      next: (response) => {
        this.cargando = false;
        this.medidas = response.datos || [];
      },
      error: (err) => {
        this.cargando = false;
        this.error = 'Error al cargar las medidas';
        console.error('Error al cargar medidas:', err);
      }
    });
  }

  refrescar(event: any) {
    this.cargarMedidas();
    if (event?.target?.complete) {
      event.target.complete();
    }
  }

  verDetalle(medida: medidas_preventivas) {
    this.router.navigate(['/medida-detalle'], {
      state: { medida }
    });
  }
}