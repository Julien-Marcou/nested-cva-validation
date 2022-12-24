import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// Comment one line and uncomment the other one to switch from CVA to FormGroups
import { AppModule } from './app-with-form-groups/app.module';
// import { AppModule } from './app-with-control-value-accessors/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
