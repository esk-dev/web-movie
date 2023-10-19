import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { DropdownDirective } from 'components';
import { Observable } from 'rxjs';
import { BreakpointsService, CustomBreakpoints, NgLetDirective } from 'utils';

import { INavigationItem } from '../interfaces/navigation.interfaces';
import { NavItemComponent } from './nav-item/nav-item.component';

const navStub = [
  {
    pathName: 'Главная',
    routerLink: '/',
  },
  {
    pathName: 'Сериалы',
    routerLink: '/',
  },
  {
    pathName: 'Фильмы',
    routerLink: '/',
  },
];
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, NavItemComponent, NgLetDirective, DropdownDirective],
  selector: 'lib-nav-menu',
  standalone: true,
  styleUrls: ['./nav-menu.component.scss'],
  templateUrl: './nav-menu.component.html',
})
export class NavMenuComponent {
  readonly breakpoints = CustomBreakpoints;
  public dropDownState = false;

  readonly navigationItems: INavigationItem[] = navStub;
  readonly platformBreakpoint$: Observable<string> =
    inject<BreakpointsService>(BreakpointsService).breakpointObserver$;
}
