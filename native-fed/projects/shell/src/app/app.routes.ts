import { loadRemoteModule } from '@angular-architects/native-federation';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'mfe1',
    loadComponent: () =>
      loadRemoteModule('mfe1', './Component').then((m) => m.AppComponent),
  },
  {
    path: 'mfe-external',
    loadComponent: () =>
      loadRemoteModule('mfe-external', './Cmp').then((m) => m.AppComponent),
  },
  {
    path: 'home',
    loadComponent: () => import('./home.component'),
  },
];
