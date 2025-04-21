import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonLabel, IonItem, IonIcon, IonCard, IonButtons, IonBackButton } from '@ionic/angular/standalone';
import { Router } from '@angular/router';

@Component({
  selector: 'app-noticia-detalle',
  templateUrl: './noticia-detalle.page.html',
  styleUrls: ['./noticia-detalle.page.scss'],
  standalone: true,
  imports: [IonBackButton, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonList, IonLabel, IonItem, IonCard]
})
export class NoticiaDetallePage implements OnInit {
  noticia: any;

  constructor(private router: Router) {}

  ngOnInit() {
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras?.state && navigation.extras.state['noticia']) {
      this.noticia = navigation.extras.state['noticia'];
    } else {
      this.router.navigate(['/noticia-vista']);
    }
  }
}
