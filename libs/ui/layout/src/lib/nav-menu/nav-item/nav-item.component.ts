import { IMenuLink } from 'menu';
import { ButtonDirective } from 'components';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Input, Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, RouterModule, ButtonDirective],
  selector: 'lib-nav-item',
  standalone: true,
  styleUrls: ['./nav-item.component.scss'],
  templateUrl: './nav-item.component.html',
})
export class NavItemComponent {
  @Input() public iconState = false;
  @Input() public labelWithIcon = false;
  @Input() public menuItem!: IMenuLink;
}
