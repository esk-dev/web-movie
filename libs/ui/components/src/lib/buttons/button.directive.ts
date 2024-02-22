import { Directive, ElementRef } from '@angular/core';

const DEFAULT_BTN_CLASSES = [
  'block',
  'px-4',
  'pb-2',
  'pt-2.5',
  'text-md',
  'font-medium',
  'rounded-md',
  'cursor-pointer',
  'ease-in',
  'focus:ring-0',
  'duration-100',
  'text-light-gray',
  'hover:text-white',
  'active:text-white',
  'hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]',
  'active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]',
];

const LIB_SELECTOR_CLASS: { attribute: ButtonStates; dClasses: string[] }[] = [
  {
    attribute: 'neutral',
    dClasses: [
      ...DEFAULT_BTN_CLASSES,
      'hover:bg-neutral',
      'focus:bg-neutral/80',
      'active:bg-neutral-focus',
    ],
  },
  {
    attribute: 'primary',
    dClasses: [
      ...DEFAULT_BTN_CLASSES,
      'bg-primary/50',
      'hover:bg-primary/80',
      'focus:bg-primary/80',
      'active:bg-primary',
    ],
  },
  {
    attribute: 'success',
    dClasses: [
      ...DEFAULT_BTN_CLASSES,
      'bg-success',
      'hover:bg-success/80',
      'focus:bg-success/80',
      'active:bg-success',
    ],
  },
  {
    attribute: 'accent',
    dClasses: [
      ...DEFAULT_BTN_CLASSES,
      'bg-accent',
      'hover:bg-accent/80',
      'focus:bg-accent/80',
      'active:bg-accent',
    ],
  },
  {
    attribute: 'secondary',
    dClasses: [
      ...DEFAULT_BTN_CLASSES,
      'bg-secondary',
      'hover:bg-secondary/80',
      'focus:bg-secondary/80',
      'active:bg-secondary',
    ],
  },
];
type ButtonStates = 'accent' | 'neutral' | 'primary' | 'secondary' | 'success';
@Directive({
  selector: '[libButton]',
  standalone: true,
})
export class ButtonDirective {
  constructor(private readonly _elementRef: ElementRef) {
    const element = this._elementRef.nativeElement;
    const classList: DOMTokenList = (element as HTMLElement).classList;
    for (const { attribute, dClasses } of LIB_SELECTOR_CLASS) {
      if (element.hasAttribute(attribute)) {
        classList.add(...dClasses);
      }
    }
  }
}
