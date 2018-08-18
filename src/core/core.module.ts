import {NgModule} from '@angular/core';
import {DataRepository} from './services/data-repository';
import {FirebaseDataRepository} from './services/firebase-data-repository';
import {AngularFireModule} from 'angularfire2';
import {AngularFirestoreModule} from 'angularfire2/firestore';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {AngularFireStorageModule} from 'angularfire2/storage';
import {OfficeController} from "./controllers/office-controller";
import {ProfileController} from "./controllers/profile-controller";
import {AuthController} from "./controllers/auth-controller";
import {AuthService} from "./services/auth-service";
import {FirebaseAuthService} from "./services/firebase-auth-service";
import {FavoriteController} from "./controllers/favorite-controller";

const firebaseConfig = {
    apiKey: "AIzaSyBT6nR9o4MkwAr6ysLUqdQYCEQ3iLUFaUc",
    authDomain: "northwestpowerdirectory.firebaseapp.com",
    databaseURL: "https://northwestpowerdirectory.firebaseio.com",
    projectId: "northwestpowerdirectory",
    storageBucket: "",
    messagingSenderId: "454008007954"
};

@NgModule({
    imports: [
        AngularFireModule.initializeApp(firebaseConfig),
        AngularFirestoreModule,
        AngularFireAuthModule,
        AngularFireStorageModule
    ],
    providers: [
        { provide: DataRepository, useClass: FirebaseDataRepository},
        { provide: AuthService, useClass: FirebaseAuthService},
        OfficeController,
        ProfileController,
        AuthController,
        FavoriteController
    ]
})
export class CoreModule {}
