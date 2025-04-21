import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonButton, IonInput, IonItem } from '@ionic/angular/standalone';
import { Route, Router } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonContent, CommonModule, FormsModule, IonButton, IonInput, IonItem, HttpClientModule]
})
export class LoginPage implements OnInit {
  public cedula: string | undefined;
  public password: string | undefined;

  constructor(private route: Router, private htpp: HttpClient) { }

  ngOnInit() {
  }

  loginApi() {
    if (!this.cedula || !this.password) {
      alert("Por favor ingrese sus credenciales");
      return;
    }
  
    const formData = new FormData();
    formData.append('cedula', this.cedula);
    formData.append('clave', this.password);
  
    this.htpp.post('https://adamix.net/defensa_civil/def/iniciar_sesion.php', formData).subscribe(
      (response: any) => {
        if (response.exito) {
          console.log('Login exitoso:', response.datos);
          alert(response.mensaje);
          localStorage.setItem('token', response.datos.token);
          this.route.navigate(['/inicio-user']);
        } else {
          alert(response.mensaje);
        }
      },
      error => {
        console.error('Error en la petición:', error);
        alert("Ocurrió un error al intentar iniciar sesión.");
      }
    );
  }
  
  forgotPassword(){
    this.route.navigate(['/recuperar-con']);
  }
}
