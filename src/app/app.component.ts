import { Component } from '@angular/core';
import { OktaAuthService } from '@okta/okta-angular';
import { Router } from '@angular/router';

declare var $: any;

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent {
    title = 'Enkel-SSO-App';
    isAuthenticated: boolean;
    constructor(public oktaAuth: OktaAuthService, private router: Router) {
        this.oktaAuth.$authenticationState.subscribe(isAuthenticated => this.isAuthenticated = isAuthenticated)
        $(document).ready(function(){
            $('[data-toggle="tooltip"]').tooltip(); 
          });
    }
    async ngOnInit() {
        this.isAuthenticated = await this.oktaAuth.isAuthenticated();
    }
    logout() {
        this.oktaAuth.logout('/login');
    }
}
