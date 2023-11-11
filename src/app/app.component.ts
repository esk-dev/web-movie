import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from 'layout';

@Component({
  imports: [CommonModule, LayoutComponent, RouterModule],
  selector: 'app-root',
  standalone: true,
  template: `
    <lib-layout>
      <router-outlet main name="main"></router-outlet>
    </lib-layout>
  `,
})
export class AppComponent {
  title = 'web-movies';
}
