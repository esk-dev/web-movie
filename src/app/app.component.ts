import { LayoutComponent } from 'layout';
import { Component } from '@angular/core';
import { RootStoreModule } from 'root-store';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet, RouterLinkActive } from '@angular/router';

@Component({
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    RootStoreModule,
    LayoutComponent,
  ],
  selector: 'app-root',
  standalone: true,
  template: `<lib-layout>
    <router-outlet></router-outlet>
  </lib-layout>`,
})
export class AppComponent {
  title = 'web-movies';
}
