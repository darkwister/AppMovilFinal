import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonInput, IonFooter, IonItem, IonList, IonIcon } from '@ionic/angular/standalone';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
  standalone: true,
  imports: [IonContent, CommonModule, FormsModule, IonButton, IonInput, IonItem, HttpClientModule]
})
export class RegistroPage {
  nombre = '';
  apellido = '';
  correo = '';
  cedula = '';
  clave = '';
  telefono = '';
  mensaje = '';

  constructor(private http: HttpClient, private router: Router) {}

  registrarse() {
    const formData = new FormData();
    formData.append('cedula', this.cedula);
    formData.append('nombre', this.nombre);
    formData.append('apellido', this.apellido);
    formData.append('clave', this.clave);
    formData.append('correo', this.correo);
    formData.append('telefono', this.telefono);

    this.http.post<any>('https://adamix.net/defensa_civil/def/registro.php', formData).subscribe(
      res => {
        if (res.exito) {
          this.mensaje = res.mensaje;
          alert(res.mensaje);
          this.router.navigate(['login']);
        } else {
          this.mensaje = res.mensaje;
        }
      },
      error => {
        this.mensaje = 'Error de conexión al registrar';
        console.error(error);
      }
    );
  }
}
