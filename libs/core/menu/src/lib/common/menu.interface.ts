import { InjectionToken } from '@angular/core';
import { INavigationLink } from 'navigation';

export interface IMenuLink extends INavigationLink {
  children?: IMenuLink[];
  hide?: boolean;
  parent?: string;
  routerLinkActiveOptions?: boolean;
}

export const MENU = new InjectionToken<IMenuLink[]>('MenuLinks');

export const MENU_DEFAULT: IMenuLink[] = [];
