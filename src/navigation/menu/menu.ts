import {Component, ViewChild} from '@angular/core';
import {Nav, NavController, NavParams} from 'ionic-angular';
import {TabsPage} from "../tabs/tabs";
import {AuthController} from "../../core/controllers/auth-controller";
import {Profile} from "../../core/models/profile";
import {OfficeListPage} from "../../features/office/office-list/office-list";
import {DepartmentListPage} from "../../features/department/department-list/department-list";
import {DesignationListPage} from "../../features/designation/designation-list/designation-list";
import {LoginPage} from "../../features/auth/login/login";
import {FavoritesPage} from "../../features/favorites/favorites";


interface IPage {
    title: string;
    component: any;
    icon: string;
    tabComponent?: any;
    index?: number;
    data?: any;
}

@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {
    userProfile: Profile;

    @ViewChild(Nav) nav: Nav;

    rootPage: any = TabsPage;

    pages: Array<IPage>;

    constructor(private navCtrl: NavController,
                private navParams: NavParams,
                private authCtrl: AuthController) {

        this.authCtrl.getLoggedInUserProfile$().subscribe(p => {
            this.userProfile = p;
        });

        this.pages = [
            { title: 'All Offices', component: TabsPage, tabComponent: OfficeListPage, icon: 'md-apps', index: 0 },
            { title: 'All Departments', component: DepartmentListPage,  icon: 'md-albums' },
            { title: 'All Designations', component: DesignationListPage,  icon: 'md-pricetags' },
            { title: 'Favorites', component: TabsPage, tabComponent: FavoritesPage, icon: 'md-star', index: 1 },
        ];

    }

    logout() {
        this.authCtrl.logout().then(() => {
            console.log("logout successfully");
            this.navCtrl.setRoot(LoginPage);

        });
    }



    openPage(page: IPage) {
        let params = {};

        // The index is equal to the order of our tabs inside tabs.ts
        if (page.index) {
            params = { tabIndex: page.index };
        }

        if(page.data) {
            params = Object.assign(params, {data: page.data});
        }

        //console.log(this.nav.getActiveChildNavs());

        // The active child nav is our Tabs Navigation
        if (this.nav.getActiveChildNavs().length && page.index != undefined) {

            this.nav.getActiveChildNavs()[0].select(page.index);

        } else {
            // Tabs are not active, so reset the root page
            // In this case: moving to or from SpecialPage
            this.nav.setRoot(page.component, params);
        }
    }

    isActive(page: IPage) {
        // Again the Tabs Navigation
        let childNav = this.nav.getActiveChildNavs()[0];

        if (childNav) {
            if (childNav.getSelected() && childNav.getSelected().root === page.tabComponent) {
                return 'primary';
            }
            return;
        }

        // Fallback needed when there is no active childnav (tabs not active)
        if (this.nav.getActive() && this.nav.getActive().name === page.component) {
            return 'primary';
        }
        return;
    }


}
