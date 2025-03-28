import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-albergue-vista',
  templateUrl: './albergue-vista.page.html',
  styleUrls: ['./albergue-vista.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class AlbergueVistaPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
