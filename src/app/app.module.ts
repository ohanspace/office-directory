import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';

import {MyApp} from './app.component';
import {HomePage} from '../pages/home/home';
import {ListPage} from '../pages/list/list';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {ComponentsModule} from "../components/components.module";
import {ProfilePage} from "../pages/profile/profile";
import {OfficeManagePage} from "../pages/office-manage/office-manage";
import { OfficeServiceProvider } from '../providers/office-service/office-service';
import {MapValuesPipe} from "../pipes/map-values/map-values";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ProfilePage,
    ListPage,
    OfficeManagePage,
    MapValuesPipe
  ],
  imports: [
    BrowserModule,
    ComponentsModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ProfilePage,
    ListPage,
    OfficeManagePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    OfficeServiceProvider,
  ]
})
export class AppModule {}
