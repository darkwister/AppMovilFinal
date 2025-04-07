import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/example',
    pathMatch: 'full',
  },
  {
    path: 'inicio-user',
    loadComponent: () => import('./pages/inicio-user/inicio-user.page').then( m => m.InicioUserPage)
  },
  {
    path: 'noticia-vista',
    loadComponent: () => import('./pages/noticia-vista/noticia-vista.page').then( m => m.NoticiaVistaPage)
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'noticia-detalle',
    loadComponent: () => import('./pages/noticia-detalle/noticia-detalle.page').then( m => m.NoticiaDetallePage)
  },
  {
    path: 'albergue-vista',
    loadComponent: () => import('./pages/albergue-vista/albergue-vista.page').then( m => m.AlbergueVistaPage)
  },
  {
    path: 'inicio-nonuser',
    loadComponent: () => import('./pages/inicio-nonuser/inicio-nonuser.page').then( m => m.InicioNonuserPage)
  }
];
