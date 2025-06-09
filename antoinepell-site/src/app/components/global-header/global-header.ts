import { Component } from '@angular/core';
import { Router } from '@angular/router'; // ✅ Bonne importation

@Component({
  selector: 'app-global-header',
  standalone: true,
  templateUrl: './global-header.html',
  styleUrls: ['./global-header.css'],
  imports: []
})
export class GlobalHeader {
  constructor(private router: Router) {}

  goHome() {
    this.router.navigate(['/']);
  }

  goToProjects() {
    this.router.navigate(['/projects']);
  }
}
