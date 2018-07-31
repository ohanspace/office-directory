import {NgModule} from '@angular/core';
import {DataRepository} from './services/data-repository';
import {FirebaseDataRepository} from './services/firebase-data-repository';
import {AngularFireModule} from 'angularfire2';
import {AngularFirestoreModule} from 'angularfire2/firestore';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {AngularFireStorageModule} from 'angularfire2/storage';
import {OfficeController} from "./controllers/office-controller";
import {ProfileController} from "./controllers/profile-controller";

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
        AngularFirestoreModule.enablePersistence(),
        AngularFireAuthModule,
        AngularFireStorageModule
    ],
    providers: [
        { provide: DataRepository, useClass: FirebaseDataRepository},
        OfficeController,
        ProfileController
    ]
})
export class CoreModule {}
