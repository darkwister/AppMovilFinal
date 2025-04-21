import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton } from '@ionic/angular/standalone';
import * as L from 'leaflet';
import { HttpClientModule, HttpClient } from '@angular/common/http';
interface Situacion {
  id: string;
  titulo: string;
  descripcion: string;
  voluntario: string;
  foto: string;
  latitud: string;
  longitud: string;
  fecha_creacion: string;
}
@Component({
  selector: 'app-situaciones-mapa',
  templateUrl: './situaciones-mapa.page.html',
  styleUrls: ['./situaciones-mapa.page.scss'],
  standalone: true,
  imports: [IonBackButton, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, HttpClientModule]
})
export class SituacionesMapaPage implements OnInit, AfterViewInit {
  situaciones: Situacion[] = []; 

  map!: L.Map;

  constructor(private http: HttpClient) { }

  ngOnInit() {}
  ngAfterViewInit(): void {
    this.loadMap();
    setTimeout(() => {
      if(this.map){
        this.map.invalidateSize();
      }
    }, 300);
  }
  fetchSituaciones() {
    this.http.get<any>('https://adamix.net/defensa_civil/def/situaciones.php').subscribe(response => {
      if (response.exito) {
        this.situaciones = response.datos;
        this.addMarkers(); 
      }
    }, error => {
      console.error('Error al obtener situaciones:', error);
    });
  }
  loadMap() {
    this.map = L.map('mapSituacionMapa').setView([18.7357, -70.1627], 8);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(this.map);

    this.addMarkers();
  }
  addMarkers() {
    const customIcon = L.icon({
      iconUrl: 'assets/leaflet/marker-icon.png',
      shadowUrl: 'assets/leaflet/marker-shadow.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41]
    });

    for (const situacion of this.situaciones) {
      const lat = parseFloat(situacion.latitud);
      const lng = parseFloat(situacion.longitud);

      if (!isNaN(lat) && !isNaN(lng)) {
        const marker = L.marker([lat, lng], { icon: customIcon }).addTo(this.map);

        const popupHtml = `
          <strong>${situacion.titulo}</strong><br>
          <img src="data:image/jpeg;base64,${situacion.foto}" alt="foto" width="150" style="border-radius: 8px; margin-top: 5px;">
        `;

        marker.bindPopup(popupHtml);
      }
    }
  }
}
