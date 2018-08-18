import {AuthService} from '../services/auth-service';
import {Injectable} from '@angular/core';
import {Profile} from '../models/profile';
import {Observable, of} from 'rxjs';
import {ProfileController} from "./profile-controller";

@Injectable()
export class AuthController {

    constructor(private authService: AuthService,
                private profileCtrl: ProfileController) {

    }


    setUID(uid: string) {
        this.authService.setUID(uid);
    }

    getUID$(): Observable<string> {
        return this.authService.getUID$();
    }


    isLoggedIn$(): Observable<boolean> {
        return this.authService.getUID$().map(uid => {
            if (uid) return true;
            else return false;
        })
    }


    logout(): Promise<boolean> {
        return this.authService.logout();
    }


    getLoggedInUserProfile$(): Observable<Profile> {
        return this.authService.getUID$().switchMap(uid => {
            console.log(uid);
            if (!uid) return of(null);
            return this.profileCtrl.getProfileByUID$(uid);
        });
    }

    isUserAdmin$(): Observable<boolean> {
        return this.authService.getUID$().switchMap(uid => {
            if (uid) {
                return this.profileCtrl.isAdmin$(uid);
            } else {
                return of(null);
            }
        });
    }

    isValidPhone(phone: string): Promise<boolean> {
        return this.profileCtrl.getProfileByPhone$(phone).map(profile => {
            if (profile) return true;
            else return false;
        }).first().toPromise();
    }


    private updateUIDInProfile(profileId, uid): Promise<void> {
        return this.profileCtrl.updateUID(profileId, uid);
    }

    public updateUIDByPhone(phone, uid): Promise<void> {
        return this.profileCtrl.getProfileByPhone$(phone).map(profile => {
            this.profileCtrl.updateUID(profile.id, uid);
        }).take(1).toPromise();
    }


}
