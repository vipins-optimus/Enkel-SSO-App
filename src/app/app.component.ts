import { Component, OnInit, AfterViewInit } from '@angular/core';
import { OktaAuthService, UserClaims } from '@okta/okta-angular';
import { Router } from '@angular/router';

import { LoaderService } from './shared/loader-service';
import { CompCommunicationService } from './shared/comp-communication.service';

declare var $: any;

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
    title = 'Enkel-SSO-App';
    isAuthenticated = true;
    showLoader: boolean;
    oktaUserInfo: UserClaims;

    constructor(public oktaAuth: OktaAuthService,
                private router: Router,
                private loaderService: LoaderService,
                public compCommunicationService: CompCommunicationService) {
        this.oktaAuth.$authenticationState.subscribe(isAuthenticated =>  {
            this.isAuthenticated = isAuthenticated;
        });
    }

    ngOnInit() {
        this.loaderService.status.subscribe(val => {
            this.showLoader = val;
        });
    }

    logout() {
        this.oktaAuth.logout('/login');
        this.compCommunicationService.isAuthenticated = false;
        localStorage.removeItem('oktaUserInfo');
        localStorage.removeItem('isAuthenticated');
        this.oktaUserInfo = JSON.parse(localStorage.getItem('oktaUserInfo'));
        console.log(this.oktaUserInfo);
    }
}
