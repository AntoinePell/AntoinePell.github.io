import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GlobalHeader } from './components/global-header/global-header';

@Component({
  selector: 'app-root',
  imports: [GlobalHeader, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'antoinepell-site';
}
