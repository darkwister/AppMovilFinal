import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-recuperar-con',
  templateUrl: './recuperar-con.page.html',
  styleUrls: ['./recuperar-con.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class RecuperarConPage implements OnInit {

  message: string = "";
  
  constructor() { }

  ngOnInit() {
  }

}
