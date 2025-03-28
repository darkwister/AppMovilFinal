import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/inbox',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.page').then( m => m.LoginPage)
  },  {
    path: 'noticia-detalle',
    loadComponent: () => import('./pages/noticia-detalle/noticia-detalle.page').then( m => m.NoticiaDetallePage)
  }


];
