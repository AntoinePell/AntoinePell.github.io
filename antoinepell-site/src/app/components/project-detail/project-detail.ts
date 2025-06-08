import { Component, ElementRef, EventEmitter, Input, OnChanges, Output, SimpleChanges, ViewChild, } from '@angular/core';
import { Project } from '../../models/project.model';
import { Part } from '../../models/part.model';
import { CommonModule } from '@angular/common';
import { SafePipe } from '../../safe-pipe';

@Component({
  selector: 'app-project-detail',
  imports: [CommonModule, SafePipe],
  templateUrl: './project-detail.html',
  styleUrl: './project-detail.css'
})

export class ProjectDetail implements OnChanges {
  pdfUrl = 'assets/docs/LORD_details.pdf';

  @Input() project: Project | null = null;
  @Output() close = new EventEmitter<void>();

  @ViewChild('scrollableContainer') scrollableContainer?: ElementRef<HTMLDivElement>;

  scrollToTop(): void {
    this.scrollableContainer?.nativeElement.scrollTo({
      top: 0,
      behavior: 'auto' // tu peux mettre 'auto' si tu veux instantané
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("on change");
    this.scrollToTop();
  }
}
