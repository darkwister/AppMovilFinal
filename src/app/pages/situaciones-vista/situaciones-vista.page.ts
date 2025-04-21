import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonButton,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonProgressBar,
  IonItem,
  IonLabel,
  IonList,
  IonThumbnail,
  IonItemOption,
  IonItemOptions,
  IonItemSliding
} from '@ionic/angular/standalone';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-situaciones-vista',
  templateUrl: './situaciones-vista.page.html',
  styleUrls: ['./situaciones-vista.page.scss'],
  standalone: true,
  imports: [
    IonButton,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonProgressBar,
    IonItem,
    IonLabel,
    IonList,
    IonThumbnail,
    CommonModule,
    FormsModule,
    HttpClientModule
]
})

export class SituacionesVistaPage implements OnInit {
  isLoading: boolean = false;
  Situaciones: any[] = [];

  constructor(private http: HttpClient, private route: Router) {}

  ngOnInit() {
    this.getSituaciones();
  }

  getSituaciones() {
    this.isLoading = true;
    const token = localStorage.getItem('token');

    if (!token) {
      alert('Token no disponible');
      this.isLoading = false;
      return;
    }

    const formData = new FormData();
    formData.append('token', token);

    this.http.post<any>('https://adamix.net/defensa_civil/def/situaciones.php', formData).subscribe({
      next: (response) => {
        if (response.exito) {
          this.Situaciones = response.datos;
        } else {
          console.warn('Error en la respuesta:', response.mensaje);
        }
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error al obtener situaciones:', error);
        this.isLoading = false;
      }
    });
  }
  mapaSituacionNavigate(){
    this.route.navigate(['situaciones-mapa']);
  }

  crearSituacionNavigate(){
    this.route.navigate(['situaciones-crear']);
  }
}
