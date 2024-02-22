import { CommonModule } from '@angular/common';
import { DropdownDirective } from '../dropdown.directive';
import { DropdownStateService } from '../dropdown-state.service';
import {
  Inject,
  Component,
  ElementRef,
  HostListener,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule],
  selector: 'lib-dropdown-component',
  standalone: true,
  styleUrls: ['./dropdown.component.scss'],
  templateUrl: './dropdown.component.html',
})
export class DropdownComponent {
  constructor(
    @Inject(DropdownDirective) readonly directive: DropdownDirective,
    @Inject(ElementRef) readonly elementRef: ElementRef,
    @Inject(DropdownStateService)
    readonly dropdownStateService: DropdownStateService
  ) {}

  @HostListener('document:click', ['$event'])
  onClick(event: Event) {
    if (
      !this.elementRef.nativeElement.contains(event.target) &&
      !this.directive.elementRef.nativeElement.contains(event.target)
    ) {
      this.dropdownStateService.dropdownOpen = false;
    }
  }
}
