import { Routes } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideIonicAngular } from '@ionic/angular/standalone';
import { provideAnimations } from '@angular/platform-browser/animations';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'miembros',
    pathMatch: 'full',
  },
  {
    path: 'inicio-user',
    loadComponent: () => import('./pages/inicio-user/inicio-user.page').then(m => m.InicioUserPage)
  },
  {
    path: 'noticia-vista',
    loadComponent: () => import('./pages/noticia-vista/noticia-vista.page').then(m => m.NoticiaVistaPage)
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.page').then(m => m.LoginPage)
  },
  {
    path: 'noticia-detalle',
    loadComponent: () => import('./pages/noticia-detalle/noticia-detalle.page').then(m => m.NoticiaDetallePage)
  },
  {
    path: 'albergue-vista',
    loadComponent: () => import('./pages/albergue-vista/albergue-vista.page').then(m => m.AlbergueVistaPage)
  },
  {
  path: 'albergue-detalle',
  loadComponent: () => import('./pages/albergue-detalle/albergue-detalle.page').then( m => m.AlbergueDetallePage)
  },
  {
    path: 'inicio-nonuser',
    loadComponent: () => import('./pages/inicio-nonuser/inicio-nonuser.page').then(m => m.InicioNonuserPage)
  },
  {
    path: 'situaciones-crear',
    loadComponent: () => import('./pages/situaciones-crear/situaciones-crear.page').then(m => m.SituacionesCrearPage)
  },
  {
    path: 'situaciones-mapa',
    loadComponent: () => import('./pages/situaciones-mapa/situaciones-mapa.page').then(m => m.SituacionesMapaPage)
  },
  {
    path: 'albergue-mapa',
    loadComponent: () => import('./pages/alberge-mapa/alberge-mapa.page').then(m => m.AlbergeMapaPage) 
  },
  {
    path: 'miembros',
    loadComponent: () => import('./pages/miembros/miembros.page').then(m => m.MiembrosPage)
  },
  {
    path: 'acerca-de',
    loadComponent: () => import('./pages/acerca-de/acerca-de.page').then( m => m.AcercaDePage)
  },
  {
    path: 'servicios',
    loadComponent: () => import('./pages/servicios/servicios.page').then( m => m.ServiciosPage)
  }


];

export const appConfig = {
  providers: [
    provideHttpClient(
      withInterceptors([]) // Puedes agregar interceptores aquí si los necesitas
    ),
    provideIonicAngular({
      mode: 'md',
      platform: {
        /** The default `desktop` function returns false for devices with a touchscreen.
        * This is not always wanted, so this function tests the User Agent instead.
        **/
        desktop: (win) => {
          const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(win.navigator.userAgent);
          return !isMobile;
        }
      }
    }),
    provideAnimations(),
    // Otros providers globales que necesites
  ]
};