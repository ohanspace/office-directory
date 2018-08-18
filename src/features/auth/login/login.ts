import {Component} from '@angular/core';
import {Loading, LoadingController, NavController, Platform, ToastController} from 'ionic-angular';
import {MenuPage} from "../../../navigation/menu/menu";
import {AuthController} from "../../../core/controllers/auth-controller";
import {AngularFireAuth} from "angularfire2/auth";


@Component({
    selector: 'page-login',
    templateUrl: 'login.html',
})
export class LoginPage {
    spinner: Loading;
    phone: string;
    code: string;
    verificationId: string;

    constructor(public navCtrl: NavController,
                private authCtrl: AuthController,
                private toastrCtrl: ToastController,
                private afAuth: AngularFireAuth,
                private platform: Platform,
                private loadingCtrl: LoadingController) {


        this.loadSpinner();

        //TODO this block can be moved to app component
        platform.ready().then(() => {
            if ((<any>window).cordova && (<any>window).cordova.plugins) {
                (<any>window).cordova.plugins.firebase.auth.onAuthStateChanged(userInfo => {
                    this.dismissSpinner();

                    if (userInfo && userInfo.uid) {
                        console.log('user signed in', userInfo);
                        this.successLogin(userInfo.uid);
                    } else {
                        console.log('user signed out');
                    }
                });
            }else{
                this.showTaost('cordova plugins not supported');
            }
        });

    }


    loginWithPhone() {
        //check if the phone is in the database
        this.authCtrl.isValidPhone(this.phone).then(isValid => {
            if (isValid) {
                this.showTaost('phone is valid.. sending code ....', 2000);

                if ((<any>window).cordova && (<any>window).cordova.plugins) {
                    (<any>window).cordova.plugins.firebase.auth.verifyPhoneNumber(this.phone, 60000).then(verificationId => {
                        console.log(verificationId);
                        this.verificationId = verificationId;
                        this.showTaost('code sent');

                    }).catch(err => {
                        console.log(err);
                        this.showTaost(err.message);
                    });
                } else {
                    this.showTaost('cordova plugins missing');
                }

            } else {
                console.log('invalid phone');
                this.showTaost('invalid phone');
            }
        }).catch( (error) => this.showTaost(error.message));
    }


    verifyPhone() {
        (<any>window).cordova.plugins.firebase.auth.signInWithVerificationId(this.verificationId, this.code).then(userInfo => {
            console.log(userInfo);
            this.successLogin(userInfo.uid);

        }).catch(err => {
            console.log(err);
            this.showTaost(err.message);
        });
    }


    successLogin(uid: string) {
        if (this.phone && this.phone !== '+88') {
            this.authCtrl.updateUIDByPhone(this.phone, uid);
        }
        this.authCtrl.setUID(uid);
        this.navCtrl.setRoot(MenuPage, {uid: uid});
    }

    loadSpinner() {
        this.spinner = this.loadingCtrl.create({content: "please wait..."});
        this.spinner.present();
    }

    dismissSpinner() {
        this.spinner.dismiss().catch(err => console.log(err));
    }

    showTaost(message: string, duration = 8000) {
        this.toastrCtrl.create({message: message, duration: duration}).present();
    }

}
