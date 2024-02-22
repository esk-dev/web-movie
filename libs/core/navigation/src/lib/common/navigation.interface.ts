/* eslint-disable perfectionist/sort-interfaces */
/* Описваются все пути для удобства подстановки */
import {
  InjectionToken,
  EnvironmentProviders,
  makeEnvironmentProviders,
} from '@angular/core';

/* Дженерик для списка параметров */
export interface INavigationLink {
  label: string;
  params?: Record<string, unknown>;
  route: string;
}

export interface INavigationPaths {
  // Main page
  main: string;
  search: string;
  // User page
  user: string;
  // Watching page
  watch: string;
}

export const NAVIGATION_PATHS: INavigationPaths = {
  main: 'main',
  search: 'search',
  user: 'user',
  watch: 'watch',
};

export const PATHS = new InjectionToken<Record<string, unknown>>(
  'NavigationPaths'
);

export function provideNavigationPaths(
  navigationPath: INavigationPaths
): EnvironmentProviders {
  return makeEnvironmentProviders([
    {
      provide: PATHS,
      useValue: navigationPath,
    },
  ]);
}
