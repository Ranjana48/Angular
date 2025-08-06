import { Component, signal } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('portfolio2');
  constructor(private router: Router) {}
  about() {
    this.router.navigate(['/me']);
  }
  contact() {
    this.router.navigate(['/connect']);
  }
  project() {
    this.router.navigate(['/project3']);
  }
  skills() {
    this.router.navigate(['/knowledge']);
  }
  home() {
    this.router.navigate(['/home']);
  }
}
