import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GlobalHeader } from './components/global-header/global-header';
import { WelcomePage } from './components/welcome-page/welcome-page';
import { ProjectPreviewList } from './components/project-preview-list/project-preview-list';

@Component({
  selector: 'app-root',
  imports: [GlobalHeader, RouterOutlet, WelcomePage, ProjectPreviewList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'antoinepell-site';
}
