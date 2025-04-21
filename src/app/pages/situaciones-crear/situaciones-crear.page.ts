import { AfterViewInit, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, Validators, ReactiveFormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonProgressBar, IonItem, IonButton, IonInput, IonTextarea, IonButtons, IonBackButton } from '@ionic/angular/standalone';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import * as L from 'leaflet';
import { Platform } from '@ionic/angular';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-situaciones-crear',
  templateUrl: './situaciones-crear.page.html',
  styleUrls: ['./situaciones-crear.page.scss'],
  standalone: true,
  imports: [IonBackButton, IonButtons, IonTextarea, IonInput, IonButton, IonItem, IonProgressBar, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, ReactiveFormsModule, HttpClientModule]
})
export class SituacionesCrearPage implements OnInit, AfterViewInit {
  public situacionForm!: FormGroup;
  public map!: L.Map;
  private marker: L.Marker | undefined;
  public imagen: string | undefined;
  loading?: boolean;

  constructor(private fb: FormBuilder, private http: HttpClient) { }

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
    if(!this.map){
      this.loadMap();
      setTimeout(() => {
      if(this.map){
        this.map.invalidateSize();
      }
    }, 0);
    }
  }

  async registrarSituacion() {
    if (this.situacionForm.invalid) {
      console.log('Formulario inválido');
      return;
    }
  
    this.loading = true;
  
    const formValues = this.situacionForm.value;
    const token = localStorage.getItem('token');
    if (!token) {
      alert('No se pudo obtener el token. Inicia sesión nuevamente.');
      this.loading = false;
      return;
    }

    const formData = new FormData();
    formData.append('token', token);
    formData.append('titulo', formValues.titulo);
    formData.append('descripcion', formValues.descripcion);
    formData.append('foto', this.imagen ?? '');
    formData.append('latitud', formValues.latitud);
    formData.append('longitud', formValues.longitud);
  
    try {
      const response: any = await this.http.post('https://adamix.net/defensa_civil/def/nueva_situacion.php', formData).toPromise();
  
      this.loading = false;
      
      alert(response.mensaje);

      if (response.exito) {
        this.situacionForm.reset();
        this.marker?.remove();
      }
  
    } catch (error) {
      this.loading = false;
      console.error('Error en el envío:', error);
  
      alert("Ocurrió un error al intentar registrar la situación.");
      
    }  
  }

  loadMap() {
    if (this.map) {
      this.map.off();
      this.map.remove();
    }
    this.map = L.map('mapSituacionCrear').setView([18.7357, -70.1627], 8);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(this.map);

    this.map.on('click', (e: L.LeafletMouseEvent) => this.onMapClick(e));
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
      source: CameraSource.Photos,
    });
  
    if (image.base64String) {
      this.imagen = `data:image/jpeg;base64,${image.base64String}`;
      this.situacionForm.patchValue({
        imagen: `data:image/jpeg;base64,${image.base64String}`
      });    
    }
  }
}
