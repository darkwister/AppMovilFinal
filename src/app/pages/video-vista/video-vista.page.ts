import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Importaciones Ionic
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonProgressBar,
  IonItem,
  IonLabel,
  IonList,
  IonCard,
  IonButton
} from '@ionic/angular/standalone';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-video-vista',
  templateUrl: './video-vista.page.html',
  styleUrls: ['./video-vista.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonProgressBar,
    IonItem,
    IonLabel,
    IonList,
    IonCard,
    IonButton,
    HttpClientModule
  ]
})
export class VideoVistaPage implements OnInit {
  isLoading: boolean = false;

  Videos: any;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getVideoFromApi();
  }

  getVideoFromApi() {
    this.isLoading = true;
    this.http.get<any>('https://adamix.net/defensa_civil/def/videos.php').subscribe({
      next: (response) => {
        this.isLoading = false;
        if (response?.exito && response.datos) {
          this.Videos = response.datos;
        } else {
          console.error('Respuesta inválida', response);
        }
      },
      error: (err) => {
        this.isLoading = false;
        console.error('Error al obtener los videos', err);
      }
    });
  }

  verVideo(link: string) {
    window.open(`https://www.youtube.com/watch?v=${link}`, '_blank');
  }
}
