import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import { ISidebarItem } from '../interfaces/sidebar.interface';

@Component({
  imports: [CommonModule],
  selector: 'lib-sidebar',
  standalone: true,
  styleUrls: ['./sidebar.component.scss'],
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {
  @Input()
  readonly sidebarItems!: ISidebarItem[];
}
