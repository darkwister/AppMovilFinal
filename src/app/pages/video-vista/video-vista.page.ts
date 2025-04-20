import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonProgressBar, IonItem, IonLabel, IonList, IonThumbnail, IonItemOption, IonItemOptions, IonItemSliding, IonCard } from '@ionic/angular/standalone';

@Component({
  selector: 'app-video-vista',
  templateUrl: './video-vista.page.html',
  styleUrls: ['./video-vista.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonProgressBar, IonItem, IonLabel, IonList, IonItemOption, IonItemOptions, IonItemSliding, IonCard]
})
export class VideoVistaPage implements OnInit {
  Videos?:any[] = [];

  isLoading: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  verVideo() {
    throw new Error('Method not implemented.');
  }
}
