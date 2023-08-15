import { Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full',
  },
  {
    path: 'list',
    loadComponent: () => import('./video-list/video-list.component'),
  },
  {
    path: 'editor/new',
    loadComponent: () => import('./video-editor/video-editor.component'),
  },
  {
    path: 'editor/:id',
    loadComponent: () => import('./video-editor/video-editor.component'),
  },
];

export default routes;
