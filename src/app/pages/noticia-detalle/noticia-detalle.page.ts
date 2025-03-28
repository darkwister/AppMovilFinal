import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonLabel, IonItem, IonIcon, IonCard } from '@ionic/angular/standalone';

@Component({
  selector: 'app-noticia-detalle',
  templateUrl: './noticia-detalle.page.html',
  styleUrls: ['./noticia-detalle.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonList, IonLabel, IonItem, IonIcon, IonCard]
})
export class NoticiaDetallePage implements OnInit {
  noticia?: {
    imagen: string;
    fecha: Date;
    titulo: string;
    contenido: string;
  };

  constructor() { }

  ngOnInit() {
  }

}
