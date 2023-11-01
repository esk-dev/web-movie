import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import { BreakpointsService, CustomBreakpoints, NgLetDirective } from 'utils';

import { DynamicDockComponent } from '../dynamic-dock/dynamic-dock.component';
import { HeaderComponent } from '../header/header.component';
import { NavMenuComponent } from '../nav-menu/nav-menu.component';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    RouterModule,
    HeaderComponent,
    NavMenuComponent,
    SidebarComponent,
    NgLetDirective,
    DynamicDockComponent,
  ],
  providers: [],
  selector: 'lib-layout',
  standalone: true,
  styleUrls: ['./layout.component.scss'],
  templateUrl: './layout.component.html',
})
export class LayoutComponent {
  readonly breakpoints = CustomBreakpoints;
  readonly platformBreakpoint$: Observable<string> =
    inject<BreakpointsService>(BreakpointsService).breakpointObserver$;
}
