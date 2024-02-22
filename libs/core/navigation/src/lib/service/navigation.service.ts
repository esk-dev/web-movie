import { RouterUtilService } from 'utils';
import { Inject, Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PATHS, INavigationPaths } from '../common/navigation.interface';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  constructor(
    private router: Router,
    private routerUtil: RouterUtilService,
    private activatedRoute: ActivatedRoute,
    @Inject(PATHS) private paths: INavigationPaths
  ) {}
}
