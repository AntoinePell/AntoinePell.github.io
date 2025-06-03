import { Component } from '@angular/core';
import { ProjectPreview } from '../project-preview/project-preview';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project-preview-list',
  imports: [CommonModule, ProjectPreview],
  templateUrl: './project-preview-list.html',
  styleUrl: './project-preview-list.css'
})
export class ProjectPreviewList {
  projects = [
      { name: 'Projet Alpha' },
      { name: 'Projet Beta' },
      { name: 'Projet Gamma' }
    ];
}
