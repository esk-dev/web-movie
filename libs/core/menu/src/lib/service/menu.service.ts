import { map, Observable } from 'rxjs';
import { RouterUtilService } from 'utils';
import { MENU, IMenuLink } from '../common/menu.interface';
import { Inject, Signal, signal, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  constructor(
    private routeUtil: RouterUtilService,
    @Inject(MENU) private readonly menuLinks: IMenuLink[]
  ) {}

  get mainMenu(): Signal<IMenuLink[]> {
    return signal(this.menuLinks);
  }

  get sideMenu$(): Observable<IMenuLink[]> {
    return this.routeUtil.urlAfterRedirects$.pipe(
      map((url: string) =>
        this.menuLinks.flatMap((menuLink: IMenuLink) =>
          menuLink.route === url.slice(1) && menuLink?.children
            ? menuLink.children
            : []
        )
      )
    );
  }
}
