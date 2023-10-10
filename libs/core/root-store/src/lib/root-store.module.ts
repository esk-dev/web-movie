import {
  ENVIRONMENT_INITIALIZER,
  NgModule,
  NgZone,
  inject,
} from "@angular/core";
import { DevtoolsOptions, akitaDevtools } from "@datorama/akita";
import { AkitaNgEffectsModule } from "@datorama/akita-ng-effects";

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
  imports: [AkitaNgEffectsModule.forRoot([])],
  providers: [provideAkitaDevtools({ maxAge: 10 })],
})
export class RootStoreModule {}
