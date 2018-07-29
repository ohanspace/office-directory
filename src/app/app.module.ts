import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';

import {MyApp} from './app.component';
import {HomePage} from '../pages/home/home';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {ComponentsModule} from "../components/components.module";
import {ProfilePage} from "../pages/profile/profile";
import {OfficeManagePage} from "../pages/office-manage/office-manage";
import {MapValuesPipe} from "../pipes/map-values/map-values";
import {ProfileListPage} from "../pages/profile-list/profile-list";

import {CallNumber} from "@ionic-native/call-number";
import {Contacts} from "@ionic-native/contacts";
import {EmployeeCreatePage} from "../pages/employee-create/employee-create";
import {OfficeListPage} from "../pages/office-list/office-list";
import {CoreModule} from "../core/core.module";

@NgModule({
    declarations: [
        MyApp,
        HomePage,
        ProfilePage,
        ProfileListPage,
        OfficeManagePage,
        EmployeeCreatePage,
        OfficeListPage,
        MapValuesPipe
    ],
    imports: [
        BrowserModule,
        ComponentsModule,
        IonicModule.forRoot(MyApp),
        CoreModule
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        HomePage,
        ProfilePage,
        OfficeManagePage,
        ProfileListPage,
        OfficeListPage,
        EmployeeCreatePage
    ],
    providers: [
        StatusBar,
        SplashScreen,
        {provide: ErrorHandler, useClass: IonicErrorHandler},
        CallNumber,
        Contacts,
    ]
})
export class AppModule {
}
