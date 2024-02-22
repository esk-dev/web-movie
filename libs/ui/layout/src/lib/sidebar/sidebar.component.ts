import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideMenuComponent } from '../side-menu/side-menu.component';

@Component({
  imports: [CommonModule, SideMenuComponent],
  selector: 'lib-sidebar',
  standalone: true,
  styleUrls: ['./sidebar.component.scss'],
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {}
