import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-situaciones-mapa',
  templateUrl: './situaciones-mapa.page.html',
  styleUrls: ['./situaciones-mapa.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class SituacionesMapaPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
