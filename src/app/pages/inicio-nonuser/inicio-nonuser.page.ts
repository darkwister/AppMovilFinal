import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonImg, IonAvatar, IonText, IonLabel, IonGrid, IonRow, IonCol } from '@ionic/angular/standalone';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio-nonuser',
  templateUrl: './inicio-nonuser.page.html',
  styleUrls: ['./inicio-nonuser.page.scss'],
  standalone: true,
  imports: [IonCol, IonRow, IonGrid, IonLabel, IonText, IonAvatar, IonImg, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class InicioNonuserPage implements OnInit {
  images = [
    'https://ionicframework.com/docs/img/demos/thumbnail.svg',
    'https://ionicframework.com/docs/img/demos/thumbnail.svg',
    'https://ionicframework.com/docs/img/demos/thumbnail.svg'
  ]
  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigateLogin(){
    this.router.navigate(['login'])
  }
}
