import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WelcomePage } from './components/welcome-page/welcome-page';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, WelcomePage],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'antoinepell-site';
}
