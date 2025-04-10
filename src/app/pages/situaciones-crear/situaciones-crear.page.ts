import { AfterViewInit, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, Validators, ReactiveFormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonProgressBar, IonItem, IonButton, IonInput, IonTextarea, IonButtons, IonBackButton } from '@ionic/angular/standalone';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import * as L from 'leaflet';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-situaciones-crear',
  templateUrl: './situaciones-crear.page.html',
  styleUrls: ['./situaciones-crear.page.scss'],
  standalone: true,
  imports: [IonBackButton, IonButtons, IonTextarea, IonInput, IonButton, IonItem, IonProgressBar, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, ReactiveFormsModule]
})
export class SituacionesCrearPage implements OnInit, AfterViewInit {
  public situacionForm!: FormGroup;
  public map!: L.Map;
  private marker: L.Marker | undefined;
  public imagen: string | undefined;
  loading?: boolean;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.situacionForm = this.fb.group({
      titulo: ['', Validators.required],
      descripcion: ['', Validators.required],
      imagen: [''],
      latitud: ['', Validators.required],
      longitud: ['', Validators.required],
    })
  }
  ngAfterViewInit() {
    this.loadMap();
    setTimeout(() => {
      if(this.map){
        this.map.invalidateSize();
      }
    }, 0);
  }

  ionViewDidEnter() {
    setTimeout(() => {
      this.loadMap();
    }, 300); // dale un respiro a Ionic antes de cargar el mapa
  }
  async registrarSituacion() {
    throw new Error('Method not implemented.');
  }


  loadMap() {
    this.map = L.map('mapSituacionCrear').setView([18.7357, -70.1627], 8);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(this.map);

    this.map.on('click', (e: L.LeafletMouseEvent) => this.onMapClick(e));
    // Muy importante: invalida el tamaño DESPUÉS de cargar y visibilizar el mapa
    this.map.invalidateSize();
  }
  onMapClick(e: L.LeafletMouseEvent) {
    if (e && e.latlng && e.latlng.lat !== undefined && e.latlng.lng !== undefined) {
      const latLng = e.latlng;
      console.log('Click en el mapa:', latLng);
  
      if (this.marker) {
        this.marker.remove();
      }
  
      const customIcon = L.icon({
        iconUrl: 'assets/leaflet/marker-icon.png', 
        shadowUrl: 'assets/leaflet/marker-shadow.png', 
        iconSize: [25, 41],
        iconAnchor: [12, 41], 
        popupAnchor: [1, -34], 
        shadowSize: [41, 41] 
      });
  
      this.marker = L.marker([latLng.lat, latLng.lng], { icon: customIcon }).addTo(this.map);
      
      this.situacionForm.patchValue({ latitud: latLng.lat, longitud: latLng.lng });
    } else {
      console.error('Error: No se pudo obtener latLng del evento de clic.');
    }
  }
  async tomarFoto() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Base64, 
      source: CameraSource.Camera,
    });
  
    if (image.base64String) {
      this.situacionForm.value.imagen = `data:image/jpeg;base64,${image.base64String}`;
    }
  }
}
