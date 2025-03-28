import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonProgressBar, IonItem, IonLabel, IonList, IonThumbnail } from '@ionic/angular/standalone';

@Component({
  selector: 'app-noticia-vista',
  templateUrl: './noticia-vista.page.html',
  styleUrls: ['./noticia-vista.page.scss'],
  standalone: true,
  imports: [IonThumbnail, IonList, IonLabel, IonItem, IonProgressBar, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class NoticiaVistaPage implements OnInit {
  Noticias?: any[] = [{
    id: 1,
    titulo: "Noticia 1",
    fecha: "2022-11-11",
    imagen: "https://ionicframework.com/docs/img/demos/thumbnail.svg"
  },
  {
    id: 2,
    titulo: "Noticia 2",
    fecha: "2022-11-11",
    imagen: "https://ionicframework.com/docs/img/demos/thumbnail.svg"
  },
  {
    id: 3,
    titulo: "Noticia 3",
    fecha: "2022-11-11",
    imagen: "https://ionicframework.com/docs/img/demos/thumbnail.svg"
  }];
  isLoading: boolean = false
  constructor() { }

  ngOnInit() {
  }

}
