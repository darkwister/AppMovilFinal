import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem, IonLabel, IonText, IonThumbnail } from '@ionic/angular/standalone';
import { HttpClient, HttpClientModule,} from '@angular/common/http';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.page.html',
  styleUrls: ['./servicios.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonList, IonItem, IonLabel, IonText, HttpClientModule, IonThumbnail]
})
export class ServiciosPage implements OnInit {

  servicios: any[] = [];
  error: string = "";

  constructor(private http: HttpClient) { }

  ngOnInit() {
      this.http.get<any>('https://adamix.net/defensa_civil/def/servicios.php')
      .subscribe(response => {
        this.servicios = response.datos;
      }, error =>{
        console.log("Error al cargar los datos:", error);
        this.error = 'Hubo un error al cargar los datos de servicio.'
      });
  }

}
