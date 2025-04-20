import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'https://adamix.net/defensa_civil/def/recuperar_clave.php';

  constructor(private http: HttpClient) {}

  sendForgotPasswordRequest(cedula: string, correo: string): Observable<any> {
    const body = { cedula, correo };
    return this.http.post<any>(this.apiUrl, body);
  }
}