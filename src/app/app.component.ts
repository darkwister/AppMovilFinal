import { Component, ChangeDetectorRef } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { IonApp, IonSplitPane, IonMenu, IonContent, IonList, IonListHeader, IonMenuToggle, IonItem, IonIcon, IonLabel, IonRouterOutlet, IonRouterLink, IonButton } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, heartOutline, heartSharp, archiveOutline, archiveSharp, trashOutline, trashSharp, warningOutline, warningSharp, bookmarkOutline, bookmarkSharp, homeSharp, constructSharp, constructOutline, homeOutline } from 'ionicons/icons';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  imports: [IonButton, RouterLink, RouterLinkActive, IonApp, IonSplitPane, IonMenu, IonContent, IonList, IonListHeader, IonMenuToggle, IonItem, IonIcon, IonLabel, IonRouterLink, IonRouterOutlet, CommonModule],
})
export class AppComponent {
  public appPagesNonUsers = [
    { title: 'Inicio', url: '/inicio-nonuser', icon: 'home' },
    { title: 'Servicios', url: '/servicios', icon: 'construct' },
    { title: 'Noticias', url: '/noticia-vista', icon: 'construct' },
    { title: 'Quiero ser voluntario', url: '/registro', icon: 'construct' },
    { title: 'Videos', url: '/video-vista', icon: 'construct' },
    { title: 'Albergues', url: '/alberge-vista', icon: 'construct' },
    { title: 'Miembros', url: '/miembros', icon: 'construct' },
    { title: 'Acerca de', url: '/acerca-de', icon: 'construct' },
    //TODO: Agregar las otras rutas de ashanty
  ];

  public appPagesUsers = [
    { title: 'Inicio', url: '/inicio-user', icon: 'home' },
    { title: 'Noticias', url: '/noticia-vista', icon: 'construct' },
    { title: 'Reportar Situacion', url: '/situaciones-crear', icon: 'construct' },
    { title: 'Situaciones', url: '/situaciones-vista', icon: 'construct' },
  ]

  constructor(private cdr: ChangeDetectorRef, private router: Router) {
    addIcons({ homeSharp, homeOutline, constructSharp, constructOutline});
  }

  login(){
    this.router.navigate(['login']);
  }

  logOut(){
    localStorage.removeItem('token');
    this.router.navigate(['inicio-nonuser']);
  }
  get userLoged(): boolean {
    return !!localStorage.getItem('token');
  }
}
