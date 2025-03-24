import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PrimeiroComponentComponent } from "./primeiro-component/primeiro-component.component";

@Component({
  selector: 'app-root',
  imports: [ PrimeiroComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'primeiro-projeto';
}
