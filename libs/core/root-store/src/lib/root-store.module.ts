import {
  ENVIRONMENT_INITIALIZER,
  NgModule,
  NgZone,
  inject,
} from "@angular/core";
import { DevtoolsOptions, akitaDevtools } from "@datorama/akita";
import { provideEffectsManager } from "@ngneat/effects-ng";

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
