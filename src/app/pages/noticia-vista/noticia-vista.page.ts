import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonProgressBar, IonItem, IonLabel, IonList, IonThumbnail, IonItemOption, IonItemOptions, IonItemSliding } from '@ionic/angular/standalone';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-noticia-vista',
  templateUrl: './noticia-vista.page.html',
  styleUrls: ['./noticia-vista.page.scss'],
  standalone: true,
  imports: [IonItemSliding, IonItemOptions, IonItemOption, IonThumbnail, IonList, IonLabel, IonItem, IonProgressBar, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, HttpClientModule]
})
export class NoticiaVistaPage implements OnInit {
  Noticias?: any[] = [];
  isLoading: boolean = false
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.loadNoticias();
  }
  goDetails(noticia: any) {
    this.router.navigate(['/noticia-detalle'], {
      state: { noticia }
    });
  }
  loadNoticias() {
    this.http.get<any>('https://adamix.net/defensa_civil/def/noticias.php')
      .subscribe(
        res => {
          if (res.exito) {
            this.Noticias = res.datos;
          } else {
            console.error('No se pudieron cargar las noticias.');
          }
          this.isLoading = false;
        },
        error => {
          console.error('Error al cargar noticias:', error);
          this.isLoading = false;
        }
    );
  }
}
