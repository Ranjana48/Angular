import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  // protected readonly title = signal('onewayDataBinding');
  name: string = 'john wick';
  url: string = '';
  isDisable: boolean = true;
  fun() {
    alert('hellooooo....');
  }
}
