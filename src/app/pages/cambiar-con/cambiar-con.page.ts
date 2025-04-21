import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {
  IonContent, IonHeader, IonTitle, IonToolbar, IonLabel,
  IonItem, IonButton, IonText, IonInput, IonCard, IonCardContent
} from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cambiar-con',
  templateUrl: './cambiar-con.page.html',
  styleUrls: ['./cambiar-con.page.scss'],
  standalone: true,
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule, HttpClientModule,
    IonButton, IonCardContent, IonCard, IonText, IonLabel, IonItem,
    IonContent, IonHeader, IonTitle, IonToolbar, IonInput
  ]
})
export class CambiarConPage implements OnInit {

  FormCambiar!: FormGroup;
  message: string = '';

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) {}

  ngOnInit() {
    this.FormCambiar = this.fb.group({
      contra_actual: ['', Validators.required],
      contra_nueva: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    if (this.FormCambiar.invalid) {
      this.FormCambiar.markAllAsTouched();
      return;
    }

    const token = localStorage.getItem('token');
    if (!token) {
      this.message = 'Token no encontrado. Inicie sesión nuevamente.';
      return;
    }

    const { contra_actual, contra_nueva } = this.FormCambiar.value;

    const formData = new FormData();
    formData.append('token', token);
    formData.append('clave_anterior', contra_actual);
    formData.append('clave_nueva', contra_nueva);

    this.http.post<any>('https://adamix.net/defensa_civil/def/cambiar_clave.php', formData).subscribe({
      next: (response) => {
        if (response.exito) {
          this.message = 'Clave cambiada correctamente. Redirigiendo...';
          setTimeout(() => {
            this.router.navigate(['/inicio-user']);
          }, 2000);
        } else {
          if (response.mensaje.includes('clave anterior incorrecta')) {
            this.FormCambiar.get('contra_actual')?.setErrors({ incorrecta: true });
          } else {
            this.message = response.mensaje || 'No se pudo cambiar la clave.';
          }
        }
      },
      error: (err) => {
        console.error('Error:', err);
        this.message = 'Ocurrió un error al conectar con el servidor.';
      }
    });
  }
}
