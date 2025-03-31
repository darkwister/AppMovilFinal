import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonProgressBar, IonList, IonItemSliding, IonItem, IonLabel, IonItemOptions, IonItemOption, IonCard, IonIcon } from '@ionic/angular/standalone';

@Component({
  selector: 'app-albergue-detalle',
  templateUrl: './albergue-detalle.page.html',
  styleUrls: ['./albergue-detalle.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonProgressBar, IonList, IonItemSliding, IonItem, IonLabel, IonItemOptions, IonItemOption, IonCard, IonIcon]
})
export class AlbergueDetallePage implements OnInit {
isLoading: boolean = false
albergue?: {
  ciudad: string,
  codigo: string,
  edificio: string, 
  coordinador: string,
  telefono: string
  capacidad: string
  lat: string
  lng: string
};

albergues = [
  {
    ciudad: "Cali3",
    codigo: "Cali",
    edificio: "Cali",
    coordinador: "Cali",
    telefono: "Cali",
    capacidad: "Cali",
    lat: "Cali",
    lng: "Cali"
  }
]
  constructor() { }

  ngOnInit() {
    this.albergue = this.albergues[0]
  }

}
