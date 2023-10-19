import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Injectable } from '@angular/core';
import {
  BehaviorSubject,
  Observable,
  distinctUntilChanged,
  map,
  share,
} from 'rxjs';

import { CustomBreakpoints } from '../constants/custom-breakpoints.enum';

const LAYOUT_TYPES = [
  CustomBreakpoints.Large,
  CustomBreakpoints.Medium,
  CustomBreakpoints.Small,
  CustomBreakpoints.XSmall,
  CustomBreakpoints.XLarge,
  CustomBreakpoints.X2Large,
];

const LAYOUT_SHORT_TYPES_MAP: { [key: string]: string } = {
  [CustomBreakpoints.Large]: CustomBreakpoints.Large,
  [CustomBreakpoints.Medium]: CustomBreakpoints.Medium,
  [CustomBreakpoints.Small]: CustomBreakpoints.Small,
  [CustomBreakpoints.X2Large]: CustomBreakpoints.X2Large,
  [CustomBreakpoints.XLarge]: CustomBreakpoints.XLarge,
  [CustomBreakpoints.XSmall]: CustomBreakpoints.XSmall,
};

@Injectable({ providedIn: 'root' })
export class BreakpointsService {
  private readonly layoutSubject$: BehaviorSubject<string> =
    new BehaviorSubject<string>(CustomBreakpoints.Medium);

  public snapshotLayoutType: string = this.layoutSubject$.getValue();

  constructor(private readonly breakpointObserver: BreakpointObserver) {}

  get breakpointObserver$(): Observable<string> {
    return this.breakpointObserver.observe(LAYOUT_TYPES).pipe(
      map((result: BreakpointState) => {
        let type;
        for (const query of Object.keys(result.breakpoints)) {
          if (result.breakpoints[query]) {
            type = LAYOUT_SHORT_TYPES_MAP[query];
            break;
          }
        }

        this.layoutSubject$.next(type ?? CustomBreakpoints.Medium);
        return type ?? CustomBreakpoints.Medium;
      }),
      distinctUntilChanged(),
      share()
    );
  }
}
