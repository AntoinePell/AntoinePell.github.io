import { Component } from '@angular/core';
import { ProjectPreviewList } from './components/project-preview-list/project-preview-list';

@Component({
  selector: 'app-root',
  imports: [ProjectPreviewList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'antoinepell-site';
}
