import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/inbox',
    pathMatch: 'full',
  },
  {
    path: 'inicio-user',
    loadComponent: () => import('./pages/inicio-user/inicio-user.page').then( m => m.InicioUserPage)
  }
];
