import { Injectable } from '@angular/core';
import { UserClaims, OktaAuthService } from '@okta/okta-angular';

@Injectable({
    providedIn: 'root'
})
export class CompCommunicationService {
    oktaUserInfo: UserClaims;
    isAuthenticated = false;

    constructor(private oktaAuth: OktaAuthService) {
    }

    async getLoggedInUserDetails() {
        this.oktaUserInfo  =  await this.oktaAuth.getUser();
        this.isAuthenticated = await this.oktaAuth.isAuthenticated();
        this.setUserInfoInLocalStorage();
    }

    setUserInfoInLocalStorage() {
        localStorage.setItem('oktaUserInfo', JSON.stringify(this.oktaUserInfo));
        localStorage.setItem('isAuthenticated', JSON.stringify(this.isAuthenticated));
    }

    setOktaUserInfoAsTrue() {
        this.isAuthenticated = true;
        this.oktaUserInfo = JSON.parse(localStorage.getItem('oktaUserInfo'));
    }

    doSorting(sortBy: number, list: any) {
        if (sortBy === 0) {
            list = list.sort((a, b) => {
                return a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1;
            });
        } else {
            list = list.sort((a, b) => {
                return a.name.toLowerCase() > b.name.toLowerCase() ? -1 : 1;
            });
        }
    }
}
