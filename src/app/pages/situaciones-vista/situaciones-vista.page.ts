import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonButton, IonContent, IonHeader, IonTitle, IonToolbar, IonProgressBar, IonItem, IonLabel, IonList, IonThumbnail, IonItemOption, IonItemOptions, IonItemSliding } from '@ionic/angular/standalone';

@Component({
  selector: 'app-situaciones-vista',
  templateUrl: './situaciones-vista.page.html',
  styleUrls: ['./situaciones-vista.page.scss'],
  standalone: true,
  imports: [IonButton,IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonProgressBar, IonItem, IonLabel, IonList, IonThumbnail, IonItemOption, IonItemOptions, IonItemSliding]
})
export class SituacionesVistaPage implements OnInit {
  isLoading: boolean = false;
  Situaciones: any[] = [];
 

  situacionesTest: any[] = [
    {
      titulo: 'Situacion 1',
      descripcion: 'Esta es la situacion 1',
      fecha: 'ayer',
      imagen: 'https://picsum.photos/200'
    },
    {
      titulo: 'Situacion 2',
      descripcion: 'Esta es la situacion 2',
      fecha: 'hace 2 dias',
      imagen: 'https://picsum.photos/200'
    },
    {
      titulo: 'Situacion 3',
      descripcion: 'Esta es la situacion 3',
      fecha: 'hace 3 dias',
      imagen: 'https://picsum.photos/200'
    }
  ];

  constructor() { }

  ngOnInit() {
    this.Situaciones = this.situacionesTest
  }

}
