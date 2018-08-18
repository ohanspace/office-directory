import {Component} from '@angular/core';
import {NavParams} from 'ionic-angular';
import {OfficeListPage} from "../../features/office/office-list/office-list";
import {FavoritesPage} from "../../features/favorites/favorites";


@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  tab1Root: any = OfficeListPage;
  tab2Root: any = FavoritesPage;
  selectedTabIndex: number;


  constructor(public navParams: NavParams) {

      this.selectedTabIndex = navParams.data.tabIndex || 0;
  }

}
