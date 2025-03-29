
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { providePrimeNG, ThemeProvider } from 'primeng/config';
import Aura from '@primeng/themes/aura';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { routes } from './app.routes';
import {
  provideClientHydration,
  withEventReplay,
} from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),

    providePrimeNG({
      theme: {
        preset: Aura,
        options: {
          darkModeSelector:  '.my-app-dark'
        }
      },
    }),
    provideAnimationsAsync(),
  ],
};
