import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonProgressBar, IonList, IonItemSliding, IonItem, IonLabel, IonItemOptions, IonItemOption } from '@ionic/angular/standalone';

@Component({
  selector: 'app-albergue-vista',
  templateUrl: './albergue-vista.page.html',
  styleUrls: ['./albergue-vista.page.scss'],
  standalone: true,
  imports: [ IonItemOption, IonItemOptions, IonLabel, IonItem, IonItemSliding, IonList, IonProgressBar, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class AlbergueVistaPage implements OnInit {
  isLoading: boolean = false;
  Albergues: any[] = [];
  constructor() { }

  ngOnInit() {
  }

  goDetails(){
    console.log('Detalles albergue');
  }
}
