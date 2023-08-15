import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'video',
        pathMatch: 'full',
      },
      {
        path: 'video',
        loadChildren: () => import('../features/video/video.routes'),
      },
    ],
  },
];
