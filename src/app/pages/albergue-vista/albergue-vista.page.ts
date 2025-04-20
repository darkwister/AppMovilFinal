import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
  IonItemOption
} from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-albergue-vista',
  templateUrl: './albergue-vista.page.html',
  styleUrls: ['./albergue-vista.page.scss'],
  standalone: true,
  imports: [
    IonItemOption,
    IonItemOptions,
    IonLabel,
    IonItem,
    IonItemSliding,
    IonList,
    IonProgressBar,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    HttpClientModule
  ]
})
export class AlbergueVistaPage implements OnInit {
  isLoading: boolean = false;
  Albergues: any[] = [];

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {
    this.getAlbergues();
  }

  getAlbergues() {
    this.isLoading = true;
    this.http.get<any>('https://adamix.net/defensa_civil/def/albergues.php').subscribe({
      next: (response) => {
        if (response.exito) {
          this.Albergues = response.datos;
        }
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Error al obtener albergues:', err);
        this.isLoading = false;
      }
    });
  }

  goDetails(albergue: any) {
    this.router.navigate(['/albergue-detalle'], {
      state: { albergue }
    });
  }
}
