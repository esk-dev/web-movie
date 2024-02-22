import { Injectable } from '@angular/core';
import { map, filter } from 'rxjs/operators';
import { startWith, Observable } from 'rxjs';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class RouterUtilService {
  public readonly urlAfterRedirects$: Observable<string> =
    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd),
      startWith({ urlAfterRedirects: this.router.url }),
      map(({ urlAfterRedirects: urlAfterRedirects }) => urlAfterRedirects),
      map((urlAfterRedirects: string) => urlAfterRedirects.split('?')[0])
    );

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}
}
