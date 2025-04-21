import { Component, ChangeDetectorRef } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { IonApp, IonSplitPane, IonMenu, IonContent, IonList, IonListHeader, IonMenuToggle, IonItem, IonIcon, IonLabel, IonRouterOutlet, IonRouterLink, IonButton } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, heartOutline, heartSharp, archiveOutline, archiveSharp, trashOutline, trashSharp, warningOutline, warningSharp, bookmarkOutline, bookmarkSharp, homeSharp, constructSharp, constructOutline, homeOutline, newspaperSharp, newspaperOutline, personAddOutline, personAddSharp, videocamSharp, videocamOutline, earthSharp, earthOutline, people, peopleSharp, peopleOutline, helpSharp, helpOutline, radioSharp, radioOutline, mapSharp, mapOutline } from 'ionicons/icons';
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
    { title: 'Noticias', url: '/noticia-vista', icon: 'newspaper' },
    { title: 'Quiero ser voluntario', url: '/registro', icon: 'person-add' },
    { title: 'Videos', url: '/video-vista', icon: 'videocam' },
    { title: 'Albergues', url: '/albergue-vista', icon: 'earth' },
    { title: 'Medidas preventivas', url: '/medidas-preventivas', icon: 'warning' },
    { title: 'Miembros', url: '/miembros', icon: 'people' },
    { title: 'Acerca de', url: '/acerca-de', icon: 'help' },
  ];

  public appPagesUsers = [
    { title: 'Inicio', url: '/inicio-user', icon: 'home' },
    { title: 'Noticias', url: '/noticia-vista', icon: 'newspaper' },
    { title: 'Reportar Situacion', url: '/situaciones-crear', icon: 'radio' },
    { title: 'Situaciones', url: '/situaciones-vista', icon: 'map' },
  ]

  constructor(private cdr: ChangeDetectorRef, private router: Router) {
    addIcons({ homeSharp, homeOutline, constructSharp, constructOutline, newspaperSharp, newspaperOutline, personAddOutline, personAddSharp, videocamSharp, videocamOutline, earthSharp, earthOutline, peopleSharp, peopleOutline, helpSharp, helpOutline, radioSharp, radioOutline, mapSharp, mapOutline, warningOutline, warningSharp});
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
