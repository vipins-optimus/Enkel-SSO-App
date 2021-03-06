import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

import * as OktaSignIn from '@okta/okta-signin-widget';
import sampleConfig from '../.samples.config';

@Component({
    selector: 'app-login',
    templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {
    signIn: any;
    constructor(private router: Router) {
        this.signIn = new OktaSignIn({
            /**
             * Note: when using the Sign-In Widget for an ODIC flow, it still
             * needs to be configured with the base URL for your Okta Org. Here
             * we derive it from the given issuer for convenience.
             */
            baseUrl: sampleConfig.oidc.issuer.split('/oauth2')[0],
            clientId: sampleConfig.oidc.clientId,
            redirectUri: sampleConfig.oidc.redirectUri,
            logo: 'https://www.enkel.ca/wp-content/uploads/2017/08/logo_md-1.png',
            i18n: {
                en: {
                    'primaryauth.title': 'Sign in to Okta',
                },
            },
            authParams: {
                responseType: ['id_token', 'token'],
                issuer: sampleConfig.oidc.issuer,
                display: 'page',
                scopes: sampleConfig.oidc.scope.split(' '),
            },
        });
    }

    ngOnInit() {
        this.signIn.renderEl(
            { el: '#sign-in-widget' },
            () => {
                /**
                 * In this flow, the success handler will not be called because we redirect
                 * to the Okta org for the authentication workflow.
                 */
            },
            (err) => {
                throw err;
            },
        );
    }
}
