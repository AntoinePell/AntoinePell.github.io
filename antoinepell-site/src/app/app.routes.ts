import { Routes } from '@angular/router';
import { WelcomePage } from './components/welcome-page/welcome-page';
import { ProjectPreviewList } from './components/project-preview-list/project-preview-list';

export const routes: Routes = [
  { path: '', component: WelcomePage },
  { path: 'projects', component: ProjectPreviewList }
];
