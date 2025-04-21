import { Routes } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideIonicAngular } from '@ionic/angular/standalone';
import { provideAnimations } from '@angular/platform-browser/animations';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio-nonuser',
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
    path: 'registro',
    loadComponent: () => import('./pages/registro/registro.page').then(m => m.RegistroPage)
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
    path: 'albergue-detalle',
    loadComponent: () => import('./pages/albergue-detalle/albergue-detalle.page').then(m => m.AlbergueDetallePage)
  },
  {
    path: 'situaciones-vista',
    loadComponent: () => import('./pages/situaciones-vista/situaciones-vista.page').then(m => m.SituacionesVistaPage)
  },
  {
    path: 'video-vista',
    loadComponent: () => import('./pages/video-vista/video-vista.page').then(m => m.VideoVistaPage)
  },
  {
    path: 'medidas-preventivas',
    loadComponent: () => import('./pages/medidas-preventivas/medidas-preventivas.page').then(m => m.MedidaPreventivaPage)
  },
  {
    path: 'medida-detalle',
    loadComponent: () => import('./pages/medida-detalle/medida-detalle.page').then(m => m.MedidaDetallePage)
  },
  {
    path: 'acerca-de',
    loadComponent: () => import('./pages/acerca-de/acerca-de.page').then( m => m.AcercaDePage)
  },
  {
    path: 'servicios',
    loadComponent: () => import('./pages/servicios/servicios.page').then( m => m.ServiciosPage)
  },
  {
    path: 'recuperar-con',
    loadComponent: () => import('./pages/recuperar-con/recuperar-con.page').then( m => m.RecuperarConPage)
  },
  {
    path: 'cambiar-con',
    loadComponent: () => import('./pages/cambiar-con/cambiar-con.page').then( m => m.CambiarConPage)
  }
];

export const appConfig = {
  providers: [
    provideHttpClient(
      withInterceptors([])
    ),
    provideIonicAngular({
      mode: 'md',
      platform: {
        desktop: (win) => {
          const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(win.navigator.userAgent);
          return !isMobile;
        }
      }
    }),
    provideAnimations(),
  ]
};