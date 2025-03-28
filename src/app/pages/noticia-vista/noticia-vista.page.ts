import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-noticia-vista',
  templateUrl: './noticia-vista.page.html',
  styleUrls: ['./noticia-vista.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class NoticiaVistaPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
