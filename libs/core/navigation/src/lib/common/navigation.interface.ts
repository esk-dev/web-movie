/* Описваются все пути для удобства подстановки */
import { InjectionToken } from '@angular/core';

/* Дженерик для списка параметров */
export interface INavigationLink {
  label: string;
  params?: Record<string, unknown>;
  route: string;
}

export interface INavigationPaths {
  home: string;

  // Main page
  main: string;

  // User page
  user: string;

  // Watching page
  watch: string;
}

export const NAVIGATION_PATHS: INavigationPaths = {
  home: '',
  main: '/main',
  user: '/user',
  watch: '/watch',
};

export const PATHS = new InjectionToken<Record<string, unknown>>(
  'NavigationPaths'
);
