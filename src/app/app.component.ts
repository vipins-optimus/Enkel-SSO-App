import { Component, OnInit, ChangeDetectorRef, ElementRef, ViewChild } from '@angular/core';
import { OktaAuthService, UserClaims } from '@okta/okta-angular';

import { LoaderService } from './shared/loader-service';
import { CompCommunicationService } from './shared/comp-communication.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
    title = 'Enkel-SSO-App';
    isAuthenticated = true;
    showLoader: boolean;
    oktaUserInfo: UserClaims;
    @ViewChild('myDiv') myDiv: ElementRef;

    constructor(public oktaAuth: OktaAuthService,
                private loaderService: LoaderService,
                public compCommunicationService: CompCommunicationService,
                private changeDetectorRef: ChangeDetectorRef) {
        this.oktaAuth.$authenticationState.subscribe(isAuthenticated =>  {
            this.isAuthenticated = isAuthenticated;
        });
    }

    ngOnInit() {
        this.loaderService.status.subscribe(val => {
            this.showLoader = val;
            this.changeDetectorRef.detectChanges();
        });
    }

    logout() {
        this.oktaAuth.logout('/login');
        this.compCommunicationService.isAuthenticated = false;
        localStorage.removeItem('oktaUserInfo');
        localStorage.removeItem('isAuthenticated');
        this.oktaUserInfo = JSON.parse(localStorage.getItem('oktaUserInfo'));
    }
}
