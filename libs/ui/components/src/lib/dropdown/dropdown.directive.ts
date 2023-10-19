import {
  ComponentRef,
  Directive,
  ElementRef,
  HostListener,
  Inject,
  Injector,
  Input,
  OnDestroy,
  TemplateRef,
  Type,
  ViewContainerRef,
} from '@angular/core';

import { UI_DROPDOWN_COMPONENT } from './dropdown.providers';
import { DropdownComponent } from './dropdown-component/dropdown.component';
import { DropdownStateService } from './dropdown-state.service';

@Directive({
  exportAs: 'libDropdown',
  selector: '[libDropdown]',
  standalone: true,
})
export class DropdownDirective implements OnDestroy {
  readonly component = this.dropdownComponent;

  @Input({ alias: 'libDropdown', required: true })
  public content!: TemplateRef<unknown>;

  dropdownBoxRef: ComponentRef<unknown> | null = null;
  constructor(
    @Inject(DropdownStateService)
    private readonly dropdownStateService: DropdownStateService,
    @Inject(UI_DROPDOWN_COMPONENT)
    private readonly dropdownComponent: Type<DropdownComponent>,
    @Inject(ViewContainerRef)
    private readonly viewContainerRef: ViewContainerRef,
    @Inject(Injector)
    private readonly injector: Injector,
    @Inject(ElementRef) readonly elementRef: ElementRef
  ) {
    this.dropdownStateService.dropdownDirective = this;
  }

  ngOnDestroy(): void {
    this.toggle(false);

    if (this.dropdownStateService) {
      this.dropdownStateService.dropdownDirective = undefined;
    }
  }

  @HostListener('click')
  onClick() {
    this.dropdownStateService.dropdownOpen =
      !this.dropdownStateService.dropdownStateChange.value;
  }

  public toggle(show: boolean): void {
    if (show && this.content && !this.dropdownBoxRef) {
      this.dropdownBoxRef = this.viewContainerRef.createComponent(
        this.component,
        {
          injector: this.injector,
        }
      );
      this.dropdownBoxRef.changeDetectorRef.detectChanges();
      this.dropdownStateService?.dropdownStateChange.next(true);
    } else if (!show && this.dropdownBoxRef) {
      this.dropdownBoxRef.destroy();
      this.viewContainerRef.clear();
      this.dropdownBoxRef = null;
      this.dropdownStateService?.dropdownStateChange.next(false);
    }
  }
}
