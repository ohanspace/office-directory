import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';

import {MyApp} from './app.component';
import {HomePage} from '../pages/home/home';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {ComponentsModule} from "../components/components.module";
import {ProfilePage} from "../features/profile/profile/profile";
import {OfficeManagePage} from "../pages/office-manage/office-manage";
import {MapValuesPipe} from "../pipes/map-values/map-values";
import {ProfileListPage} from "../pages/profile-list/profile-list";

import {CallNumber} from "@ionic-native/call-number";
import {Contacts} from "@ionic-native/contacts";
import {OfficeListPage} from "../features/office/office-list/office-list";
import {CoreModule} from "../core/core.module";
import {OfficePage} from "../features/office/office/office";
import {DepartmentListPage} from "../features/department/department-list/department-list";
import {DepartmentSaveModalPage} from "../features/department/department-save-modal/department-save-modal";
import {FlexLayoutModule} from "@angular/flex-layout";
import {DesignationListPage} from "../features/designation/designation-list/designation-list";
import {DesignationSaveModalPage} from "../features/designation/designation-save-modal/designation-save-modal";
import {OfficeSaveModalPage} from "../features/office/office-save-modal/office-save-modal";
import {ProfileFormModalPage} from "../features/profile/profile-form-modal/profile-form-modal";

@NgModule({
    declarations: [
        MyApp,
        MapValuesPipe,
        HomePage,
        ProfilePage,
        ProfileFormModalPage,
        ProfileListPage,
        OfficeManagePage,
        OfficeListPage,
        OfficeSaveModalPage,
        OfficePage,
        DepartmentListPage,
        DepartmentSaveModalPage,
        DesignationListPage,
        DesignationSaveModalPage
    ],
    imports: [
        BrowserModule,
        ComponentsModule,
        IonicModule.forRoot(MyApp),
        CoreModule,
        FlexLayoutModule
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        HomePage,
        ProfilePage,
        ProfileFormModalPage,
        OfficeManagePage,
        ProfileListPage,
        OfficeListPage,
        OfficeSaveModalPage,
        OfficePage,
        DepartmentListPage,
        DepartmentSaveModalPage,
        DesignationListPage,
        DesignationSaveModalPage
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
