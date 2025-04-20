import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonButton, IonContent, IonHeader, IonTitle, IonToolbar, IonProgressBar, IonItem, IonLabel, IonList, IonThumbnail, IonItemOption, IonItemOptions, IonItemSliding } from '@ionic/angular/standalone';

@Component({
  selector: 'app-situaciones-vista',
  templateUrl: './situaciones-vista.page.html',
  styleUrls: ['./situaciones-vista.page.scss'],
  standalone: true,
  imports: [IonButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonProgressBar, IonItem, IonLabel, IonList, IonThumbnail]
})
export class SituacionesVistaPage implements OnInit {
  isLoading: boolean = false;
  Situaciones: any[] = [];
 
  constructor() { }

  ngOnInit() {
  }

}
