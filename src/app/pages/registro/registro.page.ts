import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonInput, IonFooter, IonItem, IonList, IonIcon } from '@ionic/angular/standalone';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButton, IonInput, IonFooter, IonItem, IonList, IonIcon]
})
export class RegistroPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
