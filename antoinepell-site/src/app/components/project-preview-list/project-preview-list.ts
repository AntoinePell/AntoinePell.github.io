import { Component, ElementRef, ViewChild } from '@angular/core';
import { ProjectPreview } from '../project-preview/project-preview';
import { ProjectDetail } from '../project-detail/project-detail';
import { CommonModule } from '@angular/common';
import { Project } from '../../models/project.model';
import { ChangeDetectorRef } from '@angular/core';
import projectData from '../../models/projects.json';


@Component({
  selector: 'app-project-preview-list',
  standalone: true,
  imports: [CommonModule, ProjectPreview, ProjectDetail],
  templateUrl: './project-preview-list.html',
  styleUrl: './project-preview-list.css'
})
export class ProjectPreviewList {
  constructor(private cdr: ChangeDetectorRef) {}


  projects: Project[] = projectData as Project[]; 

  selectedProject: Project | null = null;


  resetAndSelect(project: Project) {
    this.selectedProject = project;
    ;
  }
}
