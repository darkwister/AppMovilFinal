import { Component } from '@angular/core';
import { 
  IonHeader, 
  IonToolbar, 
  IonTitle, 
  IonContent,
  IonButton
} from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-video-vista',
  templateUrl: './video-vista.page.html',
  styleUrls: ['./video-vista.page.scss'],
  standalone: true,
<<<<<<< HEAD
  imports: [
    CommonModule,
    IonHeader, 
    IonToolbar, 
    IonTitle, 
    IonContent,
    IonButton
  ]
=======
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonProgressBar, IonItem, IonLabel, IonList, IonItemOption, IonItemOptions, IonItemSliding, IonCard]
>>>>>>> dev
})
export class VideoVistaPage {
  videos = [
    { id: 'WeEV2Ay0x_Q', title: 'Video 1' },
    { id: 'SqaY-qJ5lTg', title: 'Video 2' },
    { id: 'RZJSekdGaM0', title: 'Video 3' }
  ];

  constructor() { }
}