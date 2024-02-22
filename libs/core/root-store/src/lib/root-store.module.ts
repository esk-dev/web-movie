import { provideEffectsManager } from '@ngneat/effects-ng';
import { akitaDevtools, DevtoolsOptions } from '@datorama/akita';
import {
  NgZone,
  inject,
  NgModule,
  ENVIRONMENT_INITIALIZER,
} from '@angular/core';

export function provideAkitaDevtools(options: Partial<DevtoolsOptions> = {}) {
  return {
    multi: true,
    provide: ENVIRONMENT_INITIALIZER,
    useFactory() {
      return () => {
        akitaDevtools(inject(NgZone), options);
      };
    },
  };
}

@NgModule({
  imports: [],
  providers: [provideEffectsManager(), provideAkitaDevtools({ maxAge: 10 })],
})
export class RootStoreModule {}
