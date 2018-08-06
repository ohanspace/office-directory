import {NgModule} from '@angular/core';
import {IonicModule} from "ionic-angular";
import {ProfileCardComponent} from './profile-card/profile-card';
import {ProfileListComponent} from './profile-list/profile-list';

@NgModule({
    declarations: [
        ProfileCardComponent,
        ProfileListComponent],
    imports: [IonicModule],
    exports: [
        ProfileCardComponent,
        ProfileListComponent]
})
export class ComponentsModule {
}
