import { Component } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { MessageService } from 'primeng/api';
import { FluidModule } from 'primeng/fluid';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-root',
  imports: [InputTextModule, FluidModule, ButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [MessageService],
})
export class AppComponent {





}
