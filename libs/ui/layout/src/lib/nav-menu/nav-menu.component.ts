import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { DropdownDirective } from 'components';
import { MENU, IMenuLink, MenuService } from 'menu';
import { NavItemComponent } from './nav-item/nav-item.component';
import { NgLetDirective, CustomBreakpoints, BreakpointsService } from 'utils';
import {
  Inject,
  OnInit,
  inject,
  Component,
  ChangeDetectionStrategy,
} from '@angular/core';

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
  readonly platformBreakpoint$: Observable<string> =
    inject<BreakpointsService>(BreakpointsService).breakpointObserver$;
}
