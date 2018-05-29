import { NgModule } from '@angular/core';
import { ProfileCardMiniComponent } from './profile-card-mini/profile-card-mini';
import {IonicModule} from "ionic-angular";
import { ProfileCardComponent } from './profile-card/profile-card';
@NgModule({
	declarations: [ProfileCardMiniComponent,
    ProfileCardComponent],
	imports: [IonicModule],
	exports: [ProfileCardMiniComponent,
    ProfileCardComponent]
})
export class ComponentsModule {}
