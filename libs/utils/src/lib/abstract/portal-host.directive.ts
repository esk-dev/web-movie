import {
  Component,
  ComponentRef,
  Directive,
  ElementRef,
  INJECTOR,
  Inject,
  Injector,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';

@Directive()
export abstract class AbstractPortalHostComponent {
  @ViewChild(`viewContainer`, { read: ViewContainerRef })
  readonly viewContainerRef: ViewContainerRef;

  protected constructor(
    @Inject(INJECTOR) private readonly injector: Injector,
    @Inject(ElementRef) private readonly el: ElementRef<HTMLElement>
  ) {}

  addChildComponent<T>(component: Component): ComponentRef<T> {
    const parent = component.createInjector(this.injector);
    const resolver = parent.get(ComponentFactoryResolver);
    const factory = resolver.resolveComponentFactory(component.component);
    const providers = [
      { provide: AbstractTuiPortalHostComponent, useValue: this },
    ];
    const injector = Injector.create({ parent, providers });
    const ref = this.vcr.createComponent(factory, undefined, injector);

    ref.changeDetectorRef.detectChanges();

    return ref;
  }
}
