import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component } from "@angular/core";
import { RouterModule } from "@angular/router";

import { HeaderComponent } from "../header/header.component";
import { NavMenuComponent } from "../nav-menu/nav-menu.component";

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, RouterModule, HeaderComponent, NavMenuComponent],
  providers: [],
  selector: "lib-layout",
  standalone: true,
  styleUrls: ["./layout.component.scss"],
  templateUrl: "./layout.component.html",
})
export class LayoutComponent {}
