import {AuthService} from './auth-service';
import {AngularFireAuth} from 'angularfire2/auth';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {BehaviorSubject} from "rxjs/BehaviorSubject";

@Injectable()
export class FirebaseAuthService extends AuthService {

    uid$ = new BehaviorSubject<string>(null);

    constructor(private afAuth: AngularFireAuth) {
        super();
    }

    logout(): Promise<boolean> {
        return (<any>window).cordova.plugins.firebase.auth.signOut();
    }

    getUID$(): Observable<string> {
        return this.uid$;
    }

    setUID(uid: string) {
        this.uid$.next(uid);
    }



}
