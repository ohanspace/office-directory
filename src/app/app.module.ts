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
import {OfficeRepositoryFb} from "../providers/office-service/office-repository.fb";
import {ProfileListPage} from "../pages/profile-list/profile-list";
import { ProfileServiceProvider } from '../providers/profile-service/profile-service';
import { DesignationServiceProvider } from '../providers/designation-service/designation-service';
import { DepartmentServiceProvider } from '../providers/department-service/department-service';
import { PostServiceProvider } from '../providers/post-service/post-service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ProfilePage,
    ProfileListPage,
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
    OfficeManagePage,
    ProfileListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    OfficeServiceProvider,
    OfficeRepositoryFb,
    ProfileServiceProvider,
    DesignationServiceProvider,
    DepartmentServiceProvider,
    PostServiceProvider
  ]
})
export class AppModule {}
