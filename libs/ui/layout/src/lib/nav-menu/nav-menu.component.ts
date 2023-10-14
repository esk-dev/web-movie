import { CommonModule, NgForOf } from "@angular/common";
import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { Observable } from "rxjs";
// import { BreakpointsService, CustomBreakpoints } from "utils";

import { INavigationItem } from "../interfaces/navigation.interfaces";
import { NavItemComponent } from "./nav-item/nav-item.component";

const navStub = [
  {
    pathName: "Главная",
    routerLink: "/",
  },
  {
    pathName: "Сериалы",
    routerLink: "/",
  },
  {
    pathName: "Фильмы",
    routerLink: "/",
  },
];
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, NgForOf, NavItemComponent],
  selector: "lib-nav-menu",
  standalone: true,
  styleUrls: ["./nav-menu.component.scss"],
  templateUrl: "./nav-menu.component.html",
})
export class NavMenuComponent {
  readonly breakpointObserver$!: Observable<any>;
  // inject<BreakpointsService>(BreakpointsService).breakpointObserver$;
  readonly breakpoints!;
  readonly navigationItems: INavigationItem[] = navStub;
}
