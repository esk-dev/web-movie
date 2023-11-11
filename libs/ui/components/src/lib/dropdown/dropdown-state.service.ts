import { Injectable, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { DropdownDirective } from './dropdown.directive';

@Injectable({
  providedIn: 'root',
})
export class DropdownStateService {
  dropdownDirective!: DropdownDirective | undefined;

  readonly dropdownStateChange: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(false);

  @Input()
  set dropdownOpen(open: boolean) {
    this.dropdownDirective?.toggle(open);
  }
}
