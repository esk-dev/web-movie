import { CommonModule } from '@angular/common';
import { NavMenuComponent } from '../nav-menu/nav-menu.component';
import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, NavMenuComponent],
  selector: 'lib-header',
  standalone: true,
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
})
export class HeaderComponent {}
