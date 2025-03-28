import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonProgressBar, IonItem, IonLabel, IonList, IonThumbnail, IonItemOption, IonItemOptions, IonItemSliding } from '@ionic/angular/standalone';

@Component({
  selector: 'app-noticia-vista',
  templateUrl: './noticia-vista.page.html',
  styleUrls: ['./noticia-vista.page.scss'],
  standalone: true,
  imports: [IonItemSliding, IonItemOptions, IonItemOption, IonThumbnail, IonList, IonLabel, IonItem, IonProgressBar, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class NoticiaVistaPage implements OnInit {
  Noticias?: any[] = [];
  isLoading: boolean = false
  constructor() { }

  ngOnInit() {
  }

  goDetails(){
    throw new Error('Method not implemented.');
  }
}
