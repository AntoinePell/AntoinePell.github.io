import { Component } from '@angular/core';
import { SafePipe } from '../../safe-pipe';

@Component({
  selector: 'app-welcome-page',
  imports: [SafePipe],
  templateUrl: './welcome-page.html',
  styleUrl: './welcome-page.css'
})
export class WelcomePage {
  
}
