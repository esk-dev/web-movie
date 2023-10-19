import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  imports: [CommonModule],
  selector: 'lib-sidebar',
  standalone: true,
  styleUrls: ['./sidebar.component.scss'],
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {}
