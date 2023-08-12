import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'video',
    pathMatch: 'full',
  },
  {
    path: 'video',
    loadChildren: () => import('../features/video/video.routes'),
  },
];
