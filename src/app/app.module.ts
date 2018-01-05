import { CountableNounPage } from './../pages/countable-noun/countable-noun';
import { ImproperNounPage } from './../pages/improper-noun/improper-noun';
import { TypesPage } from './../pages/types/types';
import { VideoPage } from './../pages/video/video';
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
import { ExercisePage } from '../pages/exercise/exercise';
import { ProperNounPage } from '../pages/proper-noun/proper-noun';
import { CommonNounPage } from '../pages/common-noun/common-noun';
import { UncountableNounPage } from '../pages/uncountable-noun/uncountable-noun';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    HelpPage,
    MenuPage,
    NounPage,
    ExamplesPage,
    ExercisePage,
    VideoPage,
    TypesPage,
    ProperNounPage,
    ImproperNounPage,
    CommonNounPage,
    CountableNounPage,
    UncountableNounPage

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
    ExamplesPage,
    ExercisePage,
    VideoPage,
    TypesPage,
    ProperNounPage,
    ImproperNounPage,
    CommonNounPage,
    CountableNounPage,
    UncountableNounPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
