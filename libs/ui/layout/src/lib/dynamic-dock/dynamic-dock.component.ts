import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostListener,
  Inject,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { BehaviorSubject, Subject, takeUntil, tap } from 'rxjs';

import { openCloseAnimation } from '../animations/animations';

@Component({
  animations: [openCloseAnimation],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule],
  selector: 'lib-dynamic-dock',
  standalone: true,
  styleUrls: ['./dynamic-dock.component.scss'],
  templateUrl: './dynamic-dock.component.html',
})
export class DynamicDockComponent implements OnInit, OnDestroy {
  private destroy$: Subject<boolean> = new Subject<boolean>();

  private isExpand: BehaviorSubject<boolean> = new BehaviorSubject(false);

  private visibleState$: BehaviorSubject<string> = new BehaviorSubject('close');

  public expanded$ = this.isExpand.asObservable();

  public show$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(@Inject(ElementRef) readonly elementRef: ElementRef) {}

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  ngOnInit(): void {
    this.expanded$
      .pipe(
        tap((value) =>
          value
            ? setTimeout(() => {
                this.show$.next(true);
              }, 500)
            : this.show$.next(false)
        ),
        tap((value) =>
          value
            ? this.visibleState$.next('open')
            : this.visibleState$.next('close')
        ),
        takeUntil(this.destroy$)
      )
      .subscribe();
  }

  @HostListener('document:click', ['$event'])
  onClick(event: Event) {
    if (
      !this.elementRef.nativeElement.contains(event.target) &&
      this.isExpand.value
    ) {
      console.log('work');
      this.isExpand.next(false);
    }
  }

  public toggle(): void {
    this.isExpand.next(!this.isExpand.getValue());
  }

  get animationTrigger(): string {
    return this.visibleState$.getValue();
  }

  get canShow(): boolean {
    return this.show$.getValue();
  }
}
