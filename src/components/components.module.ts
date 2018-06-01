import { NgModule } from '@angular/core';
import { ProfileCardMiniComponent } from './profile-card-mini/profile-card-mini';
import {IonicModule} from "ionic-angular";
import { ProfileCardComponent } from './profile-card/profile-card';
import { ProfileListComponent } from './profile-list/profile-list';
@NgModule({
	declarations: [ProfileCardMiniComponent,
    ProfileCardComponent,
    ProfileListComponent],
	imports: [IonicModule],
	exports: [ProfileCardMiniComponent,
    ProfileCardComponent,
    ProfileListComponent]
})
export class ComponentsModule {}
