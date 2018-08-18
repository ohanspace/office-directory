import {AuthService} from '../services/auth-service';
import {DataRepository} from '../services/data-repository';
import {Injectable} from '@angular/core';
import {FavoriteProfile} from '../models/user';
import {Profile} from '../models/profile';
import {Observable, of} from 'rxjs';

@Injectable()
export class FavoriteController {
    constructor(private authService: AuthService,
                private dataRepo: DataRepository)    {

    }

    getUserFavoriteProfiles$(): Observable<FavoriteProfile[]> {
        return this.authService.getUID$().switchMap(uid => {
            if (uid) {
                return this.dataRepo.getFavoriteProfiles(uid);
            } else {
                return of(null);
            }
        });
    }

    isFavorite$(profileId: string): Observable<boolean> {
        return this.getUserFavoriteProfiles$().map(favProfiles => {
            if (favProfiles) {
                return favProfiles.some(favProfile => favProfile.id === profileId);
            } else {
                return false;
            }

        });
    }


    changeFavoriteProfile(favProfile: Profile, isFavorite: boolean): Promise<void> {
       return this.authService.getUID$().switchMap(uid => {
           if (uid) {

               if (isFavorite) {
                   return this.addToFavorites(uid, favProfile);
               } else {
                   return this.removeFromFavorites(uid, favProfile.id);
               }

           }
        }).first().toPromise();


    }


    private addToFavorites(uid: string, profile: Profile): Promise<void> {
        let favProfile = new FavoriteProfile();
        favProfile.id = profile.id;
        favProfile.name = profile.name;

        return this.dataRepo.addToFavoriteProfiles(uid, favProfile);
    }


    private removeFromFavorites(uid: string, favoriteProfileId: string): Promise<void> {
        return this.dataRepo.removeFavoriteProfile(uid, favoriteProfileId);
    }













}
