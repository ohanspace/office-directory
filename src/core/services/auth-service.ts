import {Observable} from 'rxjs';

export abstract class AuthService  {
    abstract setUID(uid: string);
    abstract getUID$(): Observable<string>;
    abstract logout(): Promise<boolean>;

}
