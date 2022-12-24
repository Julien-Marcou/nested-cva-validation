import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
/* eslint-disable @typescript-eslint/no-unused-vars */
import { AppModule as AppModuleWithCVA } from './app-with-control-value-accessors/app.module';
import { AppModule as AppModuleWithFormGroups } from './app-with-form-groups/app.module';
/* eslint-enable @typescript-eslint/no-unused-vars */

// Switch beetwen AppModuleWithCVA & AppModuleWithFormGroups to test both apps independently
platformBrowserDynamic().bootstrapModule(AppModuleWithFormGroups)
  .catch((err) => console.error(err));
