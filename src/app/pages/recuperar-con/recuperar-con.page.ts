import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import {  IonContent, IonHeader, IonTitle, IonToolbar, IonLabel, IonItem, IonButton, IonText, IonInput, IonCard, IonCardContent } from '@ionic/angular/standalone';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recuperar-con',
  templateUrl: './recuperar-con.page.html',
  styleUrls: ['./recuperar-con.page.scss'],
  standalone: true,
  imports: [IonCardContent, IonCard, CommonModule, FormsModule, ReactiveFormsModule, HttpClientModule, IonContent, IonHeader, IonTitle, IonToolbar, IonLabel, IonItem, IonButton, IonText, IonInput
  ]
})
export class RecuperarConPage implements OnInit {
  FormRecuperar!: FormGroup;
  message: string = '';

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) {}

  ngOnInit() {
    this.FormRecuperar = this.fb.group({
      cedula: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit() {
    if (this.FormRecuperar.invalid) {
      this.FormRecuperar.markAllAsTouched();
      return;
    }
  
    const { cedula, correo } = this.FormRecuperar.value;
  
    const formData = new FormData();
    formData.append('cedula', cedula);
    formData.append('correo', correo);
  
    this.http.post<any>('https://adamix.net/defensa_civil/def/recuperar_clave.php', formData).subscribe({
      next: (response) => {
        if (response.exito) {
          this.message = `Clave cambiada, la nueva clave es: ${response.mensaje}`;
          setTimeout(() => {
            this.router.navigate(['/login']);
          }, 5000);
        } else {
          this.message = response.mensaje || 'No se pudo cambiar la clave.';
        }
      },
      error: (err) => {
        console.error('Error:', err);
        this.message = 'Ocurrió un error al conectar con el servidor.';
      }
    });
  }
}
