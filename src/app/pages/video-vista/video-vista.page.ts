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
    IonButton
  ]
})
export class VideoVistaPage implements OnInit {
  isLoading: boolean = false;

  Videos = [
    {
      titulo: 'Video 1',
      descripcion: 'Introducción a Ionic',
      fecha: new Date(),
      url: 'https://www.youtube.com/watch?v=WeEV2Ay0x_Q'
    },
    {
      titulo: 'Video 2',
      descripcion: 'Avanzado en Angular',
      fecha: new Date(),
      url: 'https://www.youtube.com/watch?v=RZJSekdGaM0'
    }
  ];

  constructor() {}

  ngOnInit() {}

  verVideo(url: string) {
    window.open(url, '_blank');
  }
}
