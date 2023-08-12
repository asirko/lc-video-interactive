import { bootstrapApplication } from '@angular/platform-browser';
import { CoreComponent } from './app/core/core.component';
import { coreConfig } from './app/core/core.config';

bootstrapApplication(CoreComponent, coreConfig).catch((err) =>
  console.error(err),
);
