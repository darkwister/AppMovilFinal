import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonButton, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.page.html',
  styleUrls: ['./acerca-de.page.scss'],
  standalone: true,
  imports: [IonContent, IonButton, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class AcercaDePage implements OnInit {
  current_index = 0;
  fade = false;

    nosotros = [
      {
        nombre: 'Adrian Cuello',
        foto: "assets/images/adrian.jpg",
        matricula: "2023-0610",
        descripcion: "Tecnico en Ing. de Software",
        info: "849-409-8398"
      },
      {
        nombre: "Job Jefferson",
        foto: "assets/images/wister.jpg",
        matricula: "2023-0188",
        descripcion: "Tecnico en Ing. de Software",
        info: "809-765-1517"
      },
      {
        nombre: "Dennis Batista",
        foto: "assets/images/damba.jpg",
        matricula: "2023-0236",
        descripcion: "Tecnico en Ing. de Software",
        info: "829-972-8592"
      },
      {
        nombre: "Abel Restituyo",
        foto: "assets/images/abel.jpg",
        matricula: "2023-0264",
        descripcion: "Tecnico en Ing. de Software",
        info: "829-689-5057"
      },
      {
        nombre: "Ashanty",
        foto: "assets/images/ashanty.jpg",
        matricula: "2022-1448",
        descripcion: "Tecnica en Ing. de Software",
        info: "849-386-7767"
      },
    ];

    siguiente() {
      this.fade = false;
      setTimeout(() => {
        if (this.current_index < this.nosotros.length - 1) {
          this.current_index++;
        } else {
          this.current_index = 0;
        }
        this.fade = true;
      }, 100);
    }
    
    anterior() {
      this.fade = false;
      setTimeout(() => {
        if (this.current_index > 0) {
          this.current_index--;
        } else {
          this.current_index = this.nosotros.length - 1;
        }
        this.fade = true;
      }, 100);
  }

  constructor() { }

  ngOnInit() {   
    this.fade = true; 
    }
}
