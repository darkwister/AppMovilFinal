import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-inicio-nonuser',
  templateUrl: './inicio-nonuser.page.html',
  styleUrls: ['./inicio-nonuser.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class InicioNonuserPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
