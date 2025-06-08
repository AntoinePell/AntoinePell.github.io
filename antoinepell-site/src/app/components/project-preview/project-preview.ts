import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Project} from '../../models/project.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project-preview',
  imports: [CommonModule],
  templateUrl: './project-preview.html',
  styleUrl: './project-preview.css'
})
export class ProjectPreview {
  @Input() project!: Project;
  @Output() selected = new EventEmitter<Project>();

  onClick() {
    this.selected.emit(this.project);
  }
}
