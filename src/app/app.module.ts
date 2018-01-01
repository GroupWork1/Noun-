import { ExamplesPage } from './../pages/examples/examples';
import { HelpPage } from './../pages/help/help';
import { NounPage } from './../pages/noun/noun';

import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';

import { MenuPage } from '../pages/menu/menu';
import { HomePage } from '../pages/home/home';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    HelpPage,
    MenuPage,
    NounPage,
    ExamplesPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    HelpPage,
    MenuPage,
    NounPage,
    ExamplesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
