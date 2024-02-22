/* eslint-disable */
import {
  EnvironmentProviders,
  InjectionToken,
  makeEnvironmentProviders,
} from '@angular/core';
import { INavigationLink, NAVIGATION_PATHS } from 'navigation';

export interface IMenuLink extends INavigationLink {
  icon?: string;
  hide?: boolean;
  parent?: string;
  children?: IMenuLink[];
  routerLinkActiveOptions?: boolean;
}

export const MENU = new InjectionToken<IMenuLink[]>('MenuLinks');

export const MENU_DEFAULT: IMenuLink[] = [
  {
    label: 'main',
    icon: 'fa-solid fa-house text-base',
    route: NAVIGATION_PATHS.main,
  },
  {
    label: 'search',
    icon: 'fa-solid fa-magnifying-glass text-base',
    route: NAVIGATION_PATHS.search,
  },
];

export function provideMenuLinks(menuLinks: IMenuLink[]): EnvironmentProviders {
  return makeEnvironmentProviders([
    {
      provide: MENU,
      useValue: menuLinks,
    },
  ]);
}
