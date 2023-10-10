import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule],
  selector: "lib-login",
  standalone: true,
  styleUrls: ["./login.component.scss"],
  templateUrl: "./login.component.html",
})
export class LoginComponent {}
