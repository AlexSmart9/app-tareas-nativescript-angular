import { platformNativeScript, runNativeScriptAngularApp } from '@nativescript/angular';
import { registerElement } from '@nativescript/angular';
import { AppModule } from './app/app.module';

registerElement("PullToRefresh", () => require("@nativescript-community/ui-pulltorefresh").PullToRefresh);

runNativeScriptAngularApp({
  appModuleBootstrap: () => platformNativeScript().bootstrapModule(AppModule),
});

