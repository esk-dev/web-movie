import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

import { INavigationItem } from '../../interfaces/navigation.interface';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, RouterModule],
  selector: 'lib-nav-item',
  standalone: true,
  styleUrls: ['./nav-item.component.scss'],
  templateUrl: './nav-item.component.html',
})
export class NavItemComponent {
  @Input() public navigationItem!: INavigationItem;
}
