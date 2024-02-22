import { appRoutes } from './app.routes';
import { provideEnvironment } from 'config';
import { MENU_DEFAULT, provideMenuLinks } from 'menu';
import { HttpClientModule } from '@angular/common/http';
import { environment } from '../environments/environment';
import { NAVIGATION_PATHS, provideNavigationPaths } from 'navigation';
import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  provideRouter,
  withEnabledBlockingInitialNavigation,
} from '@angular/router';

export const appConfig: ApplicationConfig = {
  providers: [
    provideMenuLinks(MENU_DEFAULT),
    provideEnvironment(environment),
    importProvidersFrom(HttpClientModule),
    provideNavigationPaths(NAVIGATION_PATHS),
    importProvidersFrom(BrowserAnimationsModule),
    provideRouter(appRoutes, withEnabledBlockingInitialNavigation()),
  ],
};
