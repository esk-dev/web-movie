import { IMenuLink, MenuService } from 'menu';
import { CommonModule } from '@angular/common';
import { NavItemComponent } from '../nav-menu/nav-item/nav-item.component';
import { Signal, Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, NavItemComponent],
  selector: 'lib-side-menu',
  standalone: true,
  styleUrls: ['./side-menu.component.scss'],
  templateUrl: './side-menu.component.html',
})
export class SideMenuComponent {
  public readonly mainMenu: Signal<IMenuLink[]> = this.menuService.mainMenu;
  constructor(private readonly menuService: MenuService) {}
}
