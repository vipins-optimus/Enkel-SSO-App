import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OktaAuthModule, OktaCallbackComponent } from '@okta/okta-angular';

import sampleConfig from './.samples.config';
const oktaConfig = Object.assign({
    onAuthRequired: ({ oktaAuth, router }) => {
        // Redirect the user to your custom login page
        router.navigate(['/login']);
    }
}, sampleConfig.oidc);

import { PageNotFoundComponent } from './page-not-found.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'productivity-apps',
        pathMatch: 'full'
    },
    {
        path: 'implicit/callback',
        component: OktaCallbackComponent,
    },
    {
        path: '**',
        component: PageNotFoundComponent
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes),
        OktaAuthModule.initAuth(oktaConfig)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
