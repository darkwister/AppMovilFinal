import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonLabel, IonButton, IonIcon, IonNavLink, IonProgressBar, IonGrid, IonRow, IonCol, IonText } from '@ionic/angular/standalone';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio-user',
  templateUrl: './inicio-user.page.html',
  styleUrls: ['./inicio-user.page.scss'],
  standalone: true,
  imports: [IonText, IonCol, IonRow, IonGrid, IonProgressBar, IonNavLink, IonIcon, IonButton, IonLabel, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class InicioUserPage implements OnInit {
  token = localStorage.getItem('token');
  isLoading: boolean = false;
  
  constructor(private router: Router) { }

  ngOnInit() {
    
  }

  loginPageNavigate(){
    this.router.navigate(['login']);
  }
  noticiaNavigate(){
    this.router.navigate(['noticia-vista']);
  }
  situacionesNavigate(){
    this.router.navigate(['situaciones-vista']);
  }
  logOut(){
    localStorage.removeItem('token');
    this.router.navigate(['inicio-nonuser']);
  }
  changePasswordNavigate(){
    this.router.navigate(['/cambiar-con']);
  }
}
