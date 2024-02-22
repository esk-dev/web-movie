import { map, Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { NavMenuComponent } from '../nav-menu/nav-menu.component';
import { inject, Component, ChangeDetectionStrategy } from '@angular/core';
import { NgLetDirective, CustomBreakpoints, BreakpointsService } from 'utils';
import { DynamicDockComponent } from '../dynamic-dock/dynamic-dock.component';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    HeaderComponent,
    NavMenuComponent,
    SidebarComponent,
    NgLetDirective,
    DynamicDockComponent,
  ],
  selector: 'lib-layout',
  standalone: true,
  styleUrls: ['./layout.component.scss'],
  templateUrl: './layout.component.html',
})
export class LayoutComponent {
  readonly breakpoints = CustomBreakpoints;
  readonly platformBreakpoint$: Observable<string> =
    inject<BreakpointsService>(BreakpointsService).breakpointObserver$;

  get isMobile$(): Observable<boolean> {
    return this.platformBreakpoint$.pipe(
      map(
        (breakPoint) =>
          breakPoint === this.breakpoints.Medium ||
          breakPoint === this.breakpoints.Small ||
          breakPoint === this.breakpoints.XSmall
      )
    );
  }
}
