import { Route } from '@angular/router';

import { NxWelcomeComponent } from './main/nx-welcome.component';

export const appRoutes: Route[] = [
  {
    children: [],
    component: NxWelcomeComponent,
    outlet: 'main',
    path: '',
  },
];
