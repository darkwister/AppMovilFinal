import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonProgressBar,
  IonList,
  IonItemSliding,
  IonItem,
  IonLabel,
  IonItemOptions,
  IonItemOption,
  IonCard,
  IonIcon
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-albergue-detalle',
  templateUrl: './albergue-detalle.page.html',
  styleUrls: ['./albergue-detalle.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    IonList,
    IonItem,
    IonLabel,
    IonCard
]
})
export class AlbergueDetallePage implements OnInit {
  albergue?: {
    ciudad: string,
    codigo: string,
    edificio: string,
    coordinador: string,
    telefono: string,
    capacidad: string,
    lat: string,
    lng: string
  };

  constructor(private router: Router) {}

  ngOnInit() {
    const nav = this.router.getCurrentNavigation();
    if (nav?.extras.state && nav.extras.state['albergue']) {
      this.albergue = nav.extras.state['albergue'];
    } else {
      console.error('No se pasaron datos del albergue.');
    }
  }
}
