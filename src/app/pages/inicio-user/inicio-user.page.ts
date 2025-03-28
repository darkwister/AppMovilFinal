import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonLabel, IonButton, IonIcon, IonNavLink, IonProgressBar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-inicio-user',
  templateUrl: './inicio-user.page.html',
  styleUrls: ['./inicio-user.page.scss'],
  standalone: true,
  imports: [IonProgressBar, IonNavLink, IonIcon, IonButton, IonLabel, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class InicioUserPage implements OnInit {
  username = 'Usuario hipotetico';
  isLoading: boolean = false;
  onClick() {
    console.log('Click');
  }

  constructor() { }

  ngOnInit() {
  }

}
