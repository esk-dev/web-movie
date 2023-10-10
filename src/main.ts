import { platformBrowser } from "@angular/platform-browser";

import { AppModule } from "./app/app.module";

// if (environment.production) {
//     enableProdMode();
// }
//
// if (!environment.production) {
//     persistState();
// }
platformBrowser()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
