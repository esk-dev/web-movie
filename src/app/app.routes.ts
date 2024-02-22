import { Route } from '@angular/router';
import { NAVIGATION_PATHS } from 'navigation';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';

export const appRoutes: Route[] = [
  {
    path: '',
    redirectTo: `/${NAVIGATION_PATHS.main}`,
    pathMatch: 'full',
  },
  {
    component: MainPageComponent,
    path: NAVIGATION_PATHS.main,
  },
  {
    component: SearchPageComponent,
    path: NAVIGATION_PATHS.search,
  },
];
