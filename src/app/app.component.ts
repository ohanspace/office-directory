import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import {OfficeManagePage} from "../pages/office-manage/office-manage";
import {ProfileListPage} from "../pages/profile-list/profile-list";
import {EmployeeCreatePage} from "../pages/employee-create/employee-create";
import {OfficeListPage} from "../features/office/office-list/office-list";
import {DepartmentListPage} from "../features/department/department-list/department-list";
import {DesignationListPage} from "../features/designation/designation-list/designation-list";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = DepartmentListPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform,
              public statusBar: StatusBar,
              public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
        { title: 'Office List', component: OfficeListPage },
        { title: 'Designation List', component: DesignationListPage },
        { title: 'Department List', component: DepartmentListPage },
        { title: 'Office Manage', component: OfficeManagePage },
        { title: 'Profile List', component: ProfileListPage },
        { title: 'Home', component: HomePage },
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
