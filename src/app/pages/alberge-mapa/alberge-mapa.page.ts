import { AfterViewInit, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { IonicModule, AlertController } from '@ionic/angular';
import * as L from 'leaflet';
import { addIcons } from 'ionicons';
import { homeOutline, homeSharp } from 'ionicons/icons';

interface Albergue {
  ciudad: string;
  codigo: string;
  edificio: string;
  coordinador: string;
  telefono: string;
  capacidad: string;
  lat: string;  // En la API esto es realmente LONGITUD (Oeste)
  lng: string;  // En la API esto es realmente LATITUD (Norte)
}

@Component({
  selector: 'app-alberge-mapa',
  standalone: true,
  imports: [CommonModule, HttpClientModule, IonicModule],
  templateUrl: './alberge-mapa.page.html',
  styleUrls: ['./alberge-mapa.page.scss']
})
export class AlbergeMapaPage implements AfterViewInit {
  private map!: L.Map;
  public albergues: Albergue[] = [];
  private markers: L.Marker[] = [];

  constructor(
    private http: HttpClient,
    private alertController: AlertController
  ) {
    addIcons({ homeOutline, homeSharp });
    this.fixLeafletDefaultIcons();
  }

  private fixLeafletDefaultIcons(): void {
    const iconDefault = L.icon({
      iconRetinaUrl: 'assets/leaflet/marker-icon-2x.png',
      iconUrl: 'assets/leaflet/marker-icon.png',
      shadowUrl: 'assets/leaflet/marker-shadow.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41]
    });
    L.Marker.prototype.options.icon = iconDefault;
  }

  ngAfterViewInit(): void {
    this.initializeMap();
    this.loadAlbergues();
  }

  private initializeMap(): void {
    setTimeout(() => {
      this.map = L.map('mapaId', {
        center: [18.7357, -70.1627], // Centro de República Dominicana
        zoom: 8,
        renderer: L.canvas()
      });

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
      }).addTo(this.map);

      setTimeout(() => this.map.invalidateSize(true), 300);
    }, 100);
  }

  private loadAlbergues(): void {
    this.http.get<{ exito: boolean; datos: Albergue[] }>(
      'https://adamix.net/defensa_civil/def/albergues.php'
    ).subscribe({
      next: (response) => {
        console.log('Datos recibidos de la API:', response);
        
        if (response.exito && response.datos) {
          this.albergues = response.datos.filter(albergue => {
            // NOTA: La API tiene los nombres invertidos (lat es lng y viceversa)
            const lat = parseFloat(albergue.lng); // Realmente es LATITUD
            const lng = parseFloat(albergue.lat); // Realmente es LONGITUD
            
            const enRD = lat >= 17.5 && lat <= 19.9 && lng >= -72.0 && lng <= -68.0;
            
            if (!enRD) {
              console.warn('Albergue fuera de RD:', {
                nombre: albergue.edificio,
                latReal: albergue.lng,
                lngReal: albergue.lat
              });
            }
            
            return !isNaN(lat) && !isNaN(lng);
          });

          if (this.albergues.length > 0) {
            console.log(`Albergues válidos: ${this.albergues.length}`);
            this.plotAlbergues();
          } else {
            this.showAlert('Error', 'No hay albergues con coordenadas válidas');
          }
        }
      },
      error: (err) => {
        this.showAlert('Error', 'No se pudieron cargar los albergues');
      }
    });
  }

  private plotAlbergues(): void {
    this.clearExistingMarkers();

    this.albergues.forEach(albergue => {
      try {
        // INVERTIR los valores de la API
        const lat = parseFloat(albergue.lng); // La "lng" de la API es realmente latitud
        const lng = parseFloat(albergue.lat); // La "lat" de la API es realmente longitud

        const marker = L.marker([lat, lng])
          .addTo(this.map)
          .bindPopup(this.createPopupContent(albergue, lat, lng));
        
        this.markers.push(marker);
      } catch (error) {
        console.error('Error al crear marcador:', error);
      }
    });

    if (this.markers.length > 0) {
      const group = L.featureGroup(this.markers);
      this.map.fitBounds(group.getBounds(), { padding: [50, 50] });
    }
  }

  private createPopupContent(albergue: Albergue, lat: number, lng: number): string {
    return `
      <div style="max-width: 250px; font-family: Arial, sans-serif;">
        <h3 style="margin: 0 0 8px 0; font-size: 16px; color: #2c3e50;">${albergue.edificio}</h3>
        <p style="margin: 0 0 5px 0; font-size: 14px; color: #34495e;">
          <strong>Ciudad:</strong> ${albergue.ciudad}<br>
          <strong>Coordinador:</strong> ${albergue.coordinador}<br>
          <strong>Teléfono:</strong> ${albergue.telefono}<br>
          <strong>Coordenadas reales:</strong> ${lat.toFixed(5)}, ${lng.toFixed(5)}<br>
          <small>(API devuelve: lat=${albergue.lat}, lng=${albergue.lng})</small>
        </p>
      </div>
    `;
  }

  private clearExistingMarkers(): void {
    this.markers.forEach(marker => this.map.removeLayer(marker));
    this.markers = [];
  }

  private async showAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ['OK']
    });
    await alert.present();
  }
}