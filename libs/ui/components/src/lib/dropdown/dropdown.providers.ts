import { InjectionToken, Type } from '@angular/core';

import { DropdownComponent } from './dropdown-component/dropdown.component';

export const UI_DROPDOWN_COMPONENT = new InjectionToken<
  Type<DropdownComponent>
>('UI_DROPDOWN_COMPONENT', {
  factory: () => DropdownComponent,
  providedIn: 'any',
});
